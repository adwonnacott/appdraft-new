'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

// Brand rainbow colors
const brandColors = {
  teal: '#19779b',
  cyan: '#3cd6bf',
  coral: '#f25c54',
  amber: '#f5a623',
};

const services = [
  {
    title: 'Implementation',
    description: 'End-to-end setup tailored to your sales and operations processes',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: '/services/implementation',
    color: brandColors.teal,
  },
  {
    title: 'Support',
    description: 'Flexible pay-as-you-go or retained support with roadmaps and reporting',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    link: '/services/support',
    color: brandColors.cyan,
  },
  {
    title: 'Health Checks',
    description: 'No-obligation review of your Salesforce org to ensure maximum return on investment',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    link: '/services/health-checks',
    color: brandColors.coral,
  },
  {
    title: 'Custom Development',
    description: 'Build industry-specific tools, integrations and automation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    link: '/services/custom-development',
    color: brandColors.amber,
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <ScrollReveal className="lg:col-span-4">
            <p className="text-[#19779b] font-semibold tracking-wide uppercase text-sm mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">Services that drive results</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We offer more than just implementation. Our services are designed to get Salesforce working for your business from day one.
            </p>
          </ScrollReveal>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 border-t border-slate-900/80">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="group block py-8 border-b border-slate-200"
              >
                <div className="flex items-center gap-3 mb-3" style={{ color: service.color }}>
                  {service.icon}
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[#19779b] transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-[#19779b]">
                  Learn more
                  <svg className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
