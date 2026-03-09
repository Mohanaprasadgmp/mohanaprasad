'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FaAws } from 'react-icons/fa';
import { TbBrandAws } from 'react-icons/tb';
import { personalInfo } from '@/lib/data';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-500 dark:text-violet-400 font-medium text-sm uppercase tracking-widest mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            About{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* ── COL 1: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Photo */}
            <div className="w-56 h-56 rounded-full p-0.5 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 shadow-xl shadow-violet-500/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <Image
                  src="/mohanaprasad.jpg"
                  alt="Mohanaprasad G"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Name + title card */}
            <div className="w-full text-center p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <p className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                {personalInfo.name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Chennai, India
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-orange-500 dark:text-orange-400 font-medium">
                <FaAws size={14} />
                AWS Certified Developer
              </div>
            </div>

            {/* Cert count badge */}
            <div className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-medium">
                <TbBrandAws size={18} className="text-orange-500" />
                4 AWS Certifications
              </div>
              <span className="text-xs text-violet-600 dark:text-violet-400 font-semibold">Verified</span>
            </div>
          </motion.div>

          {/* ── COL 2: Bio + Interests ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 lg:col-span-1"
          >
            {personalInfo.bio.map((para, i) => (
              <p
                key={i}
                className="text-slate-600 dark:text-slate-300 leading-relaxed text-base"
              >
                {para}
              </p>
            ))}

            {/* Interests */}
            <div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-3">
                Interests & Passions
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-sm rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── COL 3: Stats + Currently ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="relative p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-snug">
                  {stat.label}
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}

            {/* Currently card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20"
            >
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <span className="text-violet-600 dark:text-violet-400 font-semibold">Currently:</span>{' '}
                System Analyst at Hexaware Technologies, building AI-powered voice
                agents with Amazon Connect and AWS Bedrock for intelligent banking
                customer interactions.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
