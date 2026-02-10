import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import About from '@/components/About';

const Projects = dynamic(() => import('@/components/Projects'), { ssr: true });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-500/30 selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-800 bg-black">
        <p>© {new Date().getFullYear()} Ibrahim Drame. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
