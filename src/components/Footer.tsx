import { Code2, Github, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="GeekDev Logo" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              Votre partenaire technologique pour concevoir des solutions innovantes, former vos équipes et automatiser votre croissance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/a-propos" className="text-slate-400 hover:text-sky-400 transition-colors">À Propos</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-sky-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Légal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">CGV</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Geekdev - Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            Douala - Cameroun
          </div>
        </div>
      </div>
    </footer>
  );
}
