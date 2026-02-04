import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlowCard from '@/components/ui/GlowCard';

export const metadata = {
  title: 'Salesforce Support Services',
  description: 'Flexible Salesforce support when you need it. Ad-hoc fixes, monthly retainers, system reviews, and ongoing guidance from certified consultants.',
  keywords: ['Salesforce support', 'Salesforce admin support', 'Salesforce maintenance', 'CRM support UK'],
  openGraph: {
    title: 'Salesforce Support Services | Appdraft',
    description: 'Flexible Salesforce support when you need it. Ad-hoc fixes, monthly retainers, and ongoing guidance.',
    url: 'https://appdraft.com/services/support',
  },
  alternates: {
    canonical: 'https://appdraft.com/services/support',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce Support',
  description: 'Flexible Salesforce support services including ad-hoc fixes, monthly retainers, system reviews, and ongoing guidance.',
  provider: {
    '@type': 'Organization',
    name: 'Appdraft',
    url: 'https://appdraft.com',
  },
  serviceType: 'CRM Support',
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
};

// Contextual icons for Support capabilities
const icons = {
  usage: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  security: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  dataQuality: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  configuration: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  documentation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  roadmap: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
};

const supportCapabilities = [
  { icon: icons.usage, title: 'System Usage Review', description: 'Review system usage and spot underused features.' },
  { icon: icons.security, title: 'Security Settings', description: 'Adjust user permissions or security settings.' },
  { icon: icons.dataQuality, title: 'Data Quality', description: 'Keep data clean, structured, and report-ready.' },
  { icon: icons.configuration, title: 'Configuration Changes', description: 'Roll out iterative configuration changes.' },
  { icon: icons.documentation, title: 'Documentation', description: 'Document your setup for continuity and audit.' },
  { icon: icons.roadmap, title: 'Roadmap Input', description: 'Sense-check roadmap ideas and provide input on timing.' },
];

export default function Support() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        badge="Support"
        title="Help When You Need it."
        highlight="Guidance When it Counts"
        description="As your business evolves, your Salesforce setup should evolve with it. Our support services help you fix issues, make improvements, and keep moving forward, whether you need help now and then or ongoing assistance each month."
        image="/images/services/support.jpg"
        imageAlt="Salesforce support team"
        buttons={[
          { label: 'Talk About Support', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Choose the model that's right for you"
        background="white"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <GlowCard className="h-full rounded-2xl" glowColor="rgba(25, 119, 155, 0.1)">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pay-As-You-Go Support</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Many of our clients use pay-as-you-go support as an ongoing way to keep their system working for the business. There's no contract or commitment. Just direct access to the same consultants who built your solution.
                  </p>
                  <p>
                    We help with admin tasks, configuration changes, advice, and iterative improvements. You get a detailed breakdown of time spent, billed accurately in six-minute units without rounding up.
                  </p>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <GlowCard className="h-full rounded-2xl" glowColor="rgba(25, 119, 155, 0.1)">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Retained Support</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Some clients prefer a more structured approach. With a retained plan, you have a set number of hours available each month and a clear agreement in place to support your internal team and roadmap.
                  </p>
                  <p>
                    This works well when you're driving regular change, supporting a large user base, or want predictable access to experienced support without having to think about scope each time.
                  </p>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>
      </ContentSection>

      <ContentSection
        title="From tickets to transformation"
        subtitle="Support isn't just about fixing issues. It's also about keeping your CRM healthy, useful, and aligned to your goals. Under a support plan, we can help you:"
        background="gray"
      >
        <FeatureGrid features={supportCapabilities} columns={3} variant="card" />
        <ScrollReveal className="mt-12">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Whether you're working reactively or proactively, support is about making progress.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white" centered={false}>
        <ScrollReveal>
          <blockquote className="max-w-3xl border-l-4 border-[#3cd6bf] pl-6 italic text-gray-700">
            <p className="text-xl mb-2">
              "Appdraft give us quick answers and practical fixes. They just get it sorted."
            </p>
            <footer className="text-gray-600 not-italic">
              - Sales Director, B2B Tech Client
            </footer>
          </blockquote>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Want to talk about support?"
          description="Book a quick call and we'll help you work out what's right for your team."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
