import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROJECTS } from '../../data/content';
import { PortfolioProject } from '../../types';
import { DemoPreviewModal } from '../portfolio/DemoPreviewModal';

interface PortfolioProps {
  onRequestSimilarProject: (category: string) => void;
  selectedDemoIdFromHero?: string | null;
  onClearHeroDemoSelection?: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onRequestSimilarProject,
  selectedDemoIdFromHero,
  onClearHeroDemoSelection,
}) => {
  const [activePreviewProject, setActivePreviewProject] = useState<PortfolioProject | null>(null);

  React.useEffect(() => {
    if (selectedDemoIdFromHero) {
      const match = PORTFOLIO_PROJECTS.find((p) => p.id === selectedDemoIdFromHero);
      if (match) {
        setActivePreviewProject(match);
      }
      if (onClearHeroDemoSelection) {
        onClearHeroDemoSelection();
      }
    }
  }, [selectedDemoIdFromHero, onClearHeroDemoSelection]);

  return (
    <section id="work" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4 mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Portfolio &amp; Visual Showcases
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 text-balance">
            Our Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore concept website designs created for different types of businesses.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-md">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            <span>Clearly labeled Concept Demos · Demonstrating layout, typography and conversion pathways</span>
          </div>
        </motion.div>

        {/* 6 Large Portfolio Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: (idx % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large Realistic Mockup Preview */}
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed tag */}
                  <div className="absolute top-4 left-4 bg-white/95 border border-slate-200 px-3 py-1 rounded text-xs font-semibold text-slate-800 shadow-2xs backdrop-blur-xs">
                    {project.badge}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {project.category} · {project.industry}
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-950 tracking-tight group-hover:text-slate-800 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {project.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200/60"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActivePreviewProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Demo</span>
                </button>

                <button
                  type="button"
                  onClick={() => onRequestSimilarProject(project.category)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <span>Build For My Business</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Simulator Modal */}
      <AnimatePresence>
        {activePreviewProject && (
          <DemoPreviewModal
            project={activePreviewProject}
            onClose={() => setActivePreviewProject(null)}
            onRequestSimilar={(category) => {
              setActivePreviewProject(null);
              onRequestSimilarProject(category);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
