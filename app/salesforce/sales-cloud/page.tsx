import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce Sales Cloud Implementation',
  description: "Sales Cloud implementation by certified experts. Lead management, opportunity tracking, forecasting, and automation to transform your sales process.",
  keywords: ['Sales Cloud', 'Salesforce Sales Cloud', 'CRM implementation', 'sales automation', 'lead management'],
  openGraph: {
    title: 'Salesforce Sales Cloud Implementation | Appdraft',
    description: "Sales Cloud implementation by certified experts. Transform your sales process with the world's #1 CRM.",
    url: 'https://appdraft.com/salesforce/sales-cloud',
  },
  alternates: {
    canonical: 'https://appdraft.com/salesforce/sales-cloud',
  },
};

// Contextual icons for Sales Cloud features
const icons = {
  leads: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  activity: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  quote: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  forecast: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  dashboard: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  mobile: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  implementation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  realignment: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  integration: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

const salesCloudFeatures = [
  { icon: icons.leads, title: 'Lead & Opportunity Management', description: 'Manage leads, accounts, contacts and opportunities in one place.' },
  { icon: icons.activity, title: 'Activity Tracking', description: 'Task tracking, activity history, calendar and email integration with Outlook or Gmail.' },
  { icon: icons.quote, title: 'Quote Generation', description: 'Create and manage quotes directly from opportunities.' },
  { icon: icons.forecast, title: 'Forecasting', description: 'Forecasts and quota attainment to track revenue goals.' },
  { icon: icons.dashboard, title: 'Dashboards & Reports', description: 'User-friendly analytics and dashboards for insights.' },
  { icon: icons.mobile, title: 'Mobile Access', description: 'Mobile access for teams in the field.' },
];

const howWeHelp = [
  { icon: icons.implementation, title: 'Implementation', description: 'End-to-end implementation and onboarding.' },
  { icon: icons.realignment, title: 'Realignment', description: 'Reviewing and realigning Sales Cloud when it no longer fits your sales process.' },
  { icon: icons.integration, title: 'Integration', description: 'Integrating with Marketing Cloud, Service Cloud, or third-party tools.' },
];

export default function SalesCloud() {
  return (
    <>
      <PageHero
        badge="Sales Cloud"
        title="The World's Number One"
        highlight="CRM"
        description="Salesforce is the backbone of modern sales teams. Sales Cloud brings structure, visibility and consistency to your sales process. It replaces spreadsheets and scattered tools with a single platform to manage leads, opportunities, quotes, tasks, emails and performance."
        image="/images/salesforce/sales-cloud.jpg"
        imageAlt="Sales Cloud CRM dashboard"
        buttons={[
          { label: 'Get Started', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Why Salesforce Sales Cloud?"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Salesforce has been ranked the{' '}
              <Link
                href="https://www.salesforce.com/news/stories/idc-crm-market-share-ranking-2025/"
                target="_blank"
                className="text-[#3cd6bf] hover:underline font-semibold"
              >
                number one CRM provider by IDC for 12 consecutive years
              </Link>{' '}
              based on global market share and revenue.
            </p>
            <p>
              It leads similarly across North America, Western Europe, Latin America and Asia-Pacific.
            </p>
            <p>
              Salesforce earns its position by consistently innovating, integrating across ecosystems and scaling effortlessly with growing businesses.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="What is Sales Cloud?"
        subtitle="Sales Cloud manages your entire sales lifecycle, from lead capture through to deal close. It includes:"
        background="gray"
      >
        <FeatureGrid features={salesCloudFeatures} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center">
            Powered by built-in AI from Agentforce.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="How we help"
        subtitle="With over 130 Salesforce projects under our belt, we make sure Sales Cloud works for you."
        background="white"
      >
        <FeatureGrid features={howWeHelp} columns={3} variant="card" />
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Thinking about Sales Cloud?"
          description="Whether you're building a new CRM or improving your current setup, we ensure Sales Cloud delivers real impact. Book a call and speak to a consultant who understands how to make it work for growth."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
