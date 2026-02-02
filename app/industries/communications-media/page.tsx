import Link from 'next/link';

export const metadata = {
  title: 'Salesforce for Communications & Media | Appdraft',
  description: 'Expert Salesforce solutions for communications and media companies. Manage advertising sales, content distribution, audience engagement, and subscriber relationships.',
};

export default function CommunicationsMedia() {
  const challenges = [
    {
      title: 'Audience Fragmentation',
      description: 'Reaching audiences across multiple platforms and channels while maintaining consistent messaging',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
    },
    {
      title: 'Ad Sales Complexity',
      description: 'Managing complex advertising packages across digital, print, and broadcast with varying rates and schedules',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: 'Subscription Management',
      description: 'Tracking subscriber lifecycles, renewals, upgrades, and churn across multiple products and tiers',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      ),
    },
    {
      title: 'Content Performance',
      description: 'Limited visibility into which content resonates with audiences and drives engagement or conversions',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
    },
    {
      title: 'Advertiser Relationships',
      description: 'Managing complex relationships with agencies, direct advertisers, and programmatic partners',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Revenue Attribution',
      description: 'Difficulty attributing revenue to specific campaigns, channels, or content pieces for ROI analysis',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      ),
    },
  ];

  const solutions = [
    {
      title: 'Unified Customer View',
      description: 'Consolidate subscriber, advertiser, and audience data into a single platform for complete visibility across all touchpoints.',
    },
    {
      title: 'Advertising Sales Management',
      description: 'Manage complex ad campaigns, inventory, pricing, and billing with custom objects and automated workflows.',
    },
    {
      title: 'Subscription Lifecycle',
      description: 'Track subscriber journeys from acquisition through renewal with automated communications and churn prevention workflows.',
    },
    {
      title: 'Campaign Management',
      description: 'Plan, execute, and measure marketing campaigns across channels with Marketing Cloud integration and attribution reporting.',
    },
    {
      title: 'Audience Segmentation',
      description: 'Create sophisticated audience segments based on behavior, demographics, and engagement for targeted content and advertising.',
    },
    {
      title: 'Performance Analytics',
      description: 'Real-time dashboards showing ad revenue, subscription metrics, content performance, and audience engagement across all properties.',
    },
  ];

  const benefits = [
    'Increase advertising revenue with better inventory management and rate optimization',
    'Reduce subscriber churn through proactive engagement and retention campaigns',
    'Improve content strategy with data-driven insights into audience preferences',
    'Streamline sales processes for faster deal closing and campaign execution',
    'Enhance advertiser satisfaction with transparency and performance reporting',
    'Scale operations efficiently as you add new channels and products',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Communications & Media
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Salesforce for Communications & Media Companies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From publishers and broadcasters to digital media and advertising agencies, we help media companies
              manage advertising sales, subscriber relationships, and audience engagement with Salesforce.
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
              Challenges Facing Media Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The media landscape is evolving rapidly. We understand your unique challenges.
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
              How Appdraft Helps Media Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized Salesforce solutions for the unique needs of media and communications
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
                Drive Growth in a Competitive Market
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Media companies using Salesforce with Appdraft see significant improvements across key metrics
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
              <h3 className="text-2xl font-bold mb-4">Success Story</h3>
              <p className="text-blue-100 mb-6">
                A regional publisher implemented Salesforce with Appdraft and achieved:
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">40%</div>
                  <div className="text-blue-100">Increase in digital advertising revenue</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">25%</div>
                  <div className="text-blue-100">Reduction in subscriber churn</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">60%</div>
                  <div className="text-blue-100">Faster campaign setup and execution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tailored for Your Media Type
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Publishing</h3>
              <p className="text-gray-600 text-sm">Subscription management, content analytics, reader engagement</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Broadcasting</h3>
              <p className="text-gray-600 text-sm">Ad inventory management, programming insights, viewer analytics</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Media</h3>
              <p className="text-gray-600 text-sm">Programmatic advertising, audience segmentation, multi-channel campaigns</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Agencies</h3>
              <p className="text-gray-600 text-sm">Client management, campaign tracking, performance reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Media Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Salesforce can help you grow revenue and engage audiences more effectively
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services/implementation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
