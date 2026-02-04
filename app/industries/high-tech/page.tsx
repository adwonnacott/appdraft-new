import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce for SaaS & Technology Companies',
  description: 'Salesforce for software and tech companies. Track sales, manage renewals, and unify customer data for subscription-based businesses.',
  keywords: ['Salesforce SaaS', 'technology CRM', 'software company Salesforce', 'subscription management', 'high tech CRM', 'renewal tracking'],
  openGraph: {
    title: 'Salesforce for High Tech | Appdraft',
    description: 'Salesforce solutions for SaaS and technology companies.',
    url: 'https://appdraft.com/industries/high-tech',
  },
  alternates: {
    canonical: 'https://appdraft.com/industries/high-tech',
  },
};

// Contextual icons for High-Tech features
const icons = {
  trial: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  revenue: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  integration: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  unified: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  messaging: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const challenges = [
  {
    title: "Trials and paid products aren't tracked the same way",
    content: "Teams often struggle to separate early-stage concepts from licensed deals. We help build opportunity structures that clearly distinguish trial activity, concept discussions and licensed sales, with a path to convert one into the other.",
  },
  {
    title: 'Renewals are missed or left too late',
    content: "Without structured tracking, it's easy to lose sight of contract end dates or under-report future revenue. We set up renewal opportunities, alerts and dashboards to bring structure and forecast accuracy to subscription-based revenue.",
  },
  {
    title: 'Customer data is trapped in the product platform',
    content: 'Seat counts, login frequency, feature usage and product tier often sit outside Salesforce. We manage integrations that bring this data into the CRM, giving sales and success teams visibility into what customers are using and when to act.',
  },
  {
    title: 'Marketing needs to support onboarding and engagement',
    content: 'Tech firms often need to send welcome emails, usage reminders and onboarding tips. We set up transactional and behavioural email messaging through Salesforce Marketing Cloud to support activation and adoption.',
  },
];

const roadmapFeatures = [
  { icon: icons.trial, title: 'Structured trial and paid tracking', description: 'Managing concept-stage, freemium or trial accounts separately from licensed sales.' },
  { icon: icons.revenue, title: 'Revenue schedules', description: 'Reflecting ramped or deferred revenue in your forecasts tied to subscription terms.' },
  { icon: icons.integration, title: 'Platform integration', description: 'Bringing in product data to flag churn risk or support upsell conversations.' },
  { icon: icons.unified, title: 'Unified customer view', description: 'Making usage, billing and engagement data visible to sales and customer success.' },
  { icon: icons.messaging, title: 'Transactional messaging', description: 'Automating key communications to help customers activate and adopt your product.' },
];

export default function HighTech() {
  return (
    <>
      <PageHero
        badge="High Tech"
        title="Salesforce For Firms Built on"
        highlight="Recurring Revenue & Account Expansion"
        description="High-tech companies rely on subscriptions and long-term customer engagement. Whether you're offering a software product or platform, growth depends on more than just new sales. You need visibility from trial to renewal, structure across handovers and access to real usage data from your product platform."
        image="/images/industries/high-tech.jpg"
        imageAlt="High tech Salesforce dashboard"
        buttons={[
          { label: 'Book A Call', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Supporting subscription-based growth"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            We help software firms use Salesforce to track sales, renewals and key platform data in one place, supporting subscription models and giving teams a clearer picture of the customer lifecycle.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Common challenges in high tech"
        background="gray"
      >
        <Accordion items={challenges} />
      </ContentSection>

      <ContentSection
        title="A roadmap that grows with you"
        subtitle="Most clients start by improving sales pipelines, renewal tracking and visibility across customer types. From there, Salesforce can support:"
        background="white"
      >
        <FeatureGrid features={roadmapFeatures} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Every setup is shaped around your product model, sales process and growth goals, with room to expand as your platform and team scale.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Need a better way to manage trials, subscriptions and customer engagement?"
          description="Book a call to explore how Salesforce can support your business."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
