import { motion } from 'motion/react';
import { Users, Target, Shield, Rocket, Building2, Trophy, Clock } from 'lucide-react';

import { Team } from '../components/Team';

export function AboutPage() {
  return (
    <main className="pt-20">
      {/* Section 1: En-tête */}
      <div className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400 mb-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider">L'agence</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            L'innovation dans notre <span className="text-sky-400">ADN</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Une équipe de passionnés dédiée à transformer vos défis métiers en solutions technologiques d'avant-garde.
          </motion.p>
        </div>
      </div>

      {/* Section 2: Notre Histoire */}
      <section className="py-16 md:py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Notre <span className="text-sky-400">Histoire</span>
              </h2>
              <div className="space-y-4 text-slate-400 text-lg">
                <p>
                  Fondée avec la conviction que la technologie doit être un levier de croissance accessible, Geekdev a commencé comme un collectif de développeurs séniors passionnés par le "clean code".
                </p>
                <p>
                  Aujourd'hui, nous sommes une agence digitale complète, accompagnant des entreprises de toutes tailles dans leur transition numérique. De l'audit initial au déploiement d'architectures cloud complexes, nous gardons la même approche artisanale et qualitative de nos débuts.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-3 mb-2 text-white">
                    <Trophy className="text-sky-400" size={24} />
                    <span className="font-bold text-xl">Top 100</span>
                  </div>
                  <span className="text-sm text-slate-500">Agences Tech France</span>
                </div>
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-3 mb-2 text-white">
                    <Building2 className="text-sky-400" size={24} />
                    <span className="font-bold text-xl">Paris & Lyon</span>
                  </div>
                  <span className="text-sm text-slate-500">Bureaux en France</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                alt="Équipe Geekdev travaillant"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-sky-950/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      <Team />

      {/* Section 3: Vision & Valeurs */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Notre culture de <span className="text-sky-400">l'Excellence</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              Quatre piliers fondamentaux qui guident chacune de nos décisions et chaque ligne de code que nous écrivons.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target size={28} className="text-sky-400" />, title: "Objectif Client", text: "Votre succès business est l'unique métrique qui compte vraiment pour nous." },
              { icon: <Users size={28} className="text-sky-400" />, title: "Collaboration Agile", text: "Nous travaillons avec vous, de manière transparente, pas seulement pour vous." },
              { icon: <Shield size={28} className="text-sky-400" />, title: "Code Robuste", text: "Une sécurité et une architecture conçues pour tenir sur le très long terme." },
              { icon: <Rocket size={28} className="text-sky-400" />, title: "Veille Active", text: "Nous explorons les nouvelles technologies pour vous donner l'avantage." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center hover:border-sky-500/30 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center mx-auto mb-6 border border-slate-800 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Métriques */}
      <section className="py-16 md:py-20 bg-sky-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-y-0 md:divide-x md:divide-sky-800">
            <div className="text-center md:px-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">120+</div>
              <div className="text-sky-200 text-sm sm:text-base font-medium">Projets livrés</div>
            </div>
            <div className="text-center md:px-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">15</div>
              <div className="text-sky-200 text-sm sm:text-base font-medium">Experts IT</div>
            </div>
            <div className="text-center md:px-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">6</div>
              <div className="text-sky-200 text-sm sm:text-base font-medium">Années d'expérience</div>
            </div>
            <div className="text-center md:px-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">99%</div>
              <div className="text-sky-200 text-sm sm:text-base font-medium">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
