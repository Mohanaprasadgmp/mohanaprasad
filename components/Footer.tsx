'use client';

import { SiMedium } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail, HiHeart } from 'react-icons/hi';
import { personalInfo } from '@/lib/data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: SiMedium, href: personalInfo.medium, label: 'Medium' },
  { icon: HiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
            >
              MG.
            </a>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Amazon Connect & Gen AI Developer crafting intelligent, cloud-native contact center solutions. Open to exciting opportunities.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-widest mb-4">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            &copy; {year} {personalInfo.name}. Made with{' '}
            <HiHeart className="text-red-400" size={14} /> using Next.js & Tailwind CSS.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600">
            Designed & built by Mohanaprasad G
          </p>
        </div>
      </div>
    </footer>
  );
}
