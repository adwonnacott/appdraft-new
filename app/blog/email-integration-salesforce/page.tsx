import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'Email Integration in Salesforce | Appdraft Blog',
  description: 'Brief explainer of the options available in Salesforce for integrating email',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'email-integration-salesforce')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are several different options available for sending email via Salesforce.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>'Send Email from Salesforce Servers'</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you’re not up for any integration at all, then sending emails from Salesforce, via the Salesforce servers, is the option for you.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The downside of this approach is that because emails derive from Salesforce's servers and not your organisation, there is a risk that your recipient email servers will identify this and send your email to Spam folders. In practice, whether the email is flagged will depend on the recipient and how they treat email from generic sending domains, like those used by Salesforce. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Integration with Outlook 365 or Gmail</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The other most popular alternative is to configure a Gmail or Office 365 integration for your users. Once this is set up at the organisation level, users will need to sign in to their email through Salesforce to connect their accounts.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The advantage of integration is that you can configure a sidebar inside Gmail/Outlook to associate emails from your inbox to Salesforce records. You can search for Contacts and Accounts straight from your email program and associate emails with them to build a comprehensive history of conversations with your customers.&nbsp;&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Salesforce Inbox</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Salesforce Inbox is an additionally chargeable solution that makes it easier for users to work with email on mobile devices. Leveraging the Outlook/Gmail integrations, Salesforce Inbox is essentially a smart email ‘client’ for mobile. Inbox brings another level of intelligence and will ‘read’ emails and provide helpful tags for surfacing important emails, like requests for pricing.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Save time by using templates, list emails and automation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Once you’ve configured email, you'll be able to email straight out of Salesforce and, importantly, to start leveraging email templates. Email templates are a great way to reduce time spent on repetitive tasks (think ‘chaser’ emails or sales outreach emails!). Users can set up their own templates and leverage fields from the object that the email is being composed from, e.g. ‘Name’ fields from Contact records.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can use Salesforce to send emails to groups of contacts or leads, via Campaigns and you can configure email alerts to be triggered when certain changes are made to your records or as part of a process. A practical example of this might be an email alert to a new customer when terms are authorised.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Triggering actions in Salesforce when new emails arrive</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>But what if you want to do something other than just associate a new inbound email with a record? For example, you might want to create a lead or a new support case when a new email is sent to one of your generic email addresses. Specific email 'handlers' can parse inbound emails and trigger the creation or update of one or more records, as well as alerts to users. Pretty much anything is possible!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s worth bearing in mind that your ability to do some of the above will depend on your version of Salesforce and your version of Outlook, so check these first before making a commitment!</p>
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
