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
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-32 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/20 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/20 rounded-full blur-2xl"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        <motion.div variants={item} className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-amber-400 border border-amber-500/40 rounded-full bg-black mb-4">
          {HERO_DATA.subRole}
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
          <span className="block text-white">{HERO_DATA.name.split(' ')[0]}</span>
          <span className="block text-amber-400">{HERO_DATA.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {HERO_DATA.description}
        </motion.p>

        <motion.div variants={item} className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              prefetch
              className="px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-colors duration-300 inline-block"
            >
              Voir mes projets
            </Link>
          </motion.div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-transparent text-white font-semibold rounded-full border border-amber-500/50 hover:bg-amber-500/10 transition-colors duration-300"
          >
            Me contacter
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="pt-12 flex flex-col md:flex-row justify-center gap-6 text-sm text-zinc-400">
          <div className="flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-lg border border-amber-500/20">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>{HERO_DATA.availability.internship.label} ({HERO_DATA.availability.internship.duration})</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-lg border border-amber-500/20">
            <span className="w-2 h-2 bg-amber-400 rounded-full" />
            <span>{HERO_DATA.availability.alternance.label} ({HERO_DATA.availability.alternance.start})</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
