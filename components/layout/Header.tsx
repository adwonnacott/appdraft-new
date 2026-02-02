'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Appdraft</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Salesforce Know How
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/salesforce/sales-cloud" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Sales Cloud</Link>
                <Link href="/salesforce/service-cloud" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Service Cloud</Link>
                <Link href="/salesforce/experience-cloud" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Experience Cloud</Link>
                <Link href="/salesforce/field-service" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Field Service</Link>
                <Link href="/salesforce/marketing-cloud" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Marketing Cloud</Link>
                <Link href="/salesforce/agentforce" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Agentforce</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                What We Do
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/services/implementation" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Implementation</Link>
                <Link href="/services/support" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Support</Link>
                <Link href="/services/health-checks" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Health Checks</Link>
                <Link href="/services/custom-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Custom Development</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Who We Help
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/industries/professional-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Professional Services</Link>
                <Link href="/industries/communications-media" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Communications & Media</Link>
                <Link href="/industries/high-tech" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">High-Tech</Link>
                <Link href="/industries/real-estate" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Real Estate</Link>
                <Link href="/industries/manufacturing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Manufacturing</Link>
                <Link href="/industries/healthcare" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Healthcare</Link>
                <Link href="/industries/financial-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Financial Services</Link>
              </div>
            </div>

            <Link href="/insights" className="text-gray-700 hover:text-blue-600 font-medium">
              Insights
            </Link>

            <Link href="/why-appdraft" className="text-gray-700 hover:text-blue-600 font-medium">
              Why Appdraft
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/insights" className="text-gray-700 hover:text-blue-600 font-medium">
                Insights
              </Link>
              <Link href="/why-appdraft" className="text-gray-700 hover:text-blue-600 font-medium">
                Why Appdraft
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
