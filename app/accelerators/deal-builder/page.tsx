import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StreamVideo from '@/components/ui/StreamVideo';

const VIDEO_ID = '88d3f4b47699e151bbbd65faa7eb1174';

export const metadata = {
  title: 'Deal Builder: Salesforce Quoting Accelerator',
  description: 'Build deals on the Salesforce opportunity with bundles, product rules, margin on every line, tax worked out per line, payment schedules and branded PDF quotes.',
  keywords: ['Salesforce quoting', 'Salesforce quote builder', 'Salesforce CPQ alternative', 'Salesforce bundles', 'Salesforce quote PDF', 'Salesforce margin'],
  openGraph: {
    title: 'Deal Builder: Salesforce Quoting Accelerator | Appdraft',
    description: 'Bundles, product rules, margin, tax on every line and branded PDF quotes, all on the Salesforce opportunity.',
    url: 'https://appdraft.com/accelerators/deal-builder',
  },
  alternates: {
    canonical: 'https://appdraft.com/accelerators/deal-builder',
  },
};

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Deal Builder walkthrough',
  description: 'A walkthrough of Deal Builder, a Salesforce quoting accelerator from Appdraft: bundles, product rules, margin, tax, payment schedules and branded PDF quotes.',
  thumbnailUrl: `https://customer-ookdqw71wymhxobi.cloudflarestream.com/${VIDEO_ID}/thumbnails/thumbnail.jpg?time=2s`,
  uploadDate: '2026-10-02',
  duration: 'PT7M44S',
  embedUrl: `https://customer-ookdqw71wymhxobi.cloudflarestream.com/${VIDEO_ID}/iframe`,
};

const icons = {
  bundle: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  rules: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  margin: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  tax: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  schedule: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  pdf: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

const features = [
  { icon: icons.bundle, title: 'Bundles', description: 'Add a package and everything it includes comes with it. Take it out and all of its parts go too.' },
  { icon: icons.rules, title: 'Product rules', description: 'Rules your admin sets, such as a licence needing a support plan, so salespeople do not have to remember them.' },
  { icon: icons.margin, title: 'Margin as you price', description: 'Every product carries its cost, so margin updates with each discount and shows whether the deal is still healthy.' },
  { icon: icons.tax, title: 'Tax on every line', description: 'The right rate is worked out per line, set by product or by account, rather than typed in once at the end.' },
  { icon: icons.schedule, title: 'Payment schedules', description: 'Spread a line over its term, such as an annual licence paid monthly, so the forecast reflects when revenue really lands.' },
  { icon: icons.pdf, title: 'Branded PDF quotes', description: 'Your branding, fonts and columns, with bundles and discounts laid out clearly. Every version is numbered and kept.' },
];

const comparison = [
  { title: 'Cost and margin', content: 'Standard Salesforce products do not hold a cost price, so there is no margin to see while pricing. Deal Builder adds cost to each product and shows margin on every line and on the deal as a whole.' },
  { title: 'Tax', content: 'A standard Salesforce quote takes a single tax figure that you type in. Deal Builder works out the right rate on each line, from the product or the account.' },
  { title: 'The quote document', content: 'The standard quote PDF follows a fixed template with limited control over layout. Deal Builder produces a fully branded document, laid out the way you want your customers to see it.' },
];

const faqItems = [
  { title: 'Is Deal Builder a managed package or a licence?', content: 'Neither. It is an accelerator built on standard Salesforce objects (products, opportunities, quotes and quote lines) and installed into your org, so there is no ongoing licence cost.' },
  { title: 'Can it be adapted to how we sell?', content: 'Yes, that is the point of it. Each part can be switched on or off, and we shape bundles, rules, tax and the quote document around your process, whether you sell services, equipment, subscriptions or a mix.' },
  { title: 'Who maintains the bundles and rules?', content: 'Your Salesforce admin, from a setup screen in Salesforce. Bundles, product rules, tax rates and settings are all managed there without code.' },
  { title: 'Does it work with our forecast and reports?', content: 'Yes. Deal lines are standard opportunity products, so the opportunity amount, forecast and existing reports all reflect the deal you built.' },
  { title: 'Can it go further than quoting?', content: 'It can. E-signature and customer portals where buyers build their own packages are natural extensions, and we have experience of both.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({ '@type': 'Question', name: item.title, acceptedAnswer: { '@type': 'Answer', text: item.content } })),
};

export default function DealBuilder() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        badge="Accelerator: Quoting"
        title="Deal Builder:"
        highlight="quotes that are right first time"
        description="Once a deal is agreed, someone has to turn it into a quote the customer can sign. Deal Builder lets your salespeople do that on the opportunity itself, with bundles, product rules, margin and tax handled for them, and a branded quote at the end."
        buttons={[
          { label: 'Talk To Us', href: '/contact', primary: true },
          { label: 'All accelerators', href: '/accelerators' },
        ]}
      />

      <ContentSection
        title="Watch the walkthrough"
        subtitle="Adam takes a deal from an empty opportunity to a branded quote, then shows what sits behind it."
        background="gray"
      >
        <ScrollReveal>
          <StreamVideo videoId={VIDEO_ID} title="Deal Builder walkthrough" />
        </ScrollReveal>
      </ContentSection>

      <ContentSection title="What it does" background="white">
        <FeatureGrid features={features} columns={3} variant="card" />
      </ContentSection>

      <ContentSection
        title="Building on the standard setup"
        subtitle="Salesforce's standard quote process works well for many businesses. These are the three places our clients most often want to go further."
        background="gray"
      >
        <Accordion items={comparison} />
      </ContentSection>

      <ContentSection title="Frequently asked questions" background="white">
        <Accordion items={faqItems} />
        <ScrollReveal className="mt-8">
          <p className="text-center text-gray-600">
            Billing as well as quoting? See{' '}
            <Link href="/accelerators/salesforce-xero" className="text-[#19779b] font-semibold hover:underline">Salesforce and Xero</Link>.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Has your quoting outgrown the standard setup?"
          description="Tell us how you quote today and we will show you what Deal Builder would look like for your business."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
