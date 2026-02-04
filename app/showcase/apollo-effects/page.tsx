import LineReveal from '@/components/ui/LineReveal';
import FadeIn from '@/components/ui/FadeIn';
import TabSwitcher from '@/components/ui/TabSwitcher';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GlowCard from '@/components/ui/GlowCard';

const serviceTabs = [
  {
    id: 'implementation',
    label: 'Implementation',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    content: (
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Salesforce Implementation</h3>
            <p className="text-gray-600 mb-6">
              End-to-end implementation tailored to your business processes. From discovery to go-live,
              we ensure your Salesforce org is built right the first time.
            </p>
            <ul className="space-y-3">
              {['Requirements gathering', 'Custom configuration', 'Data migration', 'User training'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#3cd6bf]/10 to-cyan-50 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-[#3cd6bf] mb-2">130+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'support',
    label: 'Support',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    content: (
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
            <p className="text-gray-600 mb-6">
              Keep your Salesforce running smoothly with our flexible support packages.
              From quick fixes to strategic improvements, we&apos;ve got you covered.
            </p>
            <ul className="space-y-3">
              {['Bug fixes & troubleshooting', 'User support', 'Regular maintenance', 'Performance optimisation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-green-600 mb-2">24hr</div>
            <div className="text-gray-600">Response Time</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'health-check',
    label: 'Health Check',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: (
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Salesforce Health Check</h3>
            <p className="text-gray-600 mb-6">
              Not sure if your Salesforce is performing at its best? Our comprehensive
              health check identifies issues and opportunities you might be missing.
            </p>
            <ul className="space-y-3">
              {['Technical audit', 'Security review', 'Performance analysis', 'Improvement roadmap'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-amber-600 mb-2">Free</div>
            <div className="text-gray-600">Initial Assessment</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ApolloEffectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Hero with Line Reveal */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={0}>
            <span className="inline-block px-4 py-2 bg-[#3cd6bf]/10 text-[#3cd6bf] rounded-full text-sm font-medium mb-6">
              Apollo-Style Effects Demo
            </span>
          </FadeIn>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <LineReveal delay={0.2} staggerDelay={0.05}>
              The smarter way to
            </LineReveal>
            <br />
            <span className="text-[#3cd6bf]">
              <LineReveal delay={0.5} staggerDelay={0.05}>
                transform your business
              </LineReveal>
            </span>
          </h1>

          <FadeIn delay={0.8}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Salesforce implementation that actually delivers results.
              No fluff, no jargon. Just expert guidance from discovery to go-live.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#3cd6bf] text-white font-semibold rounded-xl hover:bg-[#2bc4ad] transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/health-check-assessment"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                Free Health Check
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats with Animated Counters */}
      <section className="py-16 px-4 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeIn delay={0} direction="up">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={130} suffix="+" />
                </div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} direction="up">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={5.0} decimals={1} />
                </div>
                <div className="text-gray-600">AppExchange Rating</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tab Switcher Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                <LineReveal>How we can help</LineReveal>
              </h2>
              <p className="text-xl text-gray-600">
                Choose the service that fits your needs
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <TabSwitcher tabs={serviceTabs} />
          </FadeIn>
        </div>
      </section>

      {/* Staggered Cards */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Staggered Reveal Cards
              </h2>
              <p className="text-xl text-gray-600">
                Cards animate in sequence as you scroll
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Discovery', desc: 'We learn your business inside and out', icon: '🔍' },
              { title: 'Design', desc: 'Architect a solution that fits perfectly', icon: '✏️' },
              { title: 'Build', desc: 'Configure and customise with precision', icon: '🔧' },
              { title: 'Test', desc: 'Rigorous quality assurance', icon: '✅' },
              { title: 'Launch', desc: 'Smooth go-live with full support', icon: '🚀' },
              { title: 'Grow', desc: 'Continuous improvement over time', icon: '📈' },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <GlowCard className="h-full rounded-2xl" glowColor="rgba(25, 119, 155, 0.15)">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 h-full hover:shadow-xl transition-all duration-300 group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3cd6bf] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Directional Animations */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Directional Animations
              </h2>
              <p className="text-xl text-gray-600">
                Elements can animate from any direction
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="left" delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">From the Left</h3>
                <p className="text-gray-600">This card slides in from the left side of the screen.</p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">From the Right</h3>
                <p className="text-gray-600">This card slides in from the right side of the screen.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">From Below</h3>
                <p className="text-gray-600">This card slides up from below the viewport.</p>
              </div>
            </FadeIn>
            <FadeIn direction="down" delay={0.4}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">From Above</h3>
                <p className="text-gray-600">This card slides down from above.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#3cd6bf] to-[#2bc4ad] rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              <LineReveal>Ready to get started?</LineReveal>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              Let&apos;s talk about how we can help transform your business with Salesforce.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-[#3cd6bf] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Book a Call
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
