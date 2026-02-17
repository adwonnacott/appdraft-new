'use client';

import { useState } from 'react';
import { useAssessment } from './AssessmentProvider';
import { problemAreas } from '@/lib/assessment/questions';
import { ProblemArea } from '@/lib/assessment/types';

export default function ProblemSelector() {
  const { actions } = useAssessment();
  const [selected, setSelected] = useState<ProblemArea[]>([]);
  const [error, setError] = useState<string>('');

  const toggleProblem = (problemId: ProblemArea) => {
    setError('');
    setSelected(prev => {
      if (prev.includes(problemId)) {
        return prev.filter(id => id !== problemId);
      } else if (prev.length >= 3) {
        setError('Please select up to 3 priorities');
        return prev;
      } else {
        return [...prev, problemId];
      }
    });
  };

  const handleContinue = () => {
    if (selected.length === 0) {
      setError('Please select at least 1 problem area');
      return;
    }
    actions.selectProblems(selected);
  };

  const handleBack = () => {
    actions.previousStep();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Which of these sound familiar?
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Select 1-3 problem areas you'd like to focus on
          </p>
          <p className="text-sm text-gray-500">
            {selected.length} of 3 selected
          </p>
          {error && (
            <p className="mt-4 text-sm text-red-600 font-medium">{error}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problemAreas.map((problem) => {
            const isSelected = selected.includes(problem.id);
            return (
              <button
                key={problem.id}
                onClick={() => toggleProblem(problem.id)}
                className={`
                  relative p-6 rounded-xl text-left transition-all duration-200 h-full
                  ${
                    isSelected
                      ? 'bg-blue-50 border-2 border-appdraft-primary shadow-lg ring-2 ring-appdraft-primary/20'
                      : 'bg-white border-2 border-gray-200 hover:border-appdraft-primary/50 hover:shadow-md'
                  }
                `}
              >
                {isSelected && (
                  <div className="absolute top-4 right-4 w-7 h-7 bg-appdraft-primary rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}

                <div className="text-5xl mb-4 filter drop-shadow-sm">{problem.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 pr-8">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex justify-between items-center max-w-3xl mx-auto mt-8">
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            ← Back
          </button>
          {selected.length > 0 ? (
            <button
              onClick={handleContinue}
              className="px-8 py-3 rounded-lg font-semibold transition-colors shadow-md bg-appdraft-primary text-white hover:bg-appdraft-primary-hover hover:shadow-lg"
            >
              Continue → ({selected.length} selected)
            </button>
          ) : (
            <button
              disabled
              className="px-8 py-3 rounded-lg font-semibold transition-colors shadow-md bg-gray-300 text-gray-500 cursor-not-allowed"
            >
              Continue →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
