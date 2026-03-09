'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';
import clsx from 'clsx';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-slate-950/80 dark:bg-slate-950/80 bg-white/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 border-slate-200/60'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          MG
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-slate-300 dark:text-slate-300 text-slate-600 hover:text-violet-400 dark:hover:text-violet-400 hover:text-violet-600 transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-300 dark:text-slate-300 text-slate-600 hover:text-violet-400 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-100 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
          )}

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white transition-all duration-200 shadow-lg shadow-violet-500/20"
          >
            Hire Me
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 dark:text-slate-300 text-slate-600 hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 dark:bg-slate-950/95 bg-white/95 backdrop-blur-md border-t border-white/10 dark:border-white/10 border-slate-200/60">
          <ul className="flex flex-col py-4 px-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-slate-300 dark:text-slate-300 text-slate-600 hover:text-violet-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 text-white"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
