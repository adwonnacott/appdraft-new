export type ProblemArea =
  | 'user-adoption'
  | 'data-quality'
  | 'reporting'
  | 'automation'
  | 'forecasting'
  | 'drift';

export interface Question {
  id: string;
  problemArea: ProblemArea;
  text: string;
  subtext?: string;
  type: 'likert' | 'multiple-choice' | 'number' | 'text';
  options?: QuestionOption[];
  placeholder?: string;
  required?: boolean;
  impactWeight?: number;
}

export interface QuestionOption {
  value: number;
  label: string;
  description?: string;
}

export interface ProblemAreaConfig {
  id: ProblemArea;
  title: string;
  description: string;
  icon: string;
  insight: string;
  questions: Question[];
}

export interface Answer {
  questionId: string;
  value: string | number;
}

export interface Score {
  problemArea: ProblemArea;
  score: number; // 0-100
  severity: 'excellent' | 'good' | 'fair' | 'poor' | 'critical';
  color: string;
}

export interface Recommendation {
  problemArea: ProblemArea;
  severity: 'excellent' | 'good' | 'fair' | 'poor' | 'critical';
  annualCost: number;
  title: string;
  problem: string;
  whyItMatters: string;
  whatToDo: string[];
  quickWin: string;
  timeline: string;
  expectedROI: string;
}

export interface AssessmentState {
  currentStep: 'welcome' | 'problem-selection' | 'questions' | 'results';
  leadInfo: {
    firstName: string;
    email: string;
    company?: string;
    userCount?: number;
    avgDealSize?: number;
  };
  selectedProblems: ProblemArea[];
  currentQuestionIndex: number;
  answers: Record<string, Answer>;
  scores: Record<ProblemArea, Score>;
  totalEstimatedCost: number;
  recommendations: Recommendation[];
}
