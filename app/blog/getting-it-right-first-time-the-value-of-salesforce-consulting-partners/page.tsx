import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'Getting It Right First Time: The Value of Salesforce Consulting Partners | Appdraft Blog',
  description: 'Based on several studies over the past 20 years, around 50-70% of CRM projects fail. Getting it right isn\'t easy; which is why Salesforce Consulting Partners...',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'getting-it-right-first-time-the-value-of-salesforce-consulting-partners')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:paragraph -->
<p>Salesforce Consulting Partners are independent, authorised experts that help customers make the most of Salesforce.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Salesforce is uniquely customisable and offers real flexibility for businesses to design the platform around evolving needs and future-proof their CRM. Whether your team is 10 or 10,000-strong, Salesforce will help you deliver both current and future business objectives.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Consulting Partners help customers identify and surface the CRM features that are right for your business today, whilst helping you plan to leverage the more complex capabilities of the system as your business scales.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Here are some key themes for CRM project success:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>The Sales Process</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":2089,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://appdraft.com/wp-content/uploads/2022/02/processmap2-1024x427.png" alt="" class="wp-image-2089"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Defining the Lead and Opportunity management process is hugely important if a business is seeking to standardise the categorisation of data. All sales people are different and some are more optimistic than others when it comes to setting Opportunity Stages and values. To achieve reliable data, the business needs to configure the system to standardise the user input. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Things to think about:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>How will Lead data be imported and what does the Lead conversion process involve?</li><li>What Stages will an Opportunity proceed through and how can the business enforce system rules to prevent Opportunities advancing through Stages without the proper assessment or qualification?</li><li>How can Opportunity value be qualified so that it is tied to what the Customer intends to purchase (so that the business doesn’t have to rely on Sales team estimates?)</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>Data Management</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":2090,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://appdraft.com/wp-content/uploads/2022/02/datatransfer-1024x427.png" alt="" class="wp-image-2090"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Maintaining valid and complete data in a system is essential. All systems should be an effective reference point and source of truth for<br>customer data. If data is inaccurate or missing, users will quickly lose trust.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Things to think about:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><meta charset="utf-8">How will data be migrated from a legacy system into Salesforce; is there a requirement to clean/validate that data?</li><li>How can duplicate records be prevented or actively managed/merged?</li><li>How can the business enforce required fields and ensure that users only add data that conforms with business expectations?</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>Reporting</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":2092,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://appdraft.com/wp-content/uploads/2022/02/Untitled-design-27-1024x427.png" alt="" class="wp-image-2092"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Reporting is often an after-thought for new CRM users, who tend to focus on the benefits of process management. Effective reporting (assuming reliable data) can help businesses answer fundamental questions about performance, including:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><meta charset="utf-8">What is the business cash position likely to be in the next ‘X’ months; is the business tracking to budget?</li><li>Who are the key customers?; who are the Rising Stars and who is scaling back their spend? </li><li>Which products/services are best-sellers? </li><li>Which products haven’t key customers bought? </li><li>Which team members perform best? What activities are they undertaking that ‘shift the needle’?</li><li>What Lead sources are converting into valuable Opportunities?</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Answering these questions effectively and confidently sets a business up for success. Many businesses rely on spreadsheets and data exports for reporting. The time-consuming nature of manipulating data in this way means reporting often becomes an occasional/infrequent task that takes up considerable management time. Reports and Dashboards in Salesforce allow users to ‘set and forget’ on KPI tracking and simply refresh the live data at the click of a button to take the pulse of the business.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Payback: The key to user adoption</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":2093,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://appdraft.com/wp-content/uploads/2022/02/payback-1024x427.png" alt="" class="wp-image-2093"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>New system implementations need to be more carrot than stick. For most users, system change is rarely welcome and busy sales people often don’t have time to adjust. To soften the blow, businesses should give consideration to the following:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Can users lives be made easier by automating processes, e.g. quote or contract creation?</li><li>Can activities in email and LinkedIn be integrated, so that users have a complete picture of their conversations with Leads and Contacts in one place?</li><li>Can authorisation or sign-off processes be made quicker so that users don’t have to write emails for permission or wait for/chase responses?</li></ul>
<!-- /wp:list -->`;

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
