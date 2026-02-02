import Link from 'next/link';

export const metadata = {
  title: 'Custom Salesforce Development | Appdraft',
  description: 'Bespoke Salesforce development services including custom apps, integrations, and automation. Tailored solutions for unique business requirements.',
};

export default function CustomDevelopment() {
  const capabilities = [
    {
      title: 'Custom Applications',
      description: 'Build tailored Lightning components and applications that extend Salesforce to meet your specific business needs',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: 'Complex Integrations',
      description: 'Connect Salesforce with external systems through robust, scalable integrations using APIs and middleware',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Advanced Automation',
      description: 'Develop sophisticated automation solutions using Apex, Flow, and Process Builder to streamline operations',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Data Migration',
      description: 'Safely migrate complex data structures from legacy systems with validation and quality assurance',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
    },
    {
      title: 'Custom Objects & Fields',
      description: 'Design and implement custom data models that perfectly align with your business processes',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Reporting Solutions',
      description: 'Create custom reports, dashboards, and analytics solutions that provide actionable insights',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const technologies = [
    'Apex (Server-side programming)',
    'Lightning Web Components (LWC)',
    'Visualforce',
    'REST and SOAP APIs',
    'Salesforce DX',
    'Integration platforms (Zapier, Workato)',
    'JavaScript and modern frameworks',
    'Database design and optimization',
  ];

  const approach = [
    {
      title: 'Requirements Discovery',
      description: 'We thoroughly understand your business challenge and explore all solution options',
    },
    {
      title: 'Technical Design',
      description: 'Detailed technical specification with architecture diagrams and implementation plan',
    },
    {
      title: 'Iterative Development',
      description: 'Agile development with regular check-ins and demonstrations of progress',
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing',
    },
    {
      title: 'Deployment & Documentation',
      description: 'Smooth production deployment with complete documentation and knowledge transfer',
    },
    {
      title: 'Ongoing Support',
      description: 'Post-deployment support and maintenance to ensure continued success',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Custom Salesforce Development
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              When standard Salesforce functionality is not enough, we build custom solutions that precisely
              match your unique business requirements. From complex integrations to bespoke applications,
              we extend Salesforce to work exactly how you need it to.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Development Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive development services to extend and enhance your Salesforce platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-600">
                Expert knowledge across the full Salesforce development stack
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured methodology that ensures successful delivery of custom solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="text-6xl font-bold text-blue-600 opacity-20 absolute top-4 right-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Appdraft for Custom Development
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Proportionate Solutions
              </h3>
              <p className="text-gray-600">
                We build what you need, not what sounds impressive. Our solutions are right-sized
                for your business, avoiding unnecessary complexity and technical debt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Deep Salesforce Expertise
              </h3>
              <p className="text-gray-600">
                With 130+ projects delivered, we understand how to build custom solutions that
                integrate seamlessly with Salesforce best practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Maintainable Code
              </h3>
              <p className="text-gray-600">
                We write clean, well-documented code with proper test coverage, making future
                maintenance and enhancements straightforward.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Long-Term Partnership
              </h3>
              <p className="text-gray-600">
                We are here to support your custom solutions long after deployment, with ongoing
                maintenance and enhancement services available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your unique requirements and explore how custom development can solve your business challenges
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
              View Implementation Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
