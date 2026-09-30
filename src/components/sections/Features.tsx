import React from 'react';
import {
  Smartphone,
  Zap,
  Layout,
  Search,
  MessageCircle,
  Mail,
  MapPin,
  Share2,
  Image as ImageIcon,
  Receipt,
  RefreshCw,
  Lock,
  Code2,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURES_LIST } from '../../data/content';

const featureIcons: Record<string, React.ReactNode> = {
  'Responsive Design': <Smartphone className="w-5 h-5 text-slate-900" />,
  'Fast Loading': <Zap className="w-5 h-5 text-slate-900" />,
  'Modern UI/UX': <Layout className="w-5 h-5 text-slate-900" />,
  'SEO-Friendly Structure': <Search className="w-5 h-5 text-slate-900" />,
  'WhatsApp Button': <MessageCircle className="w-5 h-5 text-slate-900" />,
  'Contact Forms': <Mail className="w-5 h-5 text-slate-900" />,
  'Google Maps': <MapPin className="w-5 h-5 text-slate-900" />,
  'Social Media Links': <Share2 className="w-5 h-5 text-slate-900" />,
  'Gallery': <ImageIcon className="w-5 h-5 text-slate-900" />,
  'Services / Pricing Sections': <Receipt className="w-5 h-5 text-slate-900" />,
  'Easy Content Updates': <RefreshCw className="w-5 h-5 text-slate-900" />,
  'Secure Deployment': <Lock className="w-5 h-5 text-slate-900" />,
  'Custom Design': <Code2 className="w-5 h-5 text-slate-900" />,
};

interface FeaturesProps {
  onOpenRequirementModal: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenRequirementModal }) => {
  return (
    <section id="features" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4 mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Engineered Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 text-balance">
            Everything Your Business Website Needs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every feature we implement serves a direct purpose: to help your customers discover what you do, build trust, and reach out immediately.
          </p>
        </motion.div>

        {/* 13 Features Grid with Staggered Scroll Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATURES_LIST.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.45,
                delay: (idx % 4) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-400 hover:bg-white transition-all duration-200 space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                {featureIcons[item.title] || <Zap className="w-5 h-5 text-slate-900" />}
              </div>

              <h3 className="text-base font-bold text-slate-950 tracking-tight">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Custom Requirement Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-950">
              Need specialized workflows or third-party booking integrations?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Mention your custom needs in our requirement form and we will review the architecture with you.
            </p>
          </div>
          <button
            onClick={onOpenRequirementModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <span>Specify In Requirements</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
