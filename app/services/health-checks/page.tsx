import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce Health Check',
  description: "Free Salesforce health check to review your setup. Get prioritised recommendations, budget estimates, and a clear improvement roadmap.",
  keywords: ['Salesforce health check', 'Salesforce audit', 'CRM review', 'Salesforce assessment', 'free Salesforce review'],
  openGraph: {
    title: 'Salesforce Health Check | Appdraft',
    description: "Free Salesforce health check to review your setup. Get prioritised recommendations and a clear improvement roadmap.",
    url: 'https://appdraft.com/services/health-checks',
  },
  alternates: {
    canonical: 'https://appdraft.com/services/health-checks',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce Health Check',
  description: 'Comprehensive Salesforce health check including system review, prioritised recommendations, budget estimates, and improvement roadmap.',
  provider: {
    '@type': 'Organization',
    name: 'Appdraft',
    url: 'https://appdraft.com',
  },
  serviceType: 'CRM Audit',
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free initial assessment',
  },
};

// Contextual icons for Health Check deliverables
const icons = {
  prioritised: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  budget: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  recommendations: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  assessment: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
};

const deliverables = [
  { icon: icons.prioritised, title: 'Prioritised Changes', description: 'A clear list of useful changes, ranked by impact and effort.' },
  { icon: icons.budget, title: 'Budget Estimates', description: 'Realistic estimates to help you plan and prioritise work.' },
  { icon: icons.recommendations, title: 'Recommendations', description: 'Advice on what to address now and what can wait.' },
  { icon: icons.assessment, title: 'Honest Assessment', description: "A realistic view of what's working and where the gaps are." },
];

const whenItHelps = [
  { title: "Users aren't engaged with the system", content: "When your team avoids using Salesforce or finds workarounds, there's usually a reason. We'll identify what's getting in the way." },
  { title: 'Reporting is limited and key KPIs are hard to access', content: "If you can't easily see the numbers that matter, your setup may need adjusting. We'll show you how to get better visibility." },
  { title: "You're deferring to spreadsheets to manage processes", content: "Spreadsheets outside Salesforce often signal gaps in your CRM setup. We'll help you understand why and how to fix it." },
  { title: "The business has changed, but Salesforce hasn't", content: "As your business evolves, your CRM should evolve with it. We'll identify where things have drifted out of sync." },
  { title: 'You want to start with confidence before making bigger changes', content: "A Health Check gives you clarity before you commit to major work. You'll know exactly where you stand." },
];

export default function HealthChecks() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        badge="Health Checks"
        title="You've Invested in Salesforce."
        highlight="Let's Make Sure it's Working"
        description="If Salesforce isn't delivering, there's usually a reason. In our experience, some organisations start with an implementation that never quite fits how the business operates. For others, what was originally a good match has drifted out of sync as the business has evolved."
        image="/images/services/health-checks.jpg"
        imageAlt="Salesforce health check analysis"
        buttons={[
          { label: 'Book A Health Check', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="What a Health Check covers"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We review whether your Salesforce setup still supports your business. That includes how the data is structured, how users interact with it, and whether you're getting the visibility you need.
            </p>
            <p>
              We focus on what adds value. That might mean quick wins, activating features that haven't been used, or simplifying what's already there. If parts of your workflow have drifted into spreadsheets or inboxes, we'll help you understand why and how to bring them back into Salesforce.
            </p>
            <p>
              A Health Check helps you understand the challenges, including the ones you've already noticed and the ones you haven't. It gives you clear, practical options. There's no pressure to act on the recommendations straight away.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="How it works"
        background="gray"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We start with a short call to understand your business. What you offer, how your team operates, and where the pain points are.
            </p>
            <p>
              Then we review your Salesforce system in detail, using that context to guide the analysis. We're looking not just at how the system is configured, but at how well it supports your processes and helps people do their jobs.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="What you get out of it"
        subtitle="You'll receive a clear, structured report that includes:"
        background="white"
      >
        <FeatureGrid features={deliverables} columns={4} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center">
            It's a practical way to get clarity and unlock more value from the platform.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="When a Health Check helps"
        background="gray"
      >
        <Accordion items={whenItHelps} />

        <ScrollReveal className="mt-10">
          <blockquote className="border-l-4 border-[#3cd6bf] pl-6 italic text-gray-700 max-w-2xl mx-auto">
            <p className="text-lg mb-2">
              "The Health Check gave us real clarity. We knew where we stood, what to tackle first, and what could wait."
            </p>
            <footer className="text-gray-600 not-italic">
              - Operations Lead, Professional Services Client
            </footer>
          </blockquote>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Want to make Salesforce work harder for your business?"
          description="Book a Health Check and we'll help you identify the problems, spot the opportunities, and decide what to do next."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
