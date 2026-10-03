'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const platforms = [
  {
    name: 'Sales Cloud',
    description: 'Pipeline visibility, sales process automation and forecasting',
    link: '/salesforce/sales-cloud',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: 'Service Cloud',
    description: 'Faster case resolution with structured handling and MI',
    link: '/salesforce/service-cloud',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'Experience Cloud',
    description: 'Self-serve portals for customers, partners and more',
    link: '/salesforce/experience-cloud',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'Field Service',
    description: 'Helping you support your customers in the field',
    link: '/salesforce/field-service',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'Marketing Cloud',
    description: 'Lead segmentation, automation and campaign attribution',
    link: '/salesforce/marketing-cloud',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    name: 'Agentforce',
    description: 'AI-powered productivity, triage and email generation',
    link: '/salesforce/agentforce',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function SalesforceExpertise() {
  return (
    <section className="py-24 bg-[#1f2d3d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl mb-14">
          <p className="text-[#3cd6bf] font-semibold tracking-wide uppercase text-sm mb-4">Salesforce Know-How</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Real expertise across the Salesforce platform</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Salesforce is powerful, but only if it&apos;s implemented to match your team and your goals. We help you get more from:
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 border-t border-white/20">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.link}
              className="group flex gap-4 py-7 border-b border-white/15"
            >
              <div className="text-[#3cd6bf] mt-1 flex-shrink-0">{platform.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1.5 group-hover:text-[#3cd6bf] transition-colors duration-200">
                  {platform.name}
                  <span className="inline-block ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">&rarr;</span>
                </h3>
                <p className="text-slate-300 leading-relaxed">{platform.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
