'use client';

import { useState, useEffect } from 'react';
import { Question } from '@/lib/assessment/types';

interface QuestionCardProps {
  question: Question;
  currentValue?: string | number;
  onAnswer: (value: string | number) => void;
  onBack?: () => void;
  onContinue?: () => void;
  showContinue?: boolean;
}

export default function QuestionCard({
  question,
  currentValue,
  onAnswer,
  onBack,
  onContinue,
  showContinue = true,
}: QuestionCardProps) {
  const [localValue, setLocalValue] = useState<string | number>(currentValue || '');

  // Sync local value with current value from parent
  useEffect(() => {
    setLocalValue(currentValue ?? '');
  }, [question.id, currentValue]);

  const handleSelect = (value: number) => {
    setLocalValue(value);
    onAnswer(value);
  };

  const handleNumberChange = (value: string) => {
    setLocalValue(value);
    if (value && !isNaN(Number(value))) {
      onAnswer(Number(value));
    }
  };

  const handleTextChange = (value: string) => {
    setLocalValue(value);
    onAnswer(value);
  };

  const canContinue = () => {
    if (question.required === false) return true;
    if (question.type === 'likert' || question.type === 'multiple-choice') {
      return localValue !== '' && localValue !== null && localValue !== undefined;
    }
    if (question.type === 'number') {
      return localValue !== '' && !isNaN(Number(localValue)) && Number(localValue) > 0;
    }
    if (question.type === 'text') {
      return String(localValue).trim().length > 0;
    }
    return false;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {question.text}
        </h2>
        {question.subtext && (
          <p className="text-gray-600 text-sm">{question.subtext}</p>
        )}
      </div>

      {/* Likert Scale */}
      {question.type === 'likert' && question.options && (
        <div className="space-y-3 mb-8">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-all
                ${
                  localValue === option.value
                    ? 'border-appdraft-primary bg-blue-50'
                    : 'border-gray-200 hover:border-appdraft-primary/30 hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{option.label}</div>
                  {option.description && (
                    <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                  )}
                </div>
                <div
                  className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-4
                    ${
                      localValue === option.value
                        ? 'border-appdraft-primary bg-appdraft-primary'
                        : 'border-gray-300'
                    }
                  `}
                >
                  {localValue === option.value && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Multiple Choice */}
      {question.type === 'multiple-choice' && question.options && (
        <div className="space-y-3 mb-8">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-all
                ${
                  localValue === option.value
                    ? 'border-appdraft-primary bg-blue-50'
                    : 'border-gray-200 hover:border-appdraft-primary/30 hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-gray-900">{option.label}</div>
                <div
                  className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-4
                    ${
                      localValue === option.value
                        ? 'border-appdraft-primary bg-appdraft-primary'
                        : 'border-gray-300'
                    }
                  `}
                >
                  {localValue === option.value && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Number Input */}
      {question.type === 'number' && (
        <div className="mb-8">
          <input
            type="number"
            value={localValue}
            onChange={(e) => handleNumberChange(e.target.value)}
            placeholder={question.placeholder}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-appdraft-primary focus:border-transparent text-lg"
            min="0"
          />
        </div>
      )}

      {/* Text Input */}
      {question.type === 'text' && (
        <div className="mb-8">
          <input
            type="text"
            value={localValue}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder={question.placeholder}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-appdraft-primary focus:border-transparent"
          />
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        {onBack && (
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            ← Back
          </button>
        )}
        {showContinue && onContinue && (
          <button
            onClick={onContinue}
            disabled={!canContinue()}
            className={`
              px-8 py-3 rounded-lg font-semibold transition-colors shadow-md
              ${onBack ? '' : 'ml-auto'}
              ${
                canContinue()
                  ? 'bg-appdraft-primary text-white hover:bg-appdraft-primary-hover hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            Continue →
          </button>
        )}
      </div>

      {question.required === false && (
        <p className="text-xs text-gray-500 text-center mt-4">
          This question is optional. Click Continue to skip.
        </p>
      )}
    </div>
  );
}
