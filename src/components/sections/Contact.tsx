import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { PLACEHOLDER_CONTACT } from '../../data/content';

interface ContactProps {
  onOpenRequirementModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenRequirementModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.contact = 'Please provide an email address or phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write a brief message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const existing = JSON.parse(localStorage.getItem('pws_contact_inquiries') || '[]');
      existing.push({
        id: `INQ-${Date.now()}`,
        submittedAt: new Date().toISOString(),
        ...formData,
      });
      localStorage.setItem('pws_contact_inquiries', JSON.stringify(existing));
    } catch {
      // Local fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Outreach & Channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Direct Contact
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 text-balance">
                Let&apos;s Talk About Your Website
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Have a business and need a professional website? Get in touch with <span className="font-semibold text-slate-900">PRINCE WEB STUDIO</span>.
              </p>
            </div>

            {/* Direct Communication Buttons */}
            <div className="space-y-3.5">
              {/* WhatsApp Button */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">WhatsApp</span>
                      <span className="text-[10px] text-slate-500 font-mono">(Placeholder)</span>
                    </div>
                    <span className="text-xs text-slate-600 font-mono">{PLACEHOLDER_CONTACT.whatsapp}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PLACEHOLDER_CONTACT.whatsapp, 'whatsapp')}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  {copiedField === 'whatsapp' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'whatsapp' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Call Button */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">Direct Call</span>
                      <span className="text-[10px] text-slate-500 font-mono">(Placeholder)</span>
                    </div>
                    <span className="text-xs text-slate-600 font-mono">{PLACEHOLDER_CONTACT.phone}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PLACEHOLDER_CONTACT.phone, 'phone')}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-slate-900" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Email Button */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">Email</span>
                      <span className="text-[10px] text-slate-500 font-mono">(Placeholder)</span>
                    </div>
                    <span className="text-xs text-slate-600 font-mono">{PLACEHOLDER_CONTACT.email}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PLACEHOLDER_CONTACT.email, 'email')}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-slate-900" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Studio Location Indicator */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Location</div>
                  <span className="text-xs text-slate-600">{PLACEHOLDER_CONTACT.location}</span>
                </div>
              </div>
            </div>

            {/* Structured Requirement Wizard Card */}
            <div className="p-7 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Recommended Next Step
              </div>
              <h3 className="text-lg font-display font-bold">
                Have specific pages and features in mind?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Use our 7-step website requirement form to specify your business details, page requirements, and desired features for an exact scope.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenRequirementModal}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-md transition-colors cursor-pointer shadow-xs"
                >
                  <span>Open Requirement Form</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Inquiry Form with subtle motion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 sm:p-10 shadow-2xs">
              {isSubmitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-950">
                    Message Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry has been received by Prince Web Studio. We will review your message and contact you via your provided contact details.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', message: '' });
                      }}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-md transition-colors shadow-2xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 mb-2">
                    <h3 className="text-xl font-display font-bold text-slate-950">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      We respond to all project inquiries within 24–48 business hours.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Mehta"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
                      />
                    </div>
                  </div>
                  {errors.contact && <p className="text-xs text-red-500 mt-1">{errors.contact}</p>}

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Your Message or Project Query <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business, current website (if any), and what you would like to build..."
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-all shadow-sm cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Logging inquiry...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-slate-500 text-center mt-3">
                      We treat your inquiries with strict privacy and never share your contact details.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
