import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'One less thing to worry about: A robot apocalypse | Appdraft Blog',
  description: 'Should you be worried about robots stealing your job? \'Robots\' are an emotive epithet; is this just a continuation of a theme of efficiency driven by technol...',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'one-less-thing-to-worry-about-a-robot-apocalypse')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Artificial Intelligence is a tricky concept to grasp. In order to ‘dumb down’ the conversation, commentators often resort to talk of robots; robots that can do the job of our colleagues and possibly even replace <em>us</em> in the workplace.&nbsp;</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>It’s a scary concept, made more so by the use of unhelpful terminology. But what’s the reality and how worried should we really be?</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Productivity improvement through technology is nothing new</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Let’s rewind to a world before emails and before today’s modern PCs replaced our ‘word processors’. For some, these were the glory days. Letters were dictated and there was no such thing as instant communication; expectations were lower. Diaries weren’t shareable, which meant less accountability. If you were important enough, you had a PA or even a ‘secretary’ to fend off those pesky meeting requests. Working life had its own pace.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Fast-forward to today. The expectation is super-charged. In the last 20 years we have been bombarded with productivity tools. We’re instantly contactable by email, people expect an instant response and our colleagues and bosses can see whether we’re really busy (or just good at looking busy) by checking our online calendar. The typing pool and the post room have gone as technology has ‘empowered’ us and allowed us to become more self-sufficient.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Of course PCs, email and spreadsheet software are not robots, they are just productivity tools; things that help us work much more efficiently (whether we want to or not).&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>‘Artificial Intelligence’ or ‘robotics’ is just a continuation of this. It involves programming software to do the repetitive and predictable tasks that you do regularly. In all roles there will be a proportion of tasks that are ripe for automation. Typically these involve templating communications, streamlining approval processes, triggering workflows, facilitating self-service and (perhaps the biggest time-vortex of all) preparing reports.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Today’s technology also allows us to use software to identify patterns in data (so we don’t have to) and can suggest ‘best next steps’ or generate forecasts. That said, we’re a big step away from fully-autonomous, decision-making ‘robots’ that can do our jobs for us becoming the norm. Whilst using software to identify patterns means we don’t have to, it often needs the checks and balances of a human to ensure that the results aren’t biased or influenced by ‘false positives’.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As such, the idea of technological advancement in the workplace is not new. We have been in that process for decades.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Cloud computing power is a step-change</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The difference, arguably, is that low-code automation technologies are becoming increasingly accessible. With the development of cloud computing and the ability to exploit cloud servers for the technological ‘heavy lifting’, the financial and time investment required to leverage these services is lower than ever.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So is the threat (or promise) of these technologies replacing us any more real as we hit the Twenties? Yes. Should we be worried? Possibly. Most readers of this article will be in a role that requires some element of complex decision making or utilisation of people skills (working with clients or managing colleagues). To that extent, those responsible for complex processes are likely to be insulated from an element of the change that will happen over the next 20-30 years.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>People engaged solely in more ‘<a href="https://www.forbes.com/">transactional’ tasks</a> are, however, likely to find it increasingly difficult to find employment. That threat poses challenges at a macro level that we shouldn’t ignore. When we gradually create a society of people who have nothing to do but watch daytime TV (but through no fault of their own and with no viable alternative), someone will need to pay. We’ll also need to ensure that those people don’t become disenfranchised or politicised as ‘second class’. We’ll need to work on our capacity for altruism instead of laying blame. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For those of us lucky (or unlucky?) enough to be part of the employed population, we’ll be able to automate much of the stuff that is most repetitive and least rewarding about our jobs. The concept of ‘month end’ reporting will become a thing of the past and we’ll have more time to focus on tasks that are more complex or demand our interpersonal skills.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The most important point to bear in mind is that we’re on a journey. The landscape will change again as cloud servers become ever more powerful and communication speeds improve. So, as much as there is cause for concern, there is cause for excitement and anticipation of what will become possible in the years to come.&nbsp;</p>
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
