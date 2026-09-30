import React, { useState } from 'react';
import { ChevronDown, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../../data/content';

interface FAQProps {
  onOpenRequirementModal: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenRequirementModal }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 text-balance">
            Clear Answers, Zero Jargon
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our design process, deliverables, domains, and timeline.
          </p>
        </motion.div>

        {/* 10 FAQ Accordion Items */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: 0.45,
                  delay: (index % 5) * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-colors hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-950 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-md bg-slate-100 text-slate-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-slate-950 bg-slate-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3"
        >
          <div className="flex items-center justify-center gap-2 text-base font-bold text-slate-950">
            <MessageSquare className="w-5 h-5 text-slate-800" />
            <span>Have a specific project question or timeline constraint?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Submit your requirements with any specific notes or questions, and we will address them directly in our review.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenRequirementModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-colors shadow-xs cursor-pointer"
            >
              <span>Get Your Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
