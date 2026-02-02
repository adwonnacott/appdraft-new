import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">Appdraft</h3>
            <p className="text-sm mb-4">
              Experts in Salesforce Implementation for Growing Businesses
            </p>
            <div className="text-sm">
              <p>128 City Road</p>
              <p>London EC1V 2NX</p>
              <p className="mt-2">020 3858 0040</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/implementation" className="hover:text-white transition-colors">
                  Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/support" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/services/health-checks" className="hover:text-white transition-colors">
                  Health Checks
                </Link>
              </li>
              <li>
                <Link href="/services/custom-development" className="hover:text-white transition-colors">
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Salesforce Expertise */}
          <div>
            <h4 className="text-white font-semibold mb-4">Salesforce Know How</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/salesforce/sales-cloud" className="hover:text-white transition-colors">
                  Sales Cloud
                </Link>
              </li>
              <li>
                <Link href="/salesforce/service-cloud" className="hover:text-white transition-colors">
                  Service Cloud
                </Link>
              </li>
              <li>
                <Link href="/salesforce/experience-cloud" className="hover:text-white transition-colors">
                  Experience Cloud
                </Link>
              </li>
              <li>
                <Link href="/salesforce/field-service" className="hover:text-white transition-colors">
                  Field Service
                </Link>
              </li>
              <li>
                <Link href="/salesforce/agentforce" className="hover:text-white transition-colors">
                  Agentforce
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/why-appdraft" className="hover:text-white transition-colors">
                  Why Appdraft
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://www.linkedin.com/company/appdraft/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Follow us on LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <div className="text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Appdraft. All rights reserved.</p>
            <p className="mt-1">
              <a href="https://pledge1percent.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Pledge 1% Member
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
