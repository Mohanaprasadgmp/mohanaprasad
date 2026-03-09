'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiAngular, SiNodedotjs, SiPostgresql, SiMysql, SiGit, SiPostman,
} from 'react-icons/si';
import {
  TbBrandAws, TbLambda, TbCloudDataConnection, TbPlugConnected,
  TbDatabase, TbServer, TbServerSpark, TbApiApp, TbActivity,
  TbCloud, TbCloudComputing,
} from 'react-icons/tb';
import { skills } from '@/lib/data';
import clsx from 'clsx';

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  TbBrandAws,
  TbLambda,
  TbCloudDataConnection,
  TbPlugConnected,
  TbDatabase,
  TbServer,
  TbServerSpark,
  TbApiApp,
  TbActivity,
  TbCloud,
  TbCloudComputing,
  SiAngular,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiPostman,
};

type SkillCategory = keyof typeof skills;
const categories = Object.keys(skills) as SkillCategory[];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<SkillCategory>('Amazon Connect');

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-500 dark:text-violet-400 font-medium text-sm uppercase tracking-widest mb-3">
            What I work with
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Technical{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={clsx(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                activeTab === cat
                  ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 border border-slate-200 dark:border-white/10 hover:border-violet-500/30'
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {skills[activeTab].map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/10 group-hover:scale-110 transition-transform duration-200">
                  {Icon && <Icon size={22} color={skill.color} />}
                </div>
                <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
