import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'un envoi d'email en arrière-plan (API/Serveur)
    // En production, vous connecterez ceci à EmailJS, Resend, ou votre propre backend.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Réinitialiser le formulaire après quelques secondes
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Informations de contact (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Informations</h2>
              <p className="text-slate-400">
                Privilégiez l'email pour les demandes de devis. Pour toute urgence technique, notre ligne téléphonique est ouverte en continu.
              </p>
            </div>

            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start gap-4 hover:border-sky-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-slate-950 flex shrink-0 items-center justify-center border border-slate-800 text-sky-400">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden w-full">
                  <div className="text-sm font-medium text-slate-400 mb-1">Support & Devis</div>
                  <a href="mailto:tresormetikwe@gmail.com" className="text-base sm:text-lg font-semibold text-white hover:text-sky-400 transition-colors break-all">tresormetikwe@gmail.com</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start gap-4 hover:border-sky-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-slate-950 flex shrink-0 items-center justify-center border border-slate-800 text-sky-400">
                  <Phone size={20} />
                </div>
                <div className="overflow-hidden w-full">
                  <div className="text-sm font-medium text-slate-400 mb-1">Ligne Directe</div>
                  <div className="flex flex-col text-base sm:text-lg font-semibold text-white">
                    <a href="tel:+237682779324" className="hover:text-sky-400 transition-colors">+237 682779324</a>
                    <a href="tel:+237687536106" className="hover:text-sky-400 transition-colors">+237 687536106</a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start gap-4 hover:border-sky-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-slate-950 flex shrink-0 items-center justify-center border border-slate-800 text-sky-400">
                  <MapPin size={20} />
                </div>
                <div className="overflow-hidden w-full">
                  <div className="text-sm font-medium text-slate-400 mb-1">Siège Social</div>
                  <span className="text-base sm:text-lg font-semibold text-white break-words">Bonaberi - Douala</span>
                </div>
              </div>
            </div>

            <div className="bg-sky-500/5 border border-sky-500/20 p-5 rounded-2xl flex items-start gap-4">
              <Clock className="text-sky-400 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-white font-medium mb-1">Heures d'ouverture</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Lundi - Vendredi : 8h30 - 17h30<br/>
                  Support technique : 24/7 pour les clients sous contrat.
                </p>
              </div>
            </div>

            <a 
              href="https://wa.me/237682779324?text=Bonjour%20l'%C3%A9quipe%20Geekdev%20!%20J'aimerais%20discuter%20d'un%20projet%20avec%20vous." 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold text-lg hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all flex items-center justify-center gap-3 group"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              Contact WhatsApp
            </a>
          </motion.div>

          {/* Formulaire (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-[80px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Dites-nous tout</h3>
              
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-2xl text-center"
                    >
                      <CheckCircle2 className="text-emerald-500 mx-auto mb-4" size={48} />
                      <h4 className="text-xl font-bold text-white mb-2">Message envoyé avec succès !</h4>
                      <p className="text-slate-400">
                        Merci {formData.name}, nous avons bien reçu votre demande. Notre équipe vous contactera très rapidement.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6" 
                      onSubmit={handleSubmit}
                    >
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-300">Nom complet <span className="text-sky-400">*</span></label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600 disabled:opacity-50"
                            placeholder="Jean Dupont"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-300">Email professionnel <span className="text-sky-400">*</span></label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600 disabled:opacity-50"
                            placeholder="jean@entreprise.com"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-300">Téléphone</label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600 disabled:opacity-50"
                            placeholder="+237 6 00 00 00 00"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-300">Sujet <span className="text-sky-400">*</span></label>
                          <input 
                            type="text" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600 disabled:opacity-50"
                            placeholder="Refonte d'application web..."
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Message <span className="text-sky-400">*</span></label>
                        <textarea 
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none placeholder:text-slate-600 disabled:opacity-50"
                          placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-sky-500 text-white font-bold text-lg hover:bg-sky-600 transition-colors flex items-center justify-center gap-2 group mt-4 disabled:bg-sky-500/50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>Envoi en cours... <Loader2 size={20} className="animate-spin" /></>
                        ) : (
                          <>Envoyer la demande <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                        )}
                      </button>
                      
                      <p className="text-xs text-center text-slate-500 mt-4">
                        Vos données sont traitées de manière confidentielle conformément à notre politique.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
