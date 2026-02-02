import Link from 'next/link';

const platforms = [
  {
    name: 'Sales Cloud',
    description: 'Streamline your sales processes and increase productivity',
    link: '/salesforce/sales-cloud',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Service Cloud',
    description: 'Deliver exceptional customer service at scale',
    link: '/salesforce/service-cloud',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Experience Cloud',
    description: 'Build engaging digital experiences for customers and partners',
    link: '/salesforce/experience-cloud',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Field Service',
    description: 'Optimize your field operations and mobile workforce',
    link: '/salesforce/field-service',
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Marketing Cloud',
    description: 'Create personalized marketing journeys',
    link: '/salesforce/marketing-cloud',
    color: 'from-pink-500 to-pink-600',
  },
  {
    name: 'Agentforce',
    description: 'Implement AI-powered autonomous agents',
    link: '/salesforce/agentforce',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function SalesforceExpertise() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Salesforce Know How</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise across the entire Salesforce platform ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.link}
              className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{platform.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  Explore
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
