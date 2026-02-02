import Link from 'next/link';

export const metadata = {
  title: 'Salesforce Field Service Implementation | Appdraft',
  description: 'Optimize field operations with intelligent scheduling, mobile workforce management, and real-time visibility into field service delivery.',
};

export default function FieldService() {
  const benefits = [
    {
      title: 'Intelligent Scheduling',
      description: 'AI-powered scheduling engine optimizes technician assignments based on skills, location, availability, and customer priority.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Mobile Workforce App',
      description: 'Empower field technicians with a powerful mobile app for job details, customer history, parts inventory, and real-time updates.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Dispatch Console',
      description: 'Drag-and-drop Gantt chart interface for dispatchers to visualize schedules, manage changes, and optimize routes in real-time.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      ),
    },
    {
      title: 'Asset Management',
      description: 'Track customer assets, maintenance history, warranty information, and service contracts for proactive maintenance planning.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      ),
    },
    {
      title: 'Inventory Management',
      description: 'Track parts inventory across vans, warehouses, and locations. Ensure technicians have the right parts for every job.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      ),
    },
    {
      title: 'Customer Communication',
      description: 'Automated appointment confirmations, technician arrival notifications, and real-time ETAs keep customers informed.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
    },
  ];

  const howWeHelp = [
    {
      title: 'Service Process Design',
      description: 'Map your field service workflows, job types, service territories, and business rules to create an optimized system.',
    },
    {
      title: 'Scheduling Configuration',
      description: 'Configure scheduling policies, work rules, skills matrix, and optimization parameters for your specific operations.',
    },
    {
      title: 'Mobile App Setup',
      description: 'Customize the mobile app with your branding, required fields, offline access, and integration with existing tools.',
    },
    {
      title: 'Territory Management',
      description: 'Define service territories, operating hours, and resource assignments to optimize coverage and response times.',
    },
    {
      title: 'Integration & Migration',
      description: 'Connect with ERP, accounting, inventory systems, and telematics. Migrate existing asset and customer data.',
    },
    {
      title: 'Team Training',
      description: 'Comprehensive training for dispatchers, mobile workers, and managers on using Field Service effectively.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Salesforce Field Service
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Field Operations with Intelligent Scheduling
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Field Service is the complete mobile workforce management solution for scheduling, dispatching, and
              managing field technicians. Increase first-time fix rates, improve resource utilization, and deliver
              exceptional on-site service experiences.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all hover:shadow-lg"
            >
              Get Started with Field Service
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Field Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage a mobile workforce, from intelligent scheduling to real-time visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Appdraft Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've implemented Field Service for HVAC, electrical, plumbing, telecommunications, and equipment maintenance companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howWeHelp.map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-orange-600 opacity-20 mb-4">
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

          <div className="mt-16 bg-orange-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Typical Results
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-white mb-2">25%</div>
                <p className="text-orange-100">Increase in jobs completed per day</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-white mb-2">30%</div>
                <p className="text-orange-100">Reduction in travel time and costs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <p className="text-orange-100">Improvement in first-time fix rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Field Operations?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss how Field Service can help you schedule smarter, work faster, and deliver better service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services/implementation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all"
            >
              Learn About Implementation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
