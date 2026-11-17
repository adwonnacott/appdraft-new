import type { Metadata } from "next";
import { Nunito_Sans, JetBrains_Mono, EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";

// Body text. Stand-in for Avenir Next until its web licence is bought
const body = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

// Headlines and figures
const garamond = EB_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
});

// Eurostile Extended, the logo's typeface (Berthold, web licence held)
const eurostile = localFont({
  variable: "--font-logo",
  src: [
    { path: "./fonts/eurostile-extended.woff2", weight: "400", style: "normal" },
    { path: "./fonts/eurostile-bold-extended.woff2", weight: "700", style: "normal" },
  ],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://appdraft.com'),
  title: {
    default: 'Appdraft - Salesforce Implementation Experts',
    template: '%s | Appdraft'
  },
  description: 'Expert Salesforce implementation, support, and custom development for growing businesses. 130+ projects delivered and a 4.9 AppExchange rating.',
  keywords: ['Salesforce implementation', 'Salesforce consulting', 'Salesforce partner', 'CRM implementation', 'Sales Cloud', 'Service Cloud', 'Salesforce support', 'London Salesforce consultant'],
  authors: [{ name: 'Appdraft' }],
  creator: 'Appdraft',
  publisher: 'Appdraft',
  verification: {
    google: '_1UXIj5OJd0wYrDBvzvew4IsRIGd7yx9UpVCrC7VOiM',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://appdraft.com',
    siteName: 'Appdraft',
    title: 'Appdraft - Salesforce Implementation Experts',
    description: 'Expert Salesforce implementation, support, and custom development for growing businesses. 130+ projects delivered and a 4.9 AppExchange rating.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Appdraft - Salesforce Implementation Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appdraft - Salesforce Implementation Experts',
    description: 'Expert Salesforce implementation, support, and custom development for growing businesses.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://appdraft.com',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

// Organization & LocalBusiness JSON-LD Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Appdraft',
  url: 'https://appdraft.com',
  logo: 'https://appdraft.com/appdraft-wordmark/appdraft-wordmark-colour.svg',
  description: 'Expert Salesforce implementation, support, and custom development for growing businesses.',
  sameAs: [
    'https://www.linkedin.com/company/appdraft/',
    'https://clutch.co/profile/appdraft',
    'https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FR4oVUAT',
    'https://www.google.com/search?kgmid=/g/11fktqw77_',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '128 City Road',
    addressLocality: 'London',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
  },
  telephone: '+442045720707',
  email: 'info@appdraft.com',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Appdraft',
  image: 'https://appdraft.com/appdraft-wordmark/appdraft-wordmark-colour.svg',
  url: 'https://appdraft.com',
  telephone: '+442045720707',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '128 City Road',
    addressLocality: 'London',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5267,
    longitude: -0.0888,
  },
  priceRange: '$$',
  sameAs: [
    'https://www.linkedin.com/company/appdraft/',
    'https://clutch.co/profile/appdraft',
    'https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FR4oVUAT',
    'https://www.google.com/search?kgmid=/g/11fktqw77_',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  serviceType: ['Salesforce Implementation', 'Salesforce Support', 'Salesforce Consulting', 'CRM Development'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${body.variable} ${garamond.variable} ${eurostile.variable} ${jetbrainsMono.variable} font-sans antialiased bg-appdraft-background text-appdraft-text min-h-screen`}
      >
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />

        {/* Website chat assistant (workers/chat-api). The blog and insights pages, served by
            the Hub worker, carry the same tag in psa-copilot-api/src/routes/blog.ts.
            A preview build can point it at a preview worker with NEXT_PUBLIC_CHAT_API and
            NEXT_PUBLIC_CHAT_SITEKEY; production leaves both unset. */}
        <Script
          src={`${process.env.NEXT_PUBLIC_CHAT_API ?? '/api/chat'}/widget.js`}
          data-api={process.env.NEXT_PUBLIC_CHAT_API ?? '/api/chat'}
          data-sitekey={process.env.NEXT_PUBLIC_CHAT_SITEKEY}
          strategy="lazyOnload"
        />

        {/* Cookie consent: Google Analytics and the Apollo.io tracker load only after the
            visitor accepts. The blog and insights pages, served by the Hub worker, load the same
            /consent.js from psa-copilot-api/src/routes/blog.ts. */}
        <Script src="/consent.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
