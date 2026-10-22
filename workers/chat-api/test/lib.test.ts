import { describe, it, expect } from 'vitest';
import { validateLead, stripEmDashes, stripInternalMarkup, rateLimited, pickSlots } from '../src/lib';

describe('validateLead', () => {
  const good = { first_name: 'Jo', last_name: 'Bloggs', email: 'Jo@Example.com', company: 'Acme', need: 'Sales Cloud for 20 people' };
  it('accepts a complete lead and lowercases the email', () => {
    const v = validateLead(good);
    expect(v.ok).toBe(true);
    if (v.ok) expect(v.lead.email).toBe('jo@example.com');
  });
  it('rejects a missing email', () => {
    const v = validateLead({ ...good, email: '' });
    expect(v.ok).toBe(false);
  });
  it('rejects a bad email', () => {
    expect(validateLead({ ...good, email: 'not an email' }).ok).toBe(false);
  });
  it('rejects a missing company', () => {
    expect(validateLead({ ...good, company: ' ' }).ok).toBe(false);
  });
  it('strips em dashes and parses the user count', () => {
    const v = validateLead({ ...good, need: 'CRM — for sales', user_count: 'about 25 people' });
    expect(v.ok).toBe(true);
    if (v.ok) { expect(v.lead.need).toBe('CRM, for sales'); expect(v.lead.userCount).toBe(25); }
  });
});

describe('stripEmDashes', () => {
  it('replaces spaced em dashes with a comma', () => {
    expect(stripEmDashes('one — two')).toBe('one, two');
  });
});

function fakeKv(fail = false) {
  const store = new Map<string, string>();
  return {
    get: async (k: string) => { if (fail) throw new Error('kv down'); return store.get(k) ?? null; },
    put: async (k: string, v: string) => { if (fail) throw new Error('kv down'); store.set(k, v); },
  } as unknown as KVNamespace;
}

describe('rateLimited', () => {
  it('allows up to the limit then blocks', async () => {
    const kv = fakeKv();
    expect(await rateLimited(kv, 'k', 2, 60)).toBe(false);
    expect(await rateLimited(kv, 'k', 2, 60)).toBe(false);
    expect(await rateLimited(kv, 'k', 2, 60)).toBe(true);
  });
  it('fails open by default and closed when told to', async () => {
    expect(await rateLimited(fakeKv(true), 'k', 2, 60)).toBe(false);
    expect(await rateLimited(fakeKv(true), 'k', 2, 60, false)).toBe(true);
  });
});

describe('pickSlots', () => {
  it('spreads slots across days, two a day, skipping the next hour', () => {
    const now = new Date('2026-10-22T08:00:00Z');
    const byDay = {
      '2026-10-23': [{ start: '2026-10-23T08:00:00Z' }, { start: '2026-10-23T09:00:00Z' }, { start: '2026-10-23T13:00:00Z' }, { start: '2026-10-23T14:00:00Z' }],
      '2026-10-24': [{ start: '2026-10-24T10:00:00Z' }],
      '2026-10-22': [{ start: '2026-10-22T08:30:00Z' }, { start: '2026-10-22T15:00:00Z' }],
    };
    const slots = pickSlots(byDay, 8, now);
    expect(slots.map(s => s.start)).toEqual([
      '2026-10-22T15:00:00.000Z', '2026-10-23T08:00:00.000Z', '2026-10-23T13:00:00.000Z', '2026-10-24T10:00:00.000Z',
    ]);
    expect(slots[0].label).toMatch(/Thu 22 Oct 16:00/);
  });
});

describe('stripInternalMarkup', () => {
  it('removes a leaked tool call and keeps the prose', () => {
    const leaked = 'Let me check.\n\nantml:reasoning_effort>5</reasoning_effort>\n<invoke name="search_site">\n<parameter name="query">overview</parameter>\n</invoke>';
    expect(stripInternalMarkup(leaked)).toBe('Let me check.');
  });
  it('returns an empty string when nothing readable is left', () => {
    expect(stripInternalMarkup('<invoke name="x"><parameter name="q">y</parameter></invoke>')).toBe('');
  });
  it('handles the prefixes seen in testing', () => {
    expect(stripInternalMarkup('antml:reasoning_effort: Hello. I can help.')).toBe('Hello. I can help.');
    expect(stripInternalMarkup('antml:answer\nHello, and welcome.')).toBe('Hello, and welcome.');
    expect(stripInternalMarkup('antml:reasoning_effort>5</reasoning_effort>\n\n<thinking_mode>auto</thinking_mode>')).toBe('');
    expect(stripInternalMarkup('antml:reasoning_effort>\n\nHello there.')).toBe('Hello there.');
  });
  it('leaves ordinary text and links alone', () => {
    const t = 'See https://appdraft.com/services/support for details. Fewer than 5 < 6.';
    expect(stripInternalMarkup(t)).toBe(t);
  });
});
