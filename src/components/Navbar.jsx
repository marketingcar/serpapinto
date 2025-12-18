import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/ace5e0975e0928fdcf004cae5776e307.png" 
              alt="Serpa Pinto Veterinary Clinic Logo" 
              className="h-20 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? 'text-brandDeep'
                    : 'text-brandDeep hover:text-brandGold'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brandGold transform origin-left transition-transform ${
                  location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+351223239804" className="flex items-center space-x-2 text-lg text-brandDeep hover:text-brandGold transition-colors">
              <Phone className="w-5 h-5" />
              <span>+351 223 239 804</span>
            </a>
            <a href="https://vet.digitail.io/clinics/clinica-veterinaria-serpa-pinto" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-brandDeep to-brandSoft text-white shadow-lg text-lg btn-gold-hover">
                <span className="relative z-10">Book Now</span>
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 text-xl font-medium ${
                    location.pathname === link.path
                      ? 'text-brandDeep'
                      : 'text-brandDeep'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-slate-200">
                <a href="tel:+351223239804" className="flex items-center space-x-2 text-lg text-brandDeep">
                  <Phone className="w-5 h-5" />
                  <span>+351 223 239 804</span>
                </a>
                <a href="https://vet.digitail.io/clinics/clinica-veterinaria-serpa-pinto" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-gradient-to-r from-brandDeep to-brandSoft text-white text-lg btn-gold-hover">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;