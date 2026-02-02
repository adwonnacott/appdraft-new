import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'From Poacher to Gamekeeper: Building a Career in Salesforce | Appdraft Blog',
  description: 'Having just achieved my 10th Salesforce Certification, Application Architect, I wanted to share a little about why I chose Salesforce consulting as a career ...',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'from-poacher-to-gamekeeper-building-a-career-in-salesforce')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:paragraph -->
<p>Having just achieved my 10th Salesforce Certification, Application Architect, I wanted to share a little about why I chose Salesforce consulting as a career change and what I learned in the process. If you’re working in sales and thinking about a career change to Salesforce, I hope it helps and if you want any advice, feel free to DM me on LinkedIn!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Having worked in sales for 13 years before deciding on a career in Salesforce consulting, I’d had first-hand experience of what makes CRM projects fail and been either a bystander or active stakeholder in failure on several occasions with a number of different software projects.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What I realise now is that the challenges with CRM that I experienced across the businesses I worked in are actually really common. Here are a few examples:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The answer to all prayers</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One of the common mistakes for small businesses is thinking that a CRM will automatically improve sales. CRM <em>can </em>do this, but it doesn’t do it ‘out of the box’. It needs a concerted effort and should represent a step-change in the way the business thinks about sales forecasting.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For CRM to be able to increase sales, the business needs to be willing to use it as part of a process of budgeting and building forecasts  (setting sales objectives). Forecast/pipeline data from CRM will help track against those objectives, but only if they are configured. If CRM isn't being used as a tool for tracking performance, staff will very quickly realise that there is no KPI measurement and the impact of CRM will be minimal. CRM needs to be part of a bigger process of change and maturity of finance strategy.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>User adoption&nbsp;</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In larger businesses with many users, it’s essential to design a CRM around the sales process. Trying to corral users into using CRM properly with guidance notes and emails doesn’t work. There must be validation in place to ensure users <em>can’t</em> use the system incorrectly.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Lead/Opportunity stages need to be clear and aligned to what actually happens in the business, with different processes where the product/service differs. Making CRM difficult to use just gives users the excuse not to use it and confuses those with good intentions. Ideally, CRM should give something back to the users; allowing them to do their job quicker or track what matters to them (hint: this is usually commissions!).&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Keep the faith&nbsp;</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The holy grail for any Salesforce/CRM customer is being able to have faith in the numbers. This means regularly reviewing the data in a collaborative way.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Getting into a weekly (or at least fortnightly) cadence of reviewing the forecast brings a new level of maturity to managing sales. Users will forget to log Opportunities, forget to reassess close dates/amounts and even forget to close them - so regular reviews are critical.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With accurate data in the system the business can have confidence in the reports it exports; without this, reporting has no value and the CRM cannot be relied upon as a method of KPI assessment.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>My experience of being part of the problem gives me a useful perspective when it comes to implementing CRM. I wasn’t always a fan of CRM (and many salespeople aren’t!); but that provides a useful perspective when it comes to understanding user sentiment and making CRM a real catalyst for positive change.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Making the change&nbsp;</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are so many resources available for developing a career on Salesforce and a number of different routes. Some of the roles in the Salesforce ecosystem are more ‘technical’ than others, but most of the ‘development’ is declarative (no/low code).&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As such, making the switch from sales to Salesforce is not as difficult as it may sound. For the most part, the real challenge is identifying the issues and leveraging the right Salesforce solution. If you’re involved in consultative/solution sales, you’ll likely already have a head start in terms of skillset.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The best starting point is Salesforce Trailhead (<a href="https://trailhead.salesforce.com">https://trailhead.salesforce.com</a>). They have interactive learning resources for everyone from end-users to developers and I would highly recommend it!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Good luck!</p>
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
          <div className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-ul:my-6 prose-ul:space-y-2 prose-li:text-gray-700 prose-strong:text-gray-900 prose-strong:font-semibold prose-img:rounded-xl prose-img:shadow-lg prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-6 prose-blockquote:italic" dangerouslySetInnerHTML={{ __html: content }} />
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
