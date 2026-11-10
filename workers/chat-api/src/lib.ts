/** Pure helpers, kept apart from the handler so they can be unit tested without a worker. */

// House style: no em dashes in anything a visitor reads or we store.
export function stripEmDashes(text: string): string {
  return text.replace(/\s*—\s*/g, ', ').replace(/—/g, '-');
}

/**
 * Remove anything that looks like internal tool-call markup from a reply. Seen once in testing
 * at low effort: the model wrote a tool call into its visible text instead of a tool_use
 * block, and a visitor would have read it. The prompt tells it not to; this makes sure.
 */
export function stripInternalMarkup(text: string): string {
  return text
    .replace(/<\/?(?:antml:)?(?:function_calls|invoke|parameter|thinking)\b[^>]*>[\s\S]*?(?:<\/(?:antml:)?(?:function_calls|invoke|parameter|thinking)>|$)/gi, '')
    .replace(/<\/?antml:[^>]*>/gi, '')
    .replace(/<(reasoning_effort|thinking_mode|thinking)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<\/?(?:reasoning_effort|thinking_mode|thinking)[^>]*>/gi, '')
    .replace(/\bantml:[a-z_]+(?:-[a-z]+)?[:>]?[0-9]*>?/gi, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** A reply is worth sending only if something readable survives the clean-up. */
export function cleanReply(text: string): string {
  return stripInternalMarkup(stripEmDashes(text));
}

export interface LeadInput {
  first_name?: string; last_name?: string; email?: string; company?: string; phone?: string;
  need?: string; on_salesforce_already?: string; user_count?: string | number; timeframe?: string;
}

export interface Lead {
  firstName: string; lastName: string; email: string; company: string; phone?: string;
  need: string; onSalesforceAlready?: string; userCount?: number; timeframe?: string;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validate what the model says the visitor gave. Returns an error string or the clean lead. */
export function validateLead(input: LeadInput): { ok: true; lead: Lead } | { ok: false; error: string } {
  const clean = (v: unknown, max: number) => stripEmDashes(String(v ?? '').trim()).slice(0, max);
  const firstName = clean(input.first_name, 60), lastName = clean(input.last_name, 60);
  const email = clean(input.email, 120).toLowerCase(), company = clean(input.company, 120);
  const need = clean(input.need, 2000);
  if (!firstName || !lastName) return { ok: false, error: 'first_name and last_name are required: ask the visitor for their name' };
  if (!email || !EMAIL.test(email)) return { ok: false, error: 'a valid email is required: ask the visitor for the address the team should reply to' };
  if (!company) return { ok: false, error: 'company is required: ask which organisation they are from' };
  if (!need) return { ok: false, error: 'need is required: say in a sentence what they are looking for' };
  const n = Number(String(input.user_count ?? '').replace(/[^0-9]/g, ''));
  return {
    ok: true,
    lead: {
      firstName, lastName, email, company, need,
      phone: clean(input.phone, 40) || undefined,
      onSalesforceAlready: clean(input.on_salesforce_already, 200) || undefined,
      userCount: Number.isFinite(n) && n > 0 ? n : undefined,
      timeframe: clean(input.timeframe, 200) || undefined,
    },
  };
}

/** KV counter. `failOpen` decides what happens when KV itself fails. */
export async function rateLimited(
  kv: KVNamespace | undefined, key: string, limit: number, windowSec: number, failOpen = true,
): Promise<boolean> {
  if (!kv) return !failOpen;
  try {
    const raw = await kv.get(key);
    const count = raw ? parseInt(raw, 10) : 0;
    if (count >= limit) return true;
    await kv.put(key, String(count + 1), { expirationTtl: windowSec });
    return false;
  } catch {
    return !failOpen;
  }
}

export interface Slot { start: string; label: string }

/** Up to `max` slots spread across days: two a day, mornings and afternoons, so the visitor
 *  sees a choice of days rather than eight slots on the first morning. */
export function pickSlots(byDay: Record<string, Array<{ start: string }>>, max = 8, now = new Date()): Slot[] {
  const out: Slot[] = [];
  const days = Object.keys(byDay).sort();
  const fmt = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London' });
  for (const day of days) {
    const slots = (byDay[day] ?? []).map(s => new Date(s.start)).filter(d => d.getTime() > now.getTime() + 60 * 60 * 1000);
    if (!slots.length) continue;
    const morning = slots.find(d => Number(new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hour12: false, timeZone: 'Europe/London' }).format(d)) < 12);
    const afternoon = slots.find(d => Number(new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hour12: false, timeZone: 'Europe/London' }).format(d)) >= 12);
    for (const d of [morning, afternoon]) {
      if (!d) continue;
      out.push({ start: d.toISOString(), label: fmt.format(d).replace(',', '') });
      if (out.length >= max) return out;
    }
  }
  return out;
}

export function formatSlot(iso: string): string {
  const d = new Date(iso);
  return new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London' }).format(d).replace(',', '');
}

export async function sha256(s: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 24);
}

// ── Email typo check (TSK-506961) ────────────────────────────────────────────
// A misspelt domain means the invite or reply never arrives (a test on 10 Nov 2026 booked
// "appraft.com"). Domains one or two letters away from a common one are queried with the
// visitor before anything is booked or sent.
const COMMON_DOMAINS = [
  'gmail.com', 'googlemail.com', 'outlook.com', 'hotmail.com', 'hotmail.co.uk', 'live.co.uk', 'live.com',
  'yahoo.com', 'yahoo.co.uk', 'icloud.com', 'me.com', 'btinternet.com', 'sky.com', 'aol.com', 'protonmail.com',
  'appdraft.com', 'salesforce.com',
];

function editDistance(a: string, b: string): number {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
  }
  return d[a.length][b.length];
}

/** The common domain this email's domain is probably a typo of, or null if it looks fine. */
export function likelyEmailTypo(email: string): string | null {
  const domain = email.split('@')[1]?.toLowerCase().trim();
  if (!domain || COMMON_DOMAINS.includes(domain)) return null;
  let best: { d: string; n: number } | null = null;
  for (const c of COMMON_DOMAINS) {
    const n = editDistance(domain, c);
    if (n > 0 && n <= 2 && (!best || n < best.n)) best = { d: c, n };
  }
  return best?.d ?? null;
}

/** The whole conversation as plain text, for the person's record in the Hub. */
export function transcriptText(history: Array<{ role: string; content: string }>, max = 30000): string {
  return history.map(m => `${m.role === 'user' ? 'Visitor' : 'Assistant'}: ${m.content}`).join('\n\n').slice(-max);
}
