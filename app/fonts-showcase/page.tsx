'use client';

import Link from 'next/link';

const fontOptions = [
  {
    name: 'Inter',
    description: 'Current brand font. Clean, neutral, highly readable. Used by GitHub, Figma, Linear.',
    className: 'font-sans',
    style: {},
  },
  {
    name: 'Plus Jakarta Sans',
    description: 'Warmer, friendlier feel. Geometric with subtle humanist touches.',
    className: '',
    style: { fontFamily: 'Plus Jakarta Sans, sans-serif' },
  },
  {
    name: 'DM Sans',
    description: 'Low-contrast geometric. Modern, clean, slightly playful.',
    className: '',
    style: { fontFamily: 'DM Sans, sans-serif' },
  },
  {
    name: 'Outfit',
    description: 'Contemporary geometric. Popular with modern tech companies.',
    className: '',
    style: { fontFamily: 'Outfit, sans-serif' },
  },
  {
    name: 'Manrope',
    description: 'Semi-rounded, modern. Good for tech and SaaS brands.',
    className: '',
    style: { fontFamily: 'Manrope, sans-serif' },
  },
  {
    name: 'Space Grotesk',
    description: 'Distinctive, geometric. More personality, tech-forward feel.',
    className: '',
    style: { fontFamily: 'Space Grotesk, sans-serif' },
  },
];

const sampleText = {
  headline: 'Experts in Salesforce for Growing Businesses',
  subheadline: 'We help sales and operations teams get more from Salesforce fast.',
  body: 'With 130+ projects delivered, we blend technical expertise with practical business understanding. Whether you\'re implementing Salesforce for the first time or trying to fix what\'s not working, we\'ll help you find a better way forward.',
  cta: 'Discuss Your Project',
};

export default function FontsShowcase() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Load Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Link href="/" className="text-appdraft-primary hover:underline text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Font Showcase</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare different font options for the Appdraft website. See how each font looks with actual site content.
          </p>
        </div>

        <div className="space-y-16">
          {fontOptions.map((font) => (
            <div
              key={font.name}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200"
              style={font.style}
            >
              {/* Font Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-gray-200">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{font.name}</h2>
                  <p className="text-gray-600">{font.description}</p>
                </div>
                {font.name === 'Inter' && (
                  <span className="mt-3 md:mt-0 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-appdraft-primary text-white">
                    Current
                  </span>
                )}
              </div>

              {/* Font Preview */}
              <div className="space-y-8">
                {/* Headline */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Headline (Bold, 48px)</p>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {sampleText.headline}
                  </h3>
                </div>

                {/* Subheadline */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Subheadline (Regular, 24px)</p>
                  <p className="text-2xl text-gray-600 leading-relaxed">
                    {sampleText.subheadline}
                  </p>
                </div>

                {/* Body Text */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Body Text (Regular, 16px)</p>
                  <p className="text-base text-gray-700 leading-relaxed max-w-3xl">
                    {sampleText.body}
                  </p>
                </div>

                {/* Button & Link */}
                <div className="flex flex-wrap gap-4 items-center">
                  <button className="bg-appdraft-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-appdraft-primary-hover transition-colors">
                    {sampleText.cta}
                  </button>
                  <a href="#" className="text-appdraft-primary font-medium hover:underline">
                    Learn more →
                  </a>
                </div>

                {/* Weight Samples */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Font Weights</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="font-normal text-lg text-gray-900">Regular 400</p>
                      <p className="text-sm text-gray-500">Body text</p>
                    </div>
                    <div>
                      <p className="font-medium text-lg text-gray-900">Medium 500</p>
                      <p className="text-sm text-gray-500">Navigation</p>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-gray-900">Semibold 600</p>
                      <p className="text-sm text-gray-500">Buttons</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-900">Bold 700</p>
                      <p className="text-sm text-gray-500">Headlines</p>
                    </div>
                  </div>
                </div>

                {/* Character Set */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Character Set</p>
                  <p className="text-lg text-gray-700 tracking-wide">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </p>
                  <p className="text-lg text-gray-700 tracking-wide">
                    abcdefghijklmnopqrstuvwxyz
                  </p>
                  <p className="text-lg text-gray-700 tracking-wide">
                    0123456789 !@#$%&*()
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-semibold text-gray-900">Font</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Feel</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Best For</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Used By</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Inter</td>
                  <td className="py-3 px-4">Neutral, professional</td>
                  <td className="py-3 px-4">B2B, SaaS, tech</td>
                  <td className="py-3 pl-4">GitHub, Figma, Linear</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Plus Jakarta Sans</td>
                  <td className="py-3 px-4">Warm, friendly</td>
                  <td className="py-3 px-4">Approachable brands</td>
                  <td className="py-3 pl-4">Gumroad, Framer</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">DM Sans</td>
                  <td className="py-3 px-4">Modern, clean</td>
                  <td className="py-3 px-4">Startups, apps</td>
                  <td className="py-3 pl-4">YouTube, Webflow</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Outfit</td>
                  <td className="py-3 px-4">Contemporary, bold</td>
                  <td className="py-3 px-4">Tech brands</td>
                  <td className="py-3 pl-4">Modern startups</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Manrope</td>
                  <td className="py-3 px-4">Rounded, modern</td>
                  <td className="py-3 px-4">SaaS, fintech</td>
                  <td className="py-3 pl-4">Vercel, Railway</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-900">Space Grotesk</td>
                  <td className="py-3 px-4">Distinctive, techy</td>
                  <td className="py-3 px-4">Tech-forward brands</td>
                  <td className="py-3 pl-4">Polygon, tech startups</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
