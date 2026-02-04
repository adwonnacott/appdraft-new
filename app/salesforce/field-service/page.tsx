import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce Field Service Implementation',
  description: 'Plan, schedule, and track field work with Salesforce Field Service. Optimise resources, reduce missed appointments, and connect field teams to your CRM.',
  keywords: ['Field Service', 'Salesforce FSL', 'field service management', 'mobile workforce', 'scheduling software', 'work order management', 'service dispatch'],
  openGraph: {
    title: 'Salesforce Field Service | Appdraft',
    description: 'Plan, schedule, and track field work with Salesforce Field Service.',
    url: 'https://appdraft.com/salesforce/field-service',
  },
  alternates: {
    canonical: 'https://appdraft.com/salesforce/field-service',
  },
};

// Contextual icons for Field Service features
const icons = {
  scheduling: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  communication: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  appointments: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  connected: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  mobile: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  installation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  maintenance: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  inspections: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  repairs: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
  ),
  surveys: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
};

const fieldServiceBenefits = [
  { icon: icons.scheduling, title: 'Smarter Scheduling', description: 'Optimise resources by assigning the right person, with the right skills, at the right time. Account for location, travel time, skills and availability.' },
  { icon: icons.communication, title: 'Better Communication', description: 'Field staff see all job details, location, assets and customer history. Updates flow back to the office in real time.' },
  { icon: icons.appointments, title: 'Fewer Missed Appointments', description: 'Appointment reminders and status updates keep customers informed and reduce no-shows.' },
  { icon: icons.connected, title: 'Connected Operations', description: 'Link with Service Cloud so cases, work orders and appointments are part of the same process.' },
  { icon: icons.mobile, title: 'Mobile-Friendly Working', description: 'Field teams access and update jobs via mobile app including checklists, photos, signatures and time logging.' },
];

const typicalUses = [
  { icon: icons.installation, title: 'Installation', description: 'Installation and commissioning of equipment.' },
  { icon: icons.maintenance, title: 'Maintenance', description: 'Planned maintenance and servicing.' },
  { icon: icons.inspections, title: 'Inspections', description: 'Safety inspections and compliance checks.' },
  { icon: icons.repairs, title: 'Repairs', description: 'Reactive repairs and fault resolution.' },
  { icon: icons.surveys, title: 'Surveys', description: 'Survey work prior to quotes or project planning.' },
];

export default function FieldService() {
  return (
    <>
      <PageHero
        badge="Field Service"
        title="Plan and Deliver Work"
        highlight="in the Field"
        description="Salesforce Field Service helps businesses plan, deliver and track work carried out in the field. Whether you manage installations, maintenance, inspections or repairs, Field Service brings scheduling, job information, and field updates into a single platform."
        image="/images/salesforce/field-service.jpg"
        imageAlt="Field service technician"
        buttons={[
          { label: 'Get Started', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Why choose Salesforce Field Service?"
        background="white"
      >
        <FeatureGrid features={fieldServiceBenefits} columns={3} variant="card" />
      </ContentSection>

      <ContentSection
        title="Typical uses for Field Service"
        background="gray"
      >
        <FeatureGrid features={typicalUses} columns={3} variant="card" />
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Need a better way to manage work in the field?"
          description="Book a call to see how Salesforce Field Service can improve scheduling, visibility and customer satisfaction."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
