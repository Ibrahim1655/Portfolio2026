"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HERO_DATA } from '@/constants/data';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-32 bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gray-300/50 dark:bg-amber-500/20 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gray-300/50 dark:bg-amber-500/20 rounded-full blur-2xl"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        <motion.div variants={item} className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-gray-600 dark:text-amber-400 border border-gray-300 dark:border-amber-500/40 rounded-full bg-white dark:bg-black mb-4 shadow-sm dark:shadow-none">
          {HERO_DATA.subRole}
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
          <span className="block text-gray-900 dark:text-white">{HERO_DATA.name.split(' ')[0]}</span>
          <span className="block text-gray-800 dark:text-amber-400">{HERO_DATA.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-2xl text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {HERO_DATA.description}
        </motion.p>

        <motion.div variants={item} className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              prefetch
              className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300 inline-block"
            >
              Voir mes projets
            </Link>
          </motion.div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-transparent text-gray-900 dark:text-white font-semibold rounded-full border border-gray-400 dark:border-amber-500/50 hover:bg-gray-100 dark:hover:bg-amber-500/10 transition-colors duration-300"
          >
            Me contacter
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="pt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-600 dark:text-zinc-400">
          <div className="flex items-center gap-2 bg-white dark:bg-zinc-900/50 px-4 py-2 rounded-lg border border-gray-200 dark:border-amber-500/20 shadow-sm dark:shadow-none">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>{HERO_DATA.availability.internship.label} ({HERO_DATA.availability.internship.duration})</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-zinc-900/50 px-4 py-2 rounded-lg border border-gray-200 dark:border-amber-500/20 shadow-sm dark:shadow-none">
            <span className="w-2 h-2 bg-gray-500 dark:bg-amber-400 rounded-full" />
            <span>{HERO_DATA.availability.alternance.label} ({HERO_DATA.availability.alternance.start})</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={HERO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-400 transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href={HERO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-400 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
