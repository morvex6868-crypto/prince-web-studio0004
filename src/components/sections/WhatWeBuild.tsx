import React from 'react';
import {
  UtensilsCrossed,
  Dumbbell,
  Sparkles,
  BedDouble,
  GraduationCap,
  Briefcase,
  Layout,
  School,
  Building2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { WHAT_WE_BUILD } from '../../data/content';

interface WhatWeBuildProps {
  onSelectCategory: (categoryTitle: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  BedDouble: <BedDouble className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  School: <School className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
};

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4 mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Tailored Industry Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 text-balance">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every business serves clients differently. We design clean, purpose-driven website architectures structured specifically for how your customers discover, evaluate, and contact you.
          </p>
        </motion.div>

        {/* 10 Category Cards with staggered scroll reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {WHAT_WE_BUILD.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: (idx % 5) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-xl bg-white border border-slate-200/90 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  {iconMap[category.iconName] || <Briefcase className="w-5 h-5" />}
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-950 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectCategory(category.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <span>Build This Website</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
