import Link from 'next/link';
import ContentSection from '@/components/sections/ContentSection';
import CTABanner from '@/components/sections/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlowCard from '@/components/ui/GlowCard';
import ContactForm from '@/components/ui/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Appdraft for Salesforce consulting, implementation, and support. Call 020 3858 0040 or visit us at 128 City Road, London.',
  keywords: ['contact Appdraft', 'Salesforce consultant London', 'CRM consulting contact'],
  openGraph: {
    title: 'Contact Appdraft | Salesforce Consulting',
    description: 'Get in touch with Appdraft for Salesforce consulting, implementation, and support. London-based experts.',
    url: 'https://appdraft.com/contact',
  },
  alternates: {
    canonical: 'https://appdraft.com/contact',
  },
};

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Office',
    content: '128 City Road, London EC1V 2NX',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone',
    content: '020 3858 0040',
    href: 'tel:+442038580040',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    content: 'info@appdraft.com',
    href: 'mailto:info@appdraft.com',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Hours',
    content: 'Mon-Fri, 9am-5:30pm GMT',
  },
];

const quickLinks = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Free Health Check',
    description: 'Get a complimentary assessment of your Salesforce setup',
    href: '/services/health-checks',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Implementation',
    description: 'Learn about our Salesforce implementation services',
    href: '/services/implementation',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Support Services',
    description: 'Ongoing Salesforce support and maintenance',
    href: '/services/support',
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-[#19779b]/10 text-[#19779b] rounded-full text-sm font-medium mb-6">
                Get in Touch
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Let&apos;s Talk About Your{' '}
                <span className="text-[#19779b]">Salesforce Project</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tell us about your business and requirements, and we&apos;ll get back to you within 24 hours with tailored recommendations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#19779b] rounded-lg flex items-center justify-center flex-shrink-0">
                  {method.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{method.title}</p>
                  {method.href ? (
                    <a href={method.href} className="text-gray-900 font-medium hover:text-[#19779b] transition-colors">
                      {method.content}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium">{method.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContentSection background="gray">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </ContentSection>

      {/* Quick Links */}
      <ContentSection
        title="Explore Our Services"
        subtitle="Learn more about how we can help transform your business with Salesforce"
        background="white"
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {quickLinks.map((link, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Link href={link.href}>
                <GlowCard className="h-full rounded-2xl" glowColor="rgba(25, 119, 155, 0.1)">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full group">
                    <div className="w-14 h-14 bg-[#19779b]/10 text-[#19779b] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#19779b] group-hover:text-white transition-all duration-300">
                      {link.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#19779b] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600">
                      {link.description}
                    </p>
                  </div>
                </GlowCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <CTABanner
          title="Prefer to Talk First?"
          description="Call us on 020 3858 0040 or email info@appdraft.com"
          primaryButton={{ label: 'View Our Services', href: '/services/implementation' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
