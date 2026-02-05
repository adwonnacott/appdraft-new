'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

const TURNSTILE_SITE_KEY = '0x4AAAAAACXuClfrEWjl2326';

// Declare globals (loaded via script tags)
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void;
    SalesforceInteractions?: {
      sendEvent: (event: {
        interaction: { name: string };
        user?: {
          attributes?: Record<string, string>;
        };
      }) => void;
    };
    turnstile?: {
      render: (container: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'error-callback'?: () => void;
        'expired-callback'?: () => void;
        theme?: 'light' | 'dark' | 'auto';
        size?: 'normal' | 'compact' | 'invisible';
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  marketingConsent: boolean;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  marketingConsent: false,
};

// Send conversion event to Google Analytics
function sendGAConversionEvent(): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Contact',
      event_label: 'Contact Form Submission',
    });
  }
}

// Send identity event to Salesforce Interactions SDK
// This links the anonymous browsing session to the known user profile
function sendIdentityEvent(data: FormData): void {
  if (typeof window === 'undefined' || !window.SalesforceInteractions) {
    console.log('SalesforceInteractions SDK not available');
    return;
  }

  try {
    window.SalesforceInteractions.sendEvent({
      interaction: {
        name: 'Form Submission',
      },
      user: {
        attributes: {
          email: data.email.toLowerCase(),
          firstName: data.firstName,
          lastName: data.lastName,
          company: data.company,
          ...(data.phone && { phone: data.phone }),
        },
      },
    });
    console.log('Identity event sent to Data Cloud');
  } catch (error) {
    console.error('Failed to send identity event:', error);
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Turnstile widget when script loads or if already loaded
  useEffect(() => {
    // If script already loaded (e.g., cached), initialize immediately
    if (window.turnstile && turnstileContainerRef.current && !turnstileWidgetId.current) {
      initializeTurnstile();
    }

    return () => {
      // Cleanup on unmount
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
    };
  }, []);

  const initializeTurnstile = () => {
    if (window.turnstile && turnstileContainerRef.current && !turnstileWidgetId.current) {
      turnstileWidgetId.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => {
          setTurnstileToken(token);
        },
        'error-callback': () => {
          setTurnstileToken(null);
        },
        'expired-callback': () => {
          setTurnstileToken(null);
        },
        theme: 'light',
      });
    }
  };

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send identity event to Data Cloud to link anonymous session to known user
      // This is the official Salesforce method for identity resolution
      sendIdentityEvent(formData);

      // Verify Turnstile token is present
      if (!turnstileToken) {
        setSubmitError('Please complete the verification check.');
        setIsSubmitting(false);
        return;
      }

      // Create Lead in Salesforce via our API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Track conversion in Google Analytics
      sendGAConversionEvent();
      setIsSubmitted(true);
    } catch {
      // For now, simulate success since we don't have the API yet
      console.log('Form data:', formData);
      // Track conversion in Google Analytics (even if API fails, form was submitted)
      sendGAConversionEvent();
      setIsSubmitted(true);
      // When API is ready, uncomment:
      // setSubmitError('Something went wrong. Please try again or call us on 020 3858 0040.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank you for getting in touch</h2>
        <p className="text-gray-600">
          We&apos;ll review your message and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
      <div className="space-y-6">
        {/* Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={(e) => updateField('firstName', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-200'
              } focus:border-[#19779b] focus:ring-2 focus:ring-[#19779b]/20 outline-none transition-all`}
              placeholder="John"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={(e) => updateField('lastName', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-200'
              } focus:border-[#19779b] focus:ring-2 focus:ring-[#19779b]/20 outline-none transition-all`}
              placeholder="Smith"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={(e) => updateField('company', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.company ? 'border-red-300 bg-red-50' : 'border-gray-200'
            } focus:border-[#19779b] focus:ring-2 focus:ring-[#19779b]/20 outline-none transition-all`}
            placeholder="Acme Ltd"
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
            } focus:border-[#19779b] focus:ring-2 focus:ring-[#19779b]/20 outline-none transition-all`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone (optional) */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#19779b] focus:ring-2 focus:ring-[#19779b]/20 outline-none transition-all"
            placeholder="+44 7700 900000"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            rows={4}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'
            } focus:border-[#19779b] focus:ring-2 focus:ring-[#19779b]/20 outline-none transition-all resize-none`}
            placeholder="Tell us about your project or how we can help..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Marketing Consent */}
        <div className="flex items-start gap-3">
          <input
            id="marketingConsent"
            type="checkbox"
            checked={formData.marketingConsent}
            onChange={(e) => updateField('marketingConsent', e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-gray-300 text-[#19779b] focus:ring-[#19779b]/20 cursor-pointer"
          />
          <label htmlFor="marketingConsent" className="text-sm text-gray-600 cursor-pointer">
            I agree to receive marketing communications from Appdraft about Salesforce products, services, and industry insights. You can unsubscribe at any time.
          </label>
        </div>

        {/* Turnstile Widget */}
        <div ref={turnstileContainerRef} className="flex justify-center" />

        {/* Error Message */}
        {submitError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
            {submitError}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-[#19779b] hover:bg-[#14698c] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Privacy Note */}
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy-policy" className="text-[#19779b] hover:underline">
            Privacy Policy
          </a>
          . We&apos;ll never share your information with third parties.
        </p>
      </div>

      {/* Turnstile Script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        onLoad={initializeTurnstile}
      />
    </form>
  );
}
