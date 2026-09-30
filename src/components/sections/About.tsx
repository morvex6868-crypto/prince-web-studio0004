import React from 'react';
import { ShieldCheck, HeartHandshake, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              About The Studio
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 leading-[1.12] text-balance">
              Building Better Websites for Modern Businesses
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p className="text-slate-900 font-semibold">
                PRINCE WEB STUDIO focuses on creating professional websites that help businesses present themselves online clearly and professionally.
              </p>

              <p>
                In a digital landscape filled with bloated website builders, slow-loading templates, and exaggerated marketing claims, we take a different approach: clean design, fast code, and straightforward communication.
              </p>

              <p>
                Every project begins by understanding who your customers are, what questions they have when searching for your services, and how to make contacting you effortless.
              </p>
            </div>

            {/* Core Principle Quote Card */}
            <div className="p-8 rounded-2xl bg-slate-50 border-l-4 border-slate-950 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Founding Philosophy
              </span>
              <p className="text-lg sm:text-xl font-display font-bold text-slate-900 italic">
                &ldquo;Every business is different, so every website should be designed around its goals, audience and requirements.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-600 pt-1">
                We design with restraint and precision, focusing on the real functional needs of your trade rather than unnecessary decorative distractions.
              </p>
            </div>
          </motion.div>

          {/* Pillars of Integrity */}
          <div className="lg:col-span-5 space-y-6">
            {[
              {
                icon: <Code2 className="w-5 h-5 text-slate-900" />,
                title: 'Clean Code Standard',
                desc: 'We develop with modern web standards, semantic HTML, and responsive CSS, avoiding fragile plugin ecosystems that slow down performance.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-slate-900" />,
                title: 'Honest Scoping',
                desc: 'Clear expectations from day one. We evaluate your requirements realistically and provide transparent timelines without fabricated marketing promises.',
              },
              {
                icon: <HeartHandshake className="w-5 h-5 text-slate-900" />,
                title: 'Direct Studio Partnership',
                desc: 'You work directly with the specialist designing and building your website. Revisions and feedback are handled with thorough care.',
              },
            ].map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-950">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
