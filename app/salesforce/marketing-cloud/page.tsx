import Link from 'next/link';

export const metadata = {
  title: 'Salesforce Marketing Cloud Implementation | Appdraft',
  description: 'Create personalized customer journeys across email, mobile, social, and advertising with Marketing Cloud. Drive engagement and revenue growth.',
};

export default function MarketingCloud() {
  const benefits = [
    {
      title: 'Email Marketing at Scale',
      description: 'Design responsive emails, automate campaigns, and deliver personalized content to millions with sophisticated segmentation.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Journey Builder',
      description: 'Create multi-channel customer journeys that trigger based on behavior, preferences, and real-time data across touchpoints.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      ),
    },
    {
      title: 'Mobile Studio',
      description: 'Engage customers with SMS, push notifications, and in-app messaging for timely, location-based, and personalized mobile experiences.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Social Media Marketing',
      description: 'Publish content, monitor conversations, and engage with customers across Facebook, Twitter, Instagram, and LinkedIn.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      ),
    },
    {
      title: 'Advertising Studio',
      description: 'Sync CRM data with advertising platforms like Google, Facebook, and LinkedIn for targeted ad campaigns and audience matching.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      ),
    },
    {
      title: 'Einstein AI Insights',
      description: 'Leverage AI for send-time optimization, predictive engagement scoring, and personalized content recommendations.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
    },
  ];

  const howWeHelp = [
    {
      title: 'Marketing Strategy',
      description: 'Define customer segments, journey maps, and campaign objectives aligned with your business goals and brand voice.',
    },
    {
      title: 'Account Setup & Structure',
      description: 'Configure business units, data extensions, subscriber keys, and permissions for a scalable Marketing Cloud instance.',
    },
    {
      title: 'Email Template Design',
      description: 'Create responsive, brand-consistent email templates using Content Builder with dynamic content and personalization.',
    },
    {
      title: 'Journey Configuration',
      description: 'Build automated customer journeys with triggers, decision splits, wait periods, and multi-channel touchpoints.',
    },
    {
      title: 'Data Integration',
      description: 'Connect Marketing Cloud with Sales Cloud, Service Cloud, e-commerce platforms, and other data sources for unified views.',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Set up dashboards, custom reports, and attribution models to measure campaign performance and ROI.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Salesforce Marketing Cloud
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Create Personalized Customer Journeys Across Every Channel
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Marketing Cloud is the leading platform for digital marketing automation, enabling personalized
              experiences across email, mobile, social, advertising, and web. Drive engagement, nurture leads,
              and measure every interaction with precision.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-700 transition-all hover:shadow-lg"
            >
              Get Started with Marketing Cloud
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Marketing Cloud?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most comprehensive digital marketing platform for creating 1-to-1 customer journeys at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 bg-gradient-to-br from-gray-50 to-pink-50 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Appdraft Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marketing Cloud is powerful but complex. We help you implement it strategically and avoid common pitfalls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howWeHelp.map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-pink-600 opacity-20 mb-4">
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

          <div className="mt-16 bg-pink-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Marketing Cloud Studios
            </h3>
            <p className="text-xl text-pink-100 mb-8">
              Marketing Cloud consists of specialized studios for different channels and use cases
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold text-white mb-1">Email Studio</h4>
                <p className="text-pink-100 text-sm">Campaign creation and delivery</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold text-white mb-1">Mobile Studio</h4>
                <p className="text-pink-100 text-sm">SMS, push, and in-app messaging</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold text-white mb-1">Social Studio</h4>
                <p className="text-pink-100 text-sm">Social listening and publishing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold text-white mb-1">Advertising Studio</h4>
                <p className="text-pink-100 text-sm">Audience synchronization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Let's discuss how Marketing Cloud can help you create personalized experiences that drive results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services/implementation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-700 transition-all"
            >
              Learn About Implementation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
