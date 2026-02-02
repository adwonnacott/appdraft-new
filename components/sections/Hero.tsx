import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Experts in Salesforce Implementation{' '}
              <span className="text-blue-600">For Growing Businesses</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We help teams maximize their Salesforce platform value with expert implementation,
              support, and custom development services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg text-center"
              >
                Get Started
              </Link>
              <Link
                href="/services/health-checks"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all text-center"
              >
                Free Health Check
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">130+</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center space-y-4 p-8">
                  <svg className="w-32 h-32 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 8.778l-7.5 7.5-3.5-3.5 1.414-1.414 2.086 2.086 6.086-6.086L18.5 8.778z"/>
                  </svg>
                  <h3 className="text-2xl font-bold">Salesforce Certified Experts</h3>
                  <p className="text-blue-100">Delivering excellence in every project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
