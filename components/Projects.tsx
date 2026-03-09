'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { TbBrandAws } from 'react-icons/tb';
import { projects } from '@/lib/data';

const featured = projects;

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden h-full">
      <div className="flex flex-col flex-1 p-6">
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
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>
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
        <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-100 dark:border-white/5">
          <span className="flex items-center gap-1"><HiBriefcase size={12} />{project.company}</span>
          <span className="flex items-center gap-1"><HiCalendar size={12} />{project.period}</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [index, setIndex]         = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (step: number) => {
    setDirection(step);
    setIndex((prev) => (prev + step + featured.length) % featured.length);
  };

  const prevIdx = (index - 1 + featured.length) % featured.length;
  const nextIdx = (index + 1) % featured.length;

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

        {/* 3-card carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={{
                  enter: { opacity: 0, scale: 0.96 },
                  center: { opacity: 1, scale: 1 },
                  exit:  { opacity: 0, scale: 0.96 },
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr_1fr] gap-4 items-stretch"
              >
                {/* Prev card */}
                <div className="hidden sm:block opacity-40 pointer-events-none select-none">
                  <ProjectCard project={featured[prevIdx]} />
                </div>

                {/* Current card */}
                <div className="shadow-xl shadow-violet-500/10">
                  <ProjectCard project={featured[index]} />
                </div>

                {/* Next card */}
                <div className="hidden sm:block opacity-40 pointer-events-none select-none">
                  <ProjectCard project={featured[nextIdx]} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className={`rounded-full transition-all duration-200 ${i === index ? 'w-6 h-2 bg-violet-500' : 'w-2 h-2 bg-slate-300 dark:bg-white/20 hover:bg-violet-400'}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(-1)}
                className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-violet-500 hover:border-violet-500 hover:text-white transition-all duration-200"
              >
                <HiChevronLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-violet-500 hover:border-violet-500 hover:text-white transition-all duration-200"
              >
                <HiChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
