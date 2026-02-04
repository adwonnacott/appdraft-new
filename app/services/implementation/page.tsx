import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import StepList from '@/components/sections/StepList';
import CTABanner from '@/components/sections/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce Implementation Services',
  description: 'Expert Salesforce implementation that fits your business today and scales tomorrow. 130+ projects delivered. Discovery, design, build, and go-live support.',
  keywords: ['Salesforce implementation', 'CRM implementation', 'Salesforce setup', 'Salesforce deployment', 'Salesforce consulting UK'],
  openGraph: {
    title: 'Salesforce Implementation Services | Appdraft',
    description: 'Expert Salesforce implementation that fits your business today and scales tomorrow. 130+ projects delivered.',
    url: 'https://appdraft.com/services/implementation',
  },
  alternates: {
    canonical: 'https://appdraft.com/services/implementation',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce Implementation',
  description: 'End-to-end Salesforce implementation services including discovery, design, sandbox build, testing, and go-live support.',
  provider: {
    '@type': 'Organization',
    name: 'Appdraft',
    url: 'https://appdraft.com',
  },
  serviceType: 'CRM Implementation',
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Salesforce Implementation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Discovery & Process Review' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Design Documentation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sandbox Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Go-Live Support' } },
    ],
  },
};

const implementationSteps = [
  {
    title: 'Discovery And Process Review',
    description: "We start by getting to know how your business works. We look at your current sales and service process and test it. If there are gaps or baked-in assumptions, we'll challenge them. Our experience of managing sales and operations means we can strengthen your process before building anything around it.",
  },
  {
    title: 'Design Documentation',
    description: "We produce clear documents that map out what we're going to build. They capture what matters to you and reflect back the conversations we've had. It's a chance to make sure we're on the same page before we move into the build.",
  },
  {
    title: 'Sandbox Build',
    description: 'We build in a sandbox environment so you can try things out using test data. It gives you a safe space to explore the system and get a feel for how it behaves.',
  },
  {
    title: 'Show And Tell',
    description: "Once the sandbox is ready, we walk you through how the system works. We explain the design, talk through decisions and make sure nothing has been missed.",
  },
  {
    title: 'Testing And Snagging',
    description: "After the walkthrough, the system is over to you for testing. You can explore it in your own time, raise questions and flag anything that needs adjustment. We'll handle refinements based on your feedback.",
  },
  {
    title: 'Go Live',
    description: "When you're happy with everything, we move the build into your live environment. We'll handle data import, user setup and any final steps. Once you're live, we offer flexible support as and when you need it.",
  },
];

export default function Implementation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        badge="Implementation"
        title="Getting Started With"
        highlight="Salesforce"
        description="We help you implement Salesforce in a way that fits your business today and scales with you tomorrow, keeping it simple where it should be and powerful where it counts."
        image="/images/services/implementation.jpg"
        imageAlt="Team collaborating on Salesforce implementation"
        buttons={[
          { label: 'Book A Call', href: '/contact', primary: true },
          { label: 'Free Health Check', href: '/services/health-checks' },
        ]}
      />

      <ContentSection
        title="How we run implementation projects"
        background="white"
        centered={false}
      >
        <StepList steps={implementationSteps} variant="timeline" />
      </ContentSection>

      <ContentSection
        title="A proportionate approach"
        background="gray"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Some clients come to us with simple requirements. Others just want to get started with the basics and grow from there. That's fine. We work with clients at all stages.
            </p>
            <p>
              If your needs are more complex, we're comfortable with that too. We've handled everything from multi-cloud rollouts to custom process automation and deep integrations.
            </p>
            <p>
              We always encourage phasing work in a way that delivers value early on. We'll help you focus on what matters now and build from there at your pace.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Why Appdraft?"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We've delivered more than 130 Salesforce projects for growing UK businesses. We understand the pressure to get things working quickly without cutting corners.
            </p>
            <p>
              We're not here to overcomplicate things or stretch projects out for the sake of it. We focus on giving you what you actually need, without unnecessary extras.
            </p>
            <p>
              Our builds are proportionate, structured and built to support your team from day one. We care about long-term relationships built on trust.
            </p>

            <blockquote className="mt-8 border-l-4 border-[#3cd6bf] pl-6 italic text-gray-700">
              <p className="text-lg mb-2">
                "The Health Check gave us real clarity. We knew where we stood, what to tackle first, and what could wait."
              </p>
              <footer className="text-gray-600 not-italic">
                - Operations Lead, Professional Services Client
              </footer>
            </blockquote>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Book a call"
          description="If you have a brief, an RFP or just a rough list of requirements, we'll help you shape it into a clear plan."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          secondaryButton={{ label: 'Free Health Check', href: '/services/health-checks' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
