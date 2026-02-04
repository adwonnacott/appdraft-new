import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce Experience Cloud Portals & Communities',
  description: 'Create secure customer portals, partner communities, and help centres with Salesforce Experience Cloud. Connect users to your CRM data with branded digital experiences.',
  keywords: ['Experience Cloud', 'Salesforce portal', 'customer portal', 'partner community', 'Salesforce community', 'help centre portal', 'self-service portal'],
  openGraph: {
    title: 'Salesforce Experience Cloud | Appdraft',
    description: 'Create secure customer portals, partner communities, and help centres with Salesforce Experience Cloud.',
    url: 'https://appdraft.com/salesforce/experience-cloud',
  },
  alternates: {
    canonical: 'https://appdraft.com/salesforce/experience-cloud',
  },
};

// Contextual icons for Experience Cloud features
const icons = {
  helpCentre: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  selfService: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  partner: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  chat: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  fileSharing: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  ),
  accessControl: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  siteScoping: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  dataModel: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  guidedExperience: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  knowledge: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  branding: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  launch: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

const experienceCloudFeatures = [
  { icon: icons.helpCentre, title: 'Help Centres', description: 'Build help centres, service portals or knowledge hubs.' },
  { icon: icons.selfService, title: 'Case Self-Service', description: 'Let customers create and track cases or update their details.' },
  { icon: icons.partner, title: 'Partner Portals', description: 'Give partners a place to log leads, track opportunities and access materials.' },
  { icon: icons.chat, title: 'Chat & Support', description: 'Embed chat for live or automated support.' },
  { icon: icons.fileSharing, title: 'Secure File Sharing', description: 'Share files, product documents or service updates securely.' },
  { icon: icons.accessControl, title: 'Access Control', description: 'Control access by user profile, account, product, or custom logic.' },
];

const howWeHelp = [
  { icon: icons.siteScoping, title: 'Site Scoping', description: 'Scope the site structure, user types and permissions.' },
  { icon: icons.dataModel, title: 'Data Model Design', description: 'Design the right data model and access rules.' },
  { icon: icons.guidedExperience, title: 'Guided Experiences', description: 'Create guided user experiences using screen flows.' },
  { icon: icons.knowledge, title: 'Knowledge Setup', description: 'Structure and deploy Salesforce Knowledge.' },
  { icon: icons.branding, title: 'Branding', description: 'Brand the site to match your business.' },
  { icon: icons.launch, title: 'Launch Support', description: 'Launch securely and support adoption.' },
];

const whenMakesSense = [
  { title: 'You want customers to self-serve or create and track service cases', content: 'Give customers direct access to log and monitor their own support requests without needing to contact your team.' },
  { title: 'You want to deflect support by giving customers intelligent self-service tools', content: 'Reduce support volume by providing searchable knowledge bases and AI-powered assistance.' },
  { title: 'You want to embed chat and AI assistance to support users more efficiently', content: 'Provide instant help through live chat or Agentforce-powered automated responses.' },
  { title: 'You want to give partners a way to log leads, track deals and view files', content: 'Create dedicated partner portals with access to relevant sales data and resources.' },
  { title: 'You need a secure way to expose Salesforce data with limited access', content: 'Share specific data with external users while maintaining full control over permissions.' },
  { title: 'You want to reflect your brand and user journey across all touchpoints', content: 'Create a consistent, branded experience that matches your other digital properties.' },
];

export default function ExperienceCloud() {
  return (
    <>
      <PageHero
        badge="Experience Cloud"
        title="Extend Salesforce to Your"
        highlight="Customers and Partners"
        description="Experience Cloud lets you create secure portals, help centres and branded digital spaces that connect directly to your Salesforce data. Whether you need to enable partner collaboration, customer self-service or internal sharing, it helps you give people access to the information that matters."
        image="/images/salesforce/experience-cloud.jpg"
        imageAlt="Experience Cloud portal"
        buttons={[
          { label: 'Get Started', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Why Salesforce Experience Cloud?"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Because it's built on the Salesforce platform, Experience Cloud works with your existing data, processes and security model. That means external users only see what they should, and your internal team doesn't have to manage data in multiple places.
            </p>
            <p>
              With Experience Cloud, you can provide access to real-time CRM data, automate interactions, embed chat support, and use Agentforce AI to deliver smart, contextual assistance.
            </p>
            <p>
              Salesforce Knowledge can act as both a searchable self-service resource for customers and a trusted data source for AI-powered support.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="What Experience Cloud includes"
        subtitle="Experience Cloud is the framework for building branded sites that connect to Salesforce."
        background="gray"
      >
        <FeatureGrid features={experienceCloudFeatures} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center">
            Everything runs on Salesforce infrastructure, with mobile-ready design, real-time data and built-in security.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="How we help"
        subtitle="We help you define what your Experience Cloud site should do and how it connects with Salesforce."
        background="white"
      >
        <FeatureGrid features={howWeHelp} columns={3} variant="card" />
        <ScrollReveal className="mt-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Whether you're building a simple login-based service portal or a complex partner experience, we make sure it's structured properly and built for long-term use.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="When Experience Cloud makes sense"
        background="gray"
      >
        <Accordion items={whenMakesSense} />
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Already using Salesforce? Let your customers and partners use it too."
          description="We'll help you build a secure, branded Experience Cloud site that gives the right people the right access and reduces manual work for your team."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
