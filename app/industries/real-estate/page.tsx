import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce for Real Estate & Property',
  description: 'Salesforce for real estate agencies and property developers. Track deals, manage relationships, and automate marketing for property sales.',
  keywords: ['Salesforce real estate', 'property CRM', 'real estate CRM', 'property developer Salesforce', 'estate agent CRM'],
  openGraph: {
    title: 'Salesforce for Real Estate | Appdraft',
    description: 'Salesforce solutions for real estate and property businesses.',
    url: 'https://appdraft.com/industries/real-estate',
  },
  alternates: {
    canonical: 'https://appdraft.com/industries/real-estate',
  },
};

// Contextual icons for Real Estate features
const icons = {
  property: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  viewing: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  offer: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  marketing: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  portal: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
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
    title: 'Property, buyer and seller data is scattered',
    content: 'When property details, buyer preferences and seller updates live in different places, it is easy to miss connections. We help you maintain clear, linked records of properties, buyers and sellers so you always know who is interested in what.',
  },
  {
    title: 'Viewings and offers are not consistently tracked',
    content: 'Missed follow-ups after viewings can cost you deals. We build viewing tracking into Salesforce so every appointment, note and next step is recorded and visible.',
  },
  {
    title: 'Offers and shortlisted purchases are hard to manage',
    content: 'Managing multiple interested buyers on the same property can be complex. We set up opportunity processes that record shortlisted purchases and track their status, whether they have been vetted, viewed the property or made an offer, so you can move each one forward efficiently.',
  },
  {
    title: 'Integration with market tools is missing',
    content: 'Because Salesforce is API-first, it can connect with modern listing portals, valuation platforms and marketing tools to reduce manual data entry and keep your records up to date.',
  },
];

const roadmapFeatures = [
  { icon: icons.property, title: 'Property records', description: 'Create dedicated Property objects to capture details such as location, type, size, pricing, status and key dates.' },
  { icon: icons.search, title: 'Property search and filtering', description: 'Give internal users the ability to filter properties by type, location, status and other criteria to quickly find matching options.' },
  { icon: icons.viewing, title: 'Viewing management', description: 'Log appointments, feedback and follow-ups in one place.' },
  { icon: icons.offer, title: 'Offer and shortlist tracking', description: 'Record shortlisted purchases, track their status (vetted, viewed, offer made) and maintain a full history linked to the property.' },
  { icon: icons.marketing, title: 'Marketing activity', description: 'Track campaigns and enquiries from listing portals and digital ads.' },
  { icon: icons.portal, title: 'Property and client portals', description: 'Give sellers visibility on marketing activity, offers and feedback.' },
  { icon: icons.reporting, title: 'Reporting', description: 'See your full sales and lettings pipeline, viewing-to-offer conversion and time-to-close metrics.' },
];

export default function RealEstate() {
  return (
    <>
      <PageHero
        badge="Real Estate"
        title="Salesforce For Firms Managing"
        highlight="Properties, Buyers & Sellers"
        description="Whether you are selling, leasing or developing property, success depends on staying on top of every viewing, offer and client conversation. From tracking marketing activity to managing negotiations, we help real estate businesses use Salesforce to keep deals moving and relationships strong."
        image="/images/industries/real-estate.jpg"
        imageAlt="Real estate Salesforce dashboard"
        buttons={[
          { label: 'Book A Call', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Common challenges in real estate"
        background="gray"
      >
        <Accordion items={challenges} />
      </ContentSection>

      <ContentSection
        title="A roadmap that grows with you"
        subtitle="We usually start with the essentials: properties, buyers, sellers and offers. From there, your Salesforce system can support:"
        background="white"
      >
        <FeatureGrid features={roadmapFeatures} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Every solution is tailored to your property operations, with a clear path to future growth.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Need a better way to manage properties, buyers and offers?"
          description="Book a call to explore how Salesforce can support your business."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
