import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, Code2, Database, LayoutTemplate, Smartphone, Server, Monitor, Globe } from 'lucide-react';

function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Augmentation drastique des valeurs de transformation pour un effet très visible
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-[50vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
      <motion.div 
        style={{ y }}
        className="absolute -top-[20%] -bottom-[20%] left-0 right-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      </motion.div>
      
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Notre <span className="text-sky-400">Expertise</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-300 font-light"
        >
          Des solutions d'ingénierie logicielle avancées pour propulser votre entreprise dans l'ère numérique.
        </motion.p>
      </motion.div>
    </div>
  );
}

function DetailedServices() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Service 1 */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400 mb-6">
              <Globe size={16} /> <span className="text-xs font-semibold uppercase">Web App</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 lg:mb-6">Applications Web <span className="text-sky-400">Performantes</span></h2>
            <p className="text-slate-400 text-lg mb-6">
              Nous concevons des plateformes web complexes, des back-offices métiers et des SaaS évolutifs. Nos développements s'appuient sur les frameworks modernes pour garantir une fluidité totale.
            </p>
            <ul className="space-y-3">
              {['Architecture React & Next.js', 'Back-end Node.js & Python', 'Optimisation SEO & Vitesse'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-sky-400" size={20} /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2 aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-900"
          >
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="Développement Web" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>

        {/* Service 2 */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-900"
          >
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" alt="Développement Mobile" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400 mb-6">
              <Smartphone size={16} /> <span className="text-xs font-semibold uppercase">Mobile</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 lg:mb-6">Solutions Mobiles <span className="text-sky-400">Natives</span></h2>
            <p className="text-slate-400 text-lg mb-6">
              Vos services accessibles dans la poche de vos utilisateurs. Nous développons des applications iOS et Android réactives, avec des expériences utilisateurs irréprochables.
            </p>
            <ul className="space-y-3">
              {['React Native & Flutter', 'Expérience UI/UX Mobile', 'Mode Hors-ligne & Sync'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-sky-400" size={20} /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Service 3 */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400 mb-6">
              <Server size={16} /> <span className="text-xs font-semibold uppercase">Cloud & API</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 lg:mb-6">Infrastructures <span className="text-sky-400">Cloud</span></h2>
            <p className="text-slate-400 text-lg mb-6">
              Fiabilisez vos opérations avec des architectures backend robustes et scalables. Nous concevons les bases de données et les API qui soutiendront votre croissance.
            </p>
            <ul className="space-y-3">
              {['Migration AWS / GCP', 'Architecture Micro-services', 'APIs RESTful & GraphQL'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-sky-400" size={20} /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2 aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-900"
          >
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" alt="Cloud et Serveurs" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function ParallaxProcess() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax agressif
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  const steps = [
    "Analyse & Stratégie",
    "Conception UI/UX",
    "Développement Agile",
    "Tests & QA",
    "Déploiement Cloud",
    "Maintenance & Support"
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-40 overflow-hidden border-t border-slate-800 bg-slate-950">
      <motion.div 
        style={{ y }}
        className="absolute -top-[30%] -bottom-[30%] left-0 right-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-slate-950/80" />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 tracking-tight">
              Notre <span className="text-sky-400">Méthodologie</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 font-light">
              Nous appliquons des méthodes agiles éprouvées pour garantir la livraison de projets de haute qualité, dans les temps et le budget impartis, tout en restant flexibles face aux changements.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 backdrop-blur-md text-center">
                <Code2 className="text-sky-400 mx-auto mb-3" size={28} />
                <span className="text-sm font-semibold text-white tracking-wide">Clean Code</span>
              </div>
              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 backdrop-blur-md text-center">
                <LayoutTemplate className="text-sky-400 mx-auto mb-3" size={28} />
                <span className="text-sm font-semibold text-white tracking-wide">Design System</span>
              </div>
              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 backdrop-blur-md text-center">
                <Database className="text-sky-400 mx-auto mb-3" size={28} />
                <span className="text-sm font-semibold text-white tracking-wide">Architectures</span>
              </div>
              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 backdrop-blur-md text-center">
                <Smartphone className="text-sky-400 mx-auto mb-3" size={28} />
                <span className="text-sm font-semibold text-white tracking-wide">Mobile-First</span>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-slate-900/90 backdrop-blur-xl p-5 rounded-xl border border-slate-600 shadow-2xl"
              >
                <CheckCircle2 className="text-sky-400" size={20} />
                <span className="text-white font-medium">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { TechStack } from '../components/TechStack';
import { FAQ } from '../components/FAQ';

export function ServicesPage() {
  return (
    <main className="pt-20">
      <ParallaxHero />
      <DetailedServices />
      <TechStack />
      <ParallaxProcess />
      <FAQ />
    </main>
  );
}
