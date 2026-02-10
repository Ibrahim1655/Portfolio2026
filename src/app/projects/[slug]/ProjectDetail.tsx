"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/constants/data';

function isVideo(path: string) {
  return /\.(mp4|webm|mov)$/i.test(path);
}

export default function ProjectDetail({ project }: { project: Project }) {
  const screens = [project.image, ...(project.screens || [])];
  const year = project.date.split(' ')[1] || project.date;

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Retour aux projets */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux projets
          </Link>
        </motion.div>

        {/* Métadonnées + Titre */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-6 text-sm text-zinc-400 mb-4">
            <span>{project.techs.join(' • ')}</span>
            <span>{year}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{project.title}</h1>
          <p className="text-xl text-zinc-400">{project.description}</p>
        </motion.div>

        {/* Zone des screens */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <div
            className={`grid gap-8 md:gap-10 ${
              screens.length >= 3 ? 'md:grid-cols-2' : ''
            }`}
          >
            {screens.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                className={`group ${index === 0 && screens.length >= 3 ? 'md:col-span-2' : ''}`}
              >
                <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 border border-amber-500/20">
                  {isVideo(src) ? (
                    <video
                      src={src}
                      className="w-full h-auto"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src={src}
                        alt={`${project.title} - Capture ${index + 1}`}
                        fill
                        className="object-contain bg-zinc-900 group-hover:scale-[1.01] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 432px"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* À propos du projet */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-[120px_1fr] gap-8">
            <div>
              <p className="text-sm font-medium text-amber-400/80 uppercase tracking-wider">Année</p>
              <p className="text-xl font-semibold text-white mt-1">{year}</p>
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">À propos du projet</h2>
                <p className="text-zinc-400 leading-relaxed">{project.context}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Le défi</h2>
                <p className="text-zinc-400 leading-relaxed">{project.difficulties}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Lien vers le projet */}
        {project.link && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-colors"
            >
              Voir le projet en ligne
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>
        )}
      </div>
    </main>
  );
}
