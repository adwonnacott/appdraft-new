'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  background?: 'white' | 'gray' | 'gradient';
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function ContentSection({
  title,
  subtitle,
  badge,
  background = 'white',
  centered = true,
  className = '',
  children,
}: ContentSectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    gradient: 'bg-gradient-to-br from-slate-50 via-white to-cyan-50/30',
  };

  return (
    <section className={`py-20 lg:py-24 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || badge) && (
          <ScrollReveal className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}>
            {badge && (
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#3cd6bf]/10 text-[#3cd6bf] text-sm font-medium mb-4">
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg md:text-xl text-gray-600 ${centered ? 'max-w-3xl mx-auto' : ''}`}>
                {subtitle}
              </p>
            )}
          </ScrollReveal>
        )}
        {children}
      </div>
    </section>
  );
}
