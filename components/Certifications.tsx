'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TbBrandAws } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa';
import { certifications } from '@/lib/data';

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-500 dark:text-violet-400 font-medium text-sm uppercase tracking-widest mb-3">
            Verified credentials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            AWS{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </motion.div>

        {/* Certs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 overflow-hidden"
            >
              {/* Colored top stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: cert.gradient }}
              />

              {/* AWS logo badge */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{ background: cert.gradient }}
              >
                <FaAws size={30} className="text-white" />
              </div>

              {/* AWS issuer */}
              <div className="flex items-center gap-1.5 text-xs text-orange-500 dark:text-orange-400 font-medium mb-3">
                <TbBrandAws size={14} />
                {cert.issuer}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-3">
                {cert.title}
              </h3>

              {/* Code badge */}
              <span
                className="text-xs px-3 py-1 rounded-full font-medium text-white"
                style={{ background: cert.badgeColor }}
              >
                {cert.code}
              </span>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                style={{ background: cert.gradient }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
