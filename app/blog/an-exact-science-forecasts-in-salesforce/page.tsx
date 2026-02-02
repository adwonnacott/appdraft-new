import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'An Exact Science: Forecasts in Salesforce | Appdraft Blog',
  description: 'Sales Forecasts help businesses understand how they\'re tracking against revenue expectations. The Forecast and Quota tools in Salesforce Sales Cloud are some...',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'an-exact-science-forecasts-in-salesforce')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Forecasts are something of an afterthought for most Salesforce implementations. The focus for new CRM users tends to be on giving users a tool to ‘manage’ the Sales process. Reporting and tracking sales metrics is often less of a priority; but it really is essential at a strategic level for businesses that are serious about growth.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Forecasts are a ‘ready made’ reporting tool for Opportunities. They allow users to view open opportunities that are set to close during the forecast period (which is customisable) and sliced by month or quarter. Rather than reflecting the various (and many) opportunity ‘stages’ that are configured for your instance, forecasts use ‘Forecast Categories’ to summarise the status of the opportunities more broadly.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Forecasts will provide a view based on categorisations like ‘Closed’, ‘Commit’ or ‘Best Case’; allowing users to quickly get a handle on which opportunities are ‘real’.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Forecasts are based on a user hierarchy, which supports team-based working and ensures that users only see their opportunities and the opportunities of their direct reports.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When reviewing forecasts, users can quickly edit values ‘on the fly’; making forecasts a perfect tool for collaborative review sessions. Managers can use forecasts to quickly scan through and sanity-check opportunities with their team and make edits to the amount or close date (and other fields) as required.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:block {"ref":2071} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">Quotas</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Quotas are effectively a ‘bet’ (usually an educated guess!) as to the revenue that a business will generate over the forecast period. They are an essential part of budgeting for mature businesses that target growth.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Quotas in Salesforce allow managers to define a split of organisational revenue across the team members. You can split the amount equally by users or, more likely, based on prior performance.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Whilst businesses are often nervous about devising quotas, they are an essential part of setting intention. Budgets and quotas will often be wrong, but it's better to guess than to omit to go through the process at all.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2065,"width":1025,"height":291,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://appdraft.com/wp-content/uploads/2022/01/143066e1291173b4907b9d6b7a55ec6e_forecasting-configuring-types-4-1024x291.jpeg" alt="" class="wp-image-2065" style="width:1025px;height:291px"/><figcaption class="wp-element-caption">forecast view in Salesforce</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Adjustments</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Adjustments are a way of providing context on the certainty of the pipeline, without necessarily challenging the detail of the underlying opportunity. It’s not uncommon for users to tend towards an optimistic or a pessimistic outlook when it comes to setting the opportunity amount or close date.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For the self-aware user, there is the option to dial up or dial down their own forecast, based on what they know about their typical forecast versus historic actuals. More typically, the adjustment process is something that a line manager will undertake before reporting the forecast to more senior managers.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:block {"ref":2071} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">Reports</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Forecasts can be used as a reportable object in the standard reports and dashboards tool, giving users the ability to see forecasts represented graphically.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:block {"ref":2071} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">Hot off the press!: Spring 2022 Release changes to Forecasts</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":2064,"width":999,"height":473,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="https://appdraft.com/wp-content/uploads/2022/01/fce99ac7ac9deab1d81a7971f99ca08b.png" alt="" class="wp-image-2064" style="width:999px;height:473px"/><figcaption class="wp-element-caption">new tracked changes to forecasts </figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The Spring ‘22 release of Sales Cloud brings some updates to Forecasts, including:&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Quota Gap - The ability to easily see the difference between Quotas and the current forecasted amount</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Show Changes - The ability to view changes to the forecast in the last 7 days. This feature is a great way to track recent changes, particularly when using Forecasts as a team discussion artefact&nbsp;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Exclude Opportunities - This new feature allows businesses to exclude certain types of Opportunities, e.g. ‘renewal’ or existing business&nbsp;</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:block {"ref":2071} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">Summary</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The value of forecasting can’t be understated. It doesn’t necessarily need to be something that is exclusive to large organisations; it’s good practice for all businesses.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Forecasting in Salesforce is a great way to collaborate around revenue predictions. If your users know that Salesforce is the ‘source of truth’ for pipeline, they are more likely to ensure accuracy.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With the new improvements, Forecasts are a fantastic tool and something to leverage wherever possible.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For help and advice on implementing forecasts (and everything else Sales Cloud), contact <a href="mailto:info@appdraft.com">info@appdraft.com</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:separator {"opacity":"css","className":"is-style-wide"} -->
<hr class="wp-block-separator has-css-opacity is-style-wide"/>
<!-- /wp:separator -->`;

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
