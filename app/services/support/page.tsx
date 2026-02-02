import Link from 'next/link';

export const metadata = {
  title: 'Salesforce Support Services | Appdraft',
  description: 'Flexible Salesforce support options - pay-as-you-go or retained support. Expert help when you need it.',
};

export default function Support() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Salesforce Support That Evolves With You
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Fix issues, make improvements, and keep moving forward with flexible support that fits your needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              Discuss Your Support Needs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pay-As-You-Go Support</h2>
              <p className="text-gray-600 mb-6">
                No contracts required. Access the same consultants who built your solutions for admin tasks,
                configuration adjustments, and iterative improvements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Billing in six-minute increments without rounding</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No long-term commitment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Perfect for ad-hoc requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-10 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Retained Support</h2>
              <p className="text-gray-600 mb-6">
                Structured monthly hour allocations with formal agreements. Designed for organizations managing
                regular changes, large user bases, or those preferring predictable support access.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Predictable monthly costs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority access to your consultant</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No scope negotiation needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Beyond Troubleshooting</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'System Optimization', desc: 'Usage analysis and feature optimization' },
              { title: 'Security Management', desc: 'User permissions and access control' },
              { title: 'Data Quality', desc: 'Data quality and reporting readiness' },
              { title: 'Configuration', desc: 'Configuration rollout and documentation' },
              { title: 'Strategic Guidance', desc: 'Roadmap planning and recommendations' },
              { title: 'Quick Fixes', desc: 'Rapid response to urgent issues' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get Quick Answers and Practical Fixes</h2>
          <p className="text-xl text-blue-100 mb-8">
            "Appdraft give us quick answers and practical fixes" - B2B Tech Sales Director
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
