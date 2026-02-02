import Link from 'next/link';

export const metadata = {
  title: 'Salesforce Service Cloud Implementation | Appdraft',
  description: 'Expert Service Cloud implementation to deliver exceptional customer support, reduce case resolution time, and improve customer satisfaction.',
};

export default function ServiceCloud() {
  const benefits = [
    {
      title: 'Omnichannel Support',
      description: 'Manage customer inquiries from email, phone, chat, social media, and web forms in one unified console for faster resolution.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      ),
    },
    {
      title: 'Intelligent Case Routing',
      description: 'Automatically assign cases to the right agent based on skills, workload, and availability for faster first-time resolution.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      ),
    },
    {
      title: 'Knowledge Base',
      description: 'Build a self-service portal with articles, FAQs, and guides that empower customers to find answers on their own.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
    },
    {
      title: 'Service Analytics',
      description: 'Track key metrics like first response time, resolution time, customer satisfaction scores, and agent performance in real-time.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
    },
    {
      title: 'SLA Management',
      description: 'Define and track service level agreements with automated escalations and milestones to ensure commitments are met.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: 'Einstein AI Assistance',
      description: 'AI-powered case classification, article recommendations, and next-best-action suggestions help agents resolve cases faster.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
    },
  ];

  const howWeHelp = [
    {
      title: 'Support Process Mapping',
      description: 'We analyze your current support workflows, escalation paths, and team structure to design a Service Cloud setup that fits.',
    },
    {
      title: 'Case Management Setup',
      description: 'Configure case types, queues, routing rules, and assignment logic to ensure inquiries reach the right person quickly.',
    },
    {
      title: 'Knowledge Base Creation',
      description: 'Build and organize a comprehensive knowledge base with article templates, approval workflows, and search optimization.',
    },
    {
      title: 'Omnichannel Configuration',
      description: 'Set up email-to-case, web-to-case, live chat, and social channels so all customer inquiries flow into one place.',
    },
    {
      title: 'Reporting & Dashboards',
      description: 'Create custom reports and dashboards to track team performance, customer satisfaction, and operational efficiency.',
    },
    {
      title: 'Agent Training',
      description: 'Comprehensive training for support agents and managers on using Service Cloud effectively, including best practices.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Salesforce Service Cloud
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Deliver Exceptional Customer Service at Scale
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Service Cloud is the complete customer service platform for managing cases, knowledge, and customer engagement across
              all channels. Resolve issues faster, improve satisfaction scores, and empower your support team with intelligent tools.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all hover:shadow-lg"
            >
              Get Started with Service Cloud
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Service Cloud?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your support team needs to deliver fast, personalized service across every channel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 bg-gradient-to-br from-gray-50 to-green-50 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Appdraft Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped dozens of support teams transition to Service Cloud smoothly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howWeHelp.map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-green-600 opacity-20 mb-4">
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

          <div className="mt-16 bg-green-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Support After Go-Live
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Our relationship doesn't end at launch. We offer ongoing support packages to help your team adapt,
              optimize, and scale your Service Cloud implementation as your business grows.
            </p>
            <Link
              href="/services/support"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Explore Support Options
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Customer Service?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's discuss how Service Cloud can help your team deliver faster, more personalized support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services/implementation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all"
            >
              Learn About Implementation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
