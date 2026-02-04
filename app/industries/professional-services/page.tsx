import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce for Professional Services Firms',
  description: 'Salesforce solutions for law firms, accountants, and consultancies. Track engagements, automate documents, and connect sales to delivery in one platform.',
  keywords: ['Salesforce professional services', 'law firm CRM', 'accounting firm Salesforce', 'consultancy CRM', 'professional services automation'],
  openGraph: {
    title: 'Salesforce for Professional Services | Appdraft',
    description: 'Salesforce solutions for law firms, accountants, and consultancies.',
    url: 'https://appdraft.com/industries/professional-services',
  },
  alternates: {
    canonical: 'https://appdraft.com/industries/professional-services',
  },
};

// Contextual icons for Professional Services features
const icons = {
  accounting: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  contract: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  delivery: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  marketing: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  reporting: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

const challenges = [
  {
    title: 'Forecasting is often incomplete',
    content: "When income is predictable, such as under a retainer, forecasting is straightforward. But for firms with variable or project-based revenue, it often makes sense to integrate Salesforce with your accounting platform to bring in actuals. Where Salesforce handles operational delivery, we can also build billing directly into the platform.",
  },
  {
    title: 'Onboarding needs more than a handover',
    content: 'Once a deal is signed, delivery teams need more than just a contact name. Billing models, key preferences, account history, and delivery notes need to be accessible at the account level. We make that part of the process.',
  },
  {
    title: "New work doesn't always start with sales",
    content: "Instructions often come in via email or support tickets. We use Service Cloud to help firms track and triage inbound work, so opportunities don't get missed and teams stay aligned.",
  },
  {
    title: 'Documents slow things down',
    content: 'Firms still lose time generating NDAs, engagement letters, and billing statements manually. We integrate document generation into your Salesforce workflow to reduce admin without cutting corners.',
  },
  {
    title: 'Project visibility is limited',
    content: 'If project tasks and milestones sit outside the CRM, sales and service teams lose visibility. We help bring the right level of delivery tracking into Salesforce, without overcomplicating the system.',
  },
];

const roadmapFeatures = [
  { icon: icons.accounting, title: 'Accounting system integrations', description: 'Bringing billed revenue into Salesforce to track performance and close the gap between forecast and actuals.' },
  { icon: icons.contract, title: 'Contract and document workflows', description: 'Automating client-facing documents such as terms, renewals, and statements.' },
  { icon: icons.delivery, title: 'Delivery task tracking', description: 'Adding projects, milestones, or tasks where in-platform coordination is helpful.' },
  { icon: icons.marketing, title: 'Lead nurture and outbound', description: 'Introducing marketing automation or simple campaigns to stay visible between engagements.' },
  { icon: icons.reporting, title: 'Reporting and insight', description: 'Building dashboards to track pipeline, project delivery, and client engagement in one place.' },
];

export default function ProfessionalServices() {
  return (
    <>
      <PageHero
        badge="Professional Services"
        title="Salesforce For Firms Built on"
        highlight="People, Processes & Performance"
        description="Professional service firms rely on expertise, reputation, and strong delivery. Whether you provide advice, manage client work, or deliver ongoing services, your business depends on clear handovers, consistent communication, and visibility across the client lifecycle."
        image="/images/industries/professional-services.jpg"
        imageAlt="Professional services Salesforce dashboard"
        buttons={[
          { label: 'Book A Call', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Supporting the way you work"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            We work with firms across the professional services sector to design Salesforce systems that support the way you actually work. From first enquiry to final delivery, we bring structure to your sales, onboarding, delivery, and client service operations.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Common challenges in professional services"
        background="gray"
      >
        <Accordion items={challenges} />
      </ContentSection>

      <ContentSection
        title="A roadmap that grows with you"
        subtitle="We usually start with the core: sales pipelines, onboarding, and service handling. From there, your Salesforce system can evolve to support:"
        background="white"
      >
        <FeatureGrid features={roadmapFeatures} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Every solution is shaped around your current operations, with a clear path to future growth.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Need a better way to manage sales, delivery, and service?"
          description="Book a call to explore how Salesforce can support your firm."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
