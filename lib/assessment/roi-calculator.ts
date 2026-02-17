import { Answer, ProblemArea, Score } from './types';

const HOURLY_RATE = 50; // £50/hour average
const WORKING_DAYS_PER_YEAR = 220;

export function calculateROI(
  problemArea: ProblemArea,
  score: Score,
  answers: Record<string, Answer>,
  leadInfo: { userCount?: number; avgDealSize?: number }
): number {
  const userCount = leadInfo.userCount || 10; // default assumption

  switch (problemArea) {
    case 'user-adoption':
      return calculateAdoptionCost(score.score, userCount);

    case 'data-quality':
      return calculateDataQualityCost(score.score, userCount);

    case 'reporting':
      return calculateReportingCost(score.score, userCount);

    case 'automation':
      return calculateAutomationCost(answers, userCount);

    case 'forecasting':
      return calculateForecastingCost(score.score, leadInfo.avgDealSize);

    case 'drift':
      // Drift is a multiplier on other problems, not a direct cost
      return 0;

    default:
      return 0;
  }
}

function calculateAdoptionCost(score: number, userCount: number): number {
  // Poor adoption = wasted hours per day
  let hoursPerDay = 0;
  if (score < 50) hoursPerDay = 2;
  else if (score < 70) hoursPerDay = 1;
  else hoursPerDay = 0.5;

  return Math.round(userCount * hoursPerDay * HOURLY_RATE * WORKING_DAYS_PER_YEAR);
}

function calculateDataQualityCost(score: number, userCount: number): number {
  // Time spent searching for correct data
  let minutesPerDay = 0;
  if (score < 50) minutesPerDay = 30;
  else if (score < 70) minutesPerDay = 15;
  else minutesPerDay = 5;

  const hoursPerDay = minutesPerDay / 60;
  return Math.round(userCount * hoursPerDay * HOURLY_RATE * WORKING_DAYS_PER_YEAR);
}

function calculateReportingCost(score: number, userCount: number): number {
  // Hours per week creating manual reports
  let hoursPerWeek = 0;
  if (score < 40) hoursPerWeek = 10; // daily exports
  else if (score < 60) hoursPerWeek = 4; // weekly exports
  else hoursPerWeek = 1; // occasional exports

  const weeksPerYear = 50;
  return Math.round(hoursPerWeek * HOURLY_RATE * weeksPerYear);
}

function calculateAutomationCost(answers: Record<string, Answer>, userCount: number): number {
  // Check if user provided hours
  const hoursAnswer = answers['am-2'];
  if (hoursAnswer && typeof hoursAnswer.value === 'number') {
    const hoursPerWeek = hoursAnswer.value;
    const weeksPerYear = 50;
    return Math.round(hoursPerWeek * HOURLY_RATE * weeksPerYear);
  }

  // Fallback estimate
  return Math.round(10 * HOURLY_RATE * 50); // 10 hrs/week * 50 weeks
}

function calculateForecastingCost(score: number, avgDealSize?: number): number {
  if (!avgDealSize) return 0;

  // Poor forecasting = lost deals due to poor pipeline management
  let lostDealRate = 0;
  if (score < 50) lostDealRate = 0.15; // 15% lost
  else if (score < 70) lostDealRate = 0.08; // 8% lost
  else lostDealRate = 0.03; // 3% lost

  // Conservative estimate: assume 2 deals per month
  const dealsPerYear = 24;
  return Math.round(avgDealSize * dealsPerYear * lostDealRate);
}

export function calculateTotalCost(
  selectedProblems: ProblemArea[],
  scores: Record<ProblemArea, Score>,
  answers: Record<string, Answer>,
  leadInfo: { userCount?: number; avgDealSize?: number }
): number {
  let total = 0;

  selectedProblems.forEach(problem => {
    if (problem !== 'drift') {
      const score = scores[problem];
      if (score) {
        total += calculateROI(problem, score, answers, leadInfo);
      }
    }
  });

  // Apply drift multiplier if drift is selected and severe
  if (selectedProblems.includes('drift')) {
    const driftScore = scores['drift'];
    if (driftScore && driftScore.score < 50) {
      total *= 1.3; // 30% increase in costs due to system drift
    }
  }

  return Math.round(total);
}
