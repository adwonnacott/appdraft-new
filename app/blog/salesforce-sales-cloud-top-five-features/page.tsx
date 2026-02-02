import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'The Salesforce Sales Cloud Top Five | Appdraft Blog',
  description: 'Top tips for making the most of Salesforce Sales Cloud; including leveraging automation, mobile experience and integrations. The things no Salesforce Sales C...',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'salesforce-sales-cloud-top-five-features')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:heading {"level":1} -->
<h1>Appdraft's Top Five tips for making the most of Salesforce Sales Cloud!</h1>
<!-- /wp:heading -->

<!-- wp:heading -->
<h2>Introduction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We’re setting out the top five areas of focus when getting value from Salesforce Sales Cloud. Whether you’re new to Salesforce or you’ve had it in place for a while, this is your guide to make sure Sales Cloud is working for you.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Automation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Go back a few years and CRM systems were pretty much just a database for Accounts, Contacts and Opportunities.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>All the activities still happened in Outlook or Word and calls were dialled manually. These typically weren’t tracked in CRM or, if they were, they were aggregated in generic ‘notes’ sections.&nbsp;The amount of admin could be overwhelming.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Still today, the average Salesperson spends just 34% of their time selling - that represents huge inefficiency.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sales Cloud can reduce this with automation, by stringing together a series of actions that would otherwise need to be manually created by salespeople.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is huge flexibility when looking at automation and the aim is to pursue the inefficiencies that you have in your current process. Here are some common examples of inefficiency and fixes that will help 'juice' the process and win back more time for sales activity:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1918,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://appdraft.com/wp-content/uploads/2021/11/salesforcetopfive.png" alt="" class="wp-image-1918"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>We help businesses spot the areas of inefficiency and make proportionate suggestions as to how they can grease the wheels of the sales process.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The more you automate, the more time your team can win back to start doing more sales.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One of the main reasons why CRM projects fail (and they do!) is that CRM system implementations don’t always ‘give back’ to users. If you expect your users to work with a new system, give them something to sweeten the deal; make their lives easier and help them devote more time to selling!</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>The mobile experience</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One of the great things about Salesforce is that it’s mobile ready. Everything you configure for desktop can be converted into a mobile experience.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can create leads when you’re out in the field or at events. There’s no longer any need to wait until you get back to the office; you can start to do admin like this in downtime for when travelling to and from events or meetings.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It's even possible to access reports and dashboards on the go. All the MI you need is live and at your fingertips.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Automating the new customer journey</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The experience a potential client gets when trying to buy your product or service says a lot about your business. If you’re slow to produce proposal documents, prospects can lose interest and faith in your ability to treat them as a priority.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Salesforce can speed up the proposal process by generating .pdf Quotes, based on products or services selected from a version controlled Price Book; so you’ll never quote the wrong price or sell a product or service that you can’t deliver.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once generated, proposals can be sent to the prospect by email. If the Quote needs to change, you can just update it and re-sync it with the Opportunity.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Need something more complex? There are Salesforce and AppExchange solutions for quotations, or just generic document generation options if this is all that’s needed. You can even integrate product catalogues or inventory through custom integration.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once you’ve handled the Quote, send contracts via a digital signature application. Speeding up the contract execution process allows business to start supplying goods and services immediately, instead of waiting days for contract counterparts to arrive by post!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Automations like these starts the client relationship off on the right foot and means you close deals faster.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Integrations and data exchange</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Salesforce is very much an open platform. It’s designed to integrate easily with other software and to allow users to pull and push data from other platforms. Salesforce has modern Application Programming Interfaces or APIs that allow it to integrate with external systems.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are many possible applications for data integration. The most common integrations in the sales process are: </p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Marketing systems to bring in new Leads</li><li>Billing systems to pull in data relating to actual sales (in order to rank Accounts or identify white space)</li><li>Data services to add additional contacts to Accounts or get Company data </li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Salesforce users also benefit from the AppExchange. There are applications and integrations for some of the most widely used business applications. AppExchange makes it easy to extend the functionality of your system</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Reports, dashboards and forecasts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Management Information is where Salesforce adds real value. One of the key outcomes for any business implementing CRM is to help them get better information about their pipeline.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Although it might look complex, designing reports and dashboards in Salesforce is one of those 'fire and forget' things. Do it once and it will be there forever; you can just click refresh every time you need answers.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can get data on lead conversion rates by source, opportunity pipelines by user, team, product line, close date and anything else you need.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Forecasts offer a useful way of summarising Opportunity data by probability; with support for user hierarchies and ‘overviews’ (management adjustments to probabilities).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The next step is using Salesforce Einstein analytics to provide AI-based insights; including scoring leads by likelihood of conversion, identifying which deals are likely to close and identifying opportunities to upsell to existing clients.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Getting MI right is really important. Whether you're tracking revenue, EBITDA or units sold, once you've identified the metrics, configuring the reports is easy and keeping track of performance is then as simple as clicking a button.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sales Cloud is a uniquely configurable product, which is one of the reasons why it’s the world's number one CRM system. But with great configurability comes great responsibility. Often businesses will subscribe to Sales Cloud with great intentions, only to end up using it simply as a database to track clients and deals.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you don’t take the time to configure the system and make the most of it, your users won’t see the value in it.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If your users don't see the value in it, they won’t update it properly. Soon it becomes an expensive white elephant that does nothing for your business.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you think you might be in that position, it could be time to realign your CRM with the business needs and make sure you’re making the most from it.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With a little bit of thought, design and configuration you can produce a system that your team will benefit from; a system that they will want to use.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It will save them time and give you the answers you need. It will also give you a better understanding of your clients; what are they’ve bought what they haven't bought (yet). A well optimised CRM really can provide that 'Holy Grail' 360-degree view of the customer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Appdraft can help you identify the right features, the features that will add value for your business right now and those that you might want to consider in the future.&nbsp;</p>
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
