"use client";

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CONTACT_DATA, HERO_DATA } from '@/constants/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px', amount: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${HERO_DATA.socials.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 min-h-[500px] bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative border-t border-gray-200 dark:border-amber-500/20">
      {/* CTA Block - style Arnaud */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 mb-20 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-zinc-400 mb-4">
          Une idée de projet ?
        </h2>
        <p className="text-gray-600 dark:text-zinc-500 mb-8">
          N'hésitez pas à me contacter pour en parler.
        </p>
        <motion.a
          href="#contact-form"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-[border-color,box-shadow]"
        >
          Me contacter
        </motion.a>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" id="contact-form">
                {CONTACT_DATA.title}
              </h3>
              <p className="text-gray-600 dark:text-zinc-500 text-lg leading-relaxed">{CONTACT_DATA.description}</p>
            </div>
            <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-gray-200 dark:border-amber-500/20 space-y-6 shadow-sm dark:shadow-none">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Coordonnées</h4>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-gray-600 dark:text-amber-400 group-hover:text-gray-900 dark:group-hover:text-amber-300 group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a href={`mailto:${HERO_DATA.socials.email}`} className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-400 transition-colors">
                  {HERO_DATA.socials.email}
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-gray-600 dark:text-amber-400 group-hover:text-gray-900 dark:group-hover:text-amber-300 group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <a href={HERO_DATA.socials.cv} download className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-400 transition-colors">
                  Télécharger mon CV
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-gray-600 dark:text-amber-400 group-hover:text-gray-900 dark:group-hover:text-amber-300 group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <a href={HERO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-400 transition-colors">
                  GitHub
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-gray-600 dark:text-amber-400 group-hover:text-gray-900 dark:group-hover:text-amber-300 group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <a href={HERO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-400 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-gray-200 dark:border-amber-500/20 space-y-6 shadow-sm dark:shadow-none"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-zinc-400 mb-2">{CONTACT_DATA.form.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-amber-500/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-amber-500/50 focus:border-gray-400 dark:focus:border-amber-500/50 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-zinc-400 mb-2">{CONTACT_DATA.form.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-amber-500/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-amber-500/50 focus:border-gray-400 dark:focus:border-amber-500/50 transition-colors"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600 dark:text-zinc-400 mb-2">{CONTACT_DATA.form.subjectLabel}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-amber-500/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-amber-500/50 focus:border-gray-400 dark:focus:border-amber-500/50 transition-colors"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-zinc-400 mb-2">{CONTACT_DATA.form.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-amber-500/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-amber-500/50 focus:border-gray-400 dark:focus:border-amber-500/50 transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-[border-color,box-shadow]"
            >
              {CONTACT_DATA.form.buttonText}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
