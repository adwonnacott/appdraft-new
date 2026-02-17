'use client';

import { useState, useEffect } from 'react';
import { useAssessment } from './AssessmentProvider';
import { getQuestionsForProblems, getProblemArea } from '@/lib/assessment/questions';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import MicroInsight from './MicroInsight';

export default function QuestionFlow() {
  const { state, actions } = useAssessment();
  const [showInsight, setShowInsight] = useState(false);
  const [currentInsight, setCurrentInsight] = useState('');

  const questions = getQuestionsForProblems(state.selectedProblems);
  const currentQuestion = questions[state.currentQuestionIndex];
  const isLastQuestion = state.currentQuestionIndex === questions.length - 1;

  // Get current answer
  const currentAnswer = currentQuestion ? state.answers[currentQuestion.id]?.value : undefined;

  useEffect(() => {
    // Reset insight when question changes
    setShowInsight(false);
  }, [state.currentQuestionIndex]);

  const handleAnswer = (value: string | number) => {
    if (currentQuestion) {
      actions.answerQuestion(currentQuestion.id, value);
    }
  };

  const handleContinue = () => {
    // Check if this question should show an insight
    const problemArea = getProblemArea(currentQuestion.problemArea);

    // Show insight after first question of each problem area
    const isFirstQuestionOfArea = questions
      .slice(0, state.currentQuestionIndex + 1)
      .filter(q => q.problemArea === currentQuestion.problemArea).length === 1;

    if (isFirstQuestionOfArea && problemArea?.insight && !showInsight) {
      setCurrentInsight(problemArea.insight);
      setShowInsight(true);
      return;
    }

    // Move to next question or finish
    if (isLastQuestion) {
      // Navigate to results
      actions.goToResults();
    } else {
      actions.nextStep();
    }
  };

  const handleBack = () => {
    if (showInsight) {
      setShowInsight(false);
    } else {
      actions.previousStep();
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <ProgressBar current={state.currentQuestionIndex + 1} total={questions.length} />

        {showInsight ? (
          <div className="max-w-3xl mx-auto">
            <MicroInsight
              insight={currentInsight}
              onContinue={handleContinue}
            />
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleContinue}
                className="px-8 py-3 rounded-lg bg-appdraft-primary text-white font-semibold hover:bg-appdraft-primary-hover transition-colors shadow-md hover:shadow-lg"
              >
                Continue →
              </button>
            </div>
          </div>
        ) : (
          <QuestionCard
            question={currentQuestion}
            currentValue={currentAnswer}
            onAnswer={handleAnswer}
            onBack={state.currentQuestionIndex > 0 ? handleBack : undefined}
            onContinue={handleContinue}
          />
        )}
      </div>
    </div>
  );
}
