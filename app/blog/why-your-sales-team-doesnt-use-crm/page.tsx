import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'Why Your Sales Team Doesn\'t Use CRM | Appdraft Blog',
  description: 'Salespeople are a tricky bunch. The great ones have their idiosyncrasies and sales managers will often be inclined to overlook them as long as the team deliv...',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'why-your-sales-team-doesnt-use-crm')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:paragraph -->
<p>‘I’m too busy’. ‘I’m not great with computers’. ‘I’ve got my
rolodex, I don’t need a CRM’. Salespeople are a tricky bunch. The great ones
have their idiosyncrasies and sales managers will often be inclined to overlook
them as long as the team delivers new business. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But a good team is only part of the equation and good
systems can be just as important. So how do we achieve the holy grail of a good
team using a system that enables them to work even more effectively? It’s all
about objection handling. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Well-designed CRMs add value</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>‘What’s in it for me?’. It sounds a little mercenary, but if
you ask that question from your team’s perspective, you’ll be well on the way
to improving user adoption. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A good place to start is saving time by reducing tedious and
repetitive tasks. Today’s sales professionals spend just 34% of their time
selling. Introducing templated emails for the sales process, producing and
sending templated proposals and contracts to prospects, tracking service
delivery and support cases; just a few ways a well-designed CRM can save users
time. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s possible to automate just about any transactional
process in Salesforce. The best designed systems will automate the ‘slack’; the
things your team shouldn’t be wasting their time on. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Make it indispensable&nbsp;&nbsp;&nbsp; </h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If your CRM is <em>the </em>system
of record for client information, if it holds clean and insightful data, your
team will be more inclined to use it. If you can use CRM as a place where group
conversations about an account are hosted, your team will begin to use it as a
place of reference. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If your CRM hosts revenue data by client (as opposed to just
pipeline data), think about using CRM to host commission summaries and
performance against target. Take a strict approach to deals ‘outside’ CRM;
insist that if it isn’t in CRM, it didn’t happen.&nbsp; </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Live reports, trend reports and dashboards within Salesforce
are really powerful tools. If you’re manually exporting data and forcing it
into spreadsheets, you’re working from static data and introducing the
opportunity for error. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Customise the user experience </h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One size doesn’t fit all when it comes to systems. Typically,
organisations will have a number of user types or ‘profiles’. All of those
profiles need an interface that works for them. If a user doesn’t use the
field, make sure it doesn’t take up valuable screen ‘real estate’. If you have
products or services with different sales cycles, think about designing the
user experience around these. A well-designed CRM should be so intuitive that
you don’t need to be ‘good at computers’.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Salesforce Sales Cloud has the capacity to solve all these
issues and more. Appdraft helps businesses implement and recalibrate Sales
Cloud to optimise it for their teams. With senior level ‘coal-face’ experience
of sales and marketing, we work with organisations to review systems in the
context of your process. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We’ll work with you to identify opportunities for automation
and ensure that your CRM solves challenges for your team and becomes something
they are grateful for, instead of an admin chore. It’ll host clean, valuable
data and reporting that means something, allowing users to track progress live.
</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Getting CRM right can be transformational for a business. By
developing ‘user stories’ we will understand what your users really want from a
CRM and prioritise those changes to drive user adoption. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For more information on implementing Salesforce or
recalibrating your Salesforce org, contact us using the form below. </p>
<!-- /wp:paragraph -->`;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/insights" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Insights
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{post.category}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-600">{post.date}</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
          {post.excerpt && <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>}
        </div>
      </section>

      {/* Author Section */}
      <section className="py-8 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AW</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{post.author.name}</div>
              <div className="text-sm text-gray-600">{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-ul:my-6 prose-ul:space-y-2 prose-li:text-gray-700 prose-strong:text-gray-900 prose-strong:font-semibold" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{relatedPost.category}</span>
                      <span className="text-xs text-gray-500">{relatedPost.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{relatedPost.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.slug}`} className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group">
                      Read more
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Expert Salesforce Advice?</h2>
          <p className="text-xl text-blue-100 mb-8">Our team is here to help you make the most of your Salesforce investment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all">Get in Touch</Link>
            <Link href="/services/health-checks" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all">Free Health Check</Link>
          </div>
        </div>
      </section>
    </>
  );
}
