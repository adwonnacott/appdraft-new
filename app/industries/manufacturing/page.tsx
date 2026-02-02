import Link from 'next/link';

export const metadata = {
  title: 'Salesforce for Manufacturing | Appdraft',
  description: 'Expert Salesforce implementation for manufacturing companies. Streamline production planning, manage supply chains, improve customer relationships, and drive operational excellence.',
};

export default function Manufacturing() {
  const challenges = [
    {
      title: 'Supply Chain Visibility',
      description: 'Lack of real-time visibility into supplier performance, inventory levels, and logistics causing delays and inefficiencies',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      ),
    },
    {
      title: 'Channel Partner Management',
      description: 'Difficulty coordinating with distributors, dealers, and partners while maintaining brand consistency',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
    },
    {
      title: 'Quote Configuration',
      description: 'Complex product configurations and pricing rules making quote generation slow and error-prone',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
    },
    {
      title: 'Customer Service',
      description: 'Disconnected systems for tracking warranties, service requests, and equipment maintenance histories',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      ),
    },
    {
      title: 'Forecast Accuracy',
      description: 'Poor visibility into sales pipeline and production capacity leading to over or under-production',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      ),
    },
    {
      title: 'Compliance & Traceability',
      description: 'Difficulty maintaining audit trails, quality standards, and regulatory compliance across operations',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
    },
  ];

  const solutions = [
    {
      title: 'Manufacturing Cloud',
      description: 'Implement Salesforce Manufacturing Cloud for sales agreements, account-based forecasting, and production planning with real-time visibility.',
    },
    {
      title: 'CPQ & Order Management',
      description: 'Configure complex products, automate pricing rules, and streamline order processing from quote to fulfillment with Salesforce CPQ.',
    },
    {
      title: 'Partner Relationship Management',
      description: 'Build partner portals for distributors and dealers to manage leads, access marketing materials, and track sales performance.',
    },
    {
      title: 'Field Service Management',
      description: 'Optimize service operations with intelligent scheduling, mobile workforce management, and IoT-connected equipment monitoring.',
    },
    {
      title: 'Supply Chain Integration',
      description: 'Connect Salesforce with ERP, WMS, and logistics systems to create a unified view of your supply chain operations.',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Gain insights into production efficiency, inventory turns, quality metrics, and customer satisfaction with custom dashboards.',
    },
  ];

  const benefits = [
    'Increase forecast accuracy by up to 40% with better demand visibility',
    'Reduce quote-to-order cycle time by automating configuration and pricing',
    'Improve service response times with field service optimization',
    'Enhance partner collaboration through dedicated portals and communication tools',
    'Gain real-time visibility into production schedules and capacity',
    'Ensure compliance with automated quality tracking and audit trails',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Manufacturing
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Salesforce for Manufacturing Companies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Transform your manufacturing operations with Salesforce. From production planning and supply chain
              management to partner relationships and field service, we help manufacturers connect every part of their business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Challenges in Manufacturing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the complex operational and customer challenges facing manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {challenge.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Appdraft Helps Manufacturers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored Salesforce solutions designed for the unique needs of manufacturing businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-blue-600 opacity-20 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Key Benefits for Manufacturers
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our manufacturing clients see measurable improvements in operational efficiency and customer satisfaction
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Case Study</h3>
              <p className="text-blue-100 mb-6">
                A mid-sized industrial equipment manufacturer implemented Salesforce Manufacturing Cloud with Appdraft and achieved:
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">40%</div>
                  <div className="text-blue-100">Improvement in forecast accuracy</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">60%</div>
                  <div className="text-blue-100">Faster quote generation with CPQ</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">35%</div>
                  <div className="text-blue-100">Reduction in service response times</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Manufacturing-Focused Implementation
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We've implemented Salesforce for manufacturers across various industries,
              from automotive suppliers to industrial equipment makers, with proven methodologies.
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
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Salesforce can help you streamline production, manage partners, and deliver exceptional customer service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services/health-checks"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all"
            >
              Get a Free Health Check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
