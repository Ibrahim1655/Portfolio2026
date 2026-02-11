"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PROJECTS_DATA, Project } from '@/constants/data';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function ProjectRow({ project }: { project: Project }) {
  const year = project.date.split(' ')[1] || project.date;
  return (
    <motion.div variants={item} whileHover={{ x: 8 }} className="group">
      <Link
        href={`/projects/${project.id}`}
        className="w-full text-left py-10 md:py-12 border-b border-gray-200 dark:border-amber-500/20 hover:border-gray-400 dark:hover:border-amber-500/40 hover:bg-gray-100 dark:hover:bg-zinc-900/50 transition-colors duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
      >
        <span className="text-sm font-mono text-gray-600 dark:text-amber-400/80 min-w-[60px]">{year}</span>
        <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-bold text-gray-600 dark:text-zinc-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-zinc-300 text-sm md:text-base line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techs.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-amber-400/90 border border-gray-200 dark:border-amber-500/20"
            >
              {tech}
            </span>
          ))}
          {project.techs.length > 4 && (
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-500">
              +{project.techs.length - 4}
            </span>
          )}
        </div>
        <span className="text-gray-500 dark:text-zinc-400 group-hover:text-gray-900 dark:group-hover:text-amber-400 group-hover:translate-x-2 transition-all duration-300 hidden md:inline-flex">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <p className="text-sm font-medium text-gray-600 dark:text-amber-400/80 uppercase tracking-widest mb-2">
            Projets
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Mes projets
          </h1>
          <p className="text-gray-600 dark:text-zinc-400 text-lg max-w-2xl">
            Ce que j&apos;ai construit jusqu&apos;ici : des sites web, des applications et des interfaces. Des projets concrets réalisés en HTML, CSS, Bootstrap, Tailwind, Angular, PHP et JavaScript.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="divide-y divide-gray-200 dark:divide-amber-500/20"
        >
          {PROJECTS_DATA.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </motion.div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-zinc-400 mb-4">
            Une idée de projet ?
          </h2>
          <p className="text-gray-600 dark:text-zinc-500 mb-8">
            N'hésitez pas à me contacter pour en parler.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
