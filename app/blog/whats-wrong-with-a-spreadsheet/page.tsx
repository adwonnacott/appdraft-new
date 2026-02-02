import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'The many reasons spreadsheets are not your friends | Appdraft Blog',
  description: 'People love spreadsheets. They\'re a comforting way to push data around and track changes. BUT, there are many reasons why spreadsheets don\'t work beyond the ...',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'whats-wrong-with-a-spreadsheet')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:heading {"level":3} -->
<h3><meta charset="utf-8">This article was published in the <a rel="noreferrer noopener" href="https://yumpu.com/en/document/read/62837072/credit-management-october-2019" target="_blank">October 2019</a> Issue of Credit Management magazine. Image reproduced with permission and thanks to the Chartered Institute of Credit Management and the CM Magazine editorial team. </h3>
<!-- /wp:heading -->

<!-- wp:image {"id":1901,"sizeSlug":"large","linkDestination":"none","style":{"color":{}}} -->
<figure class="wp-block-image size-large"><img src="https://appdraft.com/wp-content/uploads/2021/11/Wordpress-Post-Featured-Image-1-1-1024x536.png" alt="" class="wp-image-1901"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Industry is rife with supposition about the way technology will change how we work. AI, robots, machine-learning; it all sounds a little far-fetched, especially when you look at the day-to-day reality of credit control and collections. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Many internal collections departments are working with a proliferation of spreadsheets or tired databases. Spreadsheets for managing cases, spreadsheets for reporting; layers of spreadsheets connected to other spreadsheets or database tools that are no longer fit for purpose. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What’s wrong with spreadsheets? As the old adage goes, ‘if it ain’t broke, don’t fix it’. The answer to this lies in your attitude towards change and continuous improvement. If you’re still reading this article, it’s likely you’re the sort of person that consistently seeks to improve the way you and your function operate. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As an industry, some early adopters are starting to leverage really impactful technology in the collections process. Perhaps most important is the applications of ‘big data’ (the ability for systems to quickly scan large swathes of data and identify patterns). Also key, is the ability to program systems to act on that data or present a user with suggestions as to how they might want to proceed. This is the essence of ‘big data’, ‘robots’, ‘AI’ and all the other confusing synonyms for what are simply faster, more capable systems. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>What are we trying to achieve with technological change?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>What are we trying to achieve with technology-driven changes like this? At a high level, the potential advantages can be summarised as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Customer Experience</strong> – Automation brings standardisation. Computers accept inputs and generate outputs, instantly. For many transactional interactions this is what customers expect. As customers in the modern age, we don’t tolerate delays well; especially when we’re asking for something simple. We also don’t tolerate error. Our expectations have been shaped by our experiences with online shopping and online banking. We expect transactional experiences to be quick and accurate and we expect prompt and helpful human support when we have complex requests or something goes wrong. </li></ul>
<!-- /wp:list -->

<!-- wp:list -->
<ul><li><strong>Efficiency</strong> – Shareholders and investors (and accordingly CFO’s) are always looking for efficiency. We’re expected to do more with less (or, if we’re lucky, more with the same). As explained above, automation helps businesses automate transactional tasks. Allowing applications to take the strain frees up resource. It helps staff focus on complex tasks and better serve customers, whilst doing more rewarding work. It also means less error and loss. </li></ul>
<!-- /wp:list -->

<!-- wp:list -->
<ul><li><strong>Insight</strong> – Most of our spreadsheets are designed to provide us with insight and help us make decisions, based on current (or, more likely, recent) data. With increased processing power, predictive analytics can tell us (within a defined level of confidence) what is going to happen next month or next quarter. The power of this cannot be underrated. The ability to predict default or insolvency, or to predict cashflow is an incredible advantage; so too is the ability to resource on the basis of predicted workload. </li></ul>
<!-- /wp:list -->

<!-- wp:list -->
<ul><li><strong>Connectivity</strong> – Better systems help us connect with our customers, our debt recovery partners, our data partners in a way that reduces friction. With customer or partner portal services, third parties can begin to ‘self-serve’ and help creditors reduce the level of noise associated with simple enquiries. Connectivity also relates to the ability to consume data from third parties. With the wave of ‘digital transformation’, most organisations are developing Application Programming Interfaces (APIs) to help customers consume their data or services. A good example is the use of APIs in provision of credit risk data; where organisations can automatically receive information from credit reference agencies, fuse this with payment history data, and generate a risk level (or alert, if appropriate).  </li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>How accessible are these new technologies?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>So far, so good. All this sounds great and it’s undoubtedly something that can really help, or even transform, most businesses; but is it really achievable for a majority of businesses? </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Our past experiences inform our thinking and, if you’ve ever been involved in an ERP or other large-scale IT project, you’ll know how all-consuming and disruptive it can be. It can also be very expensive, with projects routinely running for several years. By the time the project completes, the requirements have almost always changed and the sense of relief at completing the project is something even the most ambitious Product Owner never forgets and never wants to repeat. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But just as the capabilities of systems have changed, so has the method of development. More and more businesses are moving towards cloud-hosted ‘platform as a service’ (or ‘PaaS’) technologies. PaaS platforms allow developers to use modular, standardised code to quickly develop functionality, often through ‘low code’. Working in a low code platform means that there is less code to write, test and inevitably change. Low code permits iterative improvements to systems, allowing organisations to change functionality as a project progresses. PaaS platforms also readily integrate with external software or data providers. For example, several PaaS platforms now have bolt-ons for integration with large accounting packages. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Development on PaaS platforms tends to use Agile methodology. With a focus on developing a ‘minimum viable product’ as soon as possible and then iteratively improving, the development timeframe is reduced considerably. A Forrester™ study on low code development estimated that it is between 6-20 times faster than traditional coded development techniques. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>The reality of digital transformation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In conclusion, once we begin to cut through some of the buzzwords and ethereal concepts like ‘Artificial Intelligence’ and ‘Digital Transformation’, it’s easy to appreciate that there is real value and opportunity in rethinking our use of technology. With the current pace of change in technology, all businesses will need to start planning if they are to remain at all competitive over the course of the next decade or two.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>PaaS development helps businesses quickly leverage new technology as platform providers fight amongst each other to bring their users transformational functionality that they can bake into their systems. With the benefit of Agile development and the integration capabilities of PaaS applications, businesses don’t need to have a clear picture of an ‘end goal’. Rather, they can take a targeted, but iterative approach; working on the processes that represent the biggest potential for improvement. If you are looking for ‘low hanging’ fruit that are ripe for digital transformation, a great place to start is by considering where (and why) you use spreadsheets. Invariably, processes that are supported by spreadsheets can be positively transformed by well-designed systems. </p>
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
