'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Button {
  label: string;
  href: string;
}

interface CTABannerProps {
  title: string;
  description?: string;
  primaryButton: Button;
  secondaryButton?: Button;
  variant?: 'default' | 'compact' | 'gradient';
  className?: string;
}

export default function CTABanner({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'default',
  className = '',
}: CTABannerProps) {
  if (variant === 'compact') {
    return (
      <ScrollReveal className={className}>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            {description && <p className="text-gray-600">{description}</p>}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={primaryButton.href}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#3cd6bf] hover:bg-[#2bc4ad] rounded-xl transition-all duration-300 hover:shadow-glow"
            >
              {primaryButton.label}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                {secondaryButton.label}
              </Link>
            )}
          </div>
        </div>
      </ScrollReveal>
    );
  }

  if (variant === 'gradient') {
    return (
      <ScrollReveal className={className}>
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3cd6bf] to-[#2bc4ad]" />
          <div className="relative p-10 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h3>
            {description && (
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{description}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={primaryButton.href}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#3cd6bf] bg-white hover:bg-gray-100 rounded-xl transition-all duration-300"
              >
                {primaryButton.label}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  {secondaryButton.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    );
  }

  // Default variant
  return (
    <ScrollReveal className={className}>
      <div className="bg-slate-50 rounded-3xl p-10 md:p-16 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h3>
        {description && (
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButton.href}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#3cd6bf] hover:bg-[#2bc4ad] rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
          >
            {primaryButton.label}
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            >
              {secondaryButton.label}
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
