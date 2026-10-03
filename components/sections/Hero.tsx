'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-[#19779b]/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight">
              <span className="block">Experts in</span>
              <span className="block text-[#19779b]">Salesforce</span>
              <span className="block text-slate-900">
                For Growing Businesses
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              We help sales and operations teams get more from Salesforce fast. With 130+ projects delivered,
              we blend technical expertise with practical business understanding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#19779b] hover:bg-[#146280] rounded-full transition-all duration-200 hover:shadow-lg"
              >
                Discuss Your Project
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/health-check-assessment"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                Free Health Check
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile stats */}
            <div className="flex items-center justify-center sm:justify-start gap-8 sm:gap-10 pt-6 lg:hidden">
              <div className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-display)] text-2xl text-slate-900">
                  130+
                </div>
                <div className="text-slate-500 text-sm">Projects</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-display)] text-2xl text-slate-900">
                  15+
                </div>
                <div className="text-slate-500 text-sm">Years</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-display)] text-2xl text-slate-900">
                  5.0
                </div>
                <div className="text-slate-500 text-sm">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <dl className="border-t border-slate-900/80">
              <div className="grid grid-cols-2 border-b border-slate-200">
                <div className="py-8 pr-8 border-r border-slate-200">
                  <dt className="text-sm text-slate-500 mb-2">Projects delivered</dt>
                  <dd className="font-[family-name:var(--font-display)] text-6xl font-normal text-slate-900">130+</dd>
                </div>
                <div className="py-8 pl-8">
                  <dt className="text-sm text-slate-500 mb-2">Years experience</dt>
                  <dd className="font-[family-name:var(--font-display)] text-6xl font-normal text-slate-900">15+</dd>
                </div>
              </div>
              <div className="py-6 border-b border-slate-200 flex items-baseline justify-between gap-6">
                <dt className="text-lg font-semibold text-slate-900">Salesforce certified</dt>
                <dd className="text-slate-500 text-right">Admin, Developer, Consultant &amp; Architect</dd>
              </div>
              <div className="py-6 border-b border-slate-200 flex items-baseline justify-between gap-6">
                <dt className="text-lg font-semibold text-slate-900">5.0 on AppExchange</dt>
                <dd className="text-slate-500 text-right">Verified client reviews</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
