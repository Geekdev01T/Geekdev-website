import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Hero3D } from './Hero3D';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* 3D Background */}
      <Hero3D />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-slate-950/70 z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full text-center lg:text-left flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/50 border border-slate-700 text-sky-400 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider">Agence Technologique Future-Ready</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Propulsez votre <br />
            <span className="text-sky-400">
              Vision Technologique.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl lg:mx-0 mx-auto mb-10"
          >
            Geekdev transforme vos idées en solutions performantes : développement sur mesure, automatisation intelligente et formations d'excellence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link to="/services" className="w-full sm:w-auto px-6 py-3 rounded-md bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              Explorer nos services <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-6 py-3 rounded-md bg-slate-900 text-white font-medium border border-slate-700 hover:bg-slate-800 transition-colors flex items-center justify-center">
              Parler à un expert
            </Link>
          </motion.div>
        </div>
        
        {/* Placeholder for balance on right side since 3D is full screen */}
        <div className="w-full lg:w-2/5 hidden lg:block"></div>
      </div>
    </section>
  );
}
