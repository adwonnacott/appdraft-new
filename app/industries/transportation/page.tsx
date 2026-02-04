import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce for Transportation & Logistics',
  description: 'Salesforce for logistics, freight, and transport companies. Track jobs, allocate resources, and keep customers updated in one platform.',
  keywords: ['Salesforce logistics', 'transportation CRM', 'freight management', 'logistics Salesforce', 'fleet management CRM'],
  openGraph: {
    title: 'Salesforce for Transportation & Logistics | Appdraft',
    description: 'Salesforce solutions for transportation and logistics businesses.',
    url: 'https://appdraft.com/industries/transportation',
  },
  alternates: {
    canonical: 'https://appdraft.com/industries/transportation',
  },
};

// Contextual icons for Transportation & Logistics features
const icons = {
  job: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  resource: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  mobile: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  communication: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  webService: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  portal: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

const challenges = [
  {
    title: 'Jobs are tracked in too many places',
    content: 'When job details, customer communications and status updates are spread across different tools, things get missed. We help bring all job management into Salesforce so your team and customers always know where things stand.',
  },
  {
    title: 'No clear handoff from request to job creation',
    content: 'We set up Salesforce Service Cloud so new job requests are captured as Cases, creating a clear starting point for every piece of work. From there, jobs and any related consignments or items can be tracked through to completion.',
  },
  {
    title: 'Internal processes are difficult to follow',
    content: 'From packaging to warehouse moves and storage, operational work can be hard to track without a shared system. We help create job records for these internal tasks so nothing is lost.',
  },
  {
    title: 'Document management is slow or manual',
    content: "Contracts, proofs of delivery and job schedules are often handled outside the core system, which slows down work and increases risk of error. We integrate document generation and eSign into Salesforce so you can create, send and store documents without leaving the platform.",
  },
  {
    title: 'Customers cannot see their own jobs',
    content: 'The option exists to use Experience Cloud-powered portals to give customers the ability to view and update their jobs, providing greater transparency and reducing status queries.',
  },
];

const roadmapFeatures = [
  { icon: icons.job, title: 'Job and consignment tracking', description: 'Link jobs to consignments and items, recording every movement and status change.' },
  { icon: icons.resource, title: 'Resource management', description: 'Track and assign drivers, vehicles and other resources directly in Salesforce.' },
  { icon: icons.mobile, title: 'Field updates', description: 'Allow drivers or field staff to update job status from mobile devices, whether via Salesforce Field Service or simpler mobile forms.' },
  { icon: icons.communication, title: 'Customer communication threads', description: 'Keep all emails and messages linked to the job record so customers and staff can see the full history.' },
  { icon: icons.webService, title: 'Web service channels', description: 'Capture job requests from web forms, chat, or other digital channels directly into Salesforce.' },
  { icon: icons.portal, title: 'Customer job tracking', description: 'Use Experience Cloud-powered portals so customers can view and update their jobs.' },
  { icon: icons.document, title: 'Document generation and eSign', description: 'Automatically generate job sheets, delivery confirmations, contracts or proof of collection documents from the job record.' },
];

export default function Transportation() {
  return (
    <>
      <PageHero
        badge="Transportation & Logistics"
        title="Salesforce For Firms Managing"
        highlight="Jobs, Resources & Customer Requests"
        description="In transportation and logistics, every job matters. From the moment a customer makes a request to the final confirmation of delivery, success depends on visibility, coordination and clear communication."
        image="/images/industries/transportation.jpg"
        imageAlt="Transportation Salesforce dashboard"
        buttons={[
          { label: 'Book A Call', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Bringing job management together"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            We help organisations use Salesforce Service Cloud as a foundation to bring job tracking, resource allocation and customer updates together in one connected platform.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Common challenges in transportation and logistics"
        background="gray"
      >
        <Accordion items={challenges} />
      </ContentSection>

      <ContentSection
        title="A roadmap that grows with you"
        subtitle="We usually start with job tracking and communication, then expand to support:"
        background="white"
      >
        <FeatureGrid features={roadmapFeatures} columns={3} variant="card" />
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Need a better way to manage jobs, resources and customer requests?"
          description="Book a call to explore how Salesforce can support your business."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
