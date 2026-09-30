import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { PLACEHOLDER_CONTACT } from '../../data/content';

interface FooterProps {
  onOpenRequirementModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRequirementModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-20 pb-14 text-slate-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-200"
        >
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xl font-display font-extrabold tracking-tight text-slate-950 block">
              PRINCE WEB STUDIO
            </span>
            <p className="text-sm font-medium text-slate-900">
              Professional Websites for Modern Businesses
            </p>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              We design and develop fast, responsive and conversion-focused websites that help businesses build credibility and connect with clients online.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-500 block">
                Direct client collaboration · Zero generic template constraints
              </span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                'Website Design',
                'Website Development',
                'Business Websites',
                'Landing Pages',
                'Website Maintenance & Updates',
              ].map((serviceName) => (
                <li key={serviceName}>
                  <button
                    type="button"
                    onClick={() => onOpenRequirementModal(serviceName)}
                    className="text-slate-600 hover:text-slate-950 transition-colors text-left"
                  >
                    {serviceName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'About', href: '#about' },
                { label: 'Our Work', href: '#work' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-600 hover:text-slate-950 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get Started */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950">
              Get Started
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ready to create or update your business website? Submit your project requirements to start the conversation.
            </p>
            <button
              onClick={() => onOpenRequirementModal()}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
            >
              <span>Get Your Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-[11px] text-slate-500 pt-1">
              Response window: {PLACEHOLDER_CONTACT.responseWindow}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 PRINCE WEB STUDIO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Clean Code · Mobile First · Transparent Scopes</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-950 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
