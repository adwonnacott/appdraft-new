#!/usr/bin/env node

/**
 * Post-build script: writes out/sitemap.xml from the pages the build actually produced.
 *
 * Every exported HTML page is included unless it is a demo page, marked noindex, or
 * points its canonical tag at a different address. Blog posts take their date from
 * posts.json. Posts published from the Hub are added on top of this file at request
 * time by the psa-copilot-api worker (route appdraft.com/sitemap.xml), so a new post
 * is listed without a rebuild.
 *
 * Run after `next build`, before `wrangler pages deploy` (see the deploy script).
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = join(ROOT, 'out');
const SITE = 'https://appdraft.com';

const SKIP_PREFIXES = ['_next', '_not-found', '404', 'animation-demo', 'case-study-demo', 'comparison-demo', 'contact-demo', 'fonts-showcase', 'showcase'];

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return name.endsWith('.html') ? [full] : [];
  });
}

function postDates() {
  const dates = {};
  const posts = JSON.parse(readFileSync(join(ROOT, 'app/blog/posts.json'), 'utf8'));
  for (const p of posts) {
    const d = new Date(`${p.date} 12:00 UTC`);
    if (!Number.isNaN(d.getTime())) dates[`${SITE}/blog/${p.slug}`] = d.toISOString().slice(0, 10);
  }
  return dates;
}

const dates = postDates();
const urls = new Map();

for (const file of htmlFiles(OUT)) {
  const rel = relative(OUT, file).replace(/\.html$/, '');
  if (SKIP_PREFIXES.some((p) => rel === p || rel.startsWith(`${p}/`))) continue;

  const html = readFileSync(file, 'utf8');
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) continue;

  const loc = rel === 'index' ? `${SITE}/` : `${SITE}/${rel}`;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical && canonical.replace(/\/$/, '') !== loc.replace(/\/$/, '')) continue;

  urls.set(loc, dates[loc] ?? null);
}

function priority(loc) {
  if (loc === `${SITE}/`) return '1.0';
  if (loc.includes('/blog/')) return '0.5';
  if (loc.endsWith('/privacy-policy')) return '0.2';
  return '0.8';
}

const sorted = [...urls.keys()].sort((a, b) => {
  const rank = (u) => (u === `${SITE}/` ? 0 : u.includes('/blog/') ? 2 : 1);
  return rank(a) - rank(b) || a.localeCompare(b);
});

const body = sorted.map((loc) => {
  const lastmod = urls.get(loc) ? `\n    <lastmod>${urls.get(loc)}</lastmod>` : '';
  return `  <url>\n    <loc>${loc}</loc>${lastmod}\n    <priority>${priority(loc)}</priority>\n  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body.join('\n')}\n</urlset>\n`;
writeFileSync(join(OUT, 'sitemap.xml'), xml);
console.log(`[build-sitemap] Wrote ${sorted.length} URLs to out/sitemap.xml`);
