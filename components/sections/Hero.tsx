'use client';

import Link from 'next/link';
import CountUp from '@/components/ui/CountUp';
import TypewriterText from '@/components/ui/TypewriterText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Soft gradient background - Apollo style */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            {/* Badge - softer styling */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/60 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-slate-600 font-medium">Salesforce Consulting Partner</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight">
              <span className="block">Experts in</span>
              <span className="block h-[1.2em] text-[#3cd6bf]">
                <TypewriterText
                  words={[
                    'Salesforce',
                    'Transformation',
                    'Automation',
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2500}
                />
              </span>
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
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all duration-200 hover:shadow-lg"
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
                <div className="text-3xl font-bold text-slate-900">
                  <CountUp end={130} suffix="+" />
                </div>
                <div className="text-slate-500 text-sm">Projects</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-slate-900">
                  <CountUp end={15} suffix="+" />
                </div>
                <div className="text-slate-500 text-sm">Years</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-slate-900">
                  <CountUp end={5.0} decimals={1} />
                </div>
                <div className="text-slate-500 text-sm">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="space-y-5">
              {/* Stats Cards - cleaner Apollo style */}
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-5xl font-bold text-slate-900 mb-1">
                    <CountUp end={130} suffix="+" />
                  </div>
                  <div className="text-slate-500">Projects Delivered</div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-5xl font-bold text-slate-900 mb-1">
                    <CountUp end={15} suffix="+" />
                  </div>
                  <div className="text-slate-500">Years Experience</div>
                </div>
              </div>

              {/* Certification Badge */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-[#56FFDD] to-[#3cd6bf] rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 8.778l-7.5 7.5-3.5-3.5 1.414-1.414 2.086 2.086 6.086-6.086L18.5 8.778z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-0.5">Salesforce Certified</h3>
                    <p className="text-slate-500 text-sm">Admin, Developer, Consultant & Architect certified team</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-slate-900">
                      <CountUp end={5.0} decimals={1} /> Rating
                    </div>
                    <div className="text-sm text-slate-500">AppExchange Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
