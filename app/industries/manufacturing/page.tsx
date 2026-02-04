import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce for Manufacturing Companies',
  description: 'Salesforce Manufacturing Cloud for industrial businesses. Manage sales, orders, dealer networks, and aftermarket service in one platform.',
  keywords: ['Salesforce manufacturing', 'Manufacturing Cloud', 'industrial CRM', 'dealer management', 'aftermarket service', 'quote to order'],
  openGraph: {
    title: 'Salesforce for Manufacturing | Appdraft',
    description: 'Salesforce solutions for manufacturing companies.',
    url: 'https://appdraft.com/industries/manufacturing',
  },
  alternates: {
    canonical: 'https://appdraft.com/industries/manufacturing',
  },
};

// Contextual icons for Manufacturing features
const icons = {
  portal: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  sample: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  catalogue: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  order: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  accounting: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  service: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

const challenges = [
  {
    title: 'Selling through partners needs more than spreadsheets',
    content: "Many manufacturers rely on distributor networks, reps or agents to generate demand and close deals. We use Experience Cloud to build branded portals where partners can submit leads, track opportunities and view status updates. We've also built custom commission logic to support downstream payments and visibility.",
  },
  {
    title: "Opportunities don't follow a standard sales process",
    content: 'For complex or engineered products, quotes often involve sample stages, technical review or staged pricing. We design opportunity processes that match how you actually sell, including product detail, sample tracking and commercial approvals.',
  },
  {
    title: 'Converting sales into orders takes too many steps',
    content: "Once a deal closes, the opportunity can generate an order record in Salesforce, streamlining internal handoff. If billing is handled in another system, we integrate it or sync invoice data back into Salesforce to maintain a complete customer view.",
  },
  {
    title: 'Support needs structure and visibility',
    content: "Customers still need help after the sale. We use Service Cloud to track support tickets, entitlements and any agreed warranty terms so your team has what they need to respond effectively.",
  },
];

const roadmapFeatures = [
  { icon: icons.portal, title: 'Partner and distributor portals', description: 'Let partners register leads, track deals and view status updates.' },
  { icon: icons.sample, title: 'Sample and technical review stages', description: 'Reflect your real-world sales process inside Salesforce.' },
  { icon: icons.catalogue, title: 'Product catalogue and pricing logic', description: 'Manage detailed SKUs, pricing tiers and bundles as part of the quoting process.' },
  { icon: icons.order, title: 'Opportunity-to-order automation', description: 'Create orders from closed deals and track fulfilment steps if needed.' },
  { icon: icons.accounting, title: 'Accounting system integration', description: 'Sync invoices or billing data back into Salesforce to complete the customer view.' },
  { icon: icons.service, title: 'Service-level tracking', description: 'Manage entitlements and support thresholds across different customers or products.' },
];

export default function Manufacturing() {
  return (
    <>
      <PageHero
        badge="Manufacturing"
        title="Salesforce For Firms Who Sell"
        highlight="Through Partners & Track Complex Products"
        description="Manufacturers don't just sell. They quote, sample, negotiate, deliver and support. Whether you go to market through distributors, partners or direct sales, you need a structured way to handle product enquiries, track opportunities and support customers after the deal is done."
        image="/images/industries/manufacturing.jpg"
        imageAlt="Manufacturing Salesforce dashboard"
        buttons={[
          { label: 'Book A Call', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Managing complex commercial workflows"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            We help manufacturers use Salesforce to manage commercial workflows from first enquiry through to sale, order and service. That includes partner portals, sample tracking, product catalogues and post-sale handoffs to operations and finance.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Common challenges in manufacturing firms"
        background="gray"
      >
        <Accordion items={challenges} />
      </ContentSection>

      <ContentSection
        title="A roadmap that grows with you"
        subtitle="We typically start by mapping out how leads and enquiries flow into opportunities, quotes and orders. From there, Salesforce can support:"
        background="white"
      >
        <FeatureGrid features={roadmapFeatures} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Every setup is shaped around your actual sales process, not just Salesforce defaults.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Need a better way to manage sales, partners and post-sale operations?"
          description="Book a call to explore how Salesforce can support your business."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
