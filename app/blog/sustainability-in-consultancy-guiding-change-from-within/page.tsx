import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'Sustainability in Consultancy: Guiding Change from Within | Appdraft Blog',
  description: 'As sustainability becomes a key driver of business strategy, consulting firms are uniquely positioned to lead change; both by improving their internal practi...',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'sustainability-in-consultancy-guiding-change-from-within')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:paragraph -->
<p>As sustainability becomes a core element of business strategy, consulting firms are uniquely positioned to lead the way. They have the dual responsibility of improving their internal practices while guiding clients toward more sustainable operations. While SaaS and digital-focused consultancies may not have extensive physical infrastructures to overhaul, there are still meaningful opportunities to integrate sustainability into their operations, culture, and advisory services.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sustainable Remote Work and Travel Policies</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For many consultancies, commuting and business travel account for the largest share of their environmental impact. Firms can address this by:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><strong>Remote Work Optimisation:</strong> Encourage remote-first policies to minimise carbon emissions from commuting and office energy use.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Sustainable Travel Policies:</strong> Favour virtual meetings over travel, and when travel is necessary, prioritise low-impact options such as trains instead of flights.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Carbon Offsetting:</strong> Invest in credible carbon offset programmes to neutralise emissions caused by unavoidable travel.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Building a Culture of Sustainability</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sustainability isn’t just about policies—it’s about shaping a mindset across the organisation:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><strong>Employee Education:</strong> Deliver regular training sessions on sustainable practices to ensure employees understand their role in driving change.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Behavioural Shifts:</strong> Encourage everyday sustainable habits, from reducing waste to mindful energy consumption.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Ethical and Sustainable Partnerships</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sustainability extends beyond internal operations to include the supply chain and vendor relationships:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><strong>Vendor Selection:</strong> Partner with suppliers who demonstrate strong environmental and ethical standards.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Sustainable Procurement:</strong> Prioritise eco-friendly materials, digital tools, and sustainable service providers.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Thought Leadership for Lasting Impact</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Consultancies have a unique platform to drive sustainable thinking across industries:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><strong>Knowledge Sharing:</strong> Publish whitepapers, case studies, and reports highlighting successful sustainability initiatives.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Advocacy:</strong> Guide clients to identify sustainability opportunities, such as reducing unnecessary travel, improving route planning for customer visits, or adopting paperless workflows.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Looking Ahead: The Future of Sustainability in Consultancy</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Clients are increasingly focused on achieving their sustainability goals and creating meaningful change. Consultancies play a crucial role in helping them view their challenges through a sustainability lens, identifying opportunities for innovation, and implementing impactful strategies.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>While the nature of consulting often presents fewer opportunities for direct environmental action, it also makes every initiative more significant. By embedding sustainable practices internally and championing change externally, consultancies can drive far-reaching positive outcomes across industries.</p>
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
