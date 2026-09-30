import React from 'react';
import { Palette, Target, Smartphone, MessageSquareText, Zap, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyUs: React.FC = () => {
  const points = [
    {
      icon: <Palette className="w-5 h-5 text-slate-900" />,
      title: 'Custom Design',
      desc: 'No unnecessary template appearance. Your website is created with intentional typography, layout, and visual tone tailored to your business identity.',
    },
    {
      icon: <Target className="w-5 h-5 text-slate-900" />,
      title: 'Business-Focused',
      desc: 'Designed around your actual commercial goals—whether driving phone calls, generating qualified inquiries, or presenting menus and rate cards.',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-slate-900" />,
      title: 'Mobile First',
      desc: 'Tested and verified across mobile phones, tablets, laptops, and wide screens. Intuitive touch ergonomics with zero layout breakage.',
    },
    {
      icon: <MessageSquareText className="w-5 h-5 text-slate-900" />,
      title: 'Clear Communication',
      desc: 'A simple requirement and revision process with direct collaboration. No technical jargon, hidden costs, or confusing runarounds.',
    },
    {
      icon: <Zap className="w-5 h-5 text-slate-900" />,
      title: 'Performance Focused',
      desc: 'Fast and lightweight wherever practical. Clean semantic frontend code that loads quickly on real-world mobile connections.',
    },
    {
      icon: <Compass className="w-5 h-5 text-slate-900" />,
      title: 'Future Ready',
      desc: 'Structured with modular components allowing smooth future expansions—such as adding pages, new services, or e-commerce features later.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4 mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            The Studio Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 text-balance">
            Why Prince Web Studio
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We focus on practical, high-standard web engineering built on honesty, craftsmanship, and clear business alignment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                {p.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-950 tracking-tight">
                {p.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
