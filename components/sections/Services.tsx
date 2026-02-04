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
    bgGradient: 'from-[#19779b]/10 to-[#19779b]/5',
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
    bgGradient: 'from-[#3cd6bf]/10 to-[#3cd6bf]/5',
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
    bgGradient: 'from-[#f25c54]/10 to-[#f25c54]/5',
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
    bgGradient: 'from-[#f5a623]/10 to-[#f5a623]/5',
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      {/* Mobile-only decorative elements */}
      <div className="md:hidden absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#3cd6bf]/20 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#19779b]/15 to-transparent blur-2xl" />
        <div className="absolute bottom-1/4 -right-10 w-36 h-36 rounded-full bg-gradient-to-br from-[#f25c54]/15 to-transparent blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <p className="text-[#3cd6bf] font-semibold tracking-wide uppercase text-sm mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">Services That Drive Results</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We offer more than just implementation. Our services are designed to get Salesforce working for your business from day one.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <Link href={service.link} className="block h-full group">
                {/* Mobile layout: horizontal icon + title */}
                <div
                  className="relative bg-white md:bg-slate-50 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all duration-300 h-full overflow-hidden"
                >
                  {/* Mobile gradient accent */}
                  <div
                    className={`md:hidden absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-60`}
                  />

                  {/* Mobile: left border accent */}
                  <div
                    className="md:hidden absolute left-0 top-4 bottom-4 w-1 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />

                  <div className="relative">
                    {/* Mobile: Horizontal icon + title layout */}
                    <div className="flex items-center gap-4 md:block mb-3 md:mb-0">
                      {/* Icon with brand color */}
                      <div
                        className="w-12 h-12 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 md:mb-6 transition-all duration-300 md:bg-white md:border md:border-slate-200 md:group-hover:border-transparent"
                        style={{
                          backgroundColor: `${service.color}15`,
                          color: service.color,
                        }}
                      >
                        {service.icon}
                      </div>

                      {/* Title - visible on mobile next to icon */}
                      <h3
                        className="text-lg md:text-xl font-semibold text-slate-900 md:hidden transition-colors duration-300"
                        style={{ color: service.color }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Desktop title */}
                    <h3 className="hidden md:block text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#3cd6bf] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4 md:mb-6">{service.description}</p>

                    <div
                      className="flex items-center font-medium transition-colors duration-300"
                      style={{ color: service.color }}
                    >
                      <span className="text-sm md:text-base">Learn more</span>
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
