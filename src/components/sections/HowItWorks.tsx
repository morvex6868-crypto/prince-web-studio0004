import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../../data/content';

interface HowItWorksProps {
  onStartWebsite: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartWebsite }) => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Clear &amp; Predictable Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 text-balance">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We eliminate guesswork with a straightforward six-step milestone workflow. You are informed and in control at every stage.
            </p>
          </div>

          <div>
            <button
              onClick={onStartWebsite}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-all shadow-xs cursor-pointer active:scale-[0.98]"
            >
              <span>Start Your Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* 6 Step Cards with motion stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -3 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phase {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-slate-950 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
