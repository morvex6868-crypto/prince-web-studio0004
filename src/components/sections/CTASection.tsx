import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CTASectionProps {
  onOpenRequirementModal: () => void;
  onNavigateToWork: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenRequirementModal,
  onNavigateToWork,
}) => {
  return (
    <section className="py-24 md:py-36 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-xs"
        >
          <span>Start Your Digital Presence</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] text-balance max-w-3xl mx-auto"
        >
          Ready to Build Your Online Presence?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Let&apos;s create a website that makes your business look professional online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenRequirementModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-all shadow-lg active:scale-[0.98] cursor-pointer"
          >
            <span>Get Your Website</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onNavigateToWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800/80 border border-slate-700 hover:bg-slate-800 transition-all rounded-lg cursor-pointer"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-400"
        >
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-300" />
            <span>Honest Scoping &amp; Transparent Milestones</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-slate-300" />
            <span>Handcrafted Clean Code</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-slate-300" />
            <span>Dedicated Mobile Optimization</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
};
