'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiArrowRight, HiClock, HiCalendar } from 'react-icons/hi';
import { blogPosts, personalInfo } from '@/lib/data';

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-500 dark:text-violet-400 font-medium text-sm uppercase tracking-widest mb-3">
            Thoughts & tutorials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Latest{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
        </motion.div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
            >
              {/* Gradient accent */}
              <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-cyan-500" />

              <div className="flex flex-col flex-1 p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <HiCalendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiClock size={12} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-200 mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <div className="flex items-center gap-1 text-sm text-violet-500 dark:text-violet-400 font-medium group-hover:gap-2 transition-all duration-200">
                  Read article
                  <HiArrowRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={personalInfo.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-300 hover:border-violet-500/40 hover:text-violet-500 dark:hover:text-violet-400 transition-all duration-200"
          >
            View all articles
            <HiArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
