import Link from 'next/link';

export const metadata = {
  title: 'Insights & Blog | Appdraft',
  description: 'Expert insights on Salesforce implementation, CRM strategy, and digital transformation from the Appdraft team.',
};

export default function Insights() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Death of a Spreadsheet',
      excerpt: "You wouldn't use a calculator to do a job for a spreadsheet (or vice versa, assuming you have a calculator to hand). By extension, with the wealth of technology solutions available to business today, why do we continue to rely so heavily on spreadsheets?",
      date: 'January 11, 2019',
      slug: 'death-of-a-spreadsheet',
      category: 'Digital Transformation',
    },
    {
      id: 2,
      title: '"Training Issue" + "User Error" = Bad System Design',
      excerpt: "Whilst it might be idealistic to say that the right system can design-out all propensity for error, it's certainly true that systems can be used to minimise it.",
      date: 'March 19, 2019',
      slug: 'training-issue-user-error-bad-system-design',
      category: 'System Design',
    },
    {
      id: 3,
      title: 'Why your sales team doesn\'t use CRM',
      excerpt: "Salespeople are a tricky bunch. The great ones have their idiosyncrasies and sales managers will often be inclined to overlook them as long as the team delivers new business. But how do we achieve the holy grail of a good team using a system that enables them to work even more effectively?",
      date: 'February 19, 2019',
      slug: 'why-your-sales-team-doesnt-use-crm',
      category: 'CRM Strategy',
    },
    {
      id: 4,
      title: 'The Salesforce Sales Cloud Top Five',
      excerpt: "Top tips for making the most of Salesforce Sales Cloud; including leveraging automation, mobile experience and integrations. The things no Salesforce Sales Cloud instance should be without!",
      date: 'October 27, 2021',
      slug: 'salesforce-sales-cloud-top-five-features',
      category: 'Salesforce',
    },
    {
      id: 5,
      title: 'Getting It Right First Time: The Value of Salesforce Consulting Partners',
      excerpt: "Based on several studies over the past 20 years, around 50-70% of CRM projects fail. Getting it right isn't easy; which is why Salesforce Consulting Partners like Appdraft exist.",
      date: 'March 5, 2022',
      slug: 'getting-it-right-first-time-the-value-of-salesforce-consulting-partners',
      category: 'Consulting',
    },
    {
      id: 6,
      title: 'From Poacher to Gamekeeper: Building a Career in Salesforce',
      excerpt: "Having just achieved my 10th Salesforce Certification, Application Architect, I wanted to share a little about why I chose Salesforce consulting as a career change and what I learned in the process.",
      date: 'April 19, 2022',
      slug: 'from-poacher-to-gamekeeper-building-a-career-in-salesforce',
      category: 'Career',
    },
  ];

  const categories = ['All', 'Salesforce', 'CRM Strategy', 'Digital Transformation', 'System Design', 'Consulting', 'Career'];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Insights & Perspectives
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights on Salesforce implementation, CRM strategy, and digital transformation.
              Learn from our experience helping businesses get the most from their technology investments.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.date}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 text-center">
            <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all inline-flex items-center gap-2">
              Load More Articles
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Expert Salesforce Advice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help you make the most of your Salesforce investment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Get in Touch
            </Link>
            <Link
              href="/services/health-checks"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all"
            >
              Free Health Check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
