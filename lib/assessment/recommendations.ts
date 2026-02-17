import { Recommendation, Score, ProblemArea } from './types';
import { calculateROI } from './roi-calculator';

export function generateRecommendations(
  scores: Record<ProblemArea, Score>,
  answers: Record<string, any>,
  leadInfo: { userCount?: number; avgDealSize?: number }
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  Object.entries(scores).forEach(([problemArea, score]) => {
    const area = problemArea as ProblemArea;
    const annualCost = calculateROI(area, score, answers, leadInfo);

    const recommendation = getRecommendationTemplate(area, score, annualCost);
    if (recommendation) {
      recommendations.push(recommendation);
    }
  });

  // Sort by severity (worst first) then by cost
  return recommendations.sort((a, b) => {
    const severityOrder = { critical: 0, poor: 1, fair: 2, good: 3, excellent: 4 };
    const severityDiff = severityOrder[a.severity] - severityOrder[b.severity];
    if (severityDiff !== 0) return severityDiff;
    return b.annualCost - a.annualCost;
  });
}

function getRecommendationTemplate(
  area: ProblemArea,
  score: Score,
  annualCost: number
): Recommendation | null {
  const templates: Record<ProblemArea, Omit<Recommendation, 'problemArea' | 'severity' | 'annualCost'>> = {
    'user-adoption': {
      title: 'User Adoption Issues',
      problem: 'Your team isn\'t actively using Salesforce, maintaining shadow systems in spreadsheets',
      whyItMatters: 'Lost productivity, blind spots in pipeline, inability to forecast accurately, and wasted license costs',
      whatToDo: [
        'Simplify page layouts to show only relevant fields (reduce clutter by 60%)',
        'Automate email logging and task creation (save 5-7 hrs/week per rep)',
        'Create role-specific dashboards that provide immediate value',
        'Implement quick wins that make Salesforce indispensable',
      ],
      quickWin: 'Enable Einstein Activity Capture today to auto-log emails and meetings',
      timeline: '6-8 weeks to achieve 90% adoption',
      expectedROI: `£${Math.round(annualCost * 0.85).toLocaleString()}+/year in recovered productivity`,
    },
    'data-quality': {
      title: 'Data Quality Problems',
      problem: 'Duplicate records, missing information, and incorrect data undermine trust in the system',
      whyItMatters: 'Reps waste time searching for accurate information, miss opportunities, and make decisions on bad data',
      whatToDo: [
        'Implement duplicate prevention rules and matching logic',
        'Add validation rules for critical fields',
        'Create data quality dashboards to monitor issues',
        'Establish regular data cleansing rituals',
      ],
      quickWin: 'Run a duplicate merge on your top 50 accounts this week',
      timeline: '4-6 weeks to establish data quality standards',
      expectedROI: `£${Math.round(annualCost * 0.8).toLocaleString()}+/year in time savings`,
    },
    'reporting': {
      title: 'Reporting Frustrations',
      problem: 'You\'re exporting to Excel because Salesforce reports don\'t give you what you need',
      whyItMatters: 'Every export creates outdated data, manual work, and delays in decision-making',
      whatToDo: [
        'Build custom report types for your specific needs',
        'Create dashboard folders organized by role',
        'Automate report scheduling and distribution',
        'Train teams on report builder capabilities',
      ],
      quickWin: 'Replace your most-used Excel report with a Salesforce dashboard this week',
      timeline: '3-4 weeks to build core reporting suite',
      expectedROI: `£${Math.round(annualCost * 0.9).toLocaleString()}+/year in time savings`,
    },
    'automation': {
      title: 'Missing Automation',
      problem: 'Your team spends hours on repetitive manual tasks that should be automated',
      whyItMatters: 'Sales professionals spend only 34% of time selling—the rest is admin work that could be automated',
      whatToDo: [
        'Automate lead assignment and routing',
        'Create email templates and sequences',
        'Build approval workflows for deals',
        'Implement field updates and record creation flows',
      ],
      quickWin: 'Create an email alert flow for hot leads today',
      timeline: '2-3 weeks per major automation',
      expectedROI: `£${Math.round(annualCost * 0.85).toLocaleString()}+/year in time savings`,
    },
    'forecasting': {
      title: 'Forecasting Blind Spots',
      problem: 'Revenue forecasting is manual, time-consuming, and often inaccurate',
      whyItMatters: 'Poor forecasting leads to missed opportunities, incorrect resource planning, and lost revenue',
      whatToDo: [
        'Implement Salesforce Forecasting with categories',
        'Create pipeline health dashboards',
        'Establish consistent stage criteria and probability',
        'Build automated forecast accuracy tracking',
      ],
      quickWin: 'Define clear stage criteria and update open opportunities this week',
      timeline: '6-8 weeks to implement full forecasting',
      expectedROI: `£${Math.round(annualCost * 0.7).toLocaleString()}+/year from improved win rates`,
    },
    'drift': {
      title: 'System Drift & Complexity',
      problem: 'Salesforce was set up years ago and no longer fits how your business operates',
      whyItMatters: 'Drift multiplies all other problems—workarounds, unused features, and outdated processes',
      whatToDo: [
        'Conduct comprehensive health check audit',
        'Archive unused fields, objects, and workflows',
        'Realign processes with current business operations',
        'Document and simplify customizations',
      ],
      quickWin: 'Identify and hide 20 unused fields on your most common page layouts',
      timeline: '8-12 weeks for comprehensive realignment',
      expectedROI: 'Reduces all other problem costs by 20-30%',
    },
  };

  const template = templates[area];
  if (!template) return null;

  return {
    ...template,
    problemArea: area,
    severity: score.severity,
    annualCost,
  };
}
