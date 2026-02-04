'use client';

import { useState } from 'react';

interface FormData {
  // Step 1: About You
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;

  // Step 2: Your Business
  industry: string;
  companySize: string;
  currentCRM: string;

  // Step 3: Your Project
  services: string[];
  timeline: string;
  budget: string;

  // Step 4: Details
  challenges: string;
  howDidYouHear: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  industry: '',
  companySize: '',
  currentCRM: '',
  services: [],
  timeline: '',
  budget: '',
  challenges: '',
  howDidYouHear: '',
};

const industries = [
  'Financial Services',
  'Healthcare & Life Sciences',
  'Manufacturing',
  'Professional Services',
  'Technology',
  'Real Estate',
  'Communications & Media',
  'Transportation & Logistics',
  'Retail & Consumer Goods',
  'Other',
];

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees',
];

const currentCRMs = [
  'No CRM currently',
  'Spreadsheets / Manual',
  'Salesforce (need help)',
  'HubSpot',
  'Microsoft Dynamics',
  'Zoho',
  'Pipedrive',
  'Other',
];

const serviceOptions = [
  { id: 'implementation', label: 'New Salesforce Implementation', icon: '🚀' },
  { id: 'migration', label: 'CRM Migration to Salesforce', icon: '📦' },
  { id: 'customisation', label: 'Customisation & Development', icon: '⚙️' },
  { id: 'integration', label: 'Integrations', icon: '🔗' },
  { id: 'health-check', label: 'Salesforce Health Check', icon: '🏥' },
  { id: 'training', label: 'Training & Adoption', icon: '📚' },
  { id: 'support', label: 'Ongoing Support', icon: '🛟' },
  { id: 'unsure', label: 'Not sure yet', icon: '🤔' },
];

const timelines = [
  'ASAP - Urgent need',
  'Within 1-2 months',
  'Within 3-6 months',
  'Planning for next year',
  'Just exploring options',
];

const budgets = [
  'Under £10,000',
  '£10,000 - £25,000',
  '£25,000 - £50,000',
  '£50,000 - £100,000',
  '£100,000+',
  'Not sure yet',
];

const howDidYouHearOptions = [
  'Google Search',
  'Salesforce AppExchange',
  'LinkedIn',
  'Referral',
  'Previous client',
  'Event / Conference',
  'Other',
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.company.trim()) newErrors.company = 'Company name is required';
    }

    if (step === 2) {
      if (!formData.industry) newErrors.industry = 'Please select your industry';
      if (!formData.companySize) newErrors.companySize = 'Please select company size';
    }

    if (step === 3) {
      if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
      if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    // Simulate API call - replace with actual form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-6">
            We&apos;ve received your enquiry and will be in touch within 24 hours.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#3cd6bf] font-bold">1.</span>
                Our team will review your requirements
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3cd6bf] font-bold">2.</span>
                We&apos;ll schedule a discovery call at your convenience
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3cd6bf] font-bold">3.</span>
                You&apos;ll receive a tailored proposal based on your needs
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  step < currentStep
                    ? 'bg-green-500 text-white'
                    : step === currentStep
                      ? 'bg-[#3cd6bf] text-white ring-4 ring-[#3cd6bf]/20'
                      : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step < currentStep ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step
                )}
              </div>
              {step < 4 && (
                <div
                  className={`w-16 sm:w-24 h-1 mx-2 rounded transition-all duration-300 ${
                    step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>About You</span>
          <span>Business</span>
          <span>Project</span>
          <span>Details</span>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
        {/* Step Content */}
        <div className="p-8">
          {/* Step 1: About You */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Let&apos;s start with you</h2>
                <p className="text-gray-600">Tell us a bit about yourself so we can personalise your experience.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    className={`w-full px-4 py-3 text-base rounded-xl border ${errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    className={`w-full px-4 py-3 text-base rounded-xl border ${errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all`}
                    placeholder="Smith"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={`w-full px-4 py-3 text-base rounded-xl border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full px-4 py-3 text-base rounded-xl border border-gray-200 focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all"
                  placeholder="+44 7700 900000"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    className={`w-full px-4 py-3 text-base rounded-xl border ${errors.company ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all`}
                    placeholder="Acme Ltd"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    id="jobTitle"
                    type="text"
                    autoComplete="organization-title"
                    value={formData.jobTitle}
                    onChange={(e) => updateField('jobTitle', e.target.value)}
                    className="w-full px-4 py-3 text-base rounded-xl border border-gray-200 focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all"
                    placeholder="Sales Director"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Your Business */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">About your business</h2>
                <p className="text-gray-600">Help us understand your organisation better.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      type="button"
                      onClick={() => updateField('industry', industry)}
                      className={`px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                        formData.industry === industry
                          ? 'border-[#3cd6bf] bg-[#3cd6bf]/5 text-[#3cd6bf] font-medium'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
                {errors.industry && <p className="text-red-500 text-sm mt-2">{errors.industry}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size *</label>
                <div className="grid grid-cols-1 gap-2">
                  {companySizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => updateField('companySize', size)}
                      className={`px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                        formData.companySize === size
                          ? 'border-[#3cd6bf] bg-[#3cd6bf]/5 text-[#3cd6bf] font-medium'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {errors.companySize && <p className="text-red-500 text-sm mt-2">{errors.companySize}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current CRM</label>
                <select
                  id="currentCRM"
                  value={formData.currentCRM}
                  onChange={(e) => updateField('currentCRM', e.target.value)}
                  className="w-full px-4 py-3 text-base rounded-xl border border-gray-200 focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all bg-white"
                >
                  <option value="">Select current CRM...</option>
                  {currentCRMs.map((crm) => (
                    <option key={crm} value={crm}>{crm}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Your Project */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your project</h2>
                <p className="text-gray-600">What are you looking to achieve?</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Services Needed *</label>
                <p className="text-sm text-gray-500 mb-3">Select all that apply</p>
                <div className="grid grid-cols-1 gap-2">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`px-4 py-3 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 ${
                        formData.services.includes(service.id)
                          ? 'border-[#3cd6bf] bg-[#3cd6bf]/5 text-[#3cd6bf]'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <span className="text-xl">{service.icon}</span>
                      <span className={formData.services.includes(service.id) ? 'font-medium' : ''}>
                        {service.label}
                      </span>
                      {formData.services.includes(service.id) && (
                        <svg className="w-5 h-5 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
                {errors.services && <p className="text-red-500 text-sm mt-2">{errors.services}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timeline *</label>
                <div className="grid grid-cols-1 gap-2">
                  {timelines.map((timeline) => (
                    <button
                      key={timeline}
                      type="button"
                      onClick={() => updateField('timeline', timeline)}
                      className={`px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                        formData.timeline === timeline
                          ? 'border-[#3cd6bf] bg-[#3cd6bf]/5 text-[#3cd6bf] font-medium'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
                {errors.timeline && <p className="text-red-500 text-sm mt-2">{errors.timeline}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => updateField('budget', e.target.value)}
                  className="w-full px-4 py-3 text-base rounded-xl border border-gray-200 focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all bg-white"
                >
                  <option value="">Select budget range...</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 4: Details */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Final details</h2>
                <p className="text-gray-600">Anything else we should know?</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your challenges
                </label>
                <p className="text-sm text-gray-500 mb-2">What problems are you trying to solve?</p>
                <textarea
                  id="challenges"
                  value={formData.challenges}
                  onChange={(e) => updateField('challenges', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 text-base rounded-xl border border-gray-200 focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all resize-none"
                  placeholder="e.g., Our sales team spends too much time on manual data entry, we have no visibility into our pipeline, leads are falling through the cracks..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                <select
                  id="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={(e) => updateField('howDidYouHear', e.target.value)}
                  className="w-full px-4 py-3 text-base rounded-xl border border-gray-200 focus:border-[#3cd6bf] focus:ring-2 focus:ring-[#3cd6bf]/20 outline-none transition-all bg-white"
                >
                  <option value="">Select an option...</option>
                  {howDidYouHearOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Summary</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Contact:</dt>
                    <dd className="text-gray-900">{formData.firstName} {formData.lastName}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Company:</dt>
                    <dd className="text-gray-900">{formData.company}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Industry:</dt>
                    <dd className="text-gray-900">{formData.industry}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Services:</dt>
                    <dd className="text-gray-900 text-right max-w-[200px]">
                      {formData.services.map(s => serviceOptions.find(so => so.id === s)?.label).join(', ')}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Timeline:</dt>
                    <dd className="text-gray-900">{formData.timeline}</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              currentStep === 1
                ? 'opacity-0 pointer-events-none'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            ← Back
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-8 py-3 bg-[#3cd6bf] hover:bg-[#2bc4ad] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg"
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-3 bg-[#3cd6bf] hover:bg-[#2bc4ad] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Enquiry'
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
