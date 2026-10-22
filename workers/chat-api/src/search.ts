/**
 * Keyword search over the bundled corpus. Small, deterministic and free: no embeddings
 * service, no database. BM25 scoring over the chunk text with the page title and section
 * folded in, which is plenty for a site of a few hundred chunks.
 */
import corpus from './corpus.json';

export interface Chunk { url: string; title: string; kind: string; section: string; text: string }
export interface CaseStudy { title: string; url: string; summary: string; sector: string; clouds: string[]; outcome: string }
export interface Corpus { builtAt: string; pages: Array<{ url: string; title: string }>; chunks: Chunk[]; caseStudies: CaseStudy[] }

const STOP = new Set(('a an and are as at be by for from has have how i in is it of on or that the this to was we what which who with you your do does can our us about').split(' '));

export function tokens(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9£ ]+/g, ' ').split(/\s+/).filter(t => t.length > 1 && !STOP.has(t)).map(stem);
}

// Light stemming so "implementations" finds "implementation" and "integrating" finds "integrate".
function stem(t: string): string {
  return t.replace(/(ations?|ings?|ers?|ies|es|s)$/, (m) => (m === 'ies' ? 'y' : ''));
}

interface Index { docs: Array<{ chunk: Chunk; tf: Map<string, number>; len: number }>; df: Map<string, number>; avgLen: number }

let index: Index | null = null;

function build(c: Corpus): Index {
  const docs = c.chunks.map(chunk => {
    const tf = new Map<string, number>();
    // Title and section count as part of the document, weighted by repetition.
    const ts = [...tokens(chunk.title), ...tokens(chunk.title), ...tokens(chunk.section), ...tokens(chunk.text)];
    for (const t of ts) tf.set(t, (tf.get(t) ?? 0) + 1);
    return { chunk, tf, len: ts.length };
  });
  const df = new Map<string, number>();
  for (const d of docs) for (const t of d.tf.keys()) df.set(t, (df.get(t) ?? 0) + 1);
  const avgLen = docs.reduce((a, d) => a + d.len, 0) / Math.max(docs.length, 1);
  return { docs, df, avgLen };
}

export function searchChunks(query: string, limit = 5, c: Corpus = corpus as Corpus): Array<Chunk & { score: number }> {
  if (!index || c !== (corpus as Corpus)) index = build(c);
  const idx = c === (corpus as Corpus) ? index : build(c);
  const q = tokens(query);
  if (!q.length) return [];
  const k1 = 1.4, b = 0.75, N = idx.docs.length;
  const scored = idx.docs.map(d => {
    let s = 0;
    for (const t of q) {
      const f = d.tf.get(t);
      if (!f) continue;
      const n = idx.df.get(t) ?? 0;
      const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
      s += idf * (f * (k1 + 1)) / (f + k1 * (1 - b + b * d.len / idx.avgLen));
    }
    return { chunk: d.chunk, score: s };
  }).filter(x => x.score > 0).sort((a, b2) => b2.score - a.score);
  // At most two chunks from the same page, so one long page cannot crowd out the rest.
  const out: Array<Chunk & { score: number }> = [];
  const perUrl = new Map<string, number>();
  for (const x of scored) {
    const n = perUrl.get(x.chunk.url) ?? 0;
    if (n >= 2) continue;
    perUrl.set(x.chunk.url, n + 1);
    out.push({ ...x.chunk, score: Math.round(x.score * 100) / 100 });
    if (out.length >= limit) break;
  }
  return out;
}

export function findCaseStudies(sector?: string, topic?: string, c: Corpus = corpus as Corpus): CaseStudy[] {
  const all = c.caseStudies;
  const s = tokens(sector ?? ''), t = tokens(topic ?? '');
  if (!s.length && !t.length) return all;
  const score = (cs: CaseStudy) => {
    const hay = tokens([cs.sector, cs.clouds.join(' '), cs.title, cs.summary, cs.outcome].join(' '));
    const hit = (qs: string[]) => qs.filter(q => hay.includes(q)).length;
    return hit(s) * 2 + hit(t);
  };
  const ranked = all.map(cs => ({ cs, n: score(cs) })).filter(x => x.n > 0).sort((a, b2) => b2.n - a.n);
  return ranked.length ? ranked.map(x => x.cs) : all;
}

/** The page a visitor is on, by path, so the assistant knows what they are reading. */
export function pageFor(pageUrl: string | undefined, c: Corpus = corpus as Corpus): { url: string; title: string; intro: string } | null {
  if (!pageUrl) return null;
  let path: string;
  try { path = new URL(pageUrl, 'https://appdraft.com').pathname.replace(/\/$/, '') || '/'; } catch { return null; }
  const page = c.pages.find(p => p.url === path);
  if (!page) return null;
  const first = c.chunks.find(ch => ch.url === path);
  return { url: page.url, title: page.title, intro: first?.text.slice(0, 600) ?? '' };
}
