'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AssessmentState, ProblemArea, Answer } from '@/lib/assessment/types';
import { calculateScores } from '@/lib/assessment/scoring';
import { calculateTotalCost } from '@/lib/assessment/roi-calculator';
import { generateRecommendations } from '@/lib/assessment/recommendations';

const initialState: AssessmentState = {
  currentStep: 'welcome',
  leadInfo: {
    firstName: '',
    email: '',
  },
  selectedProblems: [],
  currentQuestionIndex: 0,
  answers: {},
  scores: {} as any,
  totalEstimatedCost: 0,
  recommendations: [],
};

interface AssessmentContextType {
  state: AssessmentState;
  actions: {
    setLeadInfo: (info: Partial<AssessmentState['leadInfo']>) => void;
    selectProblems: (problems: ProblemArea[]) => void;
    answerQuestion: (questionId: string, value: string | number) => void;
    nextStep: () => void;
    previousStep: () => void;
    goToResults: () => void;
  };
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AssessmentState>(initialState);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('assessment-state');
    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load saved state:', e);
      }
    }
  }, []);

  // Save to localStorage on state change
  useEffect(() => {
    localStorage.setItem('assessment-state', JSON.stringify(state));
  }, [state]);

  const actions = {
    setLeadInfo: (info: Partial<AssessmentState['leadInfo']>) => {
      setState(prev => ({
        ...prev,
        leadInfo: { ...prev.leadInfo, ...info },
      }));
    },

    selectProblems: (problems: ProblemArea[]) => {
      setState(prev => ({
        ...prev,
        selectedProblems: problems,
        currentStep: 'questions',
        currentQuestionIndex: 0,
      }));
    },

    answerQuestion: (questionId: string, value: string | number) => {
      setState(prev => ({
        ...prev,
        answers: {
          ...prev.answers,
          [questionId]: { questionId, value },
        },
      }));
    },

    nextStep: () => {
      setState(prev => {
        if (prev.currentStep === 'welcome') {
          return { ...prev, currentStep: 'problem-selection' };
        }
        if (prev.currentStep === 'problem-selection') {
          return { ...prev, currentStep: 'questions' };
        }
        if (prev.currentStep === 'questions') {
          return { ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 };
        }
        return prev;
      });
    },

    previousStep: () => {
      setState(prev => {
        if (prev.currentStep === 'questions' && prev.currentQuestionIndex > 0) {
          return { ...prev, currentQuestionIndex: prev.currentQuestionIndex - 1 };
        }
        if (prev.currentStep === 'questions' && prev.currentQuestionIndex === 0) {
          return { ...prev, currentStep: 'problem-selection' };
        }
        if (prev.currentStep === 'problem-selection') {
          return { ...prev, currentStep: 'welcome' };
        }
        return prev;
      });
    },

    goToResults: () => {
      setState(prev => {
        // Calculate scores
        const scores = calculateScores(prev.selectedProblems, prev.answers);

        // Extract user count from answers if available
        const userCountAnswer = prev.answers['ua-3'] || prev.answers['dq-3'];
        const avgDealSizeAnswer = prev.answers['fc-3'];

        const leadInfo = {
          ...prev.leadInfo,
          userCount: userCountAnswer ? Number(userCountAnswer.value) : undefined,
          avgDealSize: avgDealSizeAnswer ? Number(avgDealSizeAnswer.value) : undefined,
        };

        // Calculate total cost
        const totalCost = calculateTotalCost(
          prev.selectedProblems,
          scores,
          prev.answers,
          leadInfo
        );

        // Generate recommendations
        const recommendations = generateRecommendations(scores, prev.answers, leadInfo);

        return {
          ...prev,
          leadInfo,
          scores,
          totalEstimatedCost: totalCost,
          recommendations,
          currentStep: 'results',
        };
      });
    },
  };

  return (
    <AssessmentContext.Provider value={{ state, actions }}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within AssessmentProvider');
  }
  return context;
}
