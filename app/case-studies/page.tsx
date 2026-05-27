import Link from 'next/link';
import Image from 'next/image';
import caseStudies from './case-studies.json';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Salesforce Case Studies | Appdraft',
  description: 'Real Salesforce project case studies from Appdraft. See how we have helped UK and European businesses implement Salesforce, deploy Agentforce, and transform their sales and service operations.',
  keywords: ['Salesforce case studies', 'Agentforce case study', 'Salesforce implementation examples', 'CRM project results UK'],
  openGraph: {
    title: 'Salesforce Case Studies | Appdraft',
    description: 'Real Salesforce project case studies from Appdraft.',
    url: 'https://appdraft.com/case-studies',
  },
  alternates: {
    canonical: 'https://appdraft.com/case-studies',
  },
};

const cloudColors: Record<string, string> = {
  'Agentforce':      'bg-purple-100 text-purple-700',
  'Sales Cloud':     'bg-blue-100 text-blue-700',
  'Service Cloud':   'bg-teal-100 text-teal-700',
  'Field Service':   'bg-orange-100 text-orange-700',
  'Marketing Cloud': 'bg-pink-100 text-pink-700',
  'Experience Cloud':'bg-green-100 text-green-700',
};

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/60 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-slate-600 font-medium">Client Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Salesforce Case Studies</h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Real projects. Real outcomes. How we have helped businesses get more from Salesforce.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case study grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.slug} delay={i * 0.05}>
                <Link href={`/case-studies/${cs.slug}`} className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    {/* Outcome badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#3cd6bf] text-slate-900">
                        {cs.outcome}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Cloud tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                        {cs.sector}
                      </span>
                      {cs.cloud.map(c => (
                        <span key={c} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cloudColors[c] || 'bg-slate-100 text-slate-600'}`}>
                          {c}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#19779b] transition-colors leading-snug">
                      {cs.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{cs.excerpt}</p>

                    <div className="mt-4 flex items-center text-[#19779b] text-sm font-medium">
                      Read case study
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {caseStudies.length === 0 && (
            <p className="text-center text-slate-500 py-16">Case studies coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
