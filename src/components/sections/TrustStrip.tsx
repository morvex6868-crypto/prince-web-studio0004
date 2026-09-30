import React from 'react';
import { Smartphone, Zap, Search, MessageCircle, RefreshCw, Layout } from 'lucide-react';
import { motion } from 'motion/react';
import { TRUST_STRIP_ITEMS } from '../../data/content';

const iconMap: Record<string, React.ReactNode> = {
  'Modern Design': <Layout className="w-5 h-5 text-slate-800" />,
  'Mobile Responsive': <Smartphone className="w-5 h-5 text-slate-800" />,
  'Fast Performance': <Zap className="w-5 h-5 text-slate-800" />,
  'SEO Ready': <Search className="w-5 h-5 text-slate-800" />,
  'WhatsApp Integration': <MessageCircle className="w-5 h-5 text-slate-800" />,
  'Easy Updates': <RefreshCw className="w-5 h-5 text-slate-800" />,
};

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {TRUST_STRIP_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-2 text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                {iconMap[item.title] || <Zap className="w-5 h-5 text-slate-800" />}
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
