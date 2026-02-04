import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce Service Cloud Implementation',
  description: 'Service Cloud implementation for better customer support. Case management, knowledge base, omni-channel routing, and self-service portals.',
  keywords: ['Service Cloud', 'Salesforce Service Cloud', 'customer service CRM', 'case management', 'support ticketing'],
  openGraph: {
    title: 'Salesforce Service Cloud Implementation | Appdraft',
    description: 'Service Cloud implementation for better customer support. Case management, knowledge base, and omni-channel routing.',
    url: 'https://appdraft.com/salesforce/service-cloud',
  },
  alternates: {
    canonical: 'https://appdraft.com/salesforce/service-cloud',
  },
};

// Contextual icons for Service Cloud features
const icons = {
  caseManagement: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  sla: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  multiChannel: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  portal: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  knowledge: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  analytics: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  processDesign: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  replaceLegacy: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  serviceLevels: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  integration: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

const serviceCloudFeatures = [
  { icon: icons.caseManagement, title: 'Case Management', description: 'Case management, assignment and intelligent routing to the right team.' },
  { icon: icons.sla, title: 'SLA Tracking', description: 'Track and manage cases against service levels to avoid breaches.' },
  { icon: icons.multiChannel, title: 'Multi-Channel Support', description: 'Handle cases via email, phone, web, and online chat.' },
  { icon: icons.portal, title: 'Customer Portals', description: 'Customer portals for logging and tracking cases directly.' },
  { icon: icons.knowledge, title: 'Knowledge Base', description: 'Knowledge base articles and macros for faster resolutions.' },
  { icon: icons.analytics, title: 'Service Analytics', description: 'Reporting and dashboards for service performance.' },
];

const howWeHelp = [
  { icon: icons.processDesign, title: 'Process Design', description: 'Design and implement a structured case management process.' },
  { icon: icons.replaceLegacy, title: 'Replace Legacy Tools', description: 'Replace shared inboxes or broken helpdesk tools.' },
  { icon: icons.serviceLevels, title: 'Service Levels', description: 'Introduce SLAs, queues and routing rules for team performance.' },
  { icon: icons.integration, title: 'Integration', description: 'Integrate with email, telephony and other Salesforce products.' },
];

export default function ServiceCloud() {
  return (
    <>
      <PageHero
        badge="Service Cloud"
        title="Support That Scales With"
        highlight="Your Business"
        description="Salesforce Service Cloud gives you a proper system for managing customer service. It replaces shared inboxes and lightweight tools with a structured platform for logging, assigning and resolving support requests."
        image="/images/salesforce/service-cloud.jpg"
        imageAlt="Service Cloud dashboard"
        buttons={[
          { label: 'Get Started', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Why Salesforce Service Cloud?"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Most companies start with Sales Cloud. But as customer needs grow, and requests come from more places, keeping track of service becomes harder.
            </p>
            <p>
              Service Cloud gives your team a central place to manage support, with the structure, automation and reporting to help them stay on top of everything. It supports email, phone and web as standard, with options for online chat and WhatsApp, and routes cases to the right team or queue based on your own rules.
            </p>
            <p>
              It is scalable, adaptable and designed for service delivery that keeps up with your customers.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="What does it include?"
        subtitle="Service Cloud is built for efficient, accountable case handling."
        background="gray"
      >
        <FeatureGrid features={serviceCloudFeatures} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center">
            Optional AI features from Agentforce for deflection efficiencies and intelligent case handling.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="How we help"
        subtitle="We work with businesses at all stages of their service journey."
        background="white"
      >
        <FeatureGrid features={howWeHelp} columns={2} variant="card" />
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Planning your service setup?"
          description="If you're formalising support for the first time or evolving a more complex setup, we will help you make Service Cloud fit your needs."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
