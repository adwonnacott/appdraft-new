import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import CTABanner from '@/components/sections/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlowCard from '@/components/ui/GlowCard';

export const metadata = {
  title: 'Why Choose Appdraft',
  description: 'Official Salesforce Consulting Partners with 130+ projects delivered. Practical expertise across Sales Cloud, Service Cloud, and Marketing Cloud. 5.0 AppExchange rating.',
  keywords: ['why Appdraft', 'Salesforce partner UK', 'Salesforce consulting partner', 'certified Salesforce consultants'],
  openGraph: {
    title: 'Why Choose Appdraft | Salesforce Consulting Partner',
    description: 'Official Salesforce Consulting Partners with 130+ projects delivered. 5.0 AppExchange rating.',
    url: 'https://appdraft.com/why-appdraft',
  },
  alternates: {
    canonical: 'https://appdraft.com/why-appdraft',
  },
};

export default function WhyAppdraft() {
  return (
    <>
      <PageHero
        badge="Why Appdraft"
        title="Practical Salesforce Expertise for"
        highlight="Real Business Results"
        description="We are official Salesforce Consulting Partners with hands-on experience across Sales, Service, Marketing and Operations. From quick fixes to strategic projects, we help businesses get more from Salesforce by focusing on the outcomes that matter."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
        imageAlt="Team collaboration and consulting"
        buttons={[
          { label: 'Book A Call', href: '/contact', primary: true },
        ]}
      />

      <ContentSection
        title="Who We Are"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Our background includes leading sales, operations and finance functions in both small businesses and corporate organisations. That experience means we understand the operational outcomes our clients are aiming for and can play an active role in defining system requirements.
            </p>
            <p>
              We combine technical Salesforce knowledge with a clear understanding of business processes. Our approach is direct and focused on results, building systems that support your goals without over-engineering.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Our Approach"
        background="gray"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We take a proportionate approach to delivering effective change.
            </p>
            <p>
              For smaller implementations and simpler systems, we develop quick concepts to help you decide what you need. For larger projects, we take the time required to get the right level of detail before building, no more and no less.
            </p>
            <p>
              The speed of low-code platforms like Salesforce means development can move quickly. We aim to deliver without slowing progress with unnecessary workshops or delays.
            </p>
            <p>
              Our goal is for clients to see Salesforce as a platform they can evolve with confidence, knowing each project delivers improvements they can measure and build on.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection
        title="Proudly Part of Pledge 1%"
        background="white"
        centered={false}
      >
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We're proud to be part of <strong>Pledge 1%</strong>, a global movement inspired by Salesforce's 1-1-1 model - giving 1% of equity, product, time, and profit to make a real social impact.
            </p>
            <p>
              At Appdraft, our commitment is practical and diverse: supporting UNICEF, Crisis at Christmas, and Centrepoint; together with donations to client charities in recent years.
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <section className="py-24 bg-gradient-to-br from-[#3cd6bf] to-[#2bc4ad]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Recognised by Salesforce... Trusted by Clients</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <ScrollReveal delay={0}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-white">
                  <p className="text-lg font-medium">Official</p>
                  <p className="text-2xl font-bold">Salesforce</p>
                  <p className="text-lg">Consulting Partner</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-white">
                  <p className="text-lg font-medium">Reviews on the</p>
                  <p className="text-2xl font-bold">Salesforce</p>
                  <Link
                    href="https://appexchange.salesforce.com/"
                    target="_blank"
                    className="text-blue-200 hover:text-white underline"
                  >
                    AppExchange
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-white">
                  <p className="text-4xl font-bold">130+</p>
                  <p className="text-lg">Successful Salesforce</p>
                  <p className="text-lg font-medium">Projects Delivered</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="text-center mt-12">
            <p className="text-xl text-white mb-6">Trusted by UK-based sales, ops and customer service teams</p>
            <Link
              href="https://appexchange.salesforce.com/"
              target="_blank"
              className="inline-block bg-white text-[#3cd6bf] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              See Our AppExchange Profile
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <ContentSection background="white">
        <CTABanner
          title="Set Your Goals, Let's Get Started"
          description="Whether you're new to Salesforce or trying to fix what's not working, we'll help you find a better way forward."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
