// Personal results page: kept out of search results
export const metadata = {
  title: 'Your Salesforce Health Check Results',
  robots: { index: false, follow: false },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
