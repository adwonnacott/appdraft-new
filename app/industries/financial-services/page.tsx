import Link from 'next/link';

export const metadata = {
  title: 'Salesforce for Financial Services | Appdraft',
  description: 'Expert Salesforce Financial Services Cloud implementation. Manage client relationships, ensure compliance, deliver personalized wealth management, and drive growth.',
};

export default function FinancialServices() {
  const challenges = [
    {
      title: 'Regulatory Compliance',
      description: 'Complex and evolving regulations requiring strict data governance, audit trails, and reporting capabilities',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
    },
    {
      title: 'Client Relationship Management',
      description: 'Difficulty managing complex household relationships, financial goals, and multi-generational wealth planning',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
    },
    {
      title: 'Data Fragmentation',
      description: 'Client information scattered across legacy systems, spreadsheets, and departments hindering holistic view',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      ),
    },
    {
      title: 'Lead Management',
      description: 'Inefficient lead distribution, tracking, and nurturing resulting in missed opportunities and poor conversion',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      ),
    },
    {
      title: 'Advisor Productivity',
      description: 'Advisors spending too much time on administrative tasks instead of building client relationships',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: 'Personalization at Scale',
      description: 'Inability to deliver personalized experiences and advice to growing client base efficiently',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      ),
    },
  ];

  const solutions = [
    {
      title: 'Financial Services Cloud',
      description: 'Implement purpose-built financial services capabilities including household management, financial accounts, and relationship groups.',
    },
    {
      title: 'Compliance & Security',
      description: 'Configure robust security controls, audit logging, data encryption, and compliance reporting to meet FCA and industry standards.',
    },
    {
      title: 'Client Portal',
      description: 'Build secure client portals with Experience Cloud for document sharing, account access, and personalized financial insights.',
    },
    {
      title: 'Advisor Workspace',
      description: 'Create unified workspaces with Einstein Activity Capture, next-best-action recommendations, and integrated communication tools.',
    },
    {
      title: 'Marketing Automation',
      description: 'Deliver targeted, compliant marketing campaigns with Salesforce Marketing Cloud and journey-based client engagement.',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Build comprehensive dashboards for AUM tracking, client segmentation, advisor performance, and compliance monitoring.',
    },
  ];

  const benefits = [
    'Achieve 360-degree view of client households and financial relationships',
    'Reduce compliance risk with automated audit trails and approval workflows',
    'Increase advisor productivity by 25% with streamlined workflows and automation',
    'Improve client satisfaction through personalized service and proactive engagement',
    'Accelerate revenue growth with better lead management and cross-selling',
    'Ensure data security and privacy with enterprise-grade encryption and controls',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Financial Services
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Salesforce for Financial Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From wealth management and private banking to insurance and financial advisory, we help financial
              services firms deliver exceptional client experiences while maintaining the highest standards of compliance and security.
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
              Common Challenges in Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique regulatory and operational pressures facing financial services firms
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
              How Appdraft Helps Financial Services Firms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized Salesforce solutions designed for the unique needs of financial services organizations
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
                Key Benefits for Financial Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our financial services clients see measurable improvements in client satisfaction and operational efficiency
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
                A wealth management firm implemented Salesforce Financial Services Cloud with Appdraft and achieved:
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">45%</div>
                  <div className="text-blue-100">Increase in advisor productivity</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">30%</div>
                  <div className="text-blue-100">Improvement in client retention rates</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">60%</div>
                  <div className="text-blue-100">Reduction in compliance reporting time</div>
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
              FCA-Compliant Implementation
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We've implemented Salesforce for financial services firms across the UK,
              with deep expertise in regulatory compliance, data security, and industry best practices.
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
            Ready to Transform Your Financial Services Firm?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Salesforce Financial Services Cloud can help you deliver exceptional client experiences while ensuring compliance
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
