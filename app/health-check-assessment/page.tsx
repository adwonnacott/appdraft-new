import HealthCheckAssessment from '@/components/ui/HealthCheckAssessment';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Free Salesforce Health Check Assessment',
  description: 'Take our free 5-minute Salesforce assessment. Get an instant health score across 6 key areas with actionable recommendations for your org.',
  keywords: ['Salesforce health check', 'Salesforce assessment', 'CRM audit', 'Salesforce review', 'free Salesforce assessment'],
  openGraph: {
    title: 'Free Salesforce Health Check Assessment | Appdraft',
    description: 'Get an instant health score for your Salesforce org in just 5 minutes.',
    url: 'https://appdraft.com/health-check-assessment',
  },
  alternates: {
    canonical: 'https://appdraft.com/health-check-assessment',
  },
};

export default function HealthCheckAssessmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 bg-[#3cd6bf]/10 text-[#3cd6bf] rounded-full text-sm font-medium mb-6">
              Free Assessment
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Healthy Is Your{' '}
              <span className="text-[#3cd6bf]">Salesforce Org?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Answer 16 quick questions to get an instant health score across 6 key areas.
              Identify issues and get actionable recommendations.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Takes 5 minutes
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Instant results
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                100% free
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Assessment */}
      <section className="px-4 pb-24">
        <HealthCheckAssessment />
      </section>

      {/* Trust Indicators */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#3cd6bf] mb-2">130+</div>
              <div className="text-gray-600">Salesforce projects delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#3cd6bf] mb-2">15+</div>
              <div className="text-gray-600">Years of experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#3cd6bf] mb-2">5.0</div>
              <div className="text-gray-600">AppExchange rating</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
