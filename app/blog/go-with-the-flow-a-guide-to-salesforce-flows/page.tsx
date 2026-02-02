import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'Go with the Flow - A Guide to Salesforce Flows | Appdraft Blog',
  description: 'A comprehensive guide to understanding and implementing Salesforce Flows to automate your business processes.',
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'go-with-the-flow-a-guide-to-salesforce-flows')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:paragraph -->
<p>Salesforce has continued its investment in the development of Flows in recent years. Flows replaced Workflow Rules and are an intuitive, canvas-based method of designing automations. But what are the common use cases for Flows? </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Record Triggered Flows</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The most common use-cases for Flows are to automate the updating or creation of records from a trigger. The following are examples of use cases for ‘Record-Triggered Flows’</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Lead Qualification</strong> - When a lead is created or updated in Salesforce, a record-triggered flow can automatically evaluate certain criteria such as lead score, industry, or region. If the lead meets specific criteria, the flow can update the lead status to "Qualified" and assign it to the appropriate sales representative based on territory or other factors</li><li><strong>Case Escalation</strong> - In a customer support scenario, when a case is created or updated, a record-triggered flow can analyse the case details such as priority, severity, or SLA status. If the case requires escalation, the flow can automatically assign it to a higher-level support agent, notify the manager, or even create a task for follow-up</li><li><strong>Inventory Management Processes</strong> - For businesses managing inventory in Salesforce, a record-triggered flow can be triggered when a product's quantity reaches a certain threshold. The flow can check the inventory levels and reorder products automatically from suppliers when inventory is low</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>Screen Flows</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Screen Flows in Salesforce provide interactive experiences for users to input or view data within a guided process. he following are examples of use cases for Screen Flows:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Customer Onboarding</strong> - Screen flows can be used to streamline customer onboarding processes. When a new customer is taken on, a Screen Flow can be initiated to collect all the necessary information relating to billing processes, preferences, credit levels, etc</li><li><strong>Customer Service</strong> - Screen flows can enhance the handing of customer service queries by providing a guided process for submitting, allocating and tracking service Cases. If you’re using Experience Cloud, you can even expose these Screen Flows directly to the customer online, guiding them through the Case creation process</li><li><strong>Order Management</strong> - Screen flows can streamline the order management process by guiding users through the steps of creating, reviewing, and processing orders. Sales representatives can use a screen flow to enter customer details, select products, specify quantities, apply discounts, and review pricing before submitting the order for processing</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>Scheduled Flows</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Scheduled Flows help businesses run regular (usually daily) processes over a set of records. Here are some use cases:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Data Cleanup</strong> - Scheduled flows can be used to perform routine data cleanup and maintenance tasks to ensure data integrity and system performance</li><li><strong>Notification and Follow-up Reminders</strong> - Scheduled flows can be employed to send out automated email notifications and follow-up reminders to users or customers at predefined intervals</li><li><strong>Report Generation and Distribution</strong> - Scheduled flows can generate and distribute reports or dashboards automatically on a recurring basis, ensuring stakeholders have access to up-to-date information</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>You can schedule a flow to run at the end of each month to generate sales reports, financial summaries, or performance metrics and distribute them to relevant users or teams via email or Chatter posts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Additionally, scheduled flows can be used to archive or export data for compliance or auditing purposes, running at regular intervals to generate snapshots of data for historical record-keeping.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Flows are just one tool in the box and, as with most things Salesforce, there are many ways to achieve the same objective.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Apex </h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Apex is Salesforce’s coding language and is similar to Java. Apex is generally considered more complex to master than Flows and is the typically the preserve of developers. Developing in Apex typically takes longer than creating Flows, not least because developers will need to write accompanying test code in order to deploy it to Salesforce. So why not just use Flows?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Apex offers a few advantages in certain circumstances: </p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Handling Large Record Numbers</strong> - Flows are constrained in several ways and, when dealing with a high number of records or individual processes, a Flow can hit ‘governor limits’ imposed by Salesforce; effectively causing a break</li><li><strong>Error Handling</strong> - Apex provides more advanced error handling capabilities compared to Flows, allowing for more sophisticated exception handling and logging</li><li><strong>Integration Requirements</strong> - If you need to integrate with external systems, perform complex data manipulations, or interact with Salesforce data at a lower level (e.g., using REST or SOAP APIs), Apex provides more flexibility and control; although Salesforce is closing this gap with Flow Actions for integration</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>Summary</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Flows should be a general go-to for automation logic. They are great for rapid development and are accessible to administrators and non-developers. They offer a visual way to automate business processes without writing code. That said, fully understanding flows can take some time and they have become increasingly complex as Salesforce has developed additional features.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In summary, Apex is typically chosen for its flexibility, performance, and ability to handle complex scenarios, while Flows offer rapid development, declarative customisation, and ease of use for less complex requirements. The choice between the two often depends on the specific needs of the project and the skillset of the development team. Many projects use a combination of both Apex and Flows to leverage the strengths of each approach.</p>
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
