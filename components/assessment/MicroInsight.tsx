'use client';

interface MicroInsightProps {
  insight: string;
  onContinue: () => void;
}

export default function MicroInsight({ insight, onContinue }: MicroInsightProps) {
  return (
    <div className="bg-blue-50 border-2 border-appdraft-primary rounded-xl p-8 mb-8 animate-fadeIn">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-appdraft-primary rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            💡 Why This Matters
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {insight}
          </p>
        </div>
      </div>
    </div>
  );
}
