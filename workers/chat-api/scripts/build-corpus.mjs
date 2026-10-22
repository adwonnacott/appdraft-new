#!/usr/bin/env node
/**
 * Build the chat assistant's knowledge from the built website.
 *
 * Reads the static export in ../../out (run `next build` first), the case study list and the
 * synced blog posts, and writes src/corpus.json, which is bundled into the worker. The worker
 * therefore answers from a snapshot of the site and needs no database at runtime. Run this
 * before every deploy of the worker (npm run deploy does) and after site content changes.
 *
 * Anything that looks like a price is left out on purpose: the assistant must never quote
 * one, and the surest way is for it never to have seen one.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const SITE = resolve(here, '../../..');
const OUT = join(SITE, 'out');
const CASE_STUDIES = join(SITE, 'app/case-studies/case-studies.json');
const POSTS = join(SITE, 'app/blog/posts.json');
const TARGET = resolve(here, '../src/corpus.json');

// Demo and scaffolding pages are not things to tell a visitor about.
const SKIP = /^(404|_not-found|animation-demo|case-study-demo|comparison-demo|contact-demo|fonts-showcase|showcase)$/;
const PRICE = /£\s?\d|\$\s?\d|€\s?\d|per hour|per day|day rate|hourly rate|per month|a month\b/i;
const MAX_WORDS = 350;

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (name !== '_next' && name !== 'blog') yield* htmlFiles(p); }
    else if (name.endsWith('.html')) yield p;
  }
}

function decode(s) {
  return s
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));
}

/** HTML to a list of {heading, text} paragraphs, headings carried as context. */
function toBlocks(html) {
  let body = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<(nav|header|footer|svg|noscript)[\s\S]*?<\/\1>/gi, ' ');
  const main = body.match(/<main[\s\S]*?<\/main>/i);
  if (main) body = main[0];
  const blocks = [];
  let heading = '';
  const re = /<(h[1-3]|p|li|td|th|blockquote|dd|dt|figcaption)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(body))) {
    const text = decode(m[2].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
    if (!text) continue;
    if (/^h[1-3]$/i.test(m[1])) { heading = text; continue; }
    blocks.push({ heading, text });
  }
  return blocks;
}

function chunk(blocks, base) {
  const chunks = [];
  let cur = { heading: '', words: 0, parts: [] };
  const flush = () => {
    if (!cur.parts.length) return;
    const text = cur.parts.join(' ');
    if (!PRICE.test(text) && text.split(' ').length > 12) chunks.push({ ...base, section: cur.heading, text });
    cur = { heading: '', words: 0, parts: [] };
  };
  for (const b of blocks) {
    const w = b.text.split(' ').length;
    if (cur.parts.length && (cur.words + w > MAX_WORDS || (b.heading !== cur.heading && cur.words > 80))) flush();
    if (!cur.parts.length) cur.heading = b.heading;
    cur.parts.push(b.text);
    cur.words += w;
  }
  flush();
  return chunks;
}

function titleOf(html, fallback) {
  const t = html.match(/<title>([\s\S]*?)<\/title>/i);
  return t ? decode(t[1]).replace(/\s*\|\s*Appdraft\s*$/i, '').trim() : fallback;
}

if (!existsSync(OUT)) {
  console.error(`[build-corpus] ${OUT} not found. Run "next build" in the site first.`);
  process.exit(1);
}

const pages = [];
const chunks = [];
for (const file of htmlFiles(OUT)) {
  const rel = relative(OUT, file).replace(/\.html$/, '');
  const slug = rel.split('/').pop();
  if (SKIP.test(slug) || SKIP.test(rel)) continue;
  const url = rel === 'index' ? '/' : `/${rel}`;
  const html = readFileSync(file, 'utf8');
  const title = titleOf(html, slug);
  const page = { url, title };
  pages.push(page);
  chunks.push(...chunk(toBlocks(html), { url, title, kind: 'page' }));
}

// Blog posts: the synced list, not the built HTML, so the text is the article and not the chrome.
const posts = existsSync(POSTS) ? JSON.parse(readFileSync(POSTS, 'utf8')) : [];
for (const p of posts) {
  const url = `/blog/${p.slug}`;
  pages.push({ url, title: p.title });
  const html = String(p.content || '');
  const looksHtml = /<[a-z][\s\S]*>/i.test(html);
  const blocks = looksHtml
    ? toBlocks(`<main>${html}</main>`)
    : html.split(/\n{2,}/).map(t => ({ heading: '', text: t.replace(/^#+\s*/, '').replace(/\s+/g, ' ').trim() })).filter(b => b.text);
  if (p.excerpt) blocks.unshift({ heading: '', text: String(p.excerpt) });
  chunks.push(...chunk(blocks, { url, title: p.title, kind: 'post' }));
}

// Case studies: the curated list plus any post that calls itself one.
const studies = existsSync(CASE_STUDIES) ? JSON.parse(readFileSync(CASE_STUDIES, 'utf8')) : [];
const caseStudies = studies.map(s => ({
  title: s.title,
  url: s.href || `/blog/${s.slug}`,
  summary: s.excerpt || '',
  sector: s.sector || '',
  clouds: Array.isArray(s.cloud) ? s.cloud : (s.cloud ? [s.cloud] : []),
  outcome: s.outcome || '',
}));
for (const p of posts) {
  if (/case study/i.test(p.title) && !caseStudies.some(c => c.url === `/blog/${p.slug}`)) {
    caseStudies.push({ title: p.title, url: `/blog/${p.slug}`, summary: p.excerpt || '', sector: '', clouds: [], outcome: '' });
  }
}
for (const c of caseStudies) {
  if (!chunks.some(ch => ch.url === c.url)) {
    chunks.push({ url: c.url, title: c.title, kind: 'case_study', section: c.sector, text: [c.summary, c.outcome].filter(Boolean).join(' ') });
  }
}

const corpus = { builtAt: new Date().toISOString(), pages, chunks, caseStudies };
writeFileSync(TARGET, JSON.stringify(corpus));
console.log(`[build-corpus] ${pages.length} pages, ${chunks.length} chunks, ${caseStudies.length} case studies -> ${relative(process.cwd(), TARGET)} (${Math.round(statSync(TARGET).size / 1024)} KB)`);
