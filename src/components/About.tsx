"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ABOUT_DATA } from '@/constants/data';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px', amount: 0.2 });

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 md:py-32 min-h-[300px] bg-zinc-950 text-white relative border-t border-amber-500/20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 leading-relaxed">
            {ABOUT_DATA.tagline}
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            {ABOUT_DATA.paragraph}
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              prefetch
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors font-medium"
            >
              {ABOUT_DATA.cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
