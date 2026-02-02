import Link from 'next/link';

export const metadata = {
  title: 'Salesforce Sales Cloud Implementation | Appdraft',
  description: 'Expert Sales Cloud implementation services to streamline your sales process, improve pipeline visibility, and accelerate revenue growth.',
};

export default function SalesCloud() {
  const benefits = [
    {
      title: 'Complete Pipeline Visibility',
      description: 'Track every opportunity from lead to close with real-time dashboards and forecasting tools that give you confidence in your numbers.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
    },
    {
      title: 'Automated Sales Workflows',
      description: 'Eliminate repetitive tasks with intelligent automation. From lead assignment to follow-up reminders, keep your team focused on selling.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
    },
    {
      title: 'Mobile Sales Enablement',
      description: 'Empower your team to work from anywhere with full mobile access to customer data, notes, and collaboration tools.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Intelligent Lead Management',
      description: 'Capture leads from multiple sources, score them automatically, and route to the right rep at the right time.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
    },
    {
      title: 'Sales Analytics & AI',
      description: 'Leverage Einstein AI for predictive lead scoring, opportunity insights, and recommendations that help your team close more deals.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
    },
    {
      title: 'Email & Calendar Integration',
      description: 'Seamlessly integrate with Outlook or Gmail to log emails, track opens, and sync calendar events without leaving your inbox.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
    },
  ];

  const howWeHelp = [
    {
      title: 'Sales Process Design',
      description: 'We map your unique sales stages, qualification criteria, and handoff points to create a system that mirrors how you actually sell.',
    },
    {
      title: 'Custom Objects & Fields',
      description: 'Configure Sales Cloud to capture the specific information your business needs without over-complicating the interface.',
    },
    {
      title: 'Pipeline Reporting',
      description: 'Build dashboards and reports that give you real-time visibility into sales performance, forecast accuracy, and rep productivity.',
    },
    {
      title: 'Email & CPQ Integration',
      description: 'Connect Sales Cloud with your existing tools like email, quoting systems, DocuSign, and marketing platforms for a unified workflow.',
    },
    {
      title: 'Team Training',
      description: 'Comprehensive onboarding and training programs to ensure your sales team adopts the new system quickly and enthusiastically.',
    },
    {
      title: 'Data Migration',
      description: 'Safe, accurate migration of your existing customer and opportunity data from spreadsheets, legacy CRMs, or other systems.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Salesforce Sales Cloud
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Sales Process with Sales Cloud
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Sales Cloud is the world's leading CRM platform for managing leads, opportunities, and customer relationships.
              Close deals faster, improve forecast accuracy, and give your sales team the tools they need to succeed.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              Get Started with Sales Cloud
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Sales Cloud?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your sales team needs to build relationships, track opportunities, and close deals faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Appdraft Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've implemented Sales Cloud for over 130 UK businesses. Here's how we'll make it work for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howWeHelp.map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-blue-600 opacity-20 mb-4">
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

          <div className="mt-16 bg-blue-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Implementation Approach
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We follow a proven six-step process from discovery to go-live, ensuring your Sales Cloud implementation
              delivers results from day one.
            </p>
            <Link
              href="/services/implementation"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Sales Cloud can help your team close more deals and grow revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services/support"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all"
            >
              Explore Support Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
