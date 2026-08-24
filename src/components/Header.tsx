import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="GeekDev Logo" className="h-14 w-auto object-contain transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-base font-medium transition-colors ${location.pathname === link.href ? 'text-sky-400' : 'text-slate-400 hover:text-slate-200'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-5 py-2.5 rounded-md bg-slate-200 text-slate-950 font-semibold hover:bg-white transition-colors text-sm lg:text-base">
            Demander un devis
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 py-6 px-6 md:hidden flex flex-col gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium ${location.pathname === link.href ? 'text-sky-400' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center mt-4 px-6 py-3 rounded-md bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors">
            Demander un devis
          </Link>
        </motion.div>
      )}
    </header>
  );
}
