import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce for Healthcare & Life Sciences',
  description: 'Salesforce Health Cloud for patient care, medical device suppliers, and pharmaceutical companies. Compliant patient data management and care coordination.',
  keywords: ['Salesforce healthcare', 'Health Cloud', 'patient management', 'life sciences CRM', 'medical device CRM', 'pharmaceutical Salesforce'],
  openGraph: {
    title: 'Salesforce for Healthcare | Appdraft',
    description: 'Salesforce solutions for healthcare and life sciences organisations.',
    url: 'https://appdraft.com/industries/healthcare',
  },
  alternates: {
    canonical: 'https://appdraft.com/industries/healthcare',
  },
};

// Contextual icons for Healthcare features
const icons = {
  patientData: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  appointment: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  medicalHistory: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  patientFile: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
  prescription: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  permissions: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  deviceTracking: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  handlers: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  pharmaceutical: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  service: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  portal: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  accounting: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

const patientCareFeatures = [
  { icon: icons.patientData, title: 'Patient Data Capture', description: 'Capture the right patient data at the right time with user-specific page layouts and field-level controls.' },
  { icon: icons.appointment, title: 'Appointment Booking', description: 'Enable online and face-to-face appointment booking using Salesforce Scheduler and other integrated tools.' },
  { icon: icons.medicalHistory, title: 'Medical History & Consent', description: 'Manage onboarding forms to collect medical history and consent.' },
  { icon: icons.patientFile, title: 'Patient Files', description: 'Create patient files that bring together clinical notes, diagnostics, treatment steps and communications.' },
  { icon: icons.prescription, title: 'Prescription Management', description: 'Use standard Salesforce approval processes to ensure the right clinical sign-off is captured.' },
  { icon: icons.permissions, title: 'User Permissions', description: 'Set up secure user-level permissions for clinical and support teams.' },
];

const medicalDeviceFeatures = [
  { icon: icons.deviceTracking, title: 'Device Tracking', description: 'Track where devices are, who uses them and what they need, including install locations, usage records and warranty eligibility.' },
  { icon: icons.handlers, title: 'Authorised Handlers', description: 'Ensure that only authorised clinicians or technicians are recorded as handlers for regulated-use devices.' },
  { icon: icons.pharmaceutical, title: 'Pharmaceutical Orders', description: 'Handle licensed pharmaceutical orders with authorisation tracking at the account or contact level.' },
  { icon: icons.service, title: 'Service Management', description: 'Log support requests, plan preventative maintenance and manage service contracts using Service Cloud.' },
  { icon: icons.portal, title: 'Distributor Portals', description: 'Build portals using Experience Cloud that allow distributors to submit leads, track opportunities and view pricing.' },
  { icon: icons.accounting, title: 'Accounting Integration', description: 'Integrate with accounting platforms to surface billing history or key commercial data in Salesforce.' },
];

export default function Healthcare() {
  return (
    <>
      <PageHero
        badge="Healthcare & Life Sciences"
        title="Salesforce For Firms Delivering"
        highlight="Care or Supplying Medical Products"
        description="We help organisations across the healthcare and life sciences sector, from those delivering direct patient care to those supplying regulated equipment and pharmaceutical products."
        image="/images/industries/healthcare.jpg"
        imageAlt="Healthcare Salesforce dashboard"
        buttons={[
          { label: 'Book A Call', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Adapting Salesforce to healthcare needs"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            Our work ranges from supporting providers in managing appointments, patient records and consent to helping suppliers track orders, warranties and compliance requirements. Whether you are a healthcare team seeking to improve the patient journey or a distributor managing complex supply chains, we adapt Salesforce to fit your needs.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="If you work with patients, diagnostics or treatments"
        subtitle="You need a platform that supports secure, end-to-end patient management. Salesforce Health Cloud can be the right starting point for some organisations, or we can deliver custom builds for simpler needs. We've helped organisations:"
        background="gray"
      >
        <FeatureGrid features={patientCareFeatures} columns={3} variant="card" />
      </ContentSection>

      <ContentSection
        title="If you manage medical devices or pharmaceutical supply"
        subtitle="For companies that supply clinical equipment or pharmaceuticals, visibility after the point of sale is critical. Salesforce helps you manage what happens beyond the sale. We've helped customers:"
        background="white"
      >
        <FeatureGrid features={medicalDeviceFeatures} columns={3} variant="card" />
      </ContentSection>

      <ContentSection background="gray">
        <CTABanner
          title="Let's talk healthcare or life sciences Salesforce"
          description="Whether you're delivering care, distributing clinical equipment or building your go-to-market for regulated medical products, we can help you tailor Salesforce to fit the way you work."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
