import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StreamVideo from '@/components/ui/StreamVideo';

const VIDEO_ID = '4655ee02b38542121e7e4852af88181d';

export const metadata = {
  title: 'Performance Dashboard: Salesforce MI and Agentforce',
  description: 'An app-style dashboard inside Salesforce around the numbers that run your business: targets measured to the day, a meeting view, every number opening its records, and an optional Agentforce assistant.',
  keywords: ['Salesforce dashboard', 'Salesforce MI', 'Salesforce KPI dashboard', 'Salesforce targets', 'Agentforce', 'Salesforce reporting'],
  openGraph: {
    title: 'Performance Dashboard: Salesforce MI and Agentforce | Appdraft',
    description: 'MI your team will actually open, built inside Salesforce on the data you already have.',
    url: 'https://appdraft.com/accelerators/performance-dashboard',
  },
  alternates: {
    canonical: 'https://appdraft.com/accelerators/performance-dashboard',
  },
};

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Performance dashboard and Milo walkthrough',
  description: 'A walkthrough of a performance dashboard built inside Salesforce by Appdraft: targets measured to the day, a meeting view, the records behind every number, and Milo, an optional Agentforce agent.',
  thumbnailUrl: `https://customer-ookdqw71wymhxobi.cloudflarestream.com/${VIDEO_ID}/thumbnails/thumbnail.jpg?time=1s`,
  uploadDate: '2026-10-27',
  duration: 'PT4M40S',
  embedUrl: `https://customer-ookdqw71wymhxobi.cloudflarestream.com/${VIDEO_ID}/iframe`,
};

const icons = {
  target: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  meeting: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  records: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  leads: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  pipeline: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  assistant: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
};

const features = [
  { icon: icons.target, title: 'Targets, measured to the day', description: 'Each measure is set against where you should be by today, not the whole month’s target, with green, amber and red at a glance.' },
  { icon: icons.meeting, title: 'A view for the Monday meeting', description: 'Full screen, one measure at a time, with the last twelve months against target.' },
  { icon: icons.records, title: 'Every number opens its records', description: 'Click a figure to see the deals, leads or quotes behind it, then one more click to the record.' },
  { icon: icons.leads, title: 'Leads and quotes', description: 'Where leads come from, what converts, the time to first call, and the quotes that have gone quiet as the week’s chase list.' },
  { icon: icons.pipeline, title: 'Pipeline over time', description: 'The pipeline as a picture over the past year, and how well the coming month is covered.' },
  { icon: icons.assistant, title: 'Milo, an optional Agentforce agent', description: 'Ask how a month compares or what sits behind a number. Milo answers from the same figures, with each user’s own permissions, and links to the records.' },
];

const comparison = [
  { title: 'Reports and dashboards', content: 'Standard reports and dashboards are great for everyday questions and exports, and we teach clients to use them. A dashboard is refreshed when someone runs it, has a limited set of filters and tends to be built around one object, and there is no real home for targets or pacing.' },
  { title: 'Forecasts', content: 'This works alongside Salesforce Forecasts, not instead of it. Forecasts is where the team reviews and commits; the dashboard shows the picture.' },
  { title: 'Tableau Next', content: 'Included with several Salesforce editions, Tableau Next comes into its own when you bring in data from outside Salesforce. This is the page the team runs the week from.' },
];

const faqItems = [
  { title: 'Is there a licence or subscription?', content: 'No. It is a one-off setup with no subscription, built inside your Salesforce on your own data.' },
  { title: 'Do we need Agentforce?', content: 'Only for Milo, which is optional. It runs on the Agentforce credits that come with most Salesforce editions, which many businesses are not using yet.' },
  { title: 'Can it track the numbers that matter to us?', content: 'Yes. Every version is shaped to the business: the tabs, the measures and the questions Milo suggests are chosen with you. This one tracks referrers; yours might be renewals, site visits or service contracts.' },
  { title: 'What if our data is not in good shape?', content: 'The real work is usually underneath: clean data and the habit of keeping it up to date. Where the foundations need work, we start there.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({ '@type': 'Question', name: item.title, acceptedAnswer: { '@type': 'Answer', text: item.content } })),
};

export default function PerformanceDashboard() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        badge="Accelerator: Reporting"
        title="Performance dashboard:"
        highlight="MI your team will actually open"
        description="Most Salesforce orgs have dashboards. Very few of them get looked at, usually because nobody has agreed the numbers that matter. We start there, then build an app-style dashboard inside Salesforce around those numbers, on the data you already have."
        buttons={[
          { label: 'Talk To Us', href: '/contact', primary: true },
          { label: 'All accelerators', href: '/accelerators' },
        ]}
      />

      <ContentSection
        title="Watch the walkthrough"
        subtitle="Adam walks through a performance dashboard built for a home services business, from the Monday meeting view to asking Milo, an Agentforce agent, what sits behind the numbers."
        background="gray"
      >
        <ScrollReveal>
          <StreamVideo videoId={VIDEO_ID} title="Performance dashboard and Milo walkthrough" posterTime="1s" />
        </ScrollReveal>
      </ContentSection>

      <ContentSection title="What it does" background="white">
        <FeatureGrid features={features} columns={3} variant="card" />
      </ContentSection>

      <ContentSection
        title="Building on the standard setup"
        subtitle="Salesforce's standard reporting does a lot well. This is how the dashboard fits alongside it."
        background="gray"
      >
        <Accordion items={comparison} />
      </ContentSection>

      <ContentSection title="Frequently asked questions" background="white">
        <Accordion items={faqItems} />
        <ScrollReveal className="mt-8">
          <p className="text-center text-gray-600">
            Quoting as well as reporting? See{' '}
            <Link href="/accelerators/deal-builder" className="text-[#19779b] font-semibold hover:underline">Deal Builder</Link>.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Not sure what to measure?"
          description="Tell us how your team runs the week, and we will help you decide what to measure, then build it."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
