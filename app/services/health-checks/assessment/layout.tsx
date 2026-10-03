export const metadata = {
  title: 'Free Salesforce Health Check Assessment',
  description: 'Answer a few questions about how your team uses Salesforce and get a free health check report with scores, quick wins and a personalised roadmap.',
  alternates: { canonical: 'https://appdraft.com/health-check-assessment' },
  // Duplicate of /health-check-assessment, which is the page we want in search
  robots: { index: false, follow: true },
};

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
