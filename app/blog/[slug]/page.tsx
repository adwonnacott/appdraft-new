import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import posts from '../posts.json';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { processWordPressContent, getReadingTime, addHeadingIds } from '@/lib/blog-utils';

// Map posts to include featured images
const postImages: Record<string, string> = {
  'death-of-a-spreadsheet': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  'training-issue-user-error-bad-system-design': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
  'why-your-sales-team-doesnt-use-crm': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
  'salesforce-sales-cloud-top-five-features': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80',
  'getting-it-right-first-time-the-value-of-salesforce-consulting-partners': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
  'from-poacher-to-gamekeeper-building-a-career-in-salesforce': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
  'white-paper-achieving-digital-transformations-with-low-code-development': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
  'predictive-analytics-the-credit-managers-crystal-ball': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  'study-finds-87-of-credit-managers-admit-systems-automation-would-increase-efficiency': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80',
  'whats-wrong-with-a-spreadsheet': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
  'an-exact-science-forecasts-in-salesforce': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
  'understanding-salesforce-forecasts': 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80',
  'email-integration-salesforce': 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80',
  'go-with-the-flow-a-guide-to-salesforce-flows': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
  'seamless-prospecting-with-salesforce-linkedin': 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=1200&q=80',
  'one-less-thing-to-worry-about-a-robot-apocalypse': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
  'salesforce-einstein-trust-layer': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
  'transform-customer-interactions-with-agentforce': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
  'what-is-a-salesforce-health-check-and-what-can-it-do-for-users': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
  'sfx-seamless-integration-for-salesforce-xero': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80',
  'salesforce-showcase-salesforce-xero-integration': 'https://images.unsplash.com/photo-1635236269199-3c71295855b3?w=1200&q=80',
  'streamlining-sales-with-salesforce-the-ultimate-guide-to-lead-management': 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=1200&q=80',
  'salesforce-sales-engagement-automate-outbound-sales': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
  'sustainability-in-consultancy-guiding-change-from-within': 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200&q=80',
  'the-importance-of-diversity-in-consultancy-unleashing-new-perspectives-for-it-projects': 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80',
};

const defaultImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80';

// This will be used to generate static pages at build time
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Appdraft',
    };
  }

  const heroImage = postImages[slug] || defaultImage;

  return {
    title: post.title,
    description: post.excerpt || `Read about ${post.title} - expert Salesforce insights from Appdraft.`,
    keywords: ['Salesforce', post.category, 'CRM', 'business technology'],
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read about ${post.title} - expert Salesforce insights from Appdraft.`,
      url: `https://appdraft.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read about ${post.title}`,
      images: [heroImage],
    },
    alternates: {
      canonical: `https://appdraft.com/blog/${slug}`,
    },
  };
}

// Generate Article JSON-LD schema
function generateArticleSchema(post: typeof posts[0], heroImage: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: heroImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author.name,
      url: 'https://appdraft.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Appdraft',
      logo: {
        '@type': 'ImageObject',
        url: 'https://appdraft.com/appdraft-wordmark/appdraft-wordmark-colour.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://appdraft.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const heroImage = postImages[post.slug] || defaultImage;

  // Process the WordPress content
  const processedContent = addHeadingIds(processWordPressContent(post.content));
  const readingTime = getReadingTime(post.content);

  // Generate article schema
  const articleSchema = generateArticleSchema(post, heroImage);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Article Container - consistent width throughout */}
      <article className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <ScrollReveal>
            <div className="mb-8">
              <Link
                href="/insights"
                className="inline-flex items-center text-[#3cd6bf] hover:text-[#2bc4ad] font-semibold transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Insights
              </Link>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-[#3cd6bf]/10 text-[#3cd6bf] rounded-full text-xs font-semibold uppercase tracking-wide">
                {post.category}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-600">{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>
            )}

            {/* Author & Reading Time */}
            <div className="flex items-center justify-between pb-8 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#3cd6bf] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-12">
              <Image
                src={heroImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.2}>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </ScrollReveal>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <ScrollReveal key={relatedPost.slug} delay={index * 0.1}>
                  <article className="bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                    {/* Featured Image */}
                    <Link href={`/blog/${relatedPost.slug}`} className="block relative h-40 overflow-hidden">
                      <Image
                        src={postImages[relatedPost.slug] || defaultImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-[#3cd6bf] uppercase tracking-wide">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">
                          {relatedPost.date}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3cd6bf] transition-colors line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {relatedPost.excerpt || 'Discover expert insights on Salesforce implementation and best practices.'}
                      </p>

                      <Link
                        href={`/blog/${relatedPost.slug}`}
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
      )}

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
