'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlowCard from '@/components/ui/GlowCard';

const platforms = [
  {
    name: 'Sales Cloud',
    description: 'Pipeline visibility, sales process automation and forecasting',
    link: '/salesforce/sales-cloud',
    gradient: 'from-blue-500 to-indigo-600',
    glowColor: 'rgba(59, 130, 246, 0.12)',
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
    gradient: 'from-emerald-500 to-teal-600',
    glowColor: 'rgba(16, 185, 129, 0.12)',
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
    gradient: 'from-purple-500 to-violet-600',
    glowColor: 'rgba(168, 85, 247, 0.12)',
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
    gradient: 'from-orange-500 to-amber-600',
    glowColor: 'rgba(249, 115, 22, 0.12)',
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
    gradient: 'from-pink-500 to-rose-600',
    glowColor: 'rgba(236, 72, 153, 0.12)',
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
    gradient: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(6, 182, 212, 0.12)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function SalesforceExpertise() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-cyan-50 to-transparent opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-appdraft-primary font-semibold tracking-wide uppercase text-sm mb-4">Salesforce Know-How</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Real Expertise Across the Salesforce Platform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Salesforce is powerful, but only if it&apos;s implemented to match your team and your goals. We help you get more from:
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <ScrollReveal key={platform.name} delay={index * 75}>
              <GlowCard className="rounded-2xl h-full" glowColor={platform.glowColor}>
                <Link href={platform.link} className="block h-full">
                  <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center text-white mb-5 transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                      {platform.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-appdraft-primary transition-colors duration-300">
                      {platform.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5">{platform.description}</p>

                    <div className="flex items-center text-appdraft-primary font-medium">
                      <span className="group-hover:underline">Explore</span>
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
