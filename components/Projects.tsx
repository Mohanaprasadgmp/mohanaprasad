'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase, HiCalendar } from 'react-icons/hi';
import { TbBrandAws } from 'react-icons/tb';
import { projects } from '@/lib/data';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-500 dark:text-violet-400 font-medium text-sm uppercase tracking-widest mb-3">
            What I&apos;ve built
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    <span className="flex items-center gap-1 text-xs text-orange-400 font-medium px-2 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                      <TbBrandAws size={12} />
                      AWS
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Company & period */}
                <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-100 dark:border-white/5">
                  <span className="flex items-center gap-1">
                    <HiBriefcase size={12} />
                    {project.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiCalendar size={12} />
                    {project.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
