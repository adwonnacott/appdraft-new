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
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  marketingConsent: boolean;
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

  const leadData = {
    FirstName: formData.firstName,
    LastName: formData.lastName,
    Company: formData.company,
    Email: formData.email,
    Phone: formData.phone || null,
    Description: formData.message,
    LeadSource: 'Website',
    HasOptedOutOfEmail: !formData.marketingConsent,
  };

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

  return {
    firstName: form.firstName.trim(),
    lastName: form.lastName.trim(),
    company: form.company.trim(),
    email: form.email.trim().toLowerCase(),
    phone: form.phone ? String(form.phone).trim() : undefined,
    message: form.message.trim(),
    marketingConsent: Boolean(form.marketingConsent),
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
      const body = await request.json();
      const formData = validateFormData(body);

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
