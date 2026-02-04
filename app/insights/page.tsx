import Link from 'next/link';
import Image from 'next/image';
import posts from '../blog/posts.json';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Insights & Blog',
  description: 'Expert insights on Salesforce implementation, CRM strategy, automation, and digital transformation from certified Salesforce consultants.',
  keywords: ['Salesforce blog', 'CRM insights', 'Salesforce tips', 'digital transformation articles'],
  openGraph: {
    title: 'Insights & Blog | Appdraft',
    description: 'Expert insights on Salesforce implementation, CRM strategy, and digital transformation.',
    url: 'https://appdraft.com/insights',
  },
  alternates: {
    canonical: 'https://appdraft.com/insights',
  },
};

// Map posts to include featured images
const postImages: Record<string, string> = {
  'death-of-a-spreadsheet': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  'training-issue-user-error-bad-system-design': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
  'why-your-sales-team-doesnt-use-crm': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  'salesforce-sales-cloud-top-five-features': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
  'getting-it-right-first-time-the-value-of-salesforce-consulting-partners': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  'from-poacher-to-gamekeeper-building-a-career-in-salesforce': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  'white-paper-achieving-digital-transformations-with-low-code-development': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  'predictive-analytics-the-credit-managers-crystal-ball': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'study-finds-87-of-credit-managers-admit-systems-automation-would-increase-efficiency': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
  'whats-wrong-with-a-spreadsheet': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  'an-exact-science-forecasts-in-salesforce': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  'understanding-salesforce-forecasts': 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
  'email-integration-salesforce': 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
  'go-with-the-flow-a-guide-to-salesforce-flows': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  'seamless-prospecting-with-salesforce-linkedin': 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80',
  'one-less-thing-to-worry-about-a-robot-apocalypse': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  'salesforce-einstein-trust-layer': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  'transform-customer-interactions-with-agentforce': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
  'what-is-a-salesforce-health-check-and-what-can-it-do-for-users': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  'sfx-seamless-integration-for-salesforce-xero': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
  'salesforce-showcase-salesforce-xero-integration': 'https://images.unsplash.com/photo-1635236269199-3c71295855b3?w=800&q=80',
  'streamlining-sales-with-salesforce-the-ultimate-guide-to-lead-management': 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80',
  'salesforce-sales-engagement-automate-outbound-sales': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
  'sustainability-in-consultancy-guiding-change-from-within': 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&q=80',
  'the-importance-of-diversity-in-consultancy-unleashing-new-perspectives-for-it-projects': 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
};

const defaultImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80';

export default function Insights() {
  // Sort posts by date (newest first)
  const blogPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-[#3cd6bf]/10 text-[#3cd6bf] rounded-full text-sm font-medium mb-6">
                Knowledge Hub
              </span>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Insights & <span className="text-[#3cd6bf]">Perspectives</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert insights on Salesforce implementation, CRM strategy, and digital transformation.
                Learn from our experience helping businesses get the most from their technology investments.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.05}>
                <article className="bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                  {/* Featured Image */}
                  <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden">
                    <Image
                      src={postImages[post.slug] || defaultImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </Link>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-[#3cd6bf] uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">
                        {post.date}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#3cd6bf] transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {post.excerpt || 'Discover expert insights on Salesforce implementation and best practices.'}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#3cd6bf] font-semibold text-sm hover:text-[#2bc4ad] transition-colors group/link"
                    >
                      Read article
                      <svg
                        className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-12 border border-gray-100">
              <div className="w-16 h-16 bg-[#3cd6bf] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get the latest Salesforce insights and best practices delivered to your inbox
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3cd6bf] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#3cd6bf] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2bc4ad] transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3cd6bf]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Expert Salesforce Advice?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Our team is here to help you make the most of your Salesforce investment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#3cd6bf] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
              >
                Get in Touch
              </Link>
              <Link
                href="/services/health-checks"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Free Health Check
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
