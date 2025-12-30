
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#6f1022] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#6f1022]/20 group-hover:scale-110 transition-transform">
            <Zap size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">{COMPANY_NAME}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.path} className="relative group">
              <Link 
                to={item.path} 
                className={`text-sm font-medium transition-colors hover:text-[#9e1a32] flex items-center gap-1 ${location.pathname === item.path ? 'text-[#9e1a32]' : 'text-slate-300'}`}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {item.dropdown && (
                <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-56">
                  <div className="glass-dark rounded-xl overflow-hidden p-1 shadow-2xl">
                    {item.dropdown.map((drop) => (
                      <Link 
                        key={drop.path} 
                        to={drop.path}
                        className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-[#6f1022]/10 hover:text-[#9e1a32] rounded-lg transition-colors"
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link 
            to="/contact" 
            className="bg-[#6f1022] hover:bg-[#8b142a] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-[#6f1022]/20 active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden glass-dark bg-slate-950 flex flex-col p-8 pt-24"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-2xl font-bold text-white hover:text-[#9e1a32]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="mt-4 pl-4 flex flex-col gap-4 border-l border-[#6f1022]/30">
                      {item.dropdown.map((drop) => (
                        <Link 
                          key={drop.path} 
                          to={drop.path}
                          className="text-lg text-slate-400 hover:text-[#9e1a32]"
                          onClick={() => setIsOpen(false)}
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                to="/contact" 
                className="mt-8 bg-[#6f1022] text-white px-8 py-4 rounded-xl text-center text-lg font-bold shadow-xl shadow-[#6f1022]/20"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
