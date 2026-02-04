# Appdraft Contact API

Cloudflare Worker that handles contact form submissions and creates Leads in Salesforce.

## Setup

### 1. Install dependencies

```bash
cd workers/contact-api
npm install
```

### 2. Configure Salesforce Connected App

In Salesforce Setup:

1. Go to **App Manager** → **New Connected App**
2. Fill in basic info (name, email)
3. Enable **OAuth Settings**:
   - Callback URL: `https://login.salesforce.com/services/oauth2/callback`
   - Selected OAuth Scopes: `Full access (full)` or `Manage user data via APIs (api)`
4. Save and wait for it to activate
5. Copy the **Consumer Key** (Client ID) and **Consumer Secret** (Client Secret)

### 3. Set environment secrets

```bash
# Navigate to the worker directory
cd workers/contact-api

# Set Salesforce credentials as secrets
wrangler secret put SF_CLIENT_ID
wrangler secret put SF_CLIENT_SECRET
wrangler secret put SF_USERNAME
wrangler secret put SF_PASSWORD
wrangler secret put SF_SECURITY_TOKEN
wrangler secret put SF_INSTANCE_URL
```

For `SF_INSTANCE_URL`, use your Salesforce instance URL, e.g.:
- Production: `https://login.salesforce.com` or `https://yourcompany.my.salesforce.com`
- Sandbox: `https://test.salesforce.com`

### 4. Deploy

```bash
npm run deploy
```

### 5. Configure custom route (optional)

To serve from `https://appdraft.com/api/contact`, add a route in Cloudflare Dashboard:

1. Go to your domain → **Workers Routes**
2. Add route: `appdraft.com/api/*` → `appdraft-contact-api`

Or update `wrangler.toml`:

```toml
routes = [
  { pattern = "appdraft.com/api/*", zone_name = "appdraft.com" }
]
```

## Development

```bash
npm run dev
```

Test locally:

```bash
curl -X POST http://localhost:8787/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "company": "Test Co",
    "email": "test@example.com",
    "message": "Test message",
    "marketingConsent": true
  }'
```

## Custom Fields

If you have custom fields on the Lead object, update `src/index.ts`:

```typescript
const leadData = {
  // Standard fields
  FirstName: formData.firstName,
  // ...

  // Custom fields
  Marketing_Consent__c: formData.marketingConsent,
  Website_Form__c: 'Contact Us',
  UTM_Source__c: formData.utmSource,
};
```

## Marketing Cloud Integration

To sync consent with Marketing Cloud, you can either:

1. **Use Salesforce Connect** - Sync Lead records to Marketing Cloud Data Extensions
2. **Call Marketing Cloud API directly** - Add to this worker

Example Marketing Cloud API call (requires additional secrets):

```typescript
// POST to Marketing Cloud REST API
const mcResponse = await fetch(
  `${env.MC_REST_BASE_URL}/contacts/v1/contacts`,
  {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${mcToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contactKey: formData.email,
      attributeSets: [{
        name: 'Email Addresses',
        items: [{
          values: [{
            name: 'Email Address',
            value: formData.email,
          }, {
            name: 'HTML Enabled',
            value: true,
          }],
        }],
      }],
    }),
  }
);
```
