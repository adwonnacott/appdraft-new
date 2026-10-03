import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import CTABanner from '@/components/sections/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce Accelerators',
  description: 'Proven Salesforce building blocks for quoting, billing and more. Built on standard Salesforce objects and adapted to how your business works.',
  keywords: ['Salesforce accelerators', 'Salesforce quoting', 'Salesforce Xero integration', 'Salesforce add-ons', 'Salesforce partner UK'],
  openGraph: {
    title: 'Salesforce Accelerators | Appdraft',
    description: 'Proven Salesforce building blocks, adapted to how your business works.',
    url: 'https://appdraft.com/accelerators',
  },
  alternates: {
    canonical: 'https://appdraft.com/accelerators',
  },
};

const accelerators = [
  {
    href: '/accelerators/deal-builder',
    image: '/images/accelerators/deal-builder.jpg',
    imageAlt: 'Deal Builder on a Salesforce opportunity, showing bundles, cost and margin on each line',
    tag: 'Quoting',
    title: 'Deal Builder',
    description: 'Put a deal together on the opportunity with bundles, product rules, margin on every line, the right tax and a branded PDF quote.',
    video: true,
  },
  {
    href: '/accelerators/salesforce-xero',
    image: '/images/accelerators/salesforce-xero.png',
    imageAlt: 'A Salesforce invoice record marked as paid, synced from Xero',
    tag: 'Billing',
    title: 'Salesforce and Xero',
    description: 'See what each customer was invoiced and paid alongside what they were sold, with an audit trail from order to payment.',
    video: false,
  },
];

const principles = [
  { title: 'Standard Salesforce underneath', content: 'Accelerators are built on standard Salesforce objects, so your data stays where your reports, dashboards and automation already expect it.' },
  { title: 'Adapted, not bolted on', content: 'Each part can be switched on or off and shaped around how you sell, bill and report. We start from something that works rather than a blank page.' },
  { title: 'No licence to renew', content: 'An accelerator is not a software add-on we license to you, so there is no ongoing licence cost. It becomes part of your Salesforce.' },
  { title: 'Installed carefully', content: 'We build in a sandbox first, you test it with your own scenarios, and it goes live once you are happy with it.' },
];

export default function Accelerators() {
  return (
    <>
      <PageHero
        badge="Accelerators"
        title="Salesforce building blocks,"
        highlight="shaped around your business"
        description="Over more than 130 Salesforce projects, the same needs come up again and again. Accelerators are the answers we have already built and proved with clients, which we then adapt to how you work. You get there sooner, and the groundwork is already done."
        buttons={[{ label: 'Talk To Us', href: '/contact', primary: true }]}
      />

      <ContentSection title="The accelerators" background="gray">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {accelerators.map((a) => (
            <ScrollReveal key={a.href}>
              <Link
                href={a.href}
                className="group block h-full rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.image} alt={a.imageAlt} className="w-full h-full object-cover object-left-top group-hover:scale-[1.03] transition-transform duration-500" />
                  {a.video && (
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1f2d3d]/85 text-white text-sm font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      Watch the walkthrough
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#3cd6bf]/10 text-[#19779b] text-sm font-medium">{a.tag}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{a.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{a.description}</p>
                  <span className="inline-flex items-center text-[#19779b] font-semibold">
                    Find out more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-10">
          <p className="text-center text-gray-600">More are on the way, including Companies House lookups, account plans and web proposals.</p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection title="How accelerators work" background="white">
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {principles.map((p) => (
            <ScrollReveal key={p.title}>
              <div className="h-full rounded-2xl border border-gray-200 p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.content}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Need something we haven't built yet?"
          description="Most of our accelerators started as one client's problem. Tell us what you are trying to do and we will tell you honestly how close we already are."
          primaryButton={{ label: 'Book A Call', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
