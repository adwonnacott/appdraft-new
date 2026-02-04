'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Navigation data
const salesforceLinks = [
  { href: '/salesforce/sales-cloud', label: 'Sales Cloud' },
  { href: '/salesforce/service-cloud', label: 'Service Cloud' },
  { href: '/salesforce/experience-cloud', label: 'Experience Cloud' },
  { href: '/salesforce/field-service', label: 'Field Service' },
  { href: '/salesforce/marketing-cloud', label: 'Marketing Cloud' },
  { href: '/salesforce/agentforce', label: 'Agentforce' },
];

const servicesLinks = [
  { href: '/services/implementation', label: 'Implementation' },
  { href: '/services/support', label: 'Support' },
  { href: '/services/health-checks', label: 'Health Checks' },
  { href: '/services/custom-development', label: 'Custom Development' },
];

const industriesLinks = [
  { href: '/industries/professional-services', label: 'Professional Services' },
  { href: '/industries/communications-media', label: 'Communications & Media' },
  { href: '/industries/high-tech', label: 'High-Tech' },
  { href: '/industries/real-estate', label: 'Real Estate' },
  { href: '/industries/manufacturing', label: 'Manufacturing' },
  { href: '/industries/healthcare', label: 'Healthcare' },
  { href: '/industries/financial-services', label: 'Financial Services' },
  { href: '/industries/transportation', label: 'Transportation' },
];

// Mobile Accordion Component
function MobileAccordion({
  title,
  links,
  isOpen,
  onToggle,
  onLinkClick
}: {
  title: string;
  links: { href: string; label: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-gray-900 font-medium text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2 rounded-lg"
        aria-expanded={isOpen}
      >
        {title}
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="pl-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onLinkClick}
              className="block py-3 text-gray-600 hover:text-[#3cd6bf] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2 rounded-lg px-2 -mx-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenAccordion(null);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <>
    <header className="fixed w-full glass z-50 border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2 rounded-lg">
            <Image
              src="/appdraft-wordmark/appdraft-wordmark-colour.svg"
              alt="Appdraft"
              width={200}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2 rounded-lg px-2 py-1">
                Salesforce Know How
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 shadow-xl">
                {salesforceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-gray-600 hover:text-[#3cd6bf] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3cd6bf]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2 rounded-lg px-2 py-1">
                What We Do
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 shadow-xl">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-gray-600 hover:text-[#3cd6bf] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3cd6bf]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2 rounded-lg px-2 py-1">
                Who We Help
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 shadow-xl">
                {industriesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-gray-600 hover:text-[#3cd6bf] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3cd6bf]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/insights" className="text-gray-600 hover:text-gray-900 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2 rounded-lg px-2 py-1">
              Insights
            </Link>

            <Link href="/why-appdraft" className="text-gray-600 hover:text-gray-900 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2 rounded-lg px-2 py-1">
              Why Appdraft
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="relative bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button - improved touch target */}
          <button
            className="lg:hidden p-3 -mr-2 text-gray-700 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] active:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>

    {/* Mobile Menu - Full Screen Overlay (outside header to avoid clipping) */}
    <div
      className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full overflow-y-auto px-4 py-6">
        {/* Accordion Navigation */}
        <MobileAccordion
          title="Salesforce Know How"
          links={salesforceLinks}
          isOpen={openAccordion === 'salesforce'}
          onToggle={() => toggleAccordion('salesforce')}
          onLinkClick={closeMobileMenu}
        />

        <MobileAccordion
          title="What We Do"
          links={servicesLinks}
          isOpen={openAccordion === 'services'}
          onToggle={() => toggleAccordion('services')}
          onLinkClick={closeMobileMenu}
        />

        <MobileAccordion
          title="Who We Help"
          links={industriesLinks}
          isOpen={openAccordion === 'industries'}
          onToggle={() => toggleAccordion('industries')}
          onLinkClick={closeMobileMenu}
        />

        {/* Direct Links */}
        <div className="border-b border-gray-100">
          <Link
            href="/insights"
            onClick={closeMobileMenu}
            className="block py-4 text-gray-900 font-medium text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2 rounded-lg"
          >
            Insights
          </Link>
        </div>

        <div className="border-b border-gray-100">
          <Link
            href="/why-appdraft"
            onClick={closeMobileMenu}
            className="block py-4 text-gray-900 font-medium text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2 rounded-lg"
          >
            Why Appdraft
          </Link>
        </div>

        {/* CTA Button */}
        <div className="pt-6">
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="block w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-white px-6 py-4 rounded-xl font-medium text-center text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] focus-visible:ring-offset-2"
          >
            Get in Touch
          </Link>
        </div>

        {/* Contact Info */}
        <div className="pt-8 border-t border-gray-100 mt-8">
          <p className="text-sm text-gray-500 mb-2">Get in touch</p>
          <a
            href="tel:+442038580040"
            className="block text-gray-900 font-medium mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] rounded"
          >
            +44 20 3858 0040
          </a>
          <a
            href="mailto:info@appdraft.com"
            className="block text-[#3cd6bf] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3cd6bf] rounded"
          >
            info@appdraft.com
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
