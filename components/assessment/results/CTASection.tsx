'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-gradient-to-br from-appdraft-primary to-appdraft-logo rounded-xl shadow-xl p-8 md:p-12 text-center text-white mb-8">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Fix These Issues?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Schedule a free 20-minute consultation to discuss your specific situation and get expert recommendations
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/contact"
          className="px-8 py-4 bg-white text-appdraft-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl inline-block"
        >
          Schedule Free Consultation
        </Link>
        <Link
          href="/services/health-checks"
          className="px-8 py-4 bg-appdraft-primary-hover text-white font-semibold rounded-lg hover:bg-appdraft-logo transition-colors border-2 border-white/30 inline-block"
        >
          Learn About Health Checks
        </Link>
      </div>

      <p className="text-sm text-blue-100 mt-6">
        Join 130+ businesses that have transformed their Salesforce with Appdraft
      </p>
    </div>
  );
}
