/**
 * Appdraft Contact Form API
 *
 * Cloudflare Worker that handles contact form submissions and creates
 * Leads in Salesforce using Client Credentials Flow (same as psa-copilot-api apex.ts).
 */

export interface Env {
  // Environment variables
  ALLOWED_ORIGIN: string;

  // Secrets (same as psa-copilot-api)
  SF_CLIENT_ID: string;
  SF_CLIENT_SECRET: string;
  SF_INSTANCE_URL: string;

  // Turnstile secret for bot protection
  TURNSTILE_SECRET_KEY: string;

  // Shared with appdraft-chat-api, which asks this worker to create leads on its behalf
  CONTACT_API_SECRET?: string;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  marketingConsent: boolean;
  // Only from the chat worker: how they qualified themselves, and the end of the conversation
  qualification?: { onSalesforceAlready?: string; userCount?: number; timeframe?: string };
  chatSummary?: string;
  source?: 'form' | 'website_chat';
}

interface SalesforceTokenResponse {
  access_token: string;
  instance_url: string;
  token_type: string;
}

interface SalesforceLeadResponse {
  id: string;
  success: boolean;
  errors: Array<{ message: string; statusCode: string }>;
}

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
}

/**
 * Verify Turnstile token with Cloudflare
 */
async function verifyTurnstileToken(
  token: string,
  secretKey: string,
  remoteIp: string | null
): Promise<TurnstileVerifyResponse> {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: secretKey,
      response: token,
      remoteip: remoteIp,
    }),
  });

  return response.json();
}

// CORS headers
const corsHeaders = (origin: string, allowedOrigin: string) => {
  const isAllowed = origin === allowedOrigin ||
                    origin === 'http://localhost:3000' ||
                    origin?.includes('.appdraft.pages.dev');

  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
};

/**
 * Get Salesforce access token using Client Credentials Flow
 */
async function getSalesforceToken(env: Env): Promise<SalesforceTokenResponse> {
  const tokenUrl = `${env.SF_INSTANCE_URL}/services/oauth2/token`;

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: env.SF_CLIENT_ID,
      client_secret: env.SF_CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Salesforce auth failed: ${error}`);
  }

  return response.json();
}

// Create a Lead in Salesforce
async function createSalesforceLead(
  token: SalesforceTokenResponse,
  formData: ContactFormData
): Promise<SalesforceLeadResponse> {
  const leadUrl = `${token.instance_url}/services/data/v59.0/sobjects/Lead`;

  const leadData: Record<string, unknown> = {
    FirstName: formData.firstName,
    LastName: formData.lastName,
    Company: formData.company,
    Email: formData.email,
    Phone: formData.phone || null,
    Description: describeLead(formData),
    LeadSource: 'Website',
    HasOptedOutOfEmail: !formData.marketingConsent,
  };
  if (formData.qualification?.userCount) leadData.NumberOfEmployees = formData.qualification.userCount;

  const response = await fetch(leadUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token.access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create Lead: ${error}`);
  }

  return response.json();
}

// The Lead description: the message, then (from the chat) the qualifying answers and the
// tail of the conversation, so sales opens the lead knowing what was said.
function describeLead(f: ContactFormData): string {
  const lines = [f.message];
  const q = f.qualification;
  if (q && (q.onSalesforceAlready || q.userCount || q.timeframe)) {
    lines.push('', 'Qualification:');
    if (q.onSalesforceAlready) lines.push(`- Already on Salesforce: ${q.onSalesforceAlready}`);
    if (q.userCount) lines.push(`- Users: ${q.userCount}`);
    if (q.timeframe) lines.push(`- Timeframe: ${q.timeframe}`);
  }
  if (f.chatSummary) lines.push('', 'End of the chat:', f.chatSummary);
  if (f.source === 'website_chat') lines.push('', 'Via website chat');
  return lines.join('\n').slice(0, 32000);
}

// Constant-time comparison for the shared secret.
function secretEquals(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// Validate form data
function validateFormData(data: unknown): ContactFormData {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid request body');
  }

  const form = data as Record<string, unknown>;

  if (!form.firstName || typeof form.firstName !== 'string') {
    throw new Error('First name is required');
  }
  if (!form.lastName || typeof form.lastName !== 'string') {
    throw new Error('Last name is required');
  }
  if (!form.company || typeof form.company !== 'string') {
    throw new Error('Company is required');
  }
  if (!form.email || typeof form.email !== 'string') {
    throw new Error('Email is required');
  }
  if (!form.message || typeof form.message !== 'string') {
    throw new Error('Message is required');
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    throw new Error('Invalid email address');
  }

  const q = form.qualification && typeof form.qualification === 'object' ? form.qualification as Record<string, unknown> : null;
  const n = q && Number(q.userCount);
  return {
    firstName: form.firstName.trim(),
    lastName: form.lastName.trim(),
    company: form.company.trim(),
    email: form.email.trim().toLowerCase(),
    phone: form.phone ? String(form.phone).trim() : undefined,
    message: form.message.trim(),
    marketingConsent: Boolean(form.marketingConsent),
    source: form.source === 'website_chat' ? 'website_chat' : 'form',
    qualification: q ? {
      onSalesforceAlready: q.onSalesforceAlready ? String(q.onSalesforceAlready).slice(0, 200) : undefined,
      userCount: n && Number.isFinite(n) && n > 0 ? Math.round(n) : undefined,
      timeframe: q.timeframe ? String(q.timeframe).slice(0, 200) : undefined,
    } : undefined,
    chatSummary: form.chatSummary ? String(form.chatSummary).slice(0, 4000) : undefined,
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin, env.ALLOWED_ORIGIN),
      });
    }

    // Internal path for the website chat worker: no Turnstile (the chat verified the visitor
    // when the session started), authenticated by a shared secret instead. It can only do
    // what the public form can do, create a Lead, so a leaked secret buys junk leads at most.
    if (request.method === 'POST' && url.pathname === '/api/contact/internal') {
      const presented = (request.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
      if (!env.CONTACT_API_SECRET || !presented || !secretEquals(presented, env.CONTACT_API_SECRET)) {
        return new Response(JSON.stringify({ success: false, error: 'Unauthorised' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
      }
      try {
        const formData = validateFormData(await request.json());
        formData.source = 'website_chat';
        const token = await getSalesforceToken(env);
        const lead = await createSalesforceLead(token, formData);
        console.log(`Lead created from website chat: ${lead.id}`);
        return new Response(JSON.stringify({ success: true, leadId: lead.id }), { status: 200, headers: { 'Content-Type': 'application/json' } });
      } catch (error) {
        console.error('Error creating lead from website chat:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }
    }

    // Only allow POST to /api/contact
    if (request.method !== 'POST' || url.pathname !== '/api/contact') {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders(origin, env.ALLOWED_ORIGIN),
        },
      });
    }

    try {
      // Parse and validate form data
      const body = await request.json() as Record<string, unknown>;
      const { turnstileToken, ...formFields } = body;

      // Verify Turnstile token first (bot protection)
      if (!turnstileToken || typeof turnstileToken !== 'string') {
        return new Response(
          JSON.stringify({ success: false, error: 'Verification token missing' }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders(origin, env.ALLOWED_ORIGIN),
            },
          }
        );
      }

      const turnstileResult = await verifyTurnstileToken(
        turnstileToken,
        env.TURNSTILE_SECRET_KEY,
        request.headers.get('CF-Connecting-IP')
      );

      if (!turnstileResult.success) {
        console.error('Turnstile verification failed:', turnstileResult['error-codes']);
        return new Response(
          JSON.stringify({ success: false, error: 'Verification failed. Please try again.' }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders(origin, env.ALLOWED_ORIGIN),
            },
          }
        );
      }

      // Validate form data
      const formData = validateFormData(formFields);

      // Get Salesforce token using Client Credentials flow
      const token = await getSalesforceToken(env);

      // Create Lead in Salesforce
      const lead = await createSalesforceLead(token, formData);

      console.log(`Lead created successfully: ${lead.id}`);

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Thank you for your enquiry. We will be in touch shortly.',
          leadId: lead.id,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders(origin, env.ALLOWED_ORIGIN),
          },
        }
      );
    } catch (error) {
      console.error('Error processing contact form:', error);

      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to submit form. Please try again or contact us directly.',
          details: errorMessage,
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders(origin, env.ALLOWED_ORIGIN),
          },
        }
      );
    }
  },
};
