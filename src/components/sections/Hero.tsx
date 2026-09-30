import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROJECTS } from '../../data/content';

interface HeroProps {
  onOpenRequirementModal: (service?: string, businessType?: string) => void;
  onNavigateToWork: () => void;
  onSelectConceptDemo: (demoId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRequirementModal,
  onNavigateToWork,
  onSelectConceptDemo,
}) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState<number>(0);
  const activeDemo = PORTFOLIO_PROJECTS[activePreviewIndex] || PORTFOLIO_PROJECTS[0];

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Narrative Block with Staggered Motion */}
        <div className="text-center max-w-4xl mx-auto space-y-7">
          {/* Subtle editorial kicker */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-600 bg-slate-100 border border-slate-200/80 px-3.5 py-1.5 rounded-full"
          >
            <span>Web Design &amp; Digital Development Studio</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-extrabold tracking-tight text-slate-950 leading-[1.06] text-balance"
          >
            Professional Websites <br className="hidden sm:inline" />
            <span className="text-slate-950">for Modern Businesses</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We design fast, modern and conversion-focused websites that help businesses build trust, showcase their services and generate more enquiries.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => onOpenRequirementModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-slate-950 hover:bg-slate-800 active:scale-[0.98] rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Get Your Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all rounded-lg shadow-xs cursor-pointer whitespace-nowrap"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Value Verification */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-600 font-medium"
          >
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-800" />
              <span>Bespoke Engineering</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-800" />
              <span>Mobile-First Experience</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-800" />
              <span>Zero Generic Templates</span>
            </span>
          </motion.div>
        </div>

        {/* Hero Multi-Mockup Interactive Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 max-w-6xl mx-auto"
        >
          {/* Industry Concept Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none">
            {PORTFOLIO_PROJECTS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActivePreviewIndex(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activePreviewIndex === idx
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          {/* Browser Frame Showcase */}
          <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden">
            {/* Browser top chrome */}
            <div className="px-4 py-3 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center justify-center gap-2 px-6 py-1 bg-white border border-slate-200 rounded-md text-xs text-slate-500 font-mono w-full max-w-md shadow-2xs truncate">
                <span className="text-slate-400">https://</span>
                <span className="text-slate-800 font-medium">princewebstudio.com/showcase/{activeDemo.category.toLowerCase().replace(/\s+/g, '-')}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="hidden md:inline bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                  Concept Demo
                </span>
              </div>
            </div>

            {/* Screen Content Preview with AnimatePresence */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-white">
              {/* Visual Preview Side */}
              <div className="lg:col-span-8 relative aspect-16/10 sm:aspect-16/9 bg-slate-100 overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDemo.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={activeDemo.image}
                      alt={`${activeDemo.title} concept mockup`}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white">
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-200">
                        {activeDemo.category} · Concept Architecture
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                        {activeDemo.title}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Architecture & Conversion Details Side */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-slate-50/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDemo.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Industry Specification
                      </span>
                      <h4 className="text-lg font-display font-bold text-slate-950">
                        {activeDemo.industry}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {activeDemo.description}
                    </p>

                    <div className="pt-2 border-t border-slate-200 space-y-2">
                      <span className="text-xs font-semibold text-slate-900 block">
                        Core Conversion Modules:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {activeDemo.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <button
                    onClick={() => onSelectConceptDemo(activeDemo.id)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                  >
                    <span>View Interactive Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenRequirementModal(undefined, activeDemo.category)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Request Similar Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
