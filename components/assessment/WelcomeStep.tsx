'use client';

import { useState } from 'react';
import { useAssessment } from './AssessmentProvider';

export default function WelcomeStep() {
  const { state, actions } = useAssessment();
  const [firstName, setFirstName] = useState(state.leadInfo.firstName || '');
  const [email, setEmail] = useState(state.leadInfo.email || '');
  const [errors, setErrors] = useState<{ firstName?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { firstName?: string; email?: string } = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'Please enter your first name';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      actions.setLeadInfo({ firstName: firstName.trim(), email: email.trim() });
      actions.nextStep();
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Let's Get Started
          </h2>
          <p className="text-gray-600">
            We'll email your personalized results
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-200">

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all ${
                  errors.firstName
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-2 focus:ring-appdraft-primary focus:border-transparent'
                }`}
                placeholder="Your first name"
              />
              {errors.firstName && (
                <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all ${
                  errors.email
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-2 focus:ring-appdraft-primary focus:border-transparent'
                }`}
                placeholder="your.name@company.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-appdraft-accent text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#d94d46] transition-colors shadow-md hover:shadow-lg"
            >
              Start Your Free Assessment →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
