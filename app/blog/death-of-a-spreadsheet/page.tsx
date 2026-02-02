import Link from 'next/link';
import posts from '../posts.json';

export const metadata = {
  title: 'The Death of a Spreadsheet | Appdraft Blog',
  description: "You wouldn't use a calculator to do a job for a spreadsheet (or vice versa, assuming you have a calculator to hand). By extension, with the wealth of technology solutions available to business today, why do we continue to rely so heavily on spreadsheets?",
};

export default function BlogPost() {
  const post = posts.find((p) => p.slug === 'death-of-a-spreadsheet')!;
  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const content = `<!-- wp:paragraph -->
<p>As every good tradesman will tell you, there's a tool for every job. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You wouldn't use a calculator to do a job for a spreadsheet (or vice versa, assuming you have a calculator to hand). By extension, with the wealth of technology solutions available to business today, why do we continue to rely so heavily on spreadsheets? </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Up and down the country, office workers are busily tapping data into and tracking data in spreadsheets; colour-coding cells and building their own system in Excel. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Data likes to be free</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Some users will actively shun software systems in favour of their spreadsheet; perhaps manually updating systems periodically. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In our experience, this happens for one or more of the following reasons:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>The system provided is fundamentally unsuitable for the task; </li><li>The system is too slow or overloads with information that the user doesn't need;</li><li>The system doesn't have fields necessary to track vital information; </li><li>The user finds the system too difficult to navigate or work with;</li><li>The reporting from the system isn't sufficient </li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>These reasons can be distilled down to two main themes; either the system isn't good enough or the user experience hinders users and slows them down. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Users like to manipulate data in their own way. Systems that restrict the export of data or the number of reports that can be produced are bound to spawn uncontrolled 'workarounds'. </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>The risks of going rogue with spreadsheets</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Despite being the most widely-used business tool for decades, spreadsheets can pose very real risk. Working with data in unstructured systems means that users can delete or overwrite data by mistake very easily. When the data is financial, the risk can be 'lost' or misstated revenue, profit or assets. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Untested formulas or models can lead to errors being accepted as reliable reports, upon which businesses can make critical assumptions and decisions. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Spreadsheets are also regularly 'socialised' between colleagues by email and, although most organisations encrypt communications and control devices, the ability to transfer data in spreadsheet format (i.e. outside of a system) can pose a serious information security risk. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Spreadsheets also open up the opportunity for deliberate fraud. When field history isn't tracked, it's easier to hide fraudulent behaviour than it is in an auditable system. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is even a European organisation that highlights the risks associated with spreadsheets, with some eye-watering examples of spreadsheet errors that have cost billions of dollars and irreparable reputational damage (<a href="http://www.eusprig.org/horror-stories.htm">http://www.eusprig.org/horror-stories.htm</a>)</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Using the right tool</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>With 'low code' development platforms like Salesforce, it can take just days to produce basic applications to track records and produce reports that are customised to user needs. With such short development timeframes, it's possible to meet specific needs for even the smallest teams or functions within your organisation.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Salesforce applications can integrate with existing systems of record and can push data back into those systems either on a scheduled transfer or via Application Programming Interfaces (APIs). </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Where teams are relying on spreadsheets, it's generally because they have either been overlooked (or perhaps not anticipated) when an organisation designed its systems or it was too difficult or costly to meet their needs in development. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With 'low code' development, applications can be developed up to 20 times faster than hard-coded systems; making it cost effective for organisations adopting the Salesforce platform to deliver custom-designed systems to meet all the user requirements in their organisation. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For more information on using Salesforce to deliver useful applications built specifically for your team, contact us using the form below.</p>
<!-- /wp:paragraph -->`;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/insights"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
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
          <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
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
          <div
            className="prose prose-lg prose-blue max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-gray-700
              prose-strong:text-gray-900 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: content }}
          />
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
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all">
              Get in Touch
            </Link>
            <Link href="/services/health-checks" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all">
              Free Health Check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
