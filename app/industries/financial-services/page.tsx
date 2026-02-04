import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce for Financial Services & Banking',
  description: 'Salesforce solutions for financial services. Streamline client management, track opportunities, and maintain compliance with Financial Services Cloud.',
  keywords: ['Salesforce financial services', 'Financial Services Cloud', 'banking CRM', 'wealth management Salesforce', 'compliance CRM'],
  openGraph: {
    title: 'Salesforce for Financial Services | Appdraft',
    description: 'Salesforce solutions for financial services organisations.',
    url: 'https://appdraft.com/industries/financial-services',
  },
  alternates: {
    canonical: 'https://appdraft.com/industries/financial-services',
  },
};

// Contextual icons for Financial Services features
const icons = {
  portfolio: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  opportunity: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  application: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
  ),
  compliance: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
    title: 'Client data is spread across emails, files and spreadsheets',
    content: 'We bring your client portfolio into Salesforce so you can see all interactions, documents and deal stages in one place.',
  },
  {
    title: 'Opportunities need a process that matches real-world deal flow',
    content: "We design opportunity stages that reflect how your business operates. For many brokers, an opportunity represents the process of securing a new client. Once the client is on board, a custom application tracking process can capture actual revenue figures based on commission amounts or other agreed terms.",
  },
  {
    title: 'Lender applications are hard to track',
    content: "Tracking which lenders have been sent applications, which applications have been made and the status of each is often manual and inconsistent. We've built custom solutions in Salesforce to track applications, their progress and their financial outcomes.",
  },
  {
    title: 'Document handling is manual and inconsistent',
    content: 'We configure document generation and e-signature processes in Salesforce, making it easy for clients to receive, complete and return documents quickly.',
  },
  {
    title: 'Compliance and audit readiness is difficult',
    content: 'We create a clear audit trail of client communications and document versions to support FCA compliance and internal audits.',
  },
];

const roadmapFeatures = [
  { icon: icons.portfolio, title: 'Client portfolio management', description: 'Keep all contact details, history and related records in one system.' },
  { icon: icons.opportunity, title: 'Tailored opportunity processes', description: 'Match Salesforce stages to your specific client onboarding journey.' },
  { icon: icons.application, title: 'Application tracking', description: 'Capture application details, track progress and calculate actual revenue.' },
  { icon: icons.document, title: 'Document generation and e-signature', description: 'Produce and send documents for signing without leaving Salesforce.' },
  { icon: icons.compliance, title: 'Compliance recordkeeping', description: 'Retain a clear audit trail for all communications and approvals.' },
  { icon: icons.reporting, title: 'Reporting and dashboards', description: 'Create real-time views of pipeline, applications in progress and business performance.' },
];

export default function FinancialServices() {
  return (
    <>
      <PageHero
        badge="Financial Services"
        title="Salesforce For Firms Managing"
        highlight="Clients In Regulated Settings"
        description="We help financial services organisations streamline client management, track opportunities from enquiry to completion, and maintain a clear compliance trail."
        image="/images/industries/financial-services.jpg"
        imageAlt="Financial services Salesforce dashboard"
        buttons={[
          { label: 'Book A Call', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Managing complex financial workflows"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            Whether you're advising clients, brokering finance or managing assets, Salesforce provides a single place to manage your pipeline, documentation and approvals.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Common challenges in financial services"
        background="gray"
      >
        <Accordion items={challenges} />
      </ContentSection>

      <ContentSection
        title="A roadmap that grows with you"
        subtitle="We usually start by mapping how enquiries become opportunities and how those opportunities progress through to completion. From there, Salesforce can support:"
        background="white"
      >
        <FeatureGrid features={roadmapFeatures} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Every build is shaped around your service model and compliance requirements, so your team can work efficiently while meeting regulatory obligations.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Let's talk Salesforce"
          description="Whether you're advising clients, brokering finance or managing assets, we can help you design Salesforce to track every opportunity, application and approval."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
