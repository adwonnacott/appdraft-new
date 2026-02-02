import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Experts in Salesforce Implementation{' '}
              <span className="text-appdraft-primary">For Growing Businesses</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              We help sales and operations teams get more from Salesforce fast. With 130+ projects delivered,
              we blend technical expertise with practical business understanding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/health-checks"
                className="bg-appdraft-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d94d46] transition-all hover:shadow-lg text-center"
              >
                Get Your Free Health Check
              </Link>
              <Link
                href="/contact"
                className="border-2 border-appdraft-primary text-appdraft-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all text-center"
              >
                Discuss Your Project
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-appdraft-primary">130+</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-appdraft-primary">20</div>
                <div className="text-gray-600 text-sm">Years of Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-appdraft-primary">5.0</div>
                <div className="text-gray-600 text-sm">AppExchange Rating</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                  <div className="text-4xl font-bold text-appdraft-primary mb-2">130+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100">
                  <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              {/* Certification Badge */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex items-center gap-4">
                  <svg className="w-16 h-16 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 8.778l-7.5 7.5-3.5-3.5 1.414-1.414 2.086 2.086 6.086-6.086L18.5 8.778z"/>
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Salesforce Certified</h3>
                    <p className="text-blue-100 text-sm">Admin, Developer, Consultant & Architect certified team</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5.0 Rating</div>
                    <div className="text-sm text-gray-600">AppExchange Verified Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
