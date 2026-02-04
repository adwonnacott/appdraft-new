'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlowCard from '@/components/ui/GlowCard';

// Brand rainbow colors for cycling through features
const brandColors = ['#19779b', '#3cd6bf', '#f25c54', '#f5a623'];

interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: 'card' | 'simple' | 'icon-left';
  className?: string;
  coloredIcons?: boolean; // Enable rainbow-colored icons
}

export default function FeatureGrid({
  features,
  columns = 3,
  variant = 'card',
  className = '',
  coloredIcons = true,
}: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  // Get color for feature based on index
  const getColor = (index: number) => brandColors[index % brandColors.length];

  if (variant === 'simple') {
    return (
      <div className={`grid gap-6 md:gap-8 ${gridCols[columns]} ${className}`}>
        {features.map((feature, index) => {
          const color = coloredIcons ? getColor(index) : '#3cd6bf';
          return (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="space-y-3">
                {feature.icon && (
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${color}15`,
                      color: color,
                    }}
                  >
                    {feature.icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    );
  }

  if (variant === 'icon-left') {
    return (
      <div className={`grid gap-4 md:gap-6 ${gridCols[columns]} ${className}`}>
        {features.map((feature, index) => {
          const color = coloredIcons ? getColor(index) : '#3cd6bf';
          return (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex gap-4">
                {feature.icon && (
                  <div
                    className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${color}15`,
                      color: color,
                    }}
                  >
                    {feature.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    );
  }

  // Split features into full rows and orphans
  const remainder = features.length % columns;
  const fullRowsCount = features.length - remainder;
  const fullRowFeatures = features.slice(0, fullRowsCount);
  const orphanFeatures = remainder > 0 ? features.slice(fullRowsCount) : [];

  // Calculate orphan card width to match grid cards
  const orphanWidthClass = {
    2: 'lg:w-[calc(50%-0.75rem)]',
    3: 'lg:w-[calc(33.333%-1rem)]',
    4: 'lg:w-[calc(25%-1.125rem)]',
  };

  // Render a single feature card
  const renderFeatureCard = (feature: Feature, index: number) => {
    const color = coloredIcons ? getColor(index) : '#3cd6bf';
    return (
      <GlowCard className="h-full rounded-2xl" glowColor={`${color}20`}>
        <div className="relative bg-white p-5 md:p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full overflow-hidden">
          {/* Mobile: left border accent */}
          <div
            className="md:hidden absolute left-0 top-4 bottom-4 w-1 rounded-full"
            style={{ backgroundColor: color }}
          />

          {/* Mobile: Horizontal layout, Desktop: Vertical */}
          <div className="flex items-start gap-4 md:block">
            {feature.icon && (
              <div
                className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl flex items-center justify-center md:mb-5"
                style={{
                  backgroundColor: `${color}15`,
                  color: color,
                }}
              >
                {feature.icon}
              </div>
            )}

            <div className="flex-1 min-w-0">
              {/* Mobile: title with color, Desktop: neutral */}
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                <span className="md:hidden" style={{ color: color }}>{feature.title}</span>
                <span className="hidden md:inline text-gray-900">{feature.title}</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
            </div>
          </div>
        </div>
      </GlowCard>
    );
  };

  // Default: card variant with mobile optimization
  return (
    <div className={className}>
      {/* Full rows in grid */}
      {fullRowFeatures.length > 0 && (
        <div className={`grid gap-4 md:gap-6 ${gridCols[columns]}`}>
          {fullRowFeatures.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              {renderFeatureCard(feature, index)}
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Orphan items - flexbox centred, with fixed widths matching grid */}
      {orphanFeatures.length > 0 && (
        <div className={`flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-4 md:gap-6 ${fullRowFeatures.length > 0 ? 'mt-4 md:mt-6' : ''}`}>
          {orphanFeatures.map((feature, index) => (
            <div key={fullRowsCount + index} className={`w-full md:w-[calc(50%-0.75rem)] ${orphanWidthClass[columns]} flex`}>
              <ScrollReveal delay={(fullRowsCount + index) * 0.1} className="w-full flex">
                <div className="w-full">{renderFeatureCard(feature, fullRowsCount + index)}</div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
