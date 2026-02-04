import ComparisonTable from '@/components/ui/ComparisonTable';

export default function ComparisonDemoPage() {
  // Example: Comparing Appdraft service packages
  const servicePackages = {
    title: "Choose Your Engagement",
    subtitle: "Flexible packages to match your Salesforce needs and budget",
    plans: [
      {
        name: "Quick Start",
        description: "Perfect for small teams getting started with Salesforce",
        ctaText: "Get Started",
        ctaHref: "/contact"
      },
      {
        name: "Professional",
        description: "Full implementation with customisation and integrations",
        highlighted: true,
        ctaText: "Most Popular",
        ctaHref: "/contact"
      },
      {
        name: "Enterprise",
        description: "Complex multi-cloud deployments with ongoing partnership",
        ctaText: "Contact Us",
        ctaHref: "/contact"
      }
    ],
    featureCategories: [
      {
        category: "Implementation",
        features: [
          { name: "Discovery & Requirements", values: [true, true, true] },
          { name: "Data Migration", values: ["Up to 10k records", "Up to 100k records", "Unlimited"] },
          { name: "Custom Objects", values: ["Up to 5", "Up to 20", "Unlimited"] },
          { name: "Automation (Flows)", values: ["5 flows", "15 flows", "Unlimited"] },
          { name: "Reports & Dashboards", values: ["Standard", "Custom", "Advanced Analytics"] },
        ]
      },
      {
        category: "Integrations",
        features: [
          { name: "Email Integration", values: [true, true, true] },
          { name: "Calendar Sync", values: [true, true, true] },
          { name: "Accounting (Xero/QuickBooks)", values: [false, true, true] },
          { name: "Marketing Automation", values: [false, true, true] },
          { name: "Custom API Integrations", values: [false, "Up to 3", "Unlimited"] },
          { name: "ERP Integration", values: [false, false, true] },
        ]
      },
      {
        category: "Training & Support",
        features: [
          { name: "Admin Training", values: ["2 hours", "8 hours", "Unlimited"] },
          { name: "User Training", values: ["Group session", "Role-based", "Custom curriculum"] },
          { name: "Documentation", values: ["Standard", "Detailed", "Comprehensive"] },
          { name: "Post-Go-Live Support", values: ["2 weeks", "4 weeks", "12 weeks"] },
        ]
      },
      {
        category: "Ongoing Services",
        features: [
          { name: "Dedicated Success Manager", values: [false, false, true] },
          { name: "Quarterly Reviews", values: [false, true, true] },
          { name: "Priority Support", values: [false, false, true] },
          { name: "Roadmap Planning", values: [false, false, true] },
        ]
      }
    ]
  };

  // Example: Comparing Salesforce Editions
  const salesforceEditions = {
    title: "Salesforce Editions Compared",
    subtitle: "Understanding which Salesforce edition is right for your business",
    plans: [
      {
        name: "Essentials",
        description: "Basic CRM for small teams",
        price: "£20",
        priceNote: "/user/month"
      },
      {
        name: "Professional",
        description: "Complete CRM for any size team",
        price: "£60",
        priceNote: "/user/month",
        highlighted: true
      },
      {
        name: "Enterprise",
        description: "Deeply customisable CRM",
        price: "£120",
        priceNote: "/user/month"
      },
      {
        name: "Unlimited",
        description: "Unlimited CRM power",
        price: "£240",
        priceNote: "/user/month"
      }
    ],
    featureCategories: [
      {
        category: "Core Features",
        features: [
          { name: "Account & Contact Management", values: [true, true, true, true] },
          { name: "Lead & Opportunity Management", values: [true, true, true, true] },
          { name: "Email Integration", values: [true, true, true, true] },
          { name: "Mobile App", values: [true, true, true, true] },
          { name: "Customisable Reports", values: ["Limited", true, true, true] },
          { name: "Customisable Dashboards", values: [false, true, true, true] },
        ]
      },
      {
        category: "Automation & Customisation",
        features: [
          { name: "Workflow Rules", values: [false, "5", "Unlimited", "Unlimited"] },
          { name: "Flow Builder", values: [false, "5 flows", "Unlimited", "Unlimited"] },
          { name: "Process Builder", values: [false, true, true, true] },
          { name: "Custom Objects", values: [false, false, true, true] },
          { name: "Apex Development", values: [false, false, true, true] },
          { name: "Lightning Components", values: [false, false, true, true] },
        ]
      },
      {
        category: "Advanced Features",
        features: [
          { name: "Territory Management", values: [false, false, true, true] },
          { name: "Forecasting", values: [false, "Basic", "Advanced", "Advanced"] },
          { name: "Multiple Sandboxes", values: [false, false, "1", "Unlimited"] },
          { name: "24/7 Support", values: [false, false, false, true] },
          { name: "Premier Success Plan", values: [false, false, false, true] },
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
            Animated Comparison Tables
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interactive feature matrices that animate on scroll. Hover over columns
            to highlight, and watch rows reveal as you scroll down.
          </p>
        </div>
      </section>

      {/* Service Packages Comparison */}
      <section className="px-4 pb-16">
        <ComparisonTable {...servicePackages} />
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="border-t border-gray-200" />
      </div>

      {/* Salesforce Editions Comparison */}
      <section className="px-4 pb-24">
        <ComparisonTable {...salesforceEditions} />
      </section>

      {/* Usage Notes */}
      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Scroll animations</strong> - Rows reveal as you scroll down the page</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Column highlighting</strong> - Hover over a plan to highlight that column</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Flexible values</strong> - Support booleans (✓/✗), text, or custom strings</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Featured plan</strong> - Highlight a recommended option with special styling</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3cd6bf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Category grouping</strong> - Organize features into logical sections</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
