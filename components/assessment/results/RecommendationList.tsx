'use client';

import { Recommendation } from '@/lib/assessment/types';

interface RecommendationListProps {
  recommendations: Recommendation[];
}

export default function RecommendationList({ recommendations }: RecommendationListProps) {
  const getSeverityColor = (severity: string) => {
    const colors = {
      critical: 'bg-red-100 text-red-800 border-red-300',
      poor: 'bg-orange-100 text-orange-800 border-orange-300',
      fair: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      good: 'bg-green-100 text-green-800 border-green-300',
      excellent: 'bg-blue-100 text-blue-800 border-blue-300',
    };
    return colors[severity as keyof typeof colors] || colors.fair;
  };

  return (
    <div className="space-y-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Personalized Recommendations</h2>
      {recommendations.map((rec, index) => (
        <div key={rec.problemArea} className="bg-white rounded-xl shadow-lg p-8 border-l-4" style={{ borderLeftColor: getSeverityColor(rec.severity).split(' ')[0].replace('bg-', '#') }}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(rec.severity)}`}>
                  {rec.severity.toUpperCase()}
                </span>
                <span className="text-sm text-gray-500">
                  £{rec.annualCost.toLocaleString()}/year impact
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{rec.title}</h3>
            </div>
            <div className="text-4xl">#{index + 1}</div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">The Problem:</h4>
              <p className="text-gray-700">{rec.problem}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Why It Matters:</h4>
              <p className="text-gray-700">{rec.whyItMatters}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What to Do:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {rec.whatToDo.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-1">⚡ Quick Win:</h4>
              <p className="text-green-800">{rec.quickWin}</p>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <div>
                <span className="font-semibold">Timeline:</span> {rec.timeline}
              </div>
              <div>
                <span className="font-semibold">Expected ROI:</span> {rec.expectedROI}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
