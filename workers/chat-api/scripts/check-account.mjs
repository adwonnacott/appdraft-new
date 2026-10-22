#!/usr/bin/env node
// Refuse to deploy unless wrangler is logged in to AppDraft's own Cloudflare account.
// wrangler keeps one login per machine and client work switches it; this is the guard.
import { execSync } from 'node:child_process';
const EXPECTED = '54f68f19cf88a829edd97fa51bbbfbf1';
const out = execSync('npx wrangler whoami', { encoding: 'utf8' });
if (!out.includes(EXPECTED)) {
  console.error(`[check-account] wrangler is not logged in to AppDraft's account (${EXPECTED}).\n` +
    'Run "npx wrangler login" and choose the AppDraft account, then deploy again.');
  process.exit(1);
}
console.log('[check-account] AppDraft account confirmed.');
