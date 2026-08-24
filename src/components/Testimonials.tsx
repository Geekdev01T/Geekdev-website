import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Amadou Diallo",
      role: "Fondateur, Geendia",
      content: "L'équipe de Geekdev a su matérialiser notre vision avec une précision incroyable. Leur accompagnement sur le projet Geendia a été un véritable catalyseur pour notre croissance.",
      rating: 5,
      initials: "AD",
      color: "bg-emerald-600"
    },
    {
      name: "Fatoumata Kéita",
      role: "Directrice, GeeSchool",
      content: "La plateforme éducative développée pour GeeSchool est intuitive, rapide et robuste. Un partenariat exceptionnel qui a transformé notre façon d'enseigner au quotidien.",
      rating: 5,
      initials: "FK",
      color: "bg-indigo-600"
    },
    {
      name: "Kwame Mensah",
      role: "Gérant, ChickenMarket",
      content: "L'automatisation de nos processus de commande a littéralement changé la donne. L'équipe est ultra-réactive et comprend parfaitement les réalités de notre marché.",
      rating: 5,
      initials: "KM",
      color: "bg-amber-600"
    },
    {
      name: "Awa Ndiaye",
      role: "CEO, Omnitech Multimedia Center",
      content: "Une expertise technique indéniable. Ils ont su concevoir une infrastructure solide pour nos services multimédias en un temps record.",
      rating: 5,
      initials: "AN",
      color: "bg-rose-600"
    },
    {
      name: "Cheikh Fall",
      role: "Tech Lead, Geekdev",
      content: "Faire partie de l'équipe Geekdev, c'est concevoir des solutions innovantes au quotidien. La qualité du code et l'esprit d'équipe sont nos priorités absolues.",
      rating: 5,
      initials: "CF",
      color: "bg-sky-600"
    },
    {
      name: "Kadiatou Sy",
      role: "Chef de Projet, Geekdev",
      content: "Notre force réside dans notre méthodologie agile et notre volonté inébranlable de livrer des produits qui ont un réel impact pour nos clients et partenaires.",
      rating: 5,
      initials: "KS",
      color: "bg-purple-600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-900/5 blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Ils nous font <span className="text-sky-400">confiance</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Découvrez les retours d'expérience de nos clients et collaborateurs.
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden pb-8">
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              {visibleTestimonials.map((testi, idx) => {
                const displayClass = idx === 1 ? 'hidden md:flex' : idx === 2 ? 'hidden lg:flex' : 'flex';
                
                return (
                  <motion.div
                    layout
                    custom={direction}
                    initial={(dir: number) => ({ opacity: 0, x: dir > 0 ? 100 : -100, scale: 0.9 })}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={(dir: number) => ({ opacity: 0, x: dir > 0 ? -100 : 100, scale: 0.9 })}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    key={testi.name}
                    className={`${displayClass} shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-colors relative flex-col`}
                  >
                    <Quote className="absolute top-6 right-6 text-slate-800/50" size={40} />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(testi.rating)].map((_, starIdx) => (
                        <Star key={starIdx} size={16} className="text-sky-400 fill-sky-400" />
                      ))}
                    </div>
                    
                    <p className="text-slate-300 text-lg mb-8 relative z-10 font-light leading-relaxed flex-grow">
                      "{testi.content}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${testi.color} shadow-lg shrink-0`}>
                        {testi.initials}
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{testi.name}</h4>
                        <p className="text-sky-400 text-sm font-medium">{testi.role}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-4 mt-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all z-10 relative"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all z-10 relative"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}