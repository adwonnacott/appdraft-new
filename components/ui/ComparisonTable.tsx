'use client';

import { useEffect, useRef, useState } from 'react';

interface Feature {
  name: string;
  description?: string;
  values: (boolean | string)[];
}

interface FeatureCategory {
  category: string;
  features: Feature[];
}

interface Plan {
  name: string;
  description: string;
  price?: string;
  priceNote?: string;
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  plans: Plan[];
  featureCategories: FeatureCategory[];
}

export default function ComparisonTable({
  title,
  subtitle,
  plans,
  featureCategories
}: ComparisonTableProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [visibleRows, setVisibleRows] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const rowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = rowRefs.current.indexOf(entry.target as HTMLTableRowElement);
            if (index !== -1) {
              setVisibleRows((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    rowRefs.current.forEach((ref) => {
      if (ref) rowObserver.observe(ref);
    });

    return () => rowObserver.disconnect();
  }, [featureCategories]);

  let rowIndex = 0;

  return (
    <div ref={containerRef} className="py-16">
      {/* Header */}
      <div
        className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
        {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px] max-w-6xl mx-auto px-4">
          {/* Plan Headers */}
          <div
            className={`grid gap-4 mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ gridTemplateColumns: `minmax(250px, 1fr) repeat(${plans.length}, minmax(180px, 1fr))` }}
          >
            <div /> {/* Empty cell for feature column */}
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`text-center p-6 rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#3cd6bf] text-white shadow-xl scale-105'
                    : 'bg-white border border-gray-200 shadow-lg'
                } ${hoveredPlan === index ? 'ring-2 ring-[#3cd6bf]/50' : ''}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {plan.highlighted && (
                  <span className="inline-block text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                {plan.price && (
                  <div className="mb-4">
                    <span className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    {plan.priceNote && (
                      <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                        {plan.priceNote}
                      </span>
                    )}
                  </div>
                )}
                {plan.ctaText && (
                  <a
                    href={plan.ctaHref || '/contact'}
                    className={`inline-block px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-white text-[#3cd6bf] hover:bg-gray-100'
                        : 'bg-[#3cd6bf] text-white hover:bg-[#2bc4ad]'
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Feature Categories */}
          {featureCategories.map((category, catIndex) => (
            <div key={category.category} className="mb-8">
              {/* Category Header */}
              <div
                ref={(el) => { rowRefs.current[rowIndex] = el as HTMLTableRowElement; }}
                className={`grid gap-4 py-4 border-b-2 border-gray-200 transition-all duration-500 ${
                  visibleRows.has(rowIndex++) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{
                  gridTemplateColumns: `minmax(250px, 1fr) repeat(${plans.length}, minmax(180px, 1fr))`,
                  transitionDelay: `${catIndex * 100}ms`
                }}
              >
                <div className="font-bold text-lg text-gray-900">{category.category}</div>
                {plans.map((_, i) => (
                  <div key={i} />
                ))}
              </div>

              {/* Features */}
              {category.features.map((feature, featureIndex) => {
                const currentRowIndex = rowIndex++;
                return (
                  <div
                    key={feature.name}
                    ref={(el) => { rowRefs.current[currentRowIndex] = el as HTMLTableRowElement; }}
                    className={`grid gap-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-all duration-500 ${
                      visibleRows.has(currentRowIndex) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{
                      gridTemplateColumns: `minmax(250px, 1fr) repeat(${plans.length}, minmax(180px, 1fr))`,
                      transitionDelay: `${(catIndex * category.features.length + featureIndex) * 50}ms`
                    }}
                  >
                    <div>
                      <span className="font-medium text-gray-900">{feature.name}</span>
                      {feature.description && (
                        <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                      )}
                    </div>
                    {feature.values.map((value, valueIndex) => (
                      <div
                        key={valueIndex}
                        className={`flex items-center justify-center transition-all duration-300 ${
                          hoveredPlan === valueIndex ? 'scale-110' : ''
                        }`}
                      >
                        {typeof value === 'boolean' ? (
                          value ? (
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                          )
                        ) : (
                          <span className="text-sm font-medium text-gray-700 text-center">{value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
