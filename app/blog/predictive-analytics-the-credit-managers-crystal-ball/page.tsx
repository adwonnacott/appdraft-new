import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'Predictive Analytics: The Credit Manager\'s Crystal Ball | Appdraft Blog',
  description: 'Wouldn\'t it be great if we could accurately identify which customers or prospects are going to default? We would be able to refuse or restrict credit terms a...',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'predictive-analytics-the-credit-managers-crystal-ball')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:paragraph -->
<p>Wouldn’t it be great if we could accurately identify which customers or prospects are going to default? We would be able to refuse or restrict credit terms and prevent the businesses we represented from being stung by insolvency. We would be nothing short of psychic credit superheroes! But is it possible?&nbsp;&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unless you’ve been living under a rock, you’ll have heard of the rise of predictive analytics. If you’re already using credit reports and relying on credit scores, you’ll be using predictive analytics to some extent.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>What is predictive analytics?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Predictive analytics are based on algorithms. Algorithms determine the patterns in data and their relative importance in establishing a decision or outcome. In the context of credit reports, an algorithm will determine the credit score assigned to a business or individual and the integrity of that scoring will be based on the quality of the algorithm.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is the reason why we might have differing views about the quality of credit reports we subscribe to. It all depends on the algorithm; how comprehensive it is and how relevant it is to our business.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Clearly, using credit reports as part of a diligence process is important, but can a business improve upon the predictive integrity by adopting its own approach to predictive analytics. Can it outperform the credit reference agencies?&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Building your own (accurate) algorithm is the holy grail of risk management</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The answer is yes, at least in theory. Each business will have its own idiosyncrasies in its customer base. A business might have a bias towards customers in a particular geographic region or industry. It may tend to serve businesses of a certain age or size. This is important because it has an impact on the relevance of algorithms. For example, some credit reference agencies will lower a credit score when directors resign from a company. Whilst this might be very relevant for SME’s (where the loss of a director can be critical), it is less relevant for large enterprises. As a consequence, if you’re doing business exclusively with large enterprises, director resignations may have little or no significance to your credit risk.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Also, whilst credit reference agency data is undoubtedly important, so is the wealth of data you hold (although only if you’re actually making use of it!).&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As any episode of CSI will tell you, one of the biggest predictors of the future is relevant past behaviour. If you have years of payment data in your organisation, you should be able to use that to predict who will pay late, who needs chasing (and to what extent) and even insolvency events.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So what are typical ‘insightful’ indicators?. Here are just a few:&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Number of late payments in the last 90, 120 and 360 days</li><li>Payment method and changes in method</li><li>Industry/SIC Code</li><li>Size of invoice</li><li>Current balance vs credit limit</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>There can be other, less obvious indicators; producing patterns that only data-mining software can identify.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Introducing Salesforce Einstein </h2>
<!-- /wp:heading -->

<!-- wp:media-text {"mediaId":1909,"mediaLink":"https://www.appdraft.com/blog/2019/08/15/predictive-analytics-the-credit-managers-crystal-ball/einsteinsmall/","mediaType":"image","mediaWidth":17,"mediaSizeSlug":"medium"} -->
<div class="wp-block-media-text alignwide is-stacked-on-mobile" style="grid-template-columns:17% auto"><figure class="wp-block-media-text__media"><img src="/uploads/2019/08/einsteinsmall-300x300.png" alt="" class="wp-image-1909 size-medium"/></figure><div class="wp-block-media-text__content"><!-- wp:paragraph {"placeholder":"Content…","fontSize":"large"} -->
<p class="has-large-font-size"><meta charset="utf-8">Using <a href="https://youtu.be/wo9IUWQb6oU">Salesforce Einstein</a> Prediction Builder, users can very quickly build data models that can assign a probability score for late payment and critical default. Once data is housed on the platform, building predictions is simple. Prediction indicator fields can then be used to produce alerts or help prioritise accounts for credit control calls or credit limit reviews. </p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:media-text -->

<!-- wp:paragraph -->
<p>Using Salesforce Einstein Prediction Builder, users can very quickly build data models that can assign a probability score for late payment and critical default. Once data is housed on the platform, building predictions is simple. Prediction indicator fields can then be used to produce alerts or help prioritise accounts for credit control calls or credit limit reviews.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Einstein Prediction Builder forms part of a much larger use case for Salesforce, which includes automating dunning cycles, allowing customers to view and manage online accounts and live KPI dashboards.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For more information on predictive analytics for credit managers, contact <a href="mailto:adam.wonnacott@appdraft.com">adam.wonnacott@appdraft.com</a>.&nbsp;<br></p>
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
