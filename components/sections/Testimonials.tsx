'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';

const testimonials = [
  {
    quote: "Helped us review Sales Cloud to resolve integration issues, build automation for opportunity management, and optimise the user experience. We've retained them for ongoing support and find them really responsive as issues arise. They have a strong understanding of both the sales process and the technology.",
    author: "Verified AppExchange Review",
    company: "High Tech Client",
    rating: 5,
  },
  {
    quote: "Appdraft guided us through our CRM implementation from start to finish. They helped us understand what was possible, constructively challenged how we worked with our old system, and made valuable suggestions to get us up and running. Working with Appdraft has definitely helped us get value from our investment in Salesforce.",
    author: "Verified AppExchange Review",
    company: "Engineering Client",
    rating: 5,
  },
  {
    quote: "A very helpful and enthusiastic team with a fair implementation model that represents good value. I would fully recommend this partner to help other companies navigate the adoption of Salesforce.",
    author: "Verified AppExchange Review",
    company: "Manufacturing Client",
    rating: 5,
  },
];

const Stars = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <div className="flex gap-0.5 text-amber-400">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [lead, ...rest] = testimonials;
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-14">
          <p className="text-[#19779b] font-semibold tracking-wide uppercase text-sm mb-4">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">What our clients say</h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Don&apos;t just take our word for it - hear from teams we&apos;ve helped transform
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <figure className="border-l-4 border-[#19779b] pl-6 md:pl-10 mb-16">
            <blockquote className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl leading-snug text-slate-900">
              &ldquo;{lead.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4 text-slate-600">
              <Stars className="w-4 h-4" />
              <span>{lead.author}, {lead.company}</span>
            </figcaption>
          </figure>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 border-t border-slate-200 pt-10">
          {rest.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <figure>
                <blockquote className="text-lg text-slate-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-slate-500">
                  {testimonial.author}, {testimonial.company}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300} className="mt-14 flex items-center gap-4">
          <Stars />
          <span className="font-[family-name:var(--font-display)] text-xl text-slate-900">4.9</span>
          <span className="text-slate-600">Verified on AppExchange</span>
        </ScrollReveal>
      </div>
    </section>
  );
}
