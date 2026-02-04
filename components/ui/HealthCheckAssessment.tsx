'use client';

import { useState } from 'react';

interface Question {
  id: string;
  category: string;
  question: string;
  options: {
    label: string;
    score: number;
    insight?: string;
  }[];
}

interface CategoryScore {
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
  potential: number;
  status: 'critical' | 'needs-attention' | 'good' | 'excellent';
  recommendations: string[];
  quickWins: string[];
}

const questions: Question[] = [
  // Data Quality
  {
    id: 'data-duplicates',
    category: 'Data Quality',
    question: 'How often do you encounter duplicate records in Salesforce?',
    options: [
      { label: 'Constantly - it\'s a major problem', score: 0, insight: 'Duplicate management rules and data cleansing needed' },
      { label: 'Frequently - we spend time merging records', score: 1, insight: 'Consider implementing duplicate detection tools' },
      { label: 'Occasionally - it happens but manageable', score: 2 },
      { label: 'Rarely - we have good controls in place', score: 3 },
    ],
  },
  {
    id: 'data-completeness',
    category: 'Data Quality',
    question: 'What percentage of your records have complete, accurate information?',
    options: [
      { label: 'Less than 50%', score: 0, insight: 'Data enrichment and validation rules recommended' },
      { label: '50-70%', score: 1, insight: 'Field validation and required fields could help' },
      { label: '70-90%', score: 2 },
      { label: 'Over 90%', score: 3 },
    ],
  },
  {
    id: 'data-trust',
    category: 'Data Quality',
    question: 'Do your sales team trust the data in Salesforce for decision making?',
    options: [
      { label: 'No - they use spreadsheets instead', score: 0, insight: 'Trust issues indicate deeper data quality problems' },
      { label: 'Sometimes - depends on the data', score: 1 },
      { label: 'Mostly - with some exceptions', score: 2 },
      { label: 'Yes - it\'s our single source of truth', score: 3 },
    ],
  },

  // User Adoption
  {
    id: 'adoption-usage',
    category: 'User Adoption',
    question: 'What percentage of your team actively uses Salesforce daily?',
    options: [
      { label: 'Less than 25%', score: 0, insight: 'Major adoption issues - training and change management needed' },
      { label: '25-50%', score: 1, insight: 'Consider user experience improvements and training' },
      { label: '50-75%', score: 2 },
      { label: 'Over 75%', score: 3 },
    ],
  },
  {
    id: 'adoption-complaints',
    category: 'User Adoption',
    question: 'How often do users complain about Salesforce being difficult to use?',
    options: [
      { label: 'Daily - it\'s a constant battle', score: 0, insight: 'UX review and simplification recommended' },
      { label: 'Weekly', score: 1, insight: 'Page layouts and user flows may need optimisation' },
      { label: 'Monthly', score: 2 },
      { label: 'Rarely or never', score: 3 },
    ],
  },
  {
    id: 'adoption-workarounds',
    category: 'User Adoption',
    question: 'Do users have workarounds or shadow systems (spreadsheets, other tools)?',
    options: [
      { label: 'Yes - extensively', score: 0, insight: 'Salesforce isn\'t meeting user needs - gap analysis required' },
      { label: 'Yes - for some processes', score: 1 },
      { label: 'Minimal', score: 2 },
      { label: 'No - Salesforce handles everything', score: 3 },
    ],
  },

  // Automation & Processes
  {
    id: 'automation-manual',
    category: 'Automation',
    question: 'How much manual data entry do your users perform?',
    options: [
      { label: 'Extensive - most things are manual', score: 0, insight: 'Significant automation opportunities exist' },
      { label: 'Moderate - some automation exists', score: 1 },
      { label: 'Light - many processes are automated', score: 2 },
      { label: 'Minimal - highly automated', score: 3 },
    ],
  },
  {
    id: 'automation-flows',
    category: 'Automation',
    question: 'Are you using Salesforce Flows to automate business processes?',
    options: [
      { label: 'No - we don\'t have any', score: 0, insight: 'Flows can dramatically improve efficiency' },
      { label: 'A few basic ones', score: 1 },
      { label: 'Yes - for key processes', score: 2 },
      { label: 'Extensively - across the business', score: 3 },
    ],
  },
  {
    id: 'automation-notifications',
    category: 'Automation',
    question: 'Do leads or opportunities ever fall through the cracks due to missed follow-ups?',
    options: [
      { label: 'Frequently - it\'s costing us deals', score: 0, insight: 'Automated reminders and task creation needed' },
      { label: 'Sometimes', score: 1 },
      { label: 'Rarely', score: 2 },
      { label: 'Never - we have alerts and automation', score: 3 },
    ],
  },

  // Reporting & Insights
  {
    id: 'reporting-visibility',
    category: 'Reporting',
    question: 'Can leadership easily see pipeline and performance metrics?',
    options: [
      { label: 'No - we create manual reports', score: 0, insight: 'Executive dashboards would provide real-time visibility' },
      { label: 'Partially - some metrics are available', score: 1 },
      { label: 'Mostly - main KPIs are visible', score: 2 },
      { label: 'Yes - real-time dashboards for everything', score: 3 },
    ],
  },
  {
    id: 'reporting-forecasting',
    category: 'Reporting',
    question: 'How accurate are your sales forecasts?',
    options: [
      { label: 'Very inaccurate - we guess', score: 0, insight: 'Forecasting tools and process improvements needed' },
      { label: 'Often off by 30%+', score: 1 },
      { label: 'Usually within 20%', score: 2 },
      { label: 'Highly accurate - within 10%', score: 3 },
    ],
  },
  {
    id: 'reporting-custom',
    category: 'Reporting',
    question: 'Can users create the reports they need without admin help?',
    options: [
      { label: 'No - always need admin assistance', score: 0, insight: 'Self-service reporting training recommended' },
      { label: 'Rarely - complex reports need help', score: 1 },
      { label: 'Sometimes - for basic reports', score: 2 },
      { label: 'Yes - users are self-sufficient', score: 3 },
    ],
  },

  // Integrations
  {
    id: 'integration-systems',
    category: 'Integrations',
    question: 'Is Salesforce connected to your other business systems (email, accounting, marketing)?',
    options: [
      { label: 'No integrations', score: 0, insight: 'Integrations would eliminate duplicate entry and improve data flow' },
      { label: 'Basic email only', score: 1 },
      { label: 'A few key systems', score: 2 },
      { label: 'Fully integrated ecosystem', score: 3 },
    ],
  },
  {
    id: 'integration-manual',
    category: 'Integrations',
    question: 'How much time is spent manually moving data between systems?',
    options: [
      { label: 'Hours per day', score: 0, insight: 'Integration would save significant time and reduce errors' },
      { label: 'Hours per week', score: 1 },
      { label: 'Occasionally', score: 2 },
      { label: 'Almost never - data syncs automatically', score: 3 },
    ],
  },

  // Technical Health
  {
    id: 'tech-performance',
    category: 'Technical Health',
    question: 'How would you rate Salesforce performance (page load times, responsiveness)?',
    options: [
      { label: 'Poor - slow and frustrating', score: 0, insight: 'Performance audit recommended - could be technical debt' },
      { label: 'Okay - some slow areas', score: 1 },
      { label: 'Good - generally fast', score: 2 },
      { label: 'Excellent - lightning fast', score: 3 },
    ],
  },
  {
    id: 'tech-maintenance',
    category: 'Technical Health',
    question: 'When was your last Salesforce review or optimisation?',
    options: [
      { label: 'Never / Don\'t know', score: 0, insight: 'Regular health checks prevent technical debt buildup' },
      { label: 'Over 2 years ago', score: 1 },
      { label: '1-2 years ago', score: 2 },
      { label: 'Within the last year', score: 3 },
    ],
  },
];

const categoryData: Record<string, { recommendations: Record<string, string[]>; quickWins: string[] }> = {
  'Data Quality': {
    recommendations: {
      critical: [
        'Implement duplicate detection and matching rules',
        'Create data cleansing project to fix existing issues',
        'Add validation rules to prevent bad data entry',
      ],
      'needs-attention': [
        'Review and tighten validation rules',
        'Implement regular data quality audits',
      ],
      good: ['Maintain current practices', 'Consider automated data monitoring'],
      excellent: ['Your data quality practices are strong'],
    },
    quickWins: [
      'Enable Duplicate Management in Setup (free, takes 10 mins)',
      'Add 3-5 required fields on Lead/Contact to ensure key data is captured',
      'Create a "Data Quality" report to identify records with missing fields',
      'Set up a weekly 15-min data cleanup task for your team',
    ],
  },
  'User Adoption': {
    recommendations: {
      critical: [
        'Conduct user feedback sessions to understand pain points',
        'Simplify page layouts and remove unused fields',
        'Provide role-specific training programmes',
      ],
      'needs-attention': [
        'Create user guides and quick reference materials',
        'Identify and address specific friction points',
      ],
      good: ['Continue gathering user feedback', 'Share best practices across teams'],
      excellent: ['Your adoption rates are excellent'],
    },
    quickWins: [
      'Remove unused fields from page layouts (instant UX improvement)',
      'Create a "Getting Started" Chatter post with tips for new users',
      'Set up a monthly "Salesforce Tips" email to your team',
      'Identify your power users and make them internal champions',
    ],
  },
  'Automation': {
    recommendations: {
      critical: [
        'Map current manual processes for automation opportunities',
        'Implement Flows for repetitive tasks',
        'Set up automated lead assignment and routing',
      ],
      'needs-attention': [
        'Identify top 5 time-consuming manual processes',
        'Implement approval workflows',
      ],
      good: ['Look for advanced automation opportunities'],
      excellent: ['Your automation maturity is high'],
    },
    quickWins: [
      'Create a simple Flow to auto-assign leads based on region or source',
      'Set up Task reminders for opportunities with no activity in 7+ days',
      'Use Quick Actions to reduce clicks for common tasks',
      'Enable Einstein Activity Capture to auto-log emails (if licensed)',
    ],
  },
  'Reporting': {
    recommendations: {
      critical: [
        'Build executive dashboards for key metrics',
        'Implement sales forecasting tools',
        'Train users on self-service reporting',
      ],
      'needs-attention': [
        'Add missing KPI dashboards',
        'Review forecast accuracy and adjust process',
      ],
      good: ['Consider Einstein Analytics for advanced insights'],
      excellent: ['Your reporting capabilities are mature'],
    },
    quickWins: [
      'Create a "Sales Pipeline" dashboard with key opportunity metrics',
      'Set up scheduled report emails for leadership (weekly pipeline summary)',
      'Build a "My Open Tasks" report for each user\'s homepage',
      'Use Report Subscriptions to automate report delivery',
    ],
  },
  'Integrations': {
    recommendations: {
      critical: [
        'Prioritise email and calendar integration',
        'Connect accounting system (Xero, QuickBooks)',
        'Integrate marketing automation platform',
      ],
      'needs-attention': [
        'Identify remaining integration gaps',
        'Review data sync frequency and accuracy',
      ],
      good: ['Monitor integration health'],
      excellent: ['Your integration ecosystem is well-connected'],
    },
    quickWins: [
      'Enable Outlook/Gmail integration (built-in, free)',
      'Set up Email-to-Salesforce for automatic email logging',
      'Use Salesforce Connect to view external data without integration',
      'Check AppExchange for pre-built connectors to your tools',
    ],
  },
  'Technical Health': {
    recommendations: {
      critical: [
        'Conduct full technical audit',
        'Review and clean up unused customisations',
        'Optimise page layouts and Lightning components',
      ],
      'needs-attention': [
        'Schedule regular performance reviews',
        'Clean up unused fields and objects',
      ],
      good: ['Maintain regular review schedule'],
      excellent: ['Your technical foundation is solid'],
    },
    quickWins: [
      'Run the Salesforce Optimizer report (Setup → Optimizer)',
      'Delete unused custom fields to improve performance',
      'Review and deactivate old workflow rules/process builders',
      'Check your org\'s storage usage and archive old data if needed',
    ],
  },
};

// Benchmark data (simulated industry averages)
const benchmarks = {
  'Data Quality': 58,
  'User Adoption': 52,
  'Automation': 45,
  'Reporting': 61,
  'Integrations': 48,
  'Technical Health': 55,
  overall: 53,
};

function getStatus(percentage: number): 'critical' | 'needs-attention' | 'good' | 'excellent' {
  if (percentage < 40) return 'critical';
  if (percentage < 60) return 'needs-attention';
  if (percentage < 80) return 'good';
  return 'excellent';
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'critical': return 'text-red-600 bg-red-100';
    case 'needs-attention': return 'text-amber-600 bg-amber-100';
    case 'good': return 'text-blue-600 bg-blue-100';
    case 'excellent': return 'text-green-600 bg-green-100';
    default: return 'text-gray-600 bg-gray-100';
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case 'critical': return 'Needs Attention';
    case 'needs-attention': return 'Room to Grow';
    case 'good': return 'Good';
    case 'excellent': return 'Excellent';
    default: return status;
  }
}

function getProgressColor(status: string): string {
  switch (status) {
    case 'critical': return 'bg-red-500';
    case 'needs-attention': return 'bg-amber-500';
    case 'good': return 'bg-blue-500';
    case 'excellent': return 'bg-green-500';
    default: return 'bg-gray-500';
  }
}

function getEncouragingMessage(score: number): { headline: string; message: string } {
  if (score >= 80) {
    return {
      headline: "Excellent! You're ahead of the curve",
      message: "Your Salesforce org is in great shape. You're already doing better than most - let's look at how to maintain this and reach even higher."
    };
  }
  if (score >= 60) {
    return {
      headline: "Good foundation with room to grow",
      message: "You've built a solid base. With some targeted improvements, you could unlock significantly more value from your Salesforce investment."
    };
  }
  if (score >= 40) {
    return {
      headline: "Great potential ahead",
      message: "You're not alone - most orgs score in this range. The good news? There are clear opportunities to improve, and many are quick wins you can start today."
    };
  }
  return {
    headline: "Significant opportunity for transformation",
    message: "Every successful Salesforce org started somewhere. Your honest assessment is the first step - and the improvements you can make will have a dramatic impact on your team's productivity."
  };
}

function getBenchmarkComparison(score: number, benchmark: number): string {
  const diff = score - benchmark;
  if (diff > 15) return `${diff} points above average`;
  if (diff > 5) return `Above average`;
  if (diff > -5) return `On par with average`;
  if (diff > -15) return `Below average`;
  return `${Math.abs(diff)} points below average`;
}

export default function HealthCheckAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [insights, setInsights] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', company: '' });
  const [showContactForm, setShowContactForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showQuickWins, setShowQuickWins] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  const handleAnswer = (score: number, insight?: string) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: score }));
    if (insight) {
      setInsights((prev) => [...prev, insight]);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = (): CategoryScore[] => {
    const categories = ['Data Quality', 'User Adoption', 'Automation', 'Reporting', 'Integrations', 'Technical Health'];

    return categories.map((category) => {
      const categoryQuestions = questions.filter((q) => q.category === category);
      const maxScore = categoryQuestions.length * 3;
      const score = categoryQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
      const percentage = Math.round((score / maxScore) * 100);
      const status = getStatus(percentage);
      const potential = Math.min(95, percentage + (status === 'critical' ? 45 : status === 'needs-attention' ? 30 : 15));
      const data = categoryData[category];
      const recommendations = data.recommendations[status] || [];
      const quickWins = data.quickWins;

      return { category, score, maxScore, percentage, potential, status, recommendations, quickWins };
    });
  };

  const getOverallScore = (results: CategoryScore[]): number => {
    const total = results.reduce((sum, r) => sum + r.percentage, 0);
    return Math.round(total / results.length);
  };

  const getPotentialScore = (results: CategoryScore[]): number => {
    const total = results.reduce((sum, r) => sum + r.potential, 0);
    return Math.round(total / results.length);
  };

  const getAllQuickWins = (results: CategoryScore[]): { category: string; wins: string[] }[] => {
    return results
      .filter((r) => r.status === 'critical' || r.status === 'needs-attention')
      .map((r) => ({ category: r.category, wins: r.quickWins.slice(0, 2) }));
  };

  const generateLinkedInPost = (score: number): string => {
    const emoji = score >= 80 ? '🌟' : score >= 60 ? '💪' : score >= 40 ? '📈' : '🚀';
    return encodeURIComponent(
      `${emoji} Just took a free Salesforce Health Check assessment!\n\nMy org scored ${score}/100 - interesting insights on where we can improve.\n\nUseful free tool if you want to benchmark your Salesforce setup:\n\nhttps://appdraft.com/health-check-assessment\n\n#Salesforce #CRM #SalesOps`
    );
  };

  const handleContactSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Health check submitted:', { contactInfo, answers, insights });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">You&apos;re On Your Way!</h2>
        <p className="text-lg text-gray-600 mb-6">
          We&apos;ve received your assessment. One of our Salesforce consultants will review your results and reach out within 24 hours with a personalised improvement roadmap.
        </p>
        <p className="text-gray-500 mb-8">
          In the meantime, start with those quick wins - small changes can make a big difference!
        </p>
        <a
          href="/services/health-checks"
          className="inline-flex items-center text-[#3cd6bf] font-semibold hover:text-[#2bc4ad]"
        >
          Learn more about our Health Check service
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    );
  }

  if (showContactForm) {
    const results = calculateResults();
    const overallScore = getOverallScore(results);
    const potentialScore = getPotentialScore(results);

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-400">{overallScore}%</div>
                <div className="text-sm text-gray-500">Current</div>
              </div>
              <svg className="w-8 h-8 text-[#3cd6bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500">{potentialScore}%</div>
                <div className="text-sm text-gray-500">Potential</div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Personalised Roadmap</h2>
            <p className="text-gray-600">
              Our Salesforce experts will review your results and send you a detailed improvement plan - completely free.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                value={contactInfo.name}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
              <input
                type="email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
              <input
                type="text"
                value={contactInfo.company}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, company: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all"
                placeholder="Your company"
              />
            </div>

            <button
              onClick={handleContactSubmit}
              disabled={!contactInfo.name || !contactInfo.email || !contactInfo.company}
              className="w-full bg-[#3cd6bf] hover:bg-[#2bc4ad] text-white font-semibold py-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send My Free Roadmap
            </button>

            <p className="text-xs text-gray-500 text-center">
              No spam, ever. Just helpful Salesforce advice.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const results = calculateResults();
    const overallScore = getOverallScore(results);
    const potentialScore = getPotentialScore(results);
    const overallStatus = getStatus(overallScore);
    const encouragement = getEncouragingMessage(overallScore);
    const quickWins = getAllQuickWins(results);

    return (
      <div className="max-w-4xl mx-auto">
        {/* Overall Score with Encouragement */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{encouragement.headline}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{encouragement.message}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Current Score */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke={overallStatus === 'critical' ? '#ef4444' : overallStatus === 'needs-attention' ? '#f59e0b' : overallStatus === 'good' ? '#3b82f6' : '#22c55e'}
                    strokeWidth="10"
                    strokeDasharray={`${(overallScore / 100) * 440} 440`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">{overallScore}</span>
                  <span className="text-sm text-gray-500">Current Score</span>
                </div>
              </div>
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(overallStatus)}`}>
                {getStatusLabel(overallStatus)}
              </span>
              <p className="text-sm text-gray-500 mt-2">
                {getBenchmarkComparison(overallScore, benchmarks.overall)} ({benchmarks.overall}% avg)
              </p>
            </div>

            {/* Potential Score */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="10"
                    strokeDasharray={`${(potentialScore / 100) * 440} 440`}
                    strokeLinecap="round"
                    className="opacity-50"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="10"
                    strokeDasharray={`${(overallScore / 100) * 440} 440`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-green-600">{potentialScore}</span>
                  <span className="text-sm text-gray-500">Your Potential</span>
                </div>
              </div>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-green-600 bg-green-100">
                +{potentialScore - overallScore} points achievable
              </span>
              <p className="text-sm text-gray-500 mt-2">
                With targeted improvements
              </p>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">How You Compare</h3>

          <div className="space-y-6">
            {results.map((result) => (
              <div key={result.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{result.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">
                      Avg: {benchmarks[result.category as keyof typeof benchmarks]}%
                    </span>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getStatusColor(result.status)}`}>
                      {result.percentage}%
                    </span>
                  </div>
                </div>
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  {/* Benchmark marker */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-gray-400 z-10"
                    style={{ left: `${benchmarks[result.category as keyof typeof benchmarks]}%` }}
                  />
                  {/* Potential bar */}
                  <div
                    className="absolute top-0 bottom-0 bg-green-200 rounded-full"
                    style={{ width: `${result.potential}%` }}
                  />
                  {/* Current bar */}
                  <div
                    className={`absolute top-0 bottom-0 rounded-full transition-all duration-500 ${getProgressColor(result.status)}`}
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-400" />
              <span>Industry Average</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-200" />
              <span>Your Potential</span>
            </div>
          </div>
        </div>

        {/* Quick Wins Section */}
        {quickWins.length > 0 && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">⚡</span> Quick Wins You Can Do Today
                </h3>
                <p className="text-gray-600 mt-1">Free improvements you can make right now - no consultant needed!</p>
              </div>
              <button
                onClick={() => setShowQuickWins(!showQuickWins)}
                className="text-[#3cd6bf] font-medium hover:text-[#2bc4ad]"
              >
                {showQuickWins ? 'Show Less' : 'Show All'}
              </button>
            </div>

            <div className="space-y-4">
              {quickWins.slice(0, showQuickWins ? undefined : 2).map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.category}</h4>
                  <ul className="space-y-2">
                    {item.wins.map((win, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {win}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Share & CTA */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Share on LinkedIn */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">Share Your Results</h3>
            <p className="text-sm text-gray-600 mb-4">Let others benchmark their Salesforce too!</p>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://appdraft.com/health-check-assessment&text=${generateLinkedInPost(overallScore)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-semibold rounded-xl hover:bg-[#004182] transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Share on LinkedIn
            </a>
          </div>

          {/* Get Full Report */}
          <div className="bg-gradient-to-r from-[#3cd6bf] to-[#2bc4ad] rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-2">Want Expert Help?</h3>
            <p className="text-sm text-white/80 mb-4">Get a personalised improvement roadmap from our Salesforce consultants.</p>
            <button
              onClick={() => setShowContactForm(true)}
              className="inline-flex items-center px-6 py-3 bg-white text-[#3cd6bf] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200"
            >
              Get Free Roadmap
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3cd6bf] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
        <span className="inline-block px-3 py-1 bg-[#3cd6bf]/10 text-[#3cd6bf] rounded-full text-sm font-medium mb-4">
          {currentQ.category}
        </span>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {currentQ.question}
        </h2>

        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.score, option.insight)}
              className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-[#3cd6bf] hover:bg-[#3cd6bf]/5 transition-all duration-200 group"
            >
              <span className="text-gray-700 group-hover:text-gray-900">{option.label}</span>
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button
            onClick={() => setCurrentQuestion((prev) => prev - 1)}
            className="mt-6 text-gray-500 hover:text-gray-700 text-sm font-medium"
          >
            ← Previous question
          </button>
        )}
      </div>

      {/* Encouragement */}
      <p className="text-center text-gray-500 text-sm mt-6">
        Be honest - there are no wrong answers! This helps us give you accurate recommendations.
      </p>
    </div>
  );
}
