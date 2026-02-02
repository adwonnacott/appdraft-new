import Link from 'next/link';

export const metadata = {
  title: 'Salesforce for Professional Services | Appdraft',
  description: 'Expert Salesforce implementation for professional services firms. Manage projects, track time, improve resource allocation, and deliver client excellence.',
};

export default function ProfessionalServices() {
  const challenges = [
    {
      title: 'Resource Management',
      description: 'Difficulty allocating staff across multiple projects, leading to over-commitment or underutilization',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      ),
    },
    {
      title: 'Project Profitability',
      description: 'Lack of visibility into project costs, time tracking, and margins affecting profitability',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Client Communication',
      description: 'Fragmented communications across email, spreadsheets, and multiple tools creating confusion',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      ),
    },
    {
      title: 'Time Tracking',
      description: 'Manual time entry processes leading to lost billable hours and inaccurate project costing',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: 'Pipeline Visibility',
      description: 'Limited insight into upcoming opportunities and forecasting for future resource needs',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
    },
    {
      title: 'Knowledge Management',
      description: 'Critical client information and project knowledge trapped in individual inboxes and documents',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
    },
  ];

  const solutions = [
    {
      title: 'Project Management',
      description: 'Track projects from opportunity to completion with custom objects for engagements, milestones, deliverables, and task management.',
    },
    {
      title: 'Resource Planning',
      description: 'Visualize team capacity, allocate resources effectively, and forecast staffing needs based on your project pipeline.',
    },
    {
      title: 'Time & Expense Tracking',
      description: 'Capture billable hours directly in Salesforce with mobile time entry, approval workflows, and integration with accounting systems.',
    },
    {
      title: 'Client Portals',
      description: 'Give clients secure access to project status, deliverables, and communications through Experience Cloud portals.',
    },
    {
      title: 'Quoting & Billing',
      description: 'Generate accurate project quotes, track change orders, and integrate with invoicing systems for seamless billing.',
    },
    {
      title: 'Performance Analytics',
      description: 'Real-time dashboards showing utilization rates, project profitability, revenue forecasts, and team performance metrics.',
    },
  ];

  const benefits = [
    'Improve resource utilization by 30% with better visibility and planning',
    'Reduce time spent on administrative tasks by automating project workflows',
    'Increase project profitability with accurate time tracking and cost management',
    'Enhance client satisfaction through better communication and transparency',
    'Make data-driven decisions with real-time insights into firm performance',
    'Scale operations without adding administrative overhead',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Professional Services
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Salesforce for Professional Services Firms
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From consulting and accounting to legal and marketing agencies, we help professional services
              firms manage projects, optimize resources, and deliver exceptional client experiences with Salesforce.
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
              Common Challenges in Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique pressures facing professional services firms
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
              How Appdraft Helps Professional Services Firms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored Salesforce solutions designed specifically for project-based businesses
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
                Key Benefits for Your Firm
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our clients see measurable improvements in efficiency, profitability, and client satisfaction
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
                A 25-person consulting firm implemented Salesforce PSA with Appdraft and achieved:
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">35%</div>
                  <div className="text-blue-100">Increase in billable utilization</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">50%</div>
                  <div className="text-blue-100">Reduction in project overruns</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">25%</div>
                  <div className="text-blue-100">Improvement in client satisfaction scores</div>
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
              Proven Implementation Process
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We've implemented Salesforce for professional services firms across the UK,
              following a structured six-step process that ensures success from day one.
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
            Ready to Transform Your Professional Services Firm?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Salesforce can help you manage projects more effectively and grow profitably
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
