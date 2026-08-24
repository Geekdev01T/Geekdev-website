import { motion } from 'motion/react';
import { Target, Lightbulb, Zap, User, UserCheck, UserCog, UserCircle } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Target className="text-sky-400" size={32} />,
      title: "Précision",
      description: "Des solutions conçues sur mesure pour répondre exactement à vos enjeux métiers."
    },
    {
      icon: <Lightbulb className="text-blue-400" size={32} />,
      title: "Innovation",
      description: "Utilisation des dernières technologies pour garder une longueur d'avance."
    },
    {
      icon: <Zap className="text-indigo-400" size={32} />,
      title: "Performance",
      description: "Des architectures robustes garantissant rapidité et scalabilité."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              L'expertise technique au service de votre <span className="text-sky-400">croissance.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Chez Geekdev, nous ne sommes pas que de simples développeurs. Nous sommes vos partenaires stratégiques dans la transformation numérique. Notre équipe d'experts combine savoir-faire technique et compréhension de vos enjeux business pour créer des outils qui font la différence.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[User, UserCheck, UserCog, UserCircle].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-950 bg-slate-900 flex items-center justify-center text-sky-400 text-sm font-medium z-10 overflow-hidden relative">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
              <div className="text-sm ml-2">
                <p className="text-white font-medium">Une équipe d'experts</p>
                <p className="text-slate-500">Prêts à relever vos défis</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            {values.map((value, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/30 transition-colors flex gap-6 items-start">
                <div className="p-4 rounded-xl bg-slate-800/50">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400">{value.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
