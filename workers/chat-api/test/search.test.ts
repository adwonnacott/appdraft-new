import { describe, it, expect } from 'vitest';
import { searchChunks, findCaseStudies, pageFor } from '../src/search';

describe('corpus search', () => {
  it('finds the Sales Cloud page for a Sales Cloud question', () => {
    const hits = searchChunks('do you do Sales Cloud implementations');
    expect(hits.length).toBeGreaterThan(0);
    expect(hits.slice(0, 3).some(h => h.url === '/salesforce/sales-cloud')).toBe(true);
  });

  it('finds the Xero accelerator', () => {
    const hits = searchChunks('Xero integration');
    expect(hits[0].url).toBe('/accelerators/salesforce-xero');
  });

  it('never returns more than two chunks from one page', () => {
    const hits = searchChunks('Salesforce support', 5);
    const counts = new Map<string, number>();
    for (const h of hits) counts.set(h.url, (counts.get(h.url) ?? 0) + 1);
    expect(Math.max(...counts.values())).toBeLessThanOrEqual(2);
  });

  it('contains no prices', () => {
    const corpus = require('../src/corpus.json');
    const priced = corpus.chunks.filter((c: { text: string }) => /£\s?\d|per hour|per day|day rate/i.test(c.text));
    expect(priced).toEqual([]);
  });
});

describe('case studies', () => {
  it('matches field service to Mantair', () => {
    const list = findCaseStudies('field service');
    expect(list[0].title).toMatch(/Mantair/);
  });
  it('matches manufacturing to the Agentforce manufacturer', () => {
    const list = findCaseStudies('manufacturing');
    expect(list[0].title).toMatch(/Manufacturer/);
  });
  it('returns everything when nothing matches', () => {
    expect(findCaseStudies('quantum physics').length).toBeGreaterThan(1);
  });
});

describe('pageFor', () => {
  it('maps a full URL to the page', () => {
    const p = pageFor('https://appdraft.com/salesforce/field-service/');
    expect(p?.title).toMatch(/Field Service/);
  });
  it('returns null for an unknown page', () => {
    expect(pageFor('https://appdraft.com/nope')).toBeNull();
  });
});
