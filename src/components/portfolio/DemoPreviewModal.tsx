import React, { useState } from 'react';
import { X, Monitor, Smartphone, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioProject } from '../../types';

interface DemoPreviewModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (industry: string) => void;
}

export const DemoPreviewModal: React.FC<DemoPreviewModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[92vh]"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {project.badge}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-sm font-bold text-slate-950">
              {project.title}
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              ({project.category})
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Device Mode Switcher */}
            <div className="flex items-center bg-white p-0.5 rounded-lg border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setDeviceMode('desktop')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  deviceMode === 'desktop'
                    ? 'bg-slate-950 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode('mobile')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  deviceMode === 'mobile'
                    ? 'bg-slate-950 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-950 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Concept Disclaimer Bar */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-slate-800 shrink-0" />
              <span>
                <strong>Concept Demo Architecture:</strong> This design illustrates our proposed layout, typography hierarchy, and conversion pathways for the {project.industry} category.
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.category);
              }}
              className="inline-flex items-center gap-1 text-slate-950 font-bold hover:underline shrink-0"
            >
              <span>Build similar website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Screen Simulator */}
          <div className="flex justify-center bg-slate-100 p-4 sm:p-8 rounded-xl border border-slate-200">
            <div
              className={`transition-all duration-300 w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl ${
                deviceMode === 'mobile' ? 'max-w-xs' : 'max-w-4xl'
              }`}
            >
              {/* Browser Bar */}
              <div className="px-4 py-2.5 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="font-mono text-[11px] text-slate-600 truncate max-w-xs px-2">
                  preview.princewebstudio.com/{project.id}
                </div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">
                  {deviceMode}
                </div>
              </div>

              {/* Simulated Website Content */}
              <div className="p-5 sm:p-8 space-y-6">
                {/* Simulated Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="font-display font-bold text-sm sm:text-base text-slate-950">
                    {project.title}
                  </span>
                  <div className="text-[11px] text-slate-600 hidden sm:flex items-center gap-5 font-medium">
                    <span>Overview</span>
                    <span>Offerings</span>
                    <span>Location</span>
                    <span className="text-slate-950 font-bold">Contact</span>
                  </div>
                </div>

                {/* Simulated Hero */}
                <div className="space-y-4 pt-2">
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                    {project.category} · Concept Demo
                  </div>
                  <h3 className="text-xl sm:text-3xl font-display font-bold text-slate-950 tracking-tight leading-snug">
                    {project.deviceMockup.heroHeading}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                    {project.deviceMockup.subheading}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <button
                      type="button"
                      className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 rounded-md shadow-xs"
                    >
                      {project.deviceMockup.actionText}
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 rounded-md"
                    >
                      Explore Details
                    </button>
                  </div>
                </div>

                {/* Simulated Preview Visual */}
                <div className="aspect-16/9 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Highlighted Architecture Features */}
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-900">
                    Engineered Modules in this Blueprint:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
                    {project.deviceMockup.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Footer */}
          <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-950">
                Ready to build a website for your {project.industry.toLowerCase()} business?
              </div>
              <p className="text-xs text-slate-600">
                We customize this layout with your real photography, branding, menu, and service offerings.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.category);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-colors shrink-0 shadow-xs cursor-pointer"
            >
              <span>Get Your {project.category} Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
