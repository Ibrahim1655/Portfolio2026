"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SKILLS_DATA } from '@/constants/data';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px', amount: 0.2 });

  return (
    <section ref={ref} id="skills" className="py-24 md:py-32 min-h-[400px] bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative border-t border-gray-200 dark:border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Compétences techniques</h2>
          <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Les outils et technologies que j&apos;utilise pour donner vie à mes projets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-900/50 rounded-2xl border border-gray-200 dark:border-amber-500/20 hover:border-gray-400 dark:hover:border-amber-500/50 hover:shadow-lg hover:shadow-gray-900/5 dark:hover:shadow-amber-500/5 transition-colors transition-shadow duration-300"
            >
              <div className="relative w-14 h-14 mb-4 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                  sizes="56px"
                  unoptimized
                />
              </div>
              <span className="font-medium text-gray-600 dark:text-zinc-400 group-hover:text-gray-900 dark:group-hover:text-amber-400 transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
