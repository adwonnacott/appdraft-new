'use client';

import { Score } from '@/lib/assessment/types';

interface HealthScoreDisplayProps {
  scores: Record<string, Score>;
}

export default function HealthScoreDisplay({ scores }: HealthScoreDisplayProps) {
  const scoreEntries = Object.values(scores);

  if (scoreEntries.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Health Scores</h2>
      <div className="space-y-4">
        {scoreEntries.map((score) => (
          <div key={score.problemArea}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700 capitalize">
                {score.problemArea.replace('-', ' ')}
              </span>
              <span className="font-bold" style={{ color: score.color }}>
                {score.score}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${score.score}%`,
                  backgroundColor: score.color,
                }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-1 capitalize">{score.severity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
