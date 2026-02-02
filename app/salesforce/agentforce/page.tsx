import Link from 'next/link';

export const metadata = {
  title: 'Salesforce Agentforce Implementation | Appdraft',
  description: 'Deploy autonomous AI agents that work alongside your team to resolve customer issues, qualify leads, and automate complex workflows.',
};

export default function Agentforce() {
  const benefits = [
    {
      title: 'Autonomous Service Agents',
      description: 'AI agents that resolve customer inquiries 24/7, escalating to humans only when necessary. Handle routine cases automatically with natural conversation.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      ),
    },
    {
      title: 'Sales Development Representatives',
      description: 'AI-powered SDRs that qualify leads, answer product questions, schedule meetings, and nurture prospects through intelligent conversations.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
    },
    {
      title: 'Built on Trusted Data',
      description: 'Agents ground their responses in your Salesforce data, knowledge articles, and business rules. No hallucinations, just accurate information.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
    },
    {
      title: 'Natural Language Actions',
      description: 'Agents can take actions in Salesforce using natural language. Update records, create cases, send emails, all through conversational interface.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
    },
    {
      title: 'Seamless Handoff to Humans',
      description: 'When agents need help or customers request it, seamless handoff to human agents with complete context and conversation history.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      ),
    },
    {
      title: 'Custom Agent Creation',
      description: 'Build specialized agents for your unique business processes using Agent Builder. Define goals, instructions, and available actions.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      ),
    },
  ];

  const howWeHelp = [
    {
      title: 'Use Case Discovery',
      description: 'Identify high-value opportunities for AI agents in your customer service, sales, and operations workflows.',
    },
    {
      title: 'Agent Design & Configuration',
      description: 'Define agent personas, conversation flows, escalation criteria, and integration with your existing Salesforce setup.',
    },
    {
      title: 'Knowledge Base Preparation',
      description: 'Organize and optimize your knowledge articles, FAQs, and documentation so agents have accurate information to work with.',
    },
    {
      title: 'Testing & Refinement',
      description: 'Rigorous testing with real scenarios, edge cases, and feedback loops to ensure agents perform reliably before launch.',
    },
    {
      title: 'Deployment & Monitoring',
      description: 'Deploy agents across channels (web, mobile, messaging) with dashboards to monitor performance and customer satisfaction.',
    },
    {
      title: 'Continuous Improvement',
      description: 'Ongoing optimization based on conversation analytics, success metrics, and evolving business requirements.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Salesforce Agentforce
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Deploy Autonomous AI Agents That Work Alongside Your Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Agentforce is Salesforce's groundbreaking platform for building and deploying autonomous AI agents that can
              reason, plan, and take action across your business. Unlike basic chatbots, Agentforce agents understand context,
              follow business rules, and seamlessly collaborate with humans.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all hover:shadow-lg"
            >
              Get Started with Agentforce
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Agentforce?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Move beyond simple chatbots to autonomous agents that can understand, decide, and act on your behalf
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {benefit.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Appdraft Can Help */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Appdraft Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agentforce is new and transformative. We help you implement AI agents responsibly and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howWeHelp.map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-indigo-600 opacity-20 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-indigo-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Common Agentforce Use Cases
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-2">Customer Service</h4>
                <p className="text-indigo-100">
                  Resolve order inquiries, track shipments, process returns, answer FAQs, and escalate complex issues
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-2">Sales Qualification</h4>
                <p className="text-indigo-100">
                  Engage website visitors, qualify leads, answer product questions, and schedule sales meetings
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-2">Employee Support</h4>
                <p className="text-indigo-100">
                  Help employees with HR questions, IT issues, policy lookups, and internal process guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Agentforce Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Agentforce Different?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agentforce represents a fundamental shift from reactive chatbots to proactive AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Traditional Chatbots</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Follow pre-programmed scripts and decision trees
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Break easily when conversations go off-script
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Cannot reason about complex scenarios
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Limited to answering questions, not taking action
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 border-2 border-indigo-200 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Agentforce Agents</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Understand intent and reason through problems dynamically
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Adapt conversations based on context and data
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Make decisions using business rules and guardrails
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Take autonomous actions in Salesforce and connected systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy Autonomous AI Agents?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's explore how Agentforce can augment your team and transform your customer experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services/implementation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all"
            >
              Learn About Implementation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
