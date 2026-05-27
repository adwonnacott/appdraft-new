import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import caseStudies from '../case-studies.json';
import ScrollReveal from '@/components/ui/ScrollReveal';

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: 'Case Study Not Found | Appdraft' };

  return {
    title: `${cs.title} | Salesforce Case Study | Appdraft`,
    description: cs.excerpt,
    openGraph: {
      title: cs.title,
      description: cs.excerpt,
      url: `https://appdraft.com/case-studies/${cs.slug}`,
      images: [{ url: cs.image, width: 1200, height: 630, alt: cs.title }],
    },
    alternates: {
      canonical: `https://appdraft.com/case-studies/${cs.slug}`,
    },
  };
}

const cloudColors: Record<string, string> = {
  'Agentforce':      'bg-purple-100 text-purple-700',
  'Sales Cloud':     'bg-blue-100 text-blue-700',
  'Service Cloud':   'bg-teal-100 text-teal-700',
  'Field Service':   'bg-orange-100 text-orange-700',
  'Marketing Cloud': 'bg-pink-100 text-pink-700',
  'Experience Cloud':'bg-green-100 text-green-700',
};

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cs.title,
    description: cs.excerpt,
    image: cs.image,
    author: { '@type': 'Organization', name: 'Appdraft', url: 'https://appdraft.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Appdraft',
      url: 'https://appdraft.com',
      logo: { '@type': 'ImageObject', url: 'https://appdraft.com/appdraft-wordmark/appdraft-wordmark-colour.svg' },
    },
    datePublished: cs.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://appdraft.com/case-studies/${cs.slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-4">
          <ScrollReveal>
            {/* Back link */}
            <div className="mb-6">
              <Link
                href="/case-studies"
                className="inline-flex items-center text-[#3cd6bf] hover:text-[#2bc4ad] font-semibold transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Case Studies
              </Link>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 uppercase tracking-wide">
                {cs.sector}
              </span>
              {cs.cloud.map(c => (
                <span key={c} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${cloudColors[c] || 'bg-slate-100 text-slate-600'}`}>
                  {c}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {cs.title}
            </h1>

            {/* Outcome + date row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-gray-200">
              <div className="inline-flex items-center gap-2 bg-[#0b3d52] text-white px-4 py-2.5 rounded-xl text-sm font-semibold">
                <svg className="w-4 h-4 text-[#3cd6bf] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {cs.outcome}
              </div>
              <span className="text-sm text-gray-500">{cs.date}</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <ScrollReveal>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image src={cs.image} alt={cs.title} fill className="object-cover" priority />
            </div>
          </ScrollReveal>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <ScrollReveal>
            <div className="case-study-content" dangerouslySetInnerHTML={{ __html: cs.content }} />
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal className="mt-16">
            <div className="bg-gradient-to-br from-[#0b3d52] to-[#19779b] rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-3">Working on something similar?</h2>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                If you are exploring Agentforce or want to understand what it could do for your business, we would be happy to talk it through.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#19779b] font-semibold rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Book a call
                </Link>
                {cs.relatedCloud && (
                  <Link
                    href={cs.relatedCloud}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                  >
                    {cs.relatedCloudLabel}
                  </Link>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
