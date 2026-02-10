"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PROJECTS_DATA, Project } from '@/constants/data';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px', amount: 0.2 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link
        href={`/projects/${project.id}`}
        className="block relative bg-zinc-900/50 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-colors transition-shadow duration-300 hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer flex flex-col h-full"
      >
        <div className="relative h-64 min-h-[256px] w-full overflow-hidden bg-zinc-900">
          {project.image.endsWith('.mp4') ? (
            <video
              src={project.image}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={index === 0}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-amber-400 border border-amber-500/30">
            {project.date}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techs.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded bg-zinc-800 text-amber-400/90 border border-amber-500/20"
              >
                {tech}
              </span>
            ))}
            {project.techs.length > 3 && (
              <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-500 border border-amber-500/20">
                +{project.techs.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px', amount: 0.2 });

  return (
    <section ref={sectionRef} id="projects" className="py-24 md:py-32 min-h-[500px] bg-zinc-950 text-white relative border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm font-medium text-amber-400/80 uppercase tracking-widest mb-2">
            Projets
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ce que j&apos;ai réalisé
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed mb-8">
            Des interfaces et des applications que j&apos;ai développées. Chaque projet m&apos;a permis de progresser sur de nouvelles technologies.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              prefetch
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors font-medium"
            >
              Tous les projets
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
