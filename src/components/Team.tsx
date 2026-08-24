import { motion } from 'motion/react';
import { Linkedin, Twitter, Github } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: "Thomas Bernard",
      role: "Fondateur & Lead Dev",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Sarah Meyer",
      role: "Directrice UI/UX",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Karim Haddad",
      role: "Architecte Cloud",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Léa Dubois",
      role: "Développeuse Mobile",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            L'Équipe <span className="text-sky-400">Dirigeante</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Des experts passionnés, unissant leurs forces pour repousser les limites de vos projets.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-sky-500 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-sky-500 transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sky-400 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}