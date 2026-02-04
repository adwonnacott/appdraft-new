import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce Marketing Cloud & Account Engagement',
  description: 'Turn marketing into pipeline with Salesforce Marketing Cloud. Campaign automation, lead scoring, and connected customer journeys from marketing to sales.',
  keywords: ['Marketing Cloud', 'Account Engagement', 'Pardot', 'marketing automation', 'lead nurturing', 'email marketing', 'campaign management', 'lead scoring'],
  openGraph: {
    title: 'Salesforce Marketing Cloud | Appdraft',
    description: 'Turn marketing into pipeline with Salesforce Marketing Cloud.',
    url: 'https://appdraft.com/salesforce/marketing-cloud',
  },
  alternates: {
    canonical: 'https://appdraft.com/salesforce/marketing-cloud',
  },
};

// Contextual icons for Marketing Cloud features
const icons = {
  automation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  forms: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  leadScoring: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  tracking: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  segmentation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  implementation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  campaign: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  training: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  strategy: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  optimisation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

const marketingCloudFeatures = [
  { icon: icons.automation, title: 'Campaign Automation', description: 'Multi-channel campaign automation.' },
  { icon: icons.forms, title: 'Forms & Landing Pages', description: 'Form and landing page creation.' },
  { icon: icons.leadScoring, title: 'Lead Scoring', description: 'Lead scoring and grading.' },
  { icon: icons.tracking, title: 'Tracking & Attribution', description: 'Real-time tracking and attribution across channels.' },
  { icon: icons.segmentation, title: 'Segmentation', description: 'Segment building and campaign logic.' },
];

const howWeHelp = [
  { icon: icons.implementation, title: 'Implementation', description: 'Implementation of Salesforce marketing products.' },
  { icon: icons.campaign, title: 'Campaign Creation', description: 'Creating campaigns, emails, templates and assets.' },
  { icon: icons.training, title: 'Training', description: 'Helping you understand how to use the platform.' },
  { icon: icons.strategy, title: 'Strategy', description: 'Strategic guidance on best practice and what to measure.' },
  { icon: icons.optimisation, title: 'Optimisation', description: "Reviewing what's already in place and making it work better." },
];

const whenMakesSense = [
  { title: "You're already using Salesforce, but marketing is still disconnected", content: 'Connect your marketing efforts directly to your CRM for unified data and better insights.' },
  { title: 'You want to equip sales with the context they need', content: 'Give sales teams visibility into marketing engagement to tailor follow-up and spot buying signals.' },
  { title: 'You need intelligent ways to segment leads and launch campaigns', content: 'Use Data Cloud to segment intelligently and deliver journeys in real time.' },
  { title: 'You want marketing and sales to work together across the full customer lifecycle', content: 'Break down silos between teams and create seamless handoffs throughout the journey.' },
  { title: 'You want to stay visible after the sale', content: 'Support onboarding or customer care through targeted content and automated communications.' },
];

export default function MarketingCloud() {
  return (
    <>
      <PageHero
        badge="Marketing Cloud"
        title="Smarter Campaigns,"
        highlight="Connected Journeys"
        description="Salesforce Marketing Cloud helps businesses turn marketing activity into real pipeline. Whether you're running lead nurture programmes, personalising outreach at scale, or fixing handover gaps between marketing and sales, we help you make it work."
        image="/images/salesforce/marketing-cloud.jpg"
        imageAlt="Marketing Cloud campaigns"
        buttons={[
          { label: 'Get Started', href: '/contact', primary: true },
        ]}
      >
        <ScrollReveal className="mt-4">
          <p className="text-lg text-gray-600">
            We support clients using both <strong>Marketing Cloud Growth Edition</strong> and <strong>Marketing Cloud Account Engagement.</strong>
          </p>
        </ScrollReveal>
      </PageHero>

      <ContentSection
        title="Why Salesforce Marketing Cloud?"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong>Marketing Cloud Growth Edition is built natively on the Salesforce platform.</strong> That means your sales, service and marketing teams can all use the same up-to-date data without sync issues or complexity.
            </p>
            <p>
              It uses <strong>Data Cloud to segment intelligently</strong> and deliver journeys in real time. Account Engagement remains a strong option for B2B teams who want to qualify leads, automate follow-ups, and measure engagement across the sales cycle.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="What Marketing Cloud includes"
        subtitle="We help clients set up and improve both platforms."
        background="gray"
      >
        <FeatureGrid features={marketingCloudFeatures} columns={3} variant="card" />
      </ContentSection>

      <ContentSection
        title="How we help"
        subtitle="We work with clients to make Salesforce marketing tools usable and effective."
        background="white"
      >
        <FeatureGrid features={howWeHelp} columns={3} variant="card" />
      </ContentSection>

      <ContentSection
        title="When Marketing Cloud makes sense"
        background="gray"
      >
        <Accordion items={whenMakesSense} />
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Already using Salesforce? Then you should be using Marketing Cloud"
          description="If your marketing isn't connected to your CRM, you're missing out on better targeting, stronger engagement and more reliable pipeline. Book a call and we'll help you make it work."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
