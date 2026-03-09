'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '@/lib/data';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-500 dark:text-violet-400 font-medium text-sm uppercase tracking-widest mb-3">
            Where I&apos;ve worked
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Work{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 border-2 border-violet-300 shadow-lg shadow-violet-500/50 mt-6 flex-shrink-0" />

                {/* Spacer for desktop alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {job.role}
                        </h3>
                        <span className="text-xs text-violet-600 dark:text-violet-400 font-medium px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {job.company} &middot; {job.location}
                      </p>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {job.description.map((point, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <span className="text-violet-500 dark:text-violet-400 mt-1 flex-shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
