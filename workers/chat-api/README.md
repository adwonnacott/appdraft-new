# AppDraft website chat

The chat assistant on appdraft.com. A Cloudflare Worker that answers visitors' questions
from a snapshot of the site, qualifies and captures a lead into Salesforce through the
contact worker, and books a discovery call through Cal.com.

It is deliberately separate from the Hub and Jeeves (psa-copilot-api). It holds its own
Anthropic key and nothing else of ours: no database, no Salesforce credentials, no Jeeves
key. See the header of `src/index.ts`.

## Deploy

```bash
cd workers/chat-api
npm install            # first time (use npx npm@11 install if npm 10 crashes on edgesOut)
npm run deploy         # rebuilds the corpus, checks the Cloudflare account, deploys
```

The corpus is built from the site's `out/` folder, so run `next build` in the site first.
Secrets, set once with `npx wrangler secret put <name>`:

- `ANTHROPIC_API_KEY`: a key from its own Console workspace with a monthly spend limit
- `TURNSTILE_SECRET_KEY`: the same Turnstile widget the contact form uses
- `CONTACT_API_SECRET`: shared with `appdraft-contact-api`

The KV namespace id in `wrangler.toml` is created once with `npx wrangler kv namespace create CHAT_KV`.

## Mounting

The site mounts it in `app/layout.tsx`; the blog and insights pages (served by the Hub
worker) mount the same tag in `psa-copilot-api/src/routes/blog.ts`:

```html
<script src="/api/chat/widget.js" async></script>
```

For a preview, add `data-api="https://<preview worker>/api/chat"`.

## Tests

```bash
npm test               # corpus search, lead validation, rate limits, slot picking
npm run typecheck
node scripts/test-chat.mjs   # scripted visitor conversations against a running worker
```
