'use client';

import { Recommendation } from '@/lib/assessment/types';

interface QuickWinsProps {
  recommendations: Recommendation[];
}

export default function QuickWins({ recommendations }: QuickWinsProps) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 mb-8 border-2 border-green-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ Quick Wins You Can Do Now</h2>
      <p className="text-gray-600 mb-6">
        Start seeing improvements today with these immediate actions:
      </p>
      <div className="space-y-3">
        {recommendations.map((rec) => (
          <div key={rec.problemArea} className="flex items-start gap-3 bg-white rounded-lg p-4">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-gray-800">{rec.quickWin}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
