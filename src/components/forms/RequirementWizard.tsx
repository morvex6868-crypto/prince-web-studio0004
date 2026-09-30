import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Copy,
  Check,
  UploadCloud,
  FileText,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WebsiteRequirementsFormData } from '../../types';

interface RequirementWizardProps {
  isOpen: boolean;
  onClose: () => void;
  initialBusinessType?: string;
  initialService?: string;
}

const INITIAL_DATA: WebsiteRequirementsFormData = {
  fullName: '',
  businessName: '',
  phone: '',
  whatsapp: '',
  email: '',
  city: '',
  state: '',
  businessType: '',
  businessDescription: '',
  purposes: [],
  pagesAndFeatures: [
    'Home',
    'About',
    'Services',
    'Contact',
    'WhatsApp Button',
    'Google Maps',
    'Contact Form',
  ],
  servicesOrProducts: '',
  pricingDetails: '',
  openingHours: '',
  address: '',
  contactInformation: '',
  additionalContentInfo: '',
  hasLogo: 'Yes, have logo file ready',
  hasPhotos: 'Yes, have high-quality photos',
  cloudStorageLink: '',
  mediaNotes: '',
  additionalNotes: '',
  confirmedAccurate: false,
};

const BUSINESS_TYPES = [
  'Restaurant',
  'Gym',
  'Salon',
  'Hotel',
  'Shop',
  'Coaching Institute',
  'College / Institute',
  'Professional',
  'Real Estate',
  'Local Business',
  'Other',
];

const PURPOSE_OPTIONS = [
  'Business Information',
  'Generate Enquiries',
  'WhatsApp Enquiries',
  'Online Booking',
  'Product Showcase',
  'Services / Menu',
  'Portfolio',
  'Online Selling',
  'Other',
];

const PAGES_AND_FEATURES_OPTIONS = [
  'Home',
  'About',
  'Services',
  'Products',
  'Pricing',
  'Gallery',
  'Testimonials',
  'FAQ',
  'Contact',
  'Google Maps',
  'WhatsApp Button',
  'Booking',
  'Contact Form',
  'Social Media Links',
  'Blog / News',
  'Other',
];

export const RequirementWizard: React.FC<RequirementWizardProps> = ({
  isOpen,
  onClose,
  initialBusinessType,
  initialService,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<WebsiteRequirementsFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  useEffect(() => {
    if (initialBusinessType) {
      const match = BUSINESS_TYPES.find(
        (t) => t.toLowerCase() === initialBusinessType.toLowerCase().replace(' websites', '')
      );
      if (match) {
        setFormData((prev) => ({ ...prev, businessType: match }));
      }
    }
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        additionalNotes: prev.additionalNotes
          ? `${prev.additionalNotes}\nRequested service: ${initialService}`
          : `Requested service: ${initialService}`,
      }));
    }
  }, [initialBusinessType, initialService]);

  if (!isOpen) return null;

  const totalSteps = 7;

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
      if (!formData.businessName.trim()) newErrors.businessName = 'Business/Organization Name is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email Address is required';
      } else if (!formData.email.includes('@')) {
        newErrors.email = 'Please provide a valid email address';
      }
      if (!formData.city.trim()) newErrors.city = 'City is required';
    }

    if (step === 2) {
      if (!formData.businessType) newErrors.businessType = 'Please select your business type';
      if (!formData.businessDescription.trim()) {
        newErrors.businessDescription = 'Please briefly describe your business';
      }
    }

    if (step === 3) {
      if (formData.purposes.length === 0) {
        newErrors.purposes = 'Please select at least one primary website purpose';
      }
    }

    if (step === 4) {
      if (formData.pagesAndFeatures.length === 0) {
        newErrors.pagesAndFeatures = 'Please select at least one page or feature';
      }
    }

    if (step === 7) {
      if (!formData.confirmedAccurate) {
        newErrors.confirmedAccurate = 'Please confirm the accuracy of your information to submit';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const toggleArrayItem = (field: 'purposes' | 'pagesAndFeatures', item: string) => {
    setFormData((prev) => {
      const exists = prev[field].includes(item);
      return {
        ...prev,
        [field]: exists ? prev[field].filter((i) => i !== item) : [...prev[field], item],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(7)) return;

    const ref = `PWS-REQ-${Date.now().toString().slice(-6)}`;
    setReferenceId(ref);

    try {
      const list = JSON.parse(localStorage.getItem('pws_requirements_archive') || '[]');
      list.push({
        ref,
        submittedAt: new Date().toISOString(),
        data: formData,
      });
      localStorage.setItem('pws_requirements_archive', JSON.stringify(list));
    } catch {
      // Local fallback
    }

    setIsSubmitted(true);
  };

  const generateSummaryText = () => {
    return `*PRINCE WEB STUDIO — WEBSITE REQUIREMENT*
Reference ID: ${referenceId}
Client Name: ${formData.fullName}
Business: ${formData.businessName} (${formData.businessType})
Phone: ${formData.phone}
WhatsApp: ${formData.whatsapp || formData.phone}
Email: ${formData.email}
City/State: ${formData.city}, ${formData.state}

*Business Overview:*
${formData.businessDescription}

*Website Purpose:*
${formData.purposes.join(', ')}

*Pages & Features:*
${formData.pagesAndFeatures.join(', ')}

*Content Details:*
- Offerings/Products: ${formData.servicesOrProducts || 'Provided later'}
- Pricing: ${formData.pricingDetails || 'Custom / To be decided'}
- Hours: ${formData.openingHours || 'Standard'}
- Address: ${formData.address || 'N/A'}
- Public Contact: ${formData.contactInformation || formData.phone}

*Media Assets:*
- Logo: ${formData.hasLogo}
- Photos: ${formData.hasPhotos}
- Cloud Link: ${formData.cloudStorageLink || 'None provided'}

*Additional Notes:*
${formData.additionalNotes || 'None'}`;
  };

  const copySummary = () => {
    navigator.clipboard.writeText(generateSummaryText());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/75 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[92vh]"
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                PRINCE WEB STUDIO
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs font-semibold text-slate-700">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <h2 className="text-xl font-display font-extrabold text-slate-950">
              Let&apos;s Build Your Website
            </h2>
            <p className="text-xs text-slate-600">
              Tell us about your business and the kind of website you need.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close requirement form"
            className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="w-full h-1 bg-slate-200">
            <div
              className="h-full bg-slate-950 transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="space-y-6 py-4">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Submission Reference: {referenceId}
                  </span>
                  <h3 className="text-2xl font-display font-extrabold text-slate-950">
                    Thank you! Your website requirement has been received.
                  </h3>
                  <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed pt-1">
                    We will review the details and contact you to discuss the next steps.
                  </p>
                </div>

                {/* Important Disclaimer Notice */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 text-left space-y-1 shadow-2xs">
                  <strong className="text-slate-900 block">Notice:</strong>
                  <span>
                    This form is an enquiry and requirement specification form. It is not an automatic binding contract or payment system. We will contact you to confirm scope, timeline, and deliverables before any work commences.
                  </span>
                </div>
              </div>

              {/* Summary and Next Steps Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={copySummary}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  {copiedSummary ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedSummary ? 'Copied Summary' : 'Copy Requirement Summary'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                    setFormData(INITIAL_DATA);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-colors cursor-pointer shadow-xs"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* STEP 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-950">
                      STEP 1 — BASIC INFORMATION
                    </h3>
                    <p className="text-xs text-slate-500">
                      How can we contact you regarding your website proposal?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Business / Organization Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Copper Chimney Bistro"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                      />
                      {errors.businessName && <p className="text-xs text-red-500 mt-1">{errors.businessName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="Same as phone if left empty"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="business@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Pune"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                      />
                      {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        State
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="e.g. Maharashtra"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Business Information */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-950">
                      STEP 2 — BUSINESS INFORMATION
                    </h3>
                    <p className="text-xs text-slate-500">
                      Select your business category and describe your services.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Business Type <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {BUSINESS_TYPES.map((type) => {
                        const isSelected = formData.businessType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, businessType: type })}
                            className={`p-3 text-left rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                    {errors.businessType && <p className="text-xs text-red-500 mt-1">{errors.businessType}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Business Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.businessDescription}
                      onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                      placeholder="Briefly describe what your business offers, who your primary customers are, and what makes you unique..."
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                    />
                    {errors.businessDescription && <p className="text-xs text-red-500 mt-1">{errors.businessDescription}</p>}
                  </div>
                </div>
              )}

              {/* STEP 3: Website Requirements (Purpose) */}
              {currentStep === 3 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-950">
                      STEP 3 — WEBSITE REQUIREMENTS
                    </h3>
                    <p className="text-xs text-slate-500">
                      What is the main purpose of your website? (Select all that apply)
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PURPOSE_OPTIONS.map((purpose) => {
                      const isSelected = formData.purposes.includes(purpose);
                      return (
                        <button
                          key={purpose}
                          type="button"
                          onClick={() => toggleArrayItem('purposes', purpose)}
                          className={`p-3.5 rounded-lg border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span>{purpose}</span>
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </button>
                      );
                    })}
                  </div>
                  {errors.purposes && <p className="text-xs text-red-500 mt-1">{errors.purposes}</p>}
                </div>
              )}

              {/* STEP 4: Pages / Features */}
              {currentStep === 4 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-950">
                      STEP 4 — PAGES / FEATURES
                    </h3>
                    <p className="text-xs text-slate-500">
                      Select which pages and interactive features you need on your website:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                    {PAGES_AND_FEATURES_OPTIONS.map((item) => {
                      const isSelected = formData.pagesAndFeatures.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleArrayItem('pagesAndFeatures', item)}
                          className={`p-3 rounded-lg border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span>{item}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                        </button>
                      );
                    })}
                  </div>
                  {errors.pagesAndFeatures && <p className="text-xs text-red-500 mt-1">{errors.pagesAndFeatures}</p>}
                </div>
              )}

              {/* STEP 5: Content */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-950">
                      STEP 5 — CONTENT
                    </h3>
                    <p className="text-xs text-slate-500">
                      Provide text information to show on your website (or note if it will be supplied later).
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Services / Products to Display
                    </label>
                    <textarea
                      rows={2}
                      value={formData.servicesOrProducts}
                      onChange={(e) => setFormData({ ...formData, servicesOrProducts: e.target.value })}
                      placeholder="List key services, items, treatments, or courses..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Prices / Rates (if applicable)
                      </label>
                      <input
                        type="text"
                        value={formData.pricingDetails}
                        onChange={(e) => setFormData({ ...formData, pricingDetails: e.target.value })}
                        placeholder="e.g. Menu prices, consultation rates, or quote only"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Opening Hours
                      </label>
                      <input
                        type="text"
                        value={formData.openingHours}
                        onChange={(e) => setFormData({ ...formData, openingHours: e.target.value })}
                        placeholder="e.g. Mon-Sat 9am - 8pm, Sunday closed"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Business Address (for Google Map &amp; Footer)
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Street, locality, landmark, pincode"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Public Contact Information (Phones / Emails to display)
                    </label>
                    <input
                      type="text"
                      value={formData.contactInformation}
                      onChange={(e) => setFormData({ ...formData, contactInformation: e.target.value })}
                      placeholder="Phone numbers, WhatsApp number, support email..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                    />
                  </div>
                </div>
              )}

              {/* STEP 6: Media */}
              {currentStep === 6 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-950">
                      STEP 6 — MEDIA
                    </h3>
                    <p className="text-xs text-slate-500">
                      Indicate the status of your logo, photography, and high-resolution files.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Logo Upload Status
                      </label>
                      <select
                        value={formData.hasLogo}
                        onChange={(e) => setFormData({ ...formData, hasLogo: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                      >
                        <option>Yes, have logo file ready</option>
                        <option>No, need a clean typography wordmark</option>
                        <option>Need logo design assistance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Business &amp; Product Photos
                      </label>
                      <select
                        value={formData.hasPhotos}
                        onChange={(e) => setFormData({ ...formData, hasPhotos: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                      >
                        <option>Yes, have high-quality photos</option>
                        <option>Need curated professional stock images</option>
                        <option>Photos are currently being taken</option>
                      </select>
                    </div>
                  </div>

                  {/* Cloud storage link option for large media / videos */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <UploadCloud className="w-4 h-4 text-slate-800" />
                      <span>Cloud Storage / Drive Link for High-Resolution Files &amp; Videos</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Instead of huge direct uploads, you can paste a shareable Google Drive, Dropbox, OneDrive, or YouTube/Vimeo video link:
                    </p>
                    <input
                      type="url"
                      value={formData.cloudStorageLink}
                      onChange={(e) => setFormData({ ...formData, cloudStorageLink: e.target.value })}
                      placeholder="https://drive.google.com/drive/folders/... or Dropbox folder"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Brand / Media Notes (Color preferences, fonts, or aesthetic style)
                    </label>
                    <input
                      type="text"
                      value={formData.mediaNotes}
                      onChange={(e) => setFormData({ ...formData, mediaNotes: e.target.value })}
                      placeholder="e.g. Minimalist black and white, warm earthy tones, modern tech feel..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                    />
                  </div>
                </div>
              )}

              {/* STEP 7: Additional Requirements & Final Button */}
              {currentStep === 7 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-950">
                      STEP 7 — ADDITIONAL REQUIREMENTS
                    </h3>
                    <p className="text-xs text-slate-500">
                      Review your project summary and tell us anything else you would like on your website.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Tell us anything else you would like on your website
                    </label>
                    <textarea
                      rows={4}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      placeholder="Special features, websites you admire, competitor links, timeline goals..."
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  {/* Summary Checklist */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                    <div className="font-bold text-slate-900">
                      Quick Summary:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                      <div><strong>Business:</strong> {formData.businessName || 'N/A'} ({formData.businessType})</div>
                      <div><strong>Contact:</strong> {formData.fullName} · {formData.phone}</div>
                      <div><strong>Purposes:</strong> {formData.purposes.join(', ') || 'N/A'}</div>
                      <div><strong>Pages/Features:</strong> {formData.pagesAndFeatures.length} selected</div>
                    </div>
                  </div>

                  {/* Final Accuracy Confirmation */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.confirmedAccurate}
                        onChange={(e) => setFormData({ ...formData, confirmedAccurate: e.target.checked })}
                        className="mt-0.5 accent-slate-950 shrink-0"
                      />
                      <span className="text-xs text-slate-700 leading-snug">
                        I confirm that the information provided is accurate to the best of my knowledge and understand that Prince Web Studio will contact me to review the project scope.
                      </span>
                    </label>
                    {errors.confirmedAccurate && (
                      <p className="text-xs text-red-500 mt-1">{errors.confirmedAccurate}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-950 rounded-md transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Continue to Step {currentStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-all shadow-md cursor-pointer"
                  >
                    <span>Submit Website Requirement</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
