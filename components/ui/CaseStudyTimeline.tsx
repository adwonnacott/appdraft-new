'use client';

import { useEffect, useRef, useState } from 'react';

interface Milestone {
  phase: string;
  title: string;
  description: string;
  duration: string;
  outcomes?: string[];
  icon: 'discovery' | 'design' | 'build' | 'test' | 'launch' | 'support';
}

interface CaseStudyTimelineProps {
  clientName: string;
  industry: string;
  challenge: string;
  result: string;
  milestones: Milestone[];
}

const iconMap = {
  discovery: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  design: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  build: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  test: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  launch: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  support: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

function MilestoneCard({ milestone, index, isVisible }: { milestone: Milestone; index: number; isVisible: boolean }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content Card */}
      <div
        className={`flex-1 transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : isEven
              ? 'opacity-0 -translate-x-12'
              : 'opacity-0 translate-x-12'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-[#3cd6bf] bg-[#3cd6bf]/10 px-3 py-1 rounded-full">
              {milestone.phase}
            </span>
            <span className="text-xs text-gray-500">{milestone.duration}</span>
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
          <p className="text-gray-600 mb-4">{milestone.description}</p>
          {milestone.outcomes && (
            <ul className="space-y-2">
              {milestone.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {outcome}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Timeline Node */}
      <div
        className={`relative flex-shrink-0 transition-all duration-500 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{ transitionDelay: `${index * 150 + 100}ms` }}
      >
        <div className="w-14 h-14 rounded-full bg-[#3cd6bf] text-white flex items-center justify-center shadow-lg ring-4 ring-[#3cd6bf]/20">
          {iconMap[milestone.icon]}
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1" />
    </div>
  );
}

export default function CaseStudyTimeline({
  clientName,
  industry,
  challenge,
  result,
  milestones
}: CaseStudyTimelineProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
            if (entry.target === headerRef.current) {
              setHeaderVisible(true);
            }
            if (entry.target === resultRef.current) {
              setResultVisible(true);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (resultRef.current) observer.observe(resultRef.current);
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [milestones.length]);

  return (
    <div ref={containerRef} className="py-16">
      {/* Header */}
      <div
        ref={headerRef}
        className={`text-center mb-16 transition-all duration-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-[#3cd6bf] font-semibold tracking-wide uppercase text-sm mb-4">
          Case Study
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {clientName}
        </h2>
        <p className="text-lg text-gray-500 mb-6">{industry}</p>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-[#3cd6bf]/5 to-[#f25c54]/5 p-6 rounded-2xl border border-gray-100">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">The Challenge</p>
            <p className="text-gray-700">{challenge}</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3cd6bf] via-[#3cd6bf]/50 to-[#3cd6bf] -translate-x-1/2" />

        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
            >
              <MilestoneCard
                milestone={milestone}
                index={index}
                isVisible={visibleItems.has(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Result */}
      <div
        ref={resultRef}
        className={`mt-16 text-center transition-all duration-700 ${
          resultVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">The Result</p>
            <p className="text-xl text-gray-800 font-medium">{result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
