import { ProblemAreaConfig, ProblemArea, Question } from './types';

export const problemAreas: ProblemAreaConfig[] = [
  {
    id: 'user-adoption',
    title: 'Your Team Isn\'t Using It',
    description: 'Salespeople keep their own spreadsheets or say they\'re "too busy" for CRM',
    icon: '👥',
    insight: 'Low adoption is the #1 cause of CRM failure. If your team isn\'t using it, you\'re paying for an expensive database.',
    questions: [
      {
        id: 'ua-1',
        problemArea: 'user-adoption',
        text: 'How often do your sales reps log into Salesforce?',
        type: 'likert',
        options: [
          { value: 5, label: 'Multiple times daily', description: 'Active engagement' },
          { value: 4, label: 'Once daily' },
          { value: 3, label: 'Few times per week' },
          { value: 2, label: 'Once per week' },
          { value: 1, label: 'Rarely or never', description: 'Critical adoption issue' },
        ],
        impactWeight: 0.9,
      },
      {
        id: 'ua-2',
        problemArea: 'user-adoption',
        text: 'How often do users create workarounds (spreadsheets, email, etc.) instead of using Salesforce?',
        type: 'likert',
        options: [
          { value: 5, label: 'Never - Salesforce is the single source of truth' },
          { value: 4, label: 'Rarely - occasional spreadsheet use' },
          { value: 3, label: 'Sometimes - parallel systems exist' },
          { value: 2, label: 'Often - spreadsheets are primary' },
          { value: 1, label: 'Always - Salesforce is abandoned' },
        ],
        impactWeight: 0.95,
      },
      {
        id: 'ua-3',
        problemArea: 'user-adoption',
        text: 'How many Salesforce users do you have?',
        subtext: 'This helps us calculate the cost impact',
        type: 'number',
        placeholder: 'e.g., 15',
        required: true,
      },
    ],
  },
  {
    id: 'data-quality',
    title: 'Your Data Can\'t Be Trusted',
    description: 'Duplicate records, missing information, or clearly incorrect data',
    icon: '🗄️',
    insight: 'Bad data isn\'t just annoying—it\'s expensive. Reps waste 30% of time searching for accurate information.',
    questions: [
      {
        id: 'dq-1',
        problemArea: 'data-quality',
        text: 'How significant is your duplicate record problem?',
        type: 'likert',
        options: [
          { value: 5, label: 'No duplicates or very rare' },
          { value: 4, label: 'Minor duplicates, easy to manage' },
          { value: 3, label: 'Moderate duplicates, takes effort' },
          { value: 2, label: 'Significant duplicates, frequent complaints' },
          { value: 1, label: 'Severe - duplicates everywhere' },
        ],
        impactWeight: 0.8,
      },
      {
        id: 'dq-2',
        problemArea: 'data-quality',
        text: 'How often is data missing or incorrect in critical fields?',
        type: 'likert',
        options: [
          { value: 5, label: 'Rarely - data is consistently complete and accurate' },
          { value: 4, label: 'Occasionally - minor gaps' },
          { value: 3, label: 'Regularly - noticeable data quality issues' },
          { value: 2, label: 'Frequently - major data gaps' },
          { value: 1, label: 'Constantly - data is unreliable' },
        ],
        impactWeight: 0.85,
      },
      {
        id: 'dq-3',
        problemArea: 'data-quality',
        text: 'How many users do you have? (if not already answered)',
        subtext: 'Skip if you already provided this',
        type: 'number',
        placeholder: 'e.g., 15',
        required: false,
      },
    ],
  },
  {
    id: 'reporting',
    title: 'You\'re Living in Spreadsheets',
    description: 'Exporting to Excel because Salesforce reports don\'t give you what you need',
    icon: '📊',
    insight: 'Every Excel export = automation opportunity. Plus, exported data is immediately out of date.',
    questions: [
      {
        id: 'rp-1',
        problemArea: 'reporting',
        text: 'How often do you export Salesforce data to Excel or other tools?',
        type: 'likert',
        options: [
          { value: 1, label: 'Daily - can\'t work without exports' },
          { value: 2, label: 'Weekly - regular exports needed' },
          { value: 3, label: 'Monthly - occasional exports' },
          { value: 4, label: 'Rarely - most reporting in Salesforce' },
          { value: 5, label: 'Never - all reporting in Salesforce' },
        ],
        impactWeight: 0.9,
      },
      {
        id: 'rp-2',
        problemArea: 'reporting',
        text: 'Can you get the reports you need directly in Salesforce?',
        type: 'multiple-choice',
        options: [
          { value: 5, label: 'Yes - reports meet all our needs' },
          { value: 3, label: 'Sometimes - missing key reports' },
          { value: 1, label: 'No - have to export and manipulate data' },
        ],
        impactWeight: 0.85,
      },
    ],
  },
  {
    id: 'automation',
    title: 'Too Much Manual Work',
    description: 'Your team spends hours on repetitive tasks that should be automated',
    icon: '⚙️',
    insight: 'Sales professionals spend only 34% of time selling. The rest? Admin tasks—many of which can be automated.',
    questions: [
      {
        id: 'am-1',
        problemArea: 'automation',
        text: 'Where is most of your manual effort spent?',
        type: 'multiple-choice',
        options: [
          { value: 1, label: 'Data entry and updates' },
          { value: 2, label: 'Sending emails and follow-ups' },
          { value: 3, label: 'Creating reports and dashboards' },
          { value: 4, label: 'Task and activity logging' },
          { value: 5, label: 'Very little manual work - mostly automated' },
        ],
        impactWeight: 0.85,
      },
      {
        id: 'am-2',
        problemArea: 'automation',
        text: 'Roughly how many hours per week does your team spend on repetitive Salesforce tasks?',
        subtext: 'Estimate across all users',
        type: 'number',
        placeholder: 'e.g., 20',
        required: true,
      },
    ],
  },
  {
    id: 'forecasting',
    title: 'You Can\'t See What\'s Coming',
    description: 'Revenue forecasting is a monthly fire drill with conflicting numbers',
    icon: '🔮',
    insight: 'Forecasting accuracy requires clean pipeline data, consistent process, and the right analytics. Most organizations struggle with at least one.',
    questions: [
      {
        id: 'fc-1',
        problemArea: 'forecasting',
        text: 'How do you currently forecast revenue?',
        type: 'multiple-choice',
        options: [
          { value: 1, label: 'Gut feel / manual estimates' },
          { value: 2, label: 'Excel spreadsheets' },
          { value: 3, label: 'Salesforce reports (basic)' },
          { value: 4, label: 'Salesforce with some automation' },
          { value: 5, label: 'Fully automated Salesforce forecasting' },
        ],
        impactWeight: 0.9,
      },
      {
        id: 'fc-2',
        problemArea: 'forecasting',
        text: 'How accurate are your revenue forecasts?',
        type: 'likert',
        options: [
          { value: 5, label: 'Very accurate - within 5%' },
          { value: 4, label: 'Fairly accurate - within 10%' },
          { value: 3, label: 'Moderately accurate - within 20%' },
          { value: 2, label: 'Often inaccurate - over 20% variance' },
          { value: 1, label: 'Rarely accurate - unreliable' },
        ],
        impactWeight: 0.95,
      },
      {
        id: 'fc-3',
        problemArea: 'forecasting',
        text: 'What is your average deal size?',
        subtext: 'This helps calculate potential lost revenue',
        type: 'number',
        placeholder: 'e.g., 25000',
        required: true,
      },
    ],
  },
  {
    id: 'drift',
    title: 'It Doesn\'t Fit Anymore',
    description: 'Salesforce was set up years ago and you\'ve outgrown the original design',
    icon: '🔧',
    insight: 'Most orgs need a health check every 2-3 years. Businesses evolve, Salesforce adds features, and drift happens naturally.',
    questions: [
      {
        id: 'dr-1',
        problemArea: 'drift',
        text: 'How long has it been since Salesforce was implemented or significantly reviewed?',
        type: 'multiple-choice',
        options: [
          { value: 5, label: 'Less than 1 year' },
          { value: 4, label: '1-2 years' },
          { value: 3, label: '2-3 years' },
          { value: 2, label: '3-5 years' },
          { value: 1, label: 'Over 5 years or never reviewed' },
        ],
        impactWeight: 0.8,
      },
      {
        id: 'dr-2',
        problemArea: 'drift',
        text: 'Does Salesforce match your current business processes?',
        type: 'likert',
        options: [
          { value: 5, label: 'Perfect fit - matches our workflow' },
          { value: 4, label: 'Mostly fits - minor workarounds' },
          { value: 3, label: 'Somewhat fits - several workarounds' },
          { value: 2, label: 'Poor fit - major workarounds needed' },
          { value: 1, label: 'Doesn\'t fit - we work around it constantly' },
        ],
        impactWeight: 0.9,
      },
    ],
  },
];

export function getProblemArea(id: ProblemArea): ProblemAreaConfig | undefined {
  return problemAreas.find(area => area.id === id);
}

export function getQuestionsForProblems(problems: ProblemArea[]): Question[] {
  const questions: Question[] = [];
  problems.forEach(problemId => {
    const area = getProblemArea(problemId);
    if (area) {
      questions.push(...area.questions);
    }
  });
  return questions;
}
