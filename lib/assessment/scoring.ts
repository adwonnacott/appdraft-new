import { Answer, Score, ProblemArea } from './types';
import { getQuestionsForProblems } from './questions';

export function calculateScores(
  selectedProblems: ProblemArea[],
  answers: Record<string, Answer>
): Record<ProblemArea, Score> {
  const scores: Record<string, Score> = {};

  selectedProblems.forEach(problemArea => {
    const questions = getQuestionsForProblems([problemArea]);
    const relevantAnswers = questions
      .filter(q => q.type === 'likert' || q.type === 'multiple-choice')
      .map(q => answers[q.id])
      .filter(Boolean);

    if (relevantAnswers.length === 0) {
      scores[problemArea] = {
        problemArea,
        score: 0,
        severity: 'critical',
        color: '#ef4444',
      };
      return;
    }

    // Calculate weighted average
    let totalScore = 0;
    let totalWeight = 0;

    relevantAnswers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question && typeof answer.value === 'number') {
        const weight = question.impactWeight || 1;
        totalScore += (answer.value / 5) * 100 * weight;
        totalWeight += weight;
      }
    });

    const averageScore = totalWeight > 0 ? totalScore / totalWeight : 0;

    scores[problemArea] = {
      problemArea,
      score: Math.round(averageScore),
      severity: getSeverity(averageScore),
      color: getColor(averageScore),
    };
  });

  return scores as Record<ProblemArea, Score>;
}

function getSeverity(score: number): 'excellent' | 'good' | 'fair' | 'poor' | 'critical' {
  if (score >= 80) return 'excellent';
  if (score >= 60) return 'good';
  if (score >= 40) return 'fair';
  if (score >= 20) return 'poor';
  return 'critical';
}

function getColor(score: number): string {
  if (score >= 80) return '#10b981'; // green
  if (score >= 60) return '#84cc16'; // light green
  if (score >= 40) return '#eab308'; // yellow
  if (score >= 20) return '#f97316'; // orange
  return '#ef4444'; // red
}
