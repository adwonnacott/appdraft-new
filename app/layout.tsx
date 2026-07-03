import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
  description: 'Expert Salesforce implementation, support, and custom development for growing businesses. 130+ projects delivered with 100% client satisfaction.',
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
    description: 'Expert Salesforce implementation, support, and custom development for growing businesses. 130+ projects delivered with 100% client satisfaction.',
    images: [
      {
        url: '/og-image.svg',
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
    images: ['/og-image.svg'],
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '15',
    bestRating: '5',
    worstRating: '1',
  },
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-appdraft-background text-appdraft-text min-h-screen`}
      >
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />

        {/* Salesforce Marketing Cloud - delayed load for performance */}
        <Script
          src="https://cdn.c360a.salesforce.com/beacon/c360a/64be8023-2651-460b-8b38-5f6610cad577/scripts/c360a.min.js?wtcp_id=1NDS60000000E1NOAU"
          strategy="lazyOnload"
        />

        {/* Apollo.io website tracker */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"6633a35ec5cac10438852978"})},
            document.head.appendChild(o)}initApollo();
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1M91EVG6ZR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1M91EVG6ZR');
          `}
        </Script>
      </body>
    </html>
  );
}
