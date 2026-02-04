import CaseStudyTimeline from '@/components/ui/CaseStudyTimeline';

export default function CaseStudyDemoPage() {
  const exampleCaseStudy = {
    clientName: "TechFlow Solutions",
    industry: "B2B SaaS • Financial Technology",
    challenge: "TechFlow's sales team was drowning in spreadsheets, losing deals due to poor follow-up, and had zero visibility into their pipeline. They needed a CRM that could scale with their rapid growth.",
    result: "40% increase in sales productivity, 25% faster deal closure, and complete pipeline visibility. The sales team now closes 3x more deals per quarter.",
    milestones: [
      {
        phase: "Phase 1",
        title: "Discovery & Planning",
        description: "Deep dive into TechFlow's sales process, pain points, and growth objectives. Mapped existing workflows and identified quick wins.",
        duration: "2 weeks",
        icon: "discovery" as const,
        outcomes: [
          "Documented 12 key sales workflows",
          "Identified 5 critical integration points",
          "Created phased implementation roadmap"
        ]
      },
      {
        phase: "Phase 2",
        title: "Solution Design",
        description: "Designed a custom Salesforce architecture tailored to TechFlow's unique B2B sales cycle with automated lead scoring and territory management.",
        duration: "2 weeks",
        icon: "design" as const,
        outcomes: [
          "Custom object model for SaaS metrics",
          "Automated lead qualification rules",
          "Territory assignment logic"
        ]
      },
      {
        phase: "Phase 3",
        title: "Build & Configure",
        description: "Built out the Salesforce org with custom objects, flows, reports, and dashboards. Integrated with existing tools including HubSpot and Stripe.",
        duration: "4 weeks",
        icon: "build" as const,
        outcomes: [
          "15 custom automation flows",
          "Real-time Stripe payment sync",
          "Executive dashboard suite"
        ]
      },
      {
        phase: "Phase 4",
        title: "Testing & Training",
        description: "Rigorous UAT with the sales team, refined based on feedback, and delivered comprehensive training to ensure adoption.",
        duration: "2 weeks",
        icon: "test" as const,
        outcomes: [
          "98% test case pass rate",
          "All 25 sales reps trained",
          "Video library for new hires"
        ]
      },
      {
        phase: "Phase 5",
        title: "Go Live",
        description: "Seamless cutover with zero downtime. Data migrated from spreadsheets and legacy tools. Hypercare support for first two weeks.",
        duration: "1 week",
        icon: "launch" as const,
        outcomes: [
          "50,000 records migrated",
          "Zero critical issues at launch",
          "100% user adoption day one"
        ]
      },
      {
        phase: "Ongoing",
        title: "Continuous Improvement",
        description: "Monthly check-ins to optimise workflows, add new features, and ensure the platform evolves with TechFlow's growth.",
        duration: "Ongoing",
        icon: "support" as const,
        outcomes: [
          "Quarterly feature releases",
          "Proactive performance monitoring",
          "Dedicated support contact"
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#3cd6bf] font-semibold tracking-wide uppercase text-sm mb-4">
            Component Demo
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Animated Case Study Timeline
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scroll down to see the timeline animate in. Each milestone reveals as you scroll,
            alternating left and right for visual interest.
          </p>
        </div>
      </section>

      {/* Timeline Component */}
      <section className="px-4 pb-24">
        <CaseStudyTimeline {...exampleCaseStudy} />
      </section>

      {/* Usage Notes */}
      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How to Use</h3>
            <p className="text-gray-600 mb-4">
              This component can be used on dedicated case study pages or embedded in service pages
              to show a typical project journey.
            </p>
            <div className="bg-gray-50 p-4 rounded-xl">
              <code className="text-sm text-gray-700">
                {`<CaseStudyTimeline
  clientName="Company Name"
  industry="Industry"
  challenge="The problem..."
  result="The outcome..."
  milestones={[...]}
/>`}
              </code>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
