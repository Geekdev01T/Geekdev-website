import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    "Approche centrée sur le ROI et la valeur métier",
    "Transparence totale tout au long du projet",
    "Architecture évolutive et code de haute qualité",
    "Support et maintenance réactifs",
    "Transfert de compétences assuré",
    "Respect strict des délais et des budgets"
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-900 relative border-y border-slate-800 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] md:aspect-video lg:aspect-square rounded-3xl overflow-hidden relative border border-slate-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team working together" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-sky-950/20 mix-blend-multiply" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sky-500/10 rounded-full blur-xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Pourquoi choisir <span className="text-sky-400">Geekdev</span> ?
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Nous combinons la rigueur de l'ingénierie logicielle avec une compréhension profonde de vos objectifs business pour livrer des résultats qui comptent vraiment.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-sky-400 shrink-0 mt-1" size={20} />
                  <span className="text-slate-300 font-medium">{reason}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 py-6 border-t border-slate-800">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Projets livrés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
