// Internal demo page: kept out of search results
export const metadata = {
  title: 'Demo',
  robots: { index: false, follow: false },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
