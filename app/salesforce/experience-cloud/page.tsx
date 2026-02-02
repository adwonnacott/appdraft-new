import Link from 'next/link';

export const metadata = {
  title: 'Salesforce Experience Cloud Implementation | Appdraft',
  description: 'Build powerful self-service portals, partner communities, and customer hubs with Experience Cloud. Extend Salesforce to your customers and partners.',
};

export default function ExperienceCloud() {
  const benefits = [
    {
      title: 'Self-Service Portals',
      description: 'Empower customers to find answers, submit cases, track orders, and manage their accounts 24/7 without contacting support.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      ),
    },
    {
      title: 'Partner Portals',
      description: 'Create secure spaces for partners to access deal registrations, training materials, co-marketing resources, and lead sharing.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
    },
    {
      title: 'Knowledge Sharing',
      description: 'Surface relevant articles, FAQs, and community discussions to reduce support tickets and improve customer satisfaction.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
    },
    {
      title: 'Branded Experiences',
      description: 'Customize templates, themes, and components to match your brand identity for a seamless customer experience.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      ),
    },
    {
      title: 'Community Forums',
      description: 'Foster peer-to-peer support with discussion forums, groups, and gamification features that encourage engagement.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      ),
    },
    {
      title: 'Mobile-First Design',
      description: 'Responsive, mobile-optimized experiences that work seamlessly across desktop, tablet, and smartphone devices.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      ),
    },
  ];

  const howWeHelp = [
    {
      title: 'Portal Strategy & Design',
      description: 'Define user personas, journeys, and information architecture to create intuitive, goal-oriented portal experiences.',
    },
    {
      title: 'Template Customization',
      description: 'Customize pre-built templates or build custom components using Lightning Web Components for unique functionality.',
    },
    {
      title: 'Content Management',
      description: 'Structure and organize knowledge articles, FAQs, videos, and resources for easy discovery and self-service.',
    },
    {
      title: 'User Access & Security',
      description: 'Configure profiles, permission sets, and sharing rules to ensure the right users see the right data securely.',
    },
    {
      title: 'Integration Setup',
      description: 'Connect your portal with external systems, payment gateways, shipping APIs, and third-party tools.',
    },
    {
      title: 'Analytics & Optimization',
      description: 'Track portal usage, popular content, and user behavior to continuously improve the experience.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Salesforce Experience Cloud
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Build Engaging Digital Experiences for Customers and Partners
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Experience Cloud (formerly Community Cloud) lets you create branded, self-service portals and communities
              that extend Salesforce data and functionality to your customers, partners, and employees.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all hover:shadow-lg"
            >
              Get Started with Experience Cloud
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Experience Cloud?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extend your Salesforce investment to create powerful self-service experiences that reduce support costs and increase satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {benefit.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Appdraft Can Help */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Appdraft Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built customer portals, partner communities, and employee hubs for businesses across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howWeHelp.map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-purple-600 opacity-20 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-purple-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Common Use Cases
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-2">Customer Support</h4>
                <p className="text-purple-100">
                  Case submission, knowledge base, order tracking, and account management
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-2">Partner Enablement</h4>
                <p className="text-purple-100">
                  Deal registration, training, co-marketing, and lead distribution
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-2">Employee Hub</h4>
                <p className="text-purple-100">
                  Internal knowledge sharing, collaboration, and HR resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Portal?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how Experience Cloud can transform how you engage with customers and partners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services/implementation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all"
            >
              Learn About Implementation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
