'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AssessmentProvider, useAssessment } from '@/components/assessment/AssessmentProvider';
import HealthScoreDisplay from '@/components/assessment/results/HealthScoreDisplay';
import CostImpactCard from '@/components/assessment/results/CostImpactCard';
import RecommendationList from '@/components/assessment/results/RecommendationList';
import QuickWins from '@/components/assessment/results/QuickWins';
import CTASection from '@/components/assessment/results/CTASection';

function ResultsContent() {
  const { state } = useAssessment();
  const router = useRouter();

  useEffect(() => {
    // Redirect if no results available
    if (state.currentStep !== 'results' || !state.recommendations.length) {
      router.push('/services/health-checks/assessment');
    }
  }, [state, router]);

  if (state.currentStep !== 'results') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Salesforce Health Report
          </h1>
          <p className="text-xl text-gray-600">
            Hi {state.leadInfo.firstName}! Here's what we found based on your responses.
          </p>
        </div>

        <CostImpactCard totalCost={state.totalEstimatedCost} />

        <HealthScoreDisplay scores={state.scores} />

        <QuickWins recommendations={state.recommendations} />

        <RecommendationList recommendations={state.recommendations} />

        <CTASection />

        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Results based on {state.selectedProblems.length} selected problem areas and industry benchmarks from 130+ implementations</p>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <AssessmentProvider>
      <ResultsContent />
    </AssessmentProvider>
  );
}
