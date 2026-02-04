import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Custom Salesforce Development',
  description: 'Custom Salesforce development for finance, operations, and specialist processes. Apex, Lightning components, integrations, and bespoke applications.',
  keywords: ['Salesforce development', 'Apex development', 'Lightning components', 'Salesforce integration', 'custom CRM development'],
  openGraph: {
    title: 'Custom Salesforce Development | Appdraft',
    description: 'Custom Salesforce development for finance, operations, and specialist processes.',
    url: 'https://appdraft.com/services/custom-development',
  },
  alternates: {
    canonical: 'https://appdraft.com/services/custom-development',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Salesforce Development',
  description: 'Custom Salesforce development services including Apex development, Lightning components, system integrations, and bespoke business applications.',
  provider: {
    '@type': 'Organization',
    name: 'Appdraft',
    url: 'https://appdraft.com',
  },
  serviceType: 'Software Development',
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
};

// Contextual icons for Custom Development features
const icons = {
  pointToPoint: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  middleware: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  accounting: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  payment: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  telephony: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  automation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

const developmentTypes = [
  {
    title: 'Finance and procurement tools',
    content: 'Purchase order tracking, credit control workflows, payment scheduling, quote-to-cash automation.',
  },
  {
    title: 'Operational and inventory systems',
    content: 'Inventory tools, asset tracking, project and task coordination.',
  },
  {
    title: 'Specialist process platforms',
    content: 'Patient management systems and other tailored solutions for regulated or complex service environments.',
  },
];

const integrationFeatures = [
  { icon: icons.pointToPoint, title: 'Point-to-point Integrations', description: 'Direct integrations with external services for seamless data flow.' },
  { icon: icons.middleware, title: 'Middleware Solutions', description: 'Fast to implement and easy to scale middleware-based solutions.' },
];

const partnerTools = [
  { icon: icons.document, title: 'Document Generation', description: 'Document generation and e-signature platforms.' },
  { icon: icons.accounting, title: 'Accounting Connectors', description: 'Accounting system connectors for financial data sync.' },
  { icon: icons.payment, title: 'Payment Processing', description: 'Payment processing and invoicing tools.' },
  { icon: icons.telephony, title: 'Telephony Integration', description: 'Telephony integrations for call management.' },
  { icon: icons.automation, title: 'Automation Middleware', description: 'Middleware for system-to-system automation.' },
];

const whenMakesSense = [
  { title: "You've outgrown spreadsheets or manual workarounds", content: "When manual processes become a bottleneck, it's time to automate. We'll help you move from spreadsheets to structured, scalable solutions." },
  { title: "You're using disconnected tools that make reporting a pain", content: "Scattered data across multiple tools makes reporting difficult and error-prone. We can bring it all together in Salesforce." },
  { title: "You're switching between systems to complete simple tasks", content: "Context switching wastes time and causes errors. We'll streamline your workflows into a single platform." },
  { title: "Your teams or processes don't fit the standard CRM model", content: "Not every business fits into a standard template. We build custom solutions that match how you actually work." },
  { title: "You want to automate something slow, repetitive, or error-prone", content: "Automation reduces errors and frees up your team for higher-value work. We'll identify and automate the right processes." },
];

export default function CustomDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        badge="Custom Development"
        title="Use Salesforce to Run"
        highlight="More of Your Business"
        description="Salesforce is often seen as just a sales tool. But it's a flexible platform that can support far more, including finance, operations, and specialist processes. We help clients extend Salesforce to cover the day-to-day tools they need."
        image="/images/services/custom-development.jpg"
        imageAlt="Custom Salesforce development"
        buttons={[
          { label: 'Discuss Your Project', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="What we mean by custom development"
        subtitle="Our aim is to build systems that your team can rely on and that genuinely support your goals. We've helped clients build:"
        background="white"
      >
        <Accordion items={developmentTypes} defaultOpen={[0]} />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Some solutions are built entirely within Salesforce. Others involve integrating with third-party platforms to create a joined-up experience.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Integrations and external services"
        subtitle="Many of the most effective solutions rely on integration. We've delivered:"
        background="gray"
      >
        <FeatureGrid features={integrationFeatures} columns={2} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            We also work with trusted partners and AppExchange tools to help you connect what matters without overcomplicating the setup.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Custom development makes sense when:"
        background="white"
      >
        <Accordion items={whenMakesSense} />
      </ContentSection>

      <ContentSection
        title="Trusted partners and proven tools"
        subtitle="We've worked with a range of trusted partners to extend what Salesforce can do:"
        background="gray"
      >
        <FeatureGrid features={partnerTools} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            We don't just plug things in. We help you choose the right tools, set them up properly, and make sure they work alongside what you've already built.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Need something specific?"
          description="Book a call and we'll explore how Salesforce can support more of your business, not just your sales team."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
