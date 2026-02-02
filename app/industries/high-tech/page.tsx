import Link from 'next/link';

export const metadata = {
  title: 'Salesforce for High Tech Companies | Appdraft',
  description: 'Expert Salesforce solutions for high-tech companies. Manage complex sales cycles, channel partners, product launches, and customer success.',
};

export default function HighTech() {
  const challenges = [
    {
      title: 'Complex Sales Cycles',
      description: 'Managing lengthy enterprise sales with multiple stakeholders, technical evaluations, and proof of concepts',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: 'Channel Partner Management',
      description: 'Coordinating with resellers, distributors, and implementation partners across diverse markets',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      ),
    },
    {
      title: 'Product Lifecycle',
      description: 'Tracking multiple product versions, feature requests, and coordinating releases with customer needs',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      ),
    },
    {
      title: 'Customer Success',
      description: 'Ensuring customer adoption, preventing churn, and identifying expansion opportunities in a competitive market',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      ),
    },
    {
      title: 'Technical Pre-Sales',
      description: 'Coordinating solution engineers, demos, POCs, and technical documentation throughout the sales process',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
    },
    {
      title: 'Rapid Market Changes',
      description: 'Adapting quickly to technology shifts, competitive threats, and evolving customer requirements',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
    },
  ];

  const solutions = [
    {
      title: 'Enterprise Sales Management',
      description: 'Track complex B2B sales cycles with custom stages, technical milestones, multi-threading capabilities, and deal room functionality.',
    },
    {
      title: 'Partner Relationship Management',
      description: 'Manage partner ecosystems with portals, deal registration, MDF tracking, co-selling workflows, and performance analytics.',
    },
    {
      title: 'Product & Release Management',
      description: 'Link opportunities to product roadmaps, track feature requests, manage beta programs, and coordinate go-to-market activities.',
    },
    {
      title: 'Customer Success Platform',
      description: 'Monitor health scores, track adoption metrics, automate renewals, identify upsell opportunities, and prevent churn proactively.',
    },
    {
      title: 'Sales Engineering Coordination',
      description: 'Schedule demos, track POC progress, document technical requirements, and collaborate seamlessly between sales and engineering.',
    },
    {
      title: 'Quote-to-Cash Automation',
      description: 'Configure complex products, generate accurate quotes with CPQ, manage subscriptions, and integrate with ERP systems.',
    },
  ];

  const benefits = [
    'Accelerate sales cycles by 30% with better visibility and coordination',
    'Increase partner-sourced revenue through improved channel management',
    'Reduce churn with proactive customer success monitoring and intervention',
    'Improve forecast accuracy with AI-powered insights and pipeline analysis',
    'Scale operations efficiently as you enter new markets and segments',
    'Enhance product-market fit by capturing and acting on customer feedback',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              High Tech
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Salesforce for High-Tech Companies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From SaaS platforms and software companies to hardware manufacturers and tech services, we help
              high-tech companies accelerate growth, manage complexity, and deliver exceptional customer experiences.
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
              Unique Challenges in High Tech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technology companies face distinct challenges that require specialized solutions
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
              How Appdraft Helps High-Tech Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built Salesforce solutions for the complexity and pace of the tech industry
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
                Accelerate Growth and Innovation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                High-tech companies partnering with Appdraft see measurable improvements in key growth metrics
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
                A growing SaaS company implemented Salesforce with Appdraft and achieved:
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">45%</div>
                  <div className="text-blue-100">Reduction in sales cycle length</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">35%</div>
                  <div className="text-blue-100">Increase in partner-sourced deals</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">20%</div>
                  <div className="text-blue-100">Improvement in customer retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specializations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expertise Across Tech Segments
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">SaaS & Cloud</h3>
              <p className="text-gray-600 text-sm">Subscription management, usage tracking, customer success platforms</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Software</h3>
              <p className="text-gray-600 text-sm">Complex sales cycles, partner ecosystems, professional services</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hardware & IoT</h3>
              <p className="text-gray-600 text-sm">Device management, warranty tracking, field service integration</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tech Services</h3>
              <p className="text-gray-600 text-sm">Project delivery, resource management, client engagement</p>
            </div>
          </div>

          <div className="mt-16 bg-blue-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Built for Scale and Speed
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our implementations are designed to grow with your business, supporting your expansion
              from startup to scale-up and beyond.
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
            Ready to Scale Your High-Tech Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Salesforce can help you accelerate growth and win in competitive markets
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
