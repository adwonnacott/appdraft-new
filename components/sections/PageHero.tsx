'use client';

import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Button {
  label: string;
  href: string;
  primary?: boolean;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  buttons?: Button[];
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  highlight,
  description,
  image,
  imageAlt = 'Hero image',
  buttons = [],
  children,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${image ? 'lg:grid-cols-2' : ''} gap-12 lg:gap-16 items-center`}>
          {/* Content */}
          <ScrollReveal className="space-y-6">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm text-gray-600 font-medium">{badge}</span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
              {highlight && (
                <>
                  {' '}
                  <span className="text-appdraft-primary">{highlight}</span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              {description}
            </p>

            {buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    className={
                      button.primary
                        ? 'group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#3cd6bf] hover:bg-[#2bc4ad] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-[1.02]'
                        : 'group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300'
                    }
                  >
                    <span className="relative z-10">{button.label}</span>
                    <svg
                      className="relative z-10 w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={button.primary ? 'M17 8l4 4m0 0l-4 4m4-4H3' : 'M9 5l7 7-7 7'}
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            )}

            {children}
          </ScrollReveal>

          {/* Image */}
          {image && (
            <ScrollReveal delay={0.2} className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
