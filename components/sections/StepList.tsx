'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';

interface Step {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface StepListProps {
  steps: Step[];
  variant?: 'numbered' | 'timeline' | 'simple';
  className?: string;
}

export default function StepList({
  steps,
  variant = 'numbered',
  className = '',
}: StepListProps) {
  if (variant === 'simple') {
    return (
      <div className={`space-y-6 ${className}`}>
        {steps.map((step, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="flex gap-4">
              {step.icon && (
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-[#3cd6bf]/10 flex items-center justify-center text-[#3cd6bf]">
                  {step.icon}
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    );
  }

  if (variant === 'timeline') {
    return (
      <div className={`relative ${className}`}>
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative flex gap-6">
                {/* Circle */}
                <div className="relative z-10 w-10 h-10 flex-shrink-0 rounded-full bg-white border-2 border-[#3cd6bf] flex items-center justify-center text-[#3cd6bf] font-semibold">
                  {step.icon || index + 1}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    );
  }

  // Default: numbered variant
  return (
    <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-${Math.min(steps.length, 4)} ${className}`}>
      {steps.map((step, index) => (
        <ScrollReveal key={index} delay={index * 0.1}>
          <div className="relative">
            {/* Large number */}
            <span className="absolute -top-4 -left-2 text-8xl font-bold text-gray-100 select-none">
              {index + 1}
            </span>
            <div className="relative pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
