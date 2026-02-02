import Link from 'next/link';

export const metadata = {
  title: 'Salesforce for Healthcare | Appdraft',
  description: 'Expert Salesforce solutions for healthcare organizations. Manage patient engagement, care coordination, provider relationships, and compliance with Health Cloud.',
};

export default function Healthcare() {
  const challenges = [
    {
      title: 'Patient Engagement',
      description: 'Difficulty maintaining consistent communication with patients across their care journey and multiple touchpoints',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      ),
    },
    {
      title: 'Care Coordination',
      description: 'Managing care teams, referrals, and handoffs across multiple providers and care settings',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
    },
    {
      title: 'Regulatory Compliance',
      description: 'Ensuring HIPAA compliance, data security, and proper audit trails for all patient interactions',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
    },
    {
      title: 'Provider Relationships',
      description: 'Managing complex networks of referring physicians, specialists, and care partners',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Population Health',
      description: 'Identifying high-risk patients, managing chronic conditions, and coordinating preventive care programs',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
    },
    {
      title: 'Revenue Cycle',
      description: 'Managing patient billing, insurance verification, claims, and payment collections efficiently',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
  ];

  const solutions = [
    {
      title: 'Patient 360 View',
      description: 'Unified view of patient demographics, care history, medications, appointments, and communications powered by Health Cloud.',
    },
    {
      title: 'Care Management',
      description: 'Create and track care plans, coordinate care teams, manage chronic conditions, and monitor patient progress against goals.',
    },
    {
      title: 'Provider Network Management',
      description: 'Manage referring physicians, specialists, and care partners with relationship tracking, referral management, and collaboration tools.',
    },
    {
      title: 'Patient Engagement',
      description: 'Automated appointment reminders, personalized health education, secure messaging, and patient portals for self-service.',
    },
    {
      title: 'Population Health Analytics',
      description: 'Identify high-risk patients, stratify populations, track quality metrics, and manage preventive care programs at scale.',
    },
    {
      title: 'HIPAA-Compliant Platform',
      description: 'Built on Salesforce Shield with encryption, audit trails, field-level security, and compliance controls for protected health information.',
    },
  ];

  const benefits = [
    'Improve patient satisfaction scores through better communication and engagement',
    'Reduce readmission rates with proactive care management and follow-up',
    'Increase provider referrals through better relationship management',
    'Enhance care coordination across your provider network',
    'Streamline administrative workflows to focus more time on patient care',
    'Meet regulatory requirements with built-in compliance controls',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Healthcare
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Salesforce Health Cloud for Healthcare Organizations
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From hospitals and clinics to health systems and payers, we help healthcare organizations
              deliver coordinated, patient-centered care with Salesforce Health Cloud.
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
              Healthcare Challenges We Address
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern healthcare demands modern solutions for patient engagement and care coordination
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
              How Appdraft Helps Healthcare Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built Salesforce Health Cloud solutions designed for the complexity of healthcare
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
                Deliver Better Patient Outcomes
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Healthcare organizations using Health Cloud with Appdraft see meaningful improvements in patient care
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
                A regional healthcare system implemented Health Cloud with Appdraft and achieved:
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">28%</div>
                  <div className="text-blue-100">Reduction in hospital readmissions</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">40%</div>
                  <div className="text-blue-100">Increase in patient engagement scores</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">35%</div>
                  <div className="text-blue-100">Improvement in care coordination efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Specializations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expertise Across Healthcare Sectors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Health Systems</h3>
              <p className="text-gray-600 text-sm">Care coordination, population health, provider networks</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Medical Groups</h3>
              <p className="text-gray-600 text-sm">Patient engagement, referral management, practice operations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Specialty Clinics</h3>
              <p className="text-gray-600 text-sm">Chronic disease management, treatment protocols, outcomes tracking</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Health Plans</h3>
              <p className="text-gray-600 text-sm">Member management, care management, utilization management</p>
            </div>
          </div>

          <div className="mt-16 bg-blue-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              HIPAA-Compliant Implementation
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We follow healthcare industry best practices and implement Salesforce Shield to ensure
              your Health Cloud implementation meets all regulatory requirements.
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
            Ready to Transform Patient Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Health Cloud can help you improve patient outcomes and care coordination
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
