import { describe, it, expect } from 'vitest';
import worker from '../src/index';

function memKv() {
  const m = new Map<string, string>();
  return {
    get: async (k: string, type?: string) => { const v = m.get(k) ?? null; return v && type === 'json' ? JSON.parse(v) : v; },
    put: async (k: string, v: string) => { m.set(k, v); },
    list: async ({ prefix }: { prefix: string }) => ({ keys: [...m.keys()].filter(k => k.startsWith(prefix)).sort().map(name => ({ name })), list_complete: true, cursor: '' }),
    _m: m,
  } as unknown as KVNamespace & { _m: Map<string, string> };
}

const ctx = { waitUntil: () => {}, passThroughOnException: () => {} } as unknown as ExecutionContext;

describe('/api/chat/gaps', () => {
  it('refuses without the secret', async () => {
    const env = { CHAT_KV: memKv(), GAPS_READ_SECRET: 's3cret' } as any;
    const r = await worker.fetch(new Request('https://appdraft.com/api/chat/gaps'), env, ctx);
    expect(r.status).toBe(401);
    const r2 = await worker.fetch(new Request('https://appdraft.com/api/chat/gaps', { headers: { Authorization: 'Bearer wrong!' } }), env, ctx);
    expect(r2.status).toBe(401);
  });

  it('refuses when no secret is configured at all', async () => {
    const env = { CHAT_KV: memKv() } as any;
    const r = await worker.fetch(new Request('https://appdraft.com/api/chat/gaps', { headers: { Authorization: 'Bearer ' } }), env, ctx);
    expect(r.status).toBe(401);
  });

  it('returns gaps after the given time, oldest first', async () => {
    const kv = memKv();
    for (const [at, q] of [['2026-10-20T10:00:00.000Z', 'old'], ['2026-10-22T09:00:00.000Z', 'Do you work with charities?'], ['2026-10-22T12:00:00.000Z', 'Do you support Pardot?']]) {
      await kv.put(`gap:${at}:abcd1234`, JSON.stringify({ at, question: q }));
    }
    const env = { CHAT_KV: kv, GAPS_READ_SECRET: 's3cret' } as any;
    const r = await worker.fetch(new Request('https://appdraft.com/api/chat/gaps?since=2026-10-21T00:00:00Z', { headers: { Authorization: 'Bearer s3cret' } }), env, ctx);
    expect(r.status).toBe(200);
    const body = await r.json() as { gaps: Array<{ question: string }> };
    expect(body.gaps.map(g => g.question)).toEqual(['Do you work with charities?', 'Do you support Pardot?']);
  });
});
