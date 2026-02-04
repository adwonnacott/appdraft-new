import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce for Communications & Media',
  description: 'Salesforce for telecom, media, and entertainment. Unify sales, service, and subscription management with Communications Cloud.',
  keywords: ['Salesforce communications', 'Communications Cloud', 'telecom CRM', 'media CRM', 'subscription management', 'entertainment industry'],
  openGraph: {
    title: 'Salesforce for Communications & Media | Appdraft',
    description: 'Salesforce solutions for communications and media companies.',
    url: 'https://appdraft.com/industries/communications-media',
  },
  alternates: {
    canonical: 'https://appdraft.com/industries/communications-media',
  },
};

// Contextual icons for Communications & Media features
const icons = {
  renewal: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  quoting: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  subscription: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  churn: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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
    title: 'Forecasting overlooks renewal opportunities',
    content: "Without structured renewal tracking, it's easy to miss conversations that should already be in motion. We build pipelines and automations that raise timely renewal prompts and connect forecasts to contract terms.",
  },
  {
    title: 'Support cases are missing from the commercial view',
    content: "When teams can't see complaint history, product issues or recent interactions, upsell conversations fall flat. We surface support records and customer care insights directly in Salesforce to inform renewals and upgrades.",
  },
  {
    title: 'Upgrades and follow-on sales are hard to coordinate',
    content: 'Customers often need to expand or modify services, but tracking who has what and where the opportunities lie is difficult. We give sales teams better tools to identify and act on potential.',
  },
  {
    title: "Tariffs and bundles don't fit standard quoting tools",
    content: "We've worked with firms offering tiered services, complex pricing structures and bundled products. Our team builds custom product selectors and quoting tools inside Salesforce to reflect actual sales logic.",
  },
  {
    title: 'Subscriptions live outside Salesforce',
    content: "If you're using third-party platforms to manage subscriptions, we integrate them. We push customer data out and pull back usage, billing or service status into one clear view.",
  },
];

const roadmapFeatures = [
  { icon: icons.renewal, title: 'Renewal opportunity automation', description: 'Triggering follow-ups based on contract end dates, usage or service history.' },
  { icon: icons.quoting, title: 'Custom quoting tools', description: 'Handling bundled products, tariffs and upgrade paths within Salesforce.' },
  { icon: icons.subscription, title: 'Third-party subscription integration', description: 'Connecting Salesforce to platforms that manage contracts, usage or billing.' },
  { icon: icons.churn, title: 'Churn reduction workflows', description: 'Using support data and account activity to flag at-risk customers.' },
  { icon: icons.reporting, title: 'Unified reporting', description: 'Bringing sales, service and usage data into a single set of dashboards.' },
];

export default function CommunicationsMedia() {
  return (
    <>
      <PageHero
        badge="Communications & Media"
        title="Salesforce For Firms Who Grow Through"
        highlight="Elevated Service & Recurring Revenue"
        description="Whether you're in telecom, broadband, digital media or a related service business, your growth depends on recurring revenue, strong customer care and visibility across accounts. From selling plans and managing upgrades to handling support and renewals, your teams need a clear view of customer activity to drive satisfaction and retention."
        image="/images/industries/communications-media.jpg"
        imageAlt="Communications and media Salesforce dashboard"
        buttons={[
          { label: 'Book A Call', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Aligning sales, service and subscriptions"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            We help firms bring structure to their commercial and operational processes in Salesforce, aligning sales, service, product and subscription data in one place.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Common challenges in communications and media"
        background="gray"
      >
        <Accordion items={challenges} />
      </ContentSection>

      <ContentSection
        title="A roadmap that grows with you"
        subtitle="We typically start with the essentials: sales pipelines, customer support and renewal tracking. From there, we can expand your system to support:"
        background="white"
      >
        <FeatureGrid features={roadmapFeatures} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Every solution is shaped around your customer model and technical stack, with room to adapt as your operations grow.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Need a better way to manage customer lifecycles and recurring services?"
          description="Book a call to explore how Salesforce can support your business."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
