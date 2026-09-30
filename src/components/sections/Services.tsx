import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../../data/content';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
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
              Agency Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 text-balance">
              Services Built for Real Business Needs
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From fresh brand launches to high-converting redesigns, we build websites that work reliably, load quickly, and represent your business with authority.
            </p>
          </div>

          <div className="text-xs text-slate-500 max-w-xs border-l-2 border-slate-300 pl-4 py-1">
            Every engagement includes custom code, direct communication, and comprehensive device testing before launch.
          </div>
        </motion.div>

        {/* 12 Services Grid with subtle staggered entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-400">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-[11px] text-slate-500 uppercase font-sans font-medium">Service</span>
                </div>

                <h3 className="text-base font-bold text-slate-950 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-slate-900 hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <span>Get a Custom Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
