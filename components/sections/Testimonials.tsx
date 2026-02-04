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

export default function Testimonials() {
  return (
    <section className="py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#3cd6bf] font-semibold tracking-wide uppercase text-sm mb-4">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from teams we&apos;ve helped transform
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                {/* Stars */}
                <div className="flex gap-0.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-slate-700 leading-relaxed flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author info */}
                <div className="border-t border-slate-100 pt-6 mt-6">
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Overall rating */}
        <ScrollReveal delay={400} className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full border border-slate-200">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xl font-bold text-slate-900">5.0</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-600">Verified on AppExchange</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
