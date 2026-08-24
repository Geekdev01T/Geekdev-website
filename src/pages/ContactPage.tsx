import { Contact } from '../components/Contact';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export function ContactPage() {
  return (
    <main className="pt-20">
      <div className="py-20 md:py-28 bg-slate-950 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400 mb-6"
          >
            <MessageSquare size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">Contact</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Discutons de votre <span className="text-sky-400">Projet</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto"
          >
            Notre équipe est prête à transformer vos idées en réalité. Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.
          </motion.p>
        </div>
      </div>
      <Contact />
    </main>
  );
}
