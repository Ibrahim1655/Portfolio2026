"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { href: '/#about', label: 'À propos' },
  { href: '/projects', label: 'Projets' },
  { href: '/#skills', label: 'Compétences' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" prefetch className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-amber-400 transition-colors">
          Ibrahim Drame
        </Link>
        <nav className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre"}
            className="p-2 rounded-lg text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-400 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            )}
          </button>
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                className="text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
