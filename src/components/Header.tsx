"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { href: '/#about', label: 'À propos' },
  { href: '/projects', label: 'Projets' },
  { href: '/#skills', label: 'Compétences' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-black/90 backdrop-blur-md border-b border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" prefetch className="text-lg font-semibold tracking-tight text-white hover:text-amber-400 transition-colors">
          Ibrahim Drame
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                className="text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-200 font-medium"
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
