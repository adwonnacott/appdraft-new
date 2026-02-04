import MultiStepForm from '@/components/ui/MultiStepForm';

export default function ContactDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#3cd6bf] font-semibold tracking-wide uppercase text-sm mb-4">
            Component Demo
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Multi-Step Contact Form
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A wizard-style form that qualifies leads by capturing industry, budget,
            timeline, and project details across multiple steps.
          </p>
        </div>
      </section>

      {/* Form Component */}
      <section className="px-4 pb-24">
        <MultiStepForm />
      </section>

      {/* Features */}
      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Form Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>4 Steps</strong> - Contact info → Business details → Project scope → Final details</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Visual progress bar</strong> - Shows completion status with checkmarks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Validation</strong> - Required fields checked before advancing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Multi-select services</strong> - Users can choose multiple services needed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Summary review</strong> - Final step shows all selections before submit</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Success state</strong> - Confirmation with next steps after submission</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Lead Qualification Data Captured:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <span>• Name & email</span>
                <span>• Company & job title</span>
                <span>• Industry</span>
                <span>• Company size</span>
                <span>• Current CRM</span>
                <span>• Services needed</span>
                <span>• Timeline</span>
                <span>• Budget range</span>
                <span>• Challenges</span>
                <span>• How they found you</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
