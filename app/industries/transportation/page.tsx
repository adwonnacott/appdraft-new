import Link from 'next/link';

export const metadata = {
  title: 'Salesforce for Transportation & Logistics | Appdraft',
  description: 'Expert Salesforce implementation for transportation and logistics companies. Optimize operations, manage fleets, track shipments, and deliver exceptional customer service.',
};

export default function Transportation() {
  const challenges = [
    {
      title: 'Fleet Management',
      description: 'Difficulty tracking vehicle maintenance, driver assignments, and asset utilization across distributed operations',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      ),
    },
    {
      title: 'Shipment Tracking',
      description: 'Limited visibility into shipment status, delivery times, and exceptions causing customer service issues',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      ),
    },
    {
      title: 'Quote Complexity',
      description: 'Complex pricing with multiple variables like weight, distance, service level, and fuel surcharges',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Customer Communication',
      description: 'Manual status updates and fragmented communication channels leading to customer dissatisfaction',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      ),
    },
    {
      title: 'Driver & Crew Management',
      description: 'Poor visibility into driver hours, certifications, performance, and compliance requirements',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      ),
    },
    {
      title: 'Route Optimization',
      description: 'Inefficient route planning and lack of dynamic rerouting capabilities affecting delivery performance',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      ),
    },
  ];

  const solutions = [
    {
      title: 'Transportation Cloud',
      description: 'Implement OmniChannel Inventory for real-time capacity management, shipment tracking, and delivery optimization.',
    },
    {
      title: 'Field Service Management',
      description: 'Optimize driver scheduling, route planning, and mobile workforce management with intelligent dispatch and real-time updates.',
    },
    {
      title: 'Customer Portal',
      description: 'Provide customers with self-service access to track shipments, request quotes, manage accounts, and view invoices.',
    },
    {
      title: 'Quote & Order Management',
      description: 'Automate complex pricing calculations, generate instant quotes, and streamline order processing with Salesforce CPQ.',
    },
    {
      title: 'Asset & Fleet Management',
      description: 'Track vehicles, equipment maintenance, inspections, and utilization with custom objects integrated with telematics systems.',
    },
    {
      title: 'Analytics & KPIs',
      description: 'Monitor on-time delivery rates, fleet utilization, revenue per mile, and customer satisfaction with real-time dashboards.',
    },
  ];

  const benefits = [
    'Improve on-time delivery performance by 30% with better planning and tracking',
    'Increase fleet utilization and reduce empty miles',
    'Reduce quote-to-contract time with automated pricing and approvals',
    'Enhance customer satisfaction with proactive communication and visibility',
    'Optimize driver productivity and ensure compliance with regulations',
    'Gain real-time visibility into operations across all locations',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Transportation & Logistics
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Salesforce for Transportation & Logistics
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From freight forwarding and last-mile delivery to fleet management and 3PL operations, we help
              transportation companies optimize operations, improve visibility, and deliver exceptional customer experiences.
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
              Common Challenges in Transportation & Logistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the operational complexity and customer demands in transportation
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
              How Appdraft Helps Transportation Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored Salesforce solutions designed for the unique needs of transportation and logistics businesses
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
                Key Benefits for Transportation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our transportation clients see measurable improvements in operational efficiency and customer satisfaction
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
                A regional logistics provider implemented Salesforce with Appdraft and achieved:
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">32%</div>
                  <div className="text-blue-100">Improvement in on-time delivery</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">45%</div>
                  <div className="text-blue-100">Reduction in quote generation time</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">25%</div>
                  <div className="text-blue-100">Increase in fleet utilization</div>
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
              Transportation-Focused Implementation
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We've implemented Salesforce for freight companies, courier services, and logistics providers
              across the UK, with deep expertise in operations and customer management.
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
            Ready to Transform Your Transportation Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Salesforce can help you optimize operations, improve delivery performance, and enhance customer satisfaction
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
