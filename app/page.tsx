import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import SalesforceExpertise from '@/components/sections/SalesforceExpertise';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';
import PageTransition from '@/components/layout/PageTransition';

export const metadata = {
  title: 'Appdraft - Salesforce Implementation Experts | London UK',
  description: 'Expert Salesforce implementation, support, and custom development for growing businesses. 130+ projects delivered. 5.0 AppExchange rating. Free health check available.',
  keywords: ['Salesforce implementation', 'Salesforce consulting London', 'Salesforce partner UK', 'CRM implementation', 'Sales Cloud', 'Service Cloud'],
  openGraph: {
    title: 'Appdraft - Salesforce Implementation Experts',
    description: 'Expert Salesforce implementation, support, and custom development. 130+ projects delivered with 100% client satisfaction.',
    url: 'https://appdraft.com',
  },
  alternates: {
    canonical: 'https://appdraft.com',
  },
};

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <SalesforceExpertise />
      <Testimonials />
      <CallToAction />
    </PageTransition>
  );
}
