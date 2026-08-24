import { motion } from 'motion/react';
import { Code, GraduationCap, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Code size={40} className="text-sky-400" />,
    title: "Développement sur Mesure",
    description: "Applications web, mobiles et logiciels spécifiques conçus pour s'adapter parfaitement à vos processus métier uniques. De l'idée à la mise en production.",
    color: "from-sky-500/10 to-transparent",
    delay: 0
  },
  {
    icon: <GraduationCap size={40} className="text-blue-400" />,
    title: "Formations IT",
    description: "Montée en compétence de vos équipes sur les technologies modernes : React, Node.js, Cloud, et les meilleures pratiques DevOps.",
    color: "from-blue-500/10 to-transparent",
    delay: 0.2
  },
  {
    icon: <Cpu size={40} className="text-indigo-400" />,
    title: "Automatisation des Processus",
    description: "Gain de temps et réduction des erreurs grâce à l'automatisation de vos tâches répétitives et à l'intégration de vos différents outils (API, Zapier, scripts sur mesure).",
    color: "from-indigo-500/10 to-transparent",
    delay: 0.4
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Nos <span className="text-sky-400">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Une gamme complète de solutions technologiques pour accompagner votre entreprise à chaque étape de son évolution numérique.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <Link to="/contact" className="inline-flex items-center gap-2 text-sky-400 font-medium hover:text-sky-300 transition-colors">
                  En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
