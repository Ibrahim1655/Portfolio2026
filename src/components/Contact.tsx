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
    <section ref={ref} id="contact" className="py-24 md:py-32 min-h-[500px] bg-black text-white relative border-t border-amber-500/20">
      {/* CTA Block - style Arnaud */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 mb-20 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 mb-4">
          Une idée de projet ?
        </h2>
        <p className="text-zinc-500 mb-8">
          N'hésitez pas à me contacter pour en parler.
        </p>
        <motion.a
          href="#contact-form"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-[border-color,box-shadow]"
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
              <p className="text-zinc-500 text-lg leading-relaxed">{CONTACT_DATA.description}</p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-amber-500/20 space-y-6">
              <h4 className="text-xl font-bold text-white">Coordonnées</h4>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:bg-zinc-700 transition-[border-color,box-shadow]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a href={`mailto:${HERO_DATA.socials.email}`} className="text-zinc-400 hover:text-amber-400 transition-[border-color,box-shadow]">
                  {HERO_DATA.socials.email}
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:bg-zinc-700 transition-[border-color,box-shadow]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <a href={HERO_DATA.socials.cv} download className="text-zinc-400 hover:text-amber-400 transition-[border-color,box-shadow]">
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 p-8 rounded-2xl border border-amber-500/20 space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">{CONTACT_DATA.form.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-amber-500/20 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-[border-color,box-shadow]"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">{CONTACT_DATA.form.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-amber-500/20 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-[border-color,box-shadow]"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">{CONTACT_DATA.form.subjectLabel}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-amber-500/20 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-[border-color,box-shadow]"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">{CONTACT_DATA.form.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-amber-500/20 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-[border-color,box-shadow] resize-none"
                  placeholder="Votre message..."
                />
              </div>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-[border-color,box-shadow]"
            >
              {CONTACT_DATA.form.buttonText}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
