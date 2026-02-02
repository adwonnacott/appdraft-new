import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'Understanding Salesforce Forecasts | Appdraft Blog',
  description: 'The article discusses the importance of forecasting in Salesforce. It explores several key features and tools available in Salesforce for forecasting and how...',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'understanding-salesforce-forecasts')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:paragraph -->
<p>Customers typically purchase Salesforce with the objective of either improving the sales process and the way the business tracks data or getting better at tracking the value of pipeline. These two objectives are intertwined and reliable forecasts are not possible without high user adoption, but the focus of this article is forecasts and the way these are managed in Salesforce.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Forecast features in Salesforce are comprehensive and capable, but they are regularly under-employed in Salesforce instances. Businesses will often have some visibility of Pipeline and Opportunities in a dashboard. However, using the designated Forecast tools provide much more than pipeline dashboards, not least the fact that they are designed to be a ‘collaborative’ tool that the salesperson and sales manager can use to interrogate the veracity of the data that supports the forecast. Forecasts are also focused on a particular period, typically a month or a quarter; shifting the focus to deals that are happening <em>now</em>.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This article explores some of the key features and characteristics of Salesforce Forecasts and the value they can add to organisations.&nbsp;&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Forecast Types</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Forecasts can be based on revenue or quantity measures and can support team selling/splits. There are additional options to group by sales territories and products. This means the business can have visibility of banked sales and pipeline across product lines, territories (either geographical, vertical-based or other types of territories) and, as we will explore below, across revenue-scheduled models like subscription revenue. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Forecast Categories</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A business might have a number of different Opportunity Stages and perhaps more than one Opportunity ‘Type’. It can be challenging for board level colleagues to understand the significance of different Opportunity stages and to know which ones are truly significant. Step forward Forecast Categories!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Forecast Categories give the business a view of possible outcomes. For example the business might simply want a view of the opportunities that are ‘Closed Won’, the opportunities that are already signed and delivered. Most businesses, however, will want to forecast ‘open’ Opportunities and will use Salesforce Forecasts to model a ‘Commit’ bet (the Opportunities that the salesperson has determined <em>will</em> complete), a ‘Best Case’ bet (those that <em>should</em> complete) and ‘Pipeline’ (those that <em>might</em> complete).&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Forecast Hierarchies</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Forecast Hierarchies allow for teams to be organised in a hierarchical structure and to provide viewing rights over Opportunities based on a user’s position within the hierarchy. This allows managers to see their team’s forecasts, but teams cannot see forecasts belonging to their teammates. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Revenue Schedules</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is a must for any businesses selling products or services on a subscription basis of where the revenue from a sale is distributed, i.e. where the revenue from sales is not credited to the business in a lump sum at the Close Date. Revenue Schedules help to ‘smooth-out’ revenue according to the reality of when it is expected; leading to a more accurate forecast.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Quotas</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Quotas help the business understand how its revenue goals will be attained as part of a team effort. For example, if the business expects an annual revenue of £120 million and a sales team of 10 FTE, it can assign a quota of £100k per month to each member of the team. In reality, of course, a business would allow for annual peaks and troughs in sales, but the Quota functionality is key to apportioning responsibility for an organisational target. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Manager Adjustments </h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Manager adjustments allow salesforce users to adjust their own forecasts and managers to adjust the forecast of the colleagues below them in the forecast hierarchy. The purpose of adjustments is to provide an overview/context around a figure in the forecast. For example, if a deal is significantly larger than the average deal size, a forecast manager might decide to offset the risk of that deal not materialising by adjusting the month and category that this deal falls within. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Historical Trending </h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Historical Trending allows users to visualise performance against past reference periods. For example, if your forecast is monthly, you can see how your current results at this point in the month compare to previous months. This will help the business understand whether the team is tracking to hit their sales goals based on performance in previous periods. The data presented will depend on the period of time for which data has been retained.</p>
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
