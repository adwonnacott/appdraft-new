import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlowCard from '@/components/ui/GlowCard';

export const metadata = {
  title: 'Salesforce Agentforce AI Implementation',
  description: 'Deploy Salesforce Agentforce AI to accelerate your teams and serve customers faster. AI-powered case summaries, email drafting, and intelligent automation inside your CRM.',
  keywords: ['Agentforce', 'Salesforce AI', 'Einstein AI', 'AI automation', 'CRM AI', 'intelligent automation', 'AI customer service'],
  openGraph: {
    title: 'Salesforce Agentforce AI | Appdraft',
    description: 'Deploy Salesforce Agentforce AI to accelerate your teams and serve customers faster.',
    url: 'https://appdraft.com/salesforce/agentforce',
  },
  alternates: {
    canonical: 'https://appdraft.com/salesforce/agentforce',
  },
};

// Contextual icons for Agentforce features
const icons = {
  caseReview: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  summaries: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  emailDraft: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  dataQuality: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  guidedWorkflow: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  agentDefinition: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  actionDesign: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  knowledgeConnection: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  testing: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  training: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

const agentforceCapabilities = [
  { icon: icons.caseReview, title: 'Case Review', description: 'Review a case and highlight key points from email history.' },
  { icon: icons.summaries, title: 'Activity Summaries', description: 'Summarise long activity logs into clear status updates.' },
  { icon: icons.emailDraft, title: 'Email Drafting', description: 'Draft tailored emails based on records or recent interactions.' },
  { icon: icons.dataQuality, title: 'Data Quality', description: 'Spot missing data or inconsistencies in key fields.' },
  { icon: icons.guidedWorkflow, title: 'Guided Workflows', description: 'Guide users through quoting, triage or onboarding steps.' },
];

const howWeHelp = [
  { icon: icons.agentDefinition, title: 'Agent Definition', description: 'Define what the agent should read, understand and act on.' },
  { icon: icons.actionDesign, title: 'Action Design', description: 'Design actions that run inside Flow, Apex or Lightning pages.' },
  { icon: icons.knowledgeConnection, title: 'Knowledge Connection', description: 'Connect to your knowledge base, documents or website content.' },
  { icon: icons.testing, title: 'Testing', description: 'Test responses to ensure accuracy and value.' },
  { icon: icons.training, title: 'Training', description: 'Train your team to use it effectively.' },
];

const whenMakesSense = [
  { title: 'You want to help customers get faster answers', content: 'Deploy AI-powered support that can answer common questions instantly using your existing knowledge base.' },
  { title: 'You want to reduce time spent reviewing long records or case history', content: 'Let AI summarise complex case histories and highlight the key information your team needs.' },
  { title: 'You want the system to suggest updates or next steps based on data', content: 'Get intelligent recommendations for actions based on patterns in your CRM data.' },
  { title: 'You want to cut down repetitive manual tasks', content: 'Automate routine tasks like data entry, email drafting, and status updates.' },
  { title: 'You want AI to fit the way your business already works', content: 'Agentforce integrates with your existing Salesforce setup, flows, and business logic.' },
];

export default function Agentforce() {
  return (
    <>
      <PageHero
        badge="Agentforce"
        title="AI Where it Counts,"
        highlight="Inside Your CRM"
        description="Salesforce Agentforce helps your teams move faster and your customers get what they need. It works directly on the data you already hold in Salesforce, guiding internal users through their day-to-day work or supporting customers with instant answers and next steps."
        image="/images/salesforce/agentforce.jpg"
        imageAlt="Agentforce AI assistant"
        buttons={[
          { label: 'Get Started', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Why Agentforce?"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              There are plenty of AI tools on the market. But if they don't have access to your data, and they can't do anything with it, what's the point?
            </p>
            <p>
              Agentforce is different. It runs inside Salesforce and works with the data already in your system: your customer records, cases, emails, activities and product data. That means it can take meaningful action, help users make decisions, and spot things a human might miss.
            </p>
            <p>
              Rather than floating in a chat window or sitting outside your workflow, Agentforce is designed to be useful right where the work happens.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="What Agentforce can do"
        subtitle="Agentforce helps with the kinds of jobs that usually slow people down."
        background="gray"
      >
        <FeatureGrid features={agentforceCapabilities} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center">
            Everything runs inside Salesforce, using your existing flows, objects and business logic.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Get started faster with Salesforce-built Agents"
        subtitle="Salesforce offers a growing library of ready-to-use Agentforce templates."
        background="white"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal>
            <GlowCard className="h-full rounded-2xl" glowColor="rgba(25, 119, 155, 0.1)">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service Agent</h3>
                <p className="text-gray-700">
                  Supports customers across multiple channels, answers questions using your knowledge base, and creates cases when needed.
                </p>
              </div>
            </GlowCard>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <GlowCard className="h-full rounded-2xl" glowColor="rgba(25, 119, 155, 0.1)">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sales Development Agent</h3>
                <p className="text-gray-700">
                  Sends outbound emails, answers inbound queries, and engages leads using your live data.
                </p>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center">
            These can be tailored to fit your specific process and business rules.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="How we make it work for you"
        subtitle="We help shape Agentforce into something your business can use with confidence."
        background="gray"
      >
        <FeatureGrid features={howWeHelp} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center">
            We focus on solving real problems, not just ticking the AI box.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="When Agentforce makes sense"
        background="white"
      >
        <Accordion items={whenMakesSense} />
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Already using Salesforce? Make your data work harder"
          description="Agentforce helps your team move faster, act smarter and get more from the data you already have. Book a call and we'll help you build something that makes a real difference."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
