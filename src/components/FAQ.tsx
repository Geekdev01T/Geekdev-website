import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "Combien de temps faut-il pour développer une application ?",
      answer: "Le délai dépend de la complexité du projet. Une landing page peut prendre 2 semaines, tandis qu'une application métier complexe peut nécessiter 3 à 6 mois. Nous vous fournissons un planning détaillé après l'analyse de vos besoins."
    },
    {
      question: "Quel est votre modèle de tarification ?",
      answer: "Nous fonctionnons principalement au forfait pour les projets bien définis, et en régie (facturation au temps passé) pour les projets agiles nécessitant beaucoup de flexibilité. Contactez-nous pour un devis personnalisé."
    },
    {
      question: "Assurez-vous la maintenance après le lancement ?",
      answer: "Absolument. Nous proposons des contrats de TMA (Tierce Maintenance Applicative) pour garantir que votre application reste sécurisée, performante, et évolue selon vos besoins."
    },
    {
      question: "Puis-je être propriétaire du code source ?",
      answer: "Oui. À la livraison finale et après paiement intégral, les droits de propriété intellectuelle du code source vous sont totalement cédés. Vous êtes propriétaire de votre plateforme."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Foire Aux <span className="text-sky-400">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400"
          >
            Les réponses aux questions les plus fréquentes de nos clients.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-800 rounded-2xl bg-slate-900/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                <ChevronDown className={`text-sky-400 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} size={20} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}