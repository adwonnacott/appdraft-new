'use client';

import { AssessmentProvider, useAssessment } from '@/components/assessment/AssessmentProvider';
import WelcomeStep from '@/components/assessment/WelcomeStep';
import ProblemSelector from '@/components/assessment/ProblemSelector';
import QuestionFlow from '@/components/assessment/QuestionFlow';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function AssessmentContent() {
  const { state } = useAssessment();
  const router = useRouter();

  // Redirect to results if assessment is complete
  useEffect(() => {
    if (state.currentStep === 'results') {
      router.push('/services/health-checks/assessment/results');
    }
  }, [state.currentStep, router]);

  // Show intro content only on welcome step
  if (state.currentStep === 'welcome') {
    return (
      <>
        {/* Hero Section with Context */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block bg-blue-100 text-appdraft-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Free Interactive Assessment
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Is Your Salesforce Investment Working as Hard as You Are?
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Most Salesforce orgs drift over time. What worked well two years ago might be costing you thousands today.
                Our quick assessment helps you identify hidden problems before they become expensive mistakes.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-appdraft-primary">3 min</div>
                  <div className="text-sm text-gray-600">To Complete</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-appdraft-primary">130+</div>
                  <div className="text-sm text-gray-600">Implementations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-appdraft-primary">5.0</div>
                  <div className="text-sm text-gray-600">AppExchange Rating</div>
                </div>
              </div>
            </div>

            {/* What You'll Discover Section */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  What You'll Discover
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Specific Cost Impacts</h3>
                      <p className="text-gray-600 text-sm">See exactly how much your Salesforce issues are costing you annually in lost productivity and revenue</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Prioritized Recommendations</h3>
                      <p className="text-gray-600 text-sm">Get actionable steps ranked by impact, so you know exactly where to focus first</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Quick Wins</h3>
                      <p className="text-gray-600 text-sm">Immediate actions you can take today to improve your Salesforce, no consultant required</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">ROI Projections</h3>
                      <p className="text-gray-600 text-sm">Understand potential savings and payback periods for fixing identified issues</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Your information is secure and will never be shared</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Step */}
        <WelcomeStep />

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-appdraft-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Select Your Challenges
                  </h3>
                  <p className="text-gray-600">
                    Choose 1-3 problem areas from common Salesforce issues we see across hundreds of implementations
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-appdraft-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Answer Quick Questions
                  </h3>
                  <p className="text-gray-600">
                    2-3 targeted questions per area help us understand your specific situation and calculate impact
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-appdraft-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Get Your Report
                  </h3>
                  <p className="text-gray-600">
                    Instant personalized report with costs, recommendations, and specific actions you can take
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-600 mb-8">
                Based on insights from over 130 Salesforce implementations
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-appdraft-primary mb-2">5.0</div>
                  <div className="text-sm text-gray-600">AppExchange Rating</div>
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-appdraft-primary mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-appdraft-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Salesforce Certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {state.currentStep === 'problem-selection' && <ProblemSelector />}
      {state.currentStep === 'questions' && <QuestionFlow />}
    </>
  );
}

export default function AssessmentPage() {
  return (
    <AssessmentProvider>
      <AssessmentContent />
    </AssessmentProvider>
  );
}
