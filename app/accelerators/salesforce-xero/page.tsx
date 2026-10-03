import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce and Xero Integration Accelerator',
  description: 'Connect Salesforce and Xero so you can see what each customer was invoiced and paid alongside what they were sold, with an audit trail from order to payment.',
  keywords: ['Salesforce Xero integration', 'Xero Salesforce', 'Salesforce invoicing', 'Salesforce credit control', 'Salesforce billing'],
  openGraph: {
    title: 'Salesforce and Xero Integration Accelerator | Appdraft',
    description: 'What each customer was sold, invoiced and paid, in one place.',
    url: 'https://appdraft.com/accelerators/salesforce-xero',
  },
  alternates: {
    canonical: 'https://appdraft.com/accelerators/salesforce-xero',
  },
};

const icons = {
  trail: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  spend: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  commission: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  credit: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  invoice: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  log: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

const features = [
  { icon: icons.trail, title: 'Order to payment', description: 'Invoices raised from the Salesforce record, with payments, credit notes and status coming back, so there is a trail from what was ordered to what was paid.' },
  { icon: icons.spend, title: 'Spend against forecast', description: 'See what each customer has actually spent and how it is trending, and compare it with what was forecast while there is still time to act.' },
  { icon: icons.commission, title: 'Commission on what was billed', description: 'Reconcile what salespeople sold against what was invoiced without doing it by hand.' },
  { icon: icons.credit, title: 'Credit control from Salesforce', description: 'Overdue invoices sit alongside the account, its contacts and its history, so whoever chases has the full picture.' },
  { icon: icons.invoice, title: 'Invoices in your brand', description: 'Custom invoice documents that match your brand and carry the detail your customers need.' },
  { icon: icons.log, title: 'Nothing quietly missing', description: 'Every sync is logged, so anything that fails to go across is visible. Purchase orders and bills can follow the same route.' },
];

const steps = [
  { title: '1. A proper look at how you bill', content: 'Where an invoice should come from, how your accounts receivable process works, how your account codes and tax are set up, and who needs to see what.' },
  { title: '2. Built in a sandbox, tested on a Xero demo company', content: 'We build it in a Salesforce sandbox connected to a Xero demo company and hand it over for testing, so your team can work through real scenarios without touching your live accounts.' },
  { title: '3. Live once everything matches', content: 'When you are satisfied, we move it into your live Salesforce and Xero.' },
];

export default function SalesforceXero() {
  return (
    <>
      <PageHero
        badge="Accelerator: Billing"
        title="Salesforce knows what was sold."
        highlight="Xero knows what was billed."
        description="In many businesses the two never meet, so the CRM's picture of each customer stops at the deal. Connecting them puts what each customer was invoiced and has paid alongside everything else you know about them."
        image="/images/accelerators/salesforce-xero.png"
        imageAlt="A Salesforce invoice record marked as paid, showing amounts synced from Xero"
        buttons={[
          { label: 'Talk To Us', href: '/contact', primary: true },
          { label: 'Read the article', href: '/blog/salesforce-xero-integration' },
        ]}
      />

      <ContentSection title="What changes when they are connected" background="gray">
        <FeatureGrid features={features} columns={3} variant="card" />
      </ContentSection>

      <ContentSection title="Why an accelerator" background="white" centered={false}>
        <ScrollReveal>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Packaged connectors handle the common cases well, but almost every business has something it needs that a package was not built for. Filling that gap with a bespoke build used to carry a final cost that was hard to predict.
            </p>
            <p>
              Rather than starting from scratch for each client, we have built an accelerator. The records, the sync and the error handling already exist, and the work is in fitting them to how your business actually bills. We have installed it successfully with a number of clients, and we can tell you what it will cost before any work starts.
            </p>
            <p>
              The full story is in our article,{' '}
              <Link href="/blog/salesforce-xero-integration" className="text-[#19779b] font-semibold hover:underline">
                Your CRM says what will happen. Xero says what did.
              </Link>
            </p>
          </div>
        </ScrollReveal>
      </ContentSection>

      <ContentSection title="What installing it involves" background="gray">
        <Accordion items={steps} />
        <ScrollReveal className="mt-8">
          <p className="text-center text-gray-600">
            Quoting as well as billing? See{' '}
            <Link href="/accelerators/deal-builder" className="text-[#19779b] font-semibold hover:underline">Deal Builder</Link>.
          </p>
        </ScrollReveal>
      </ContentSection>

      <ContentSection background="white">
        <CTABanner
          title="Can Salesforce tell you what each customer was billed?"
          description="We will look at how you invoice today and show you what connecting Salesforce and Xero would change."
          primaryButton={{ label: 'Talk To Us About Xero', href: '/contact' }}
          variant="gradient"
        />
      </ContentSection>
    </>
  );
}
