
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-[#6f1022] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#6f1022]/20">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">{COMPANY_NAME}</span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Providing enterprise-grade IT solutions and robust cybersecurity strategies to empower modern businesses. Your technology partner for a digital-first world.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-slate-400 hover:text-[#9e1a32] hover:border-[#6f1022]/50 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 hover:text-[#9e1a32] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/managed-it" className="text-slate-400 hover:text-[#9e1a32] transition-colors">Managed IT</Link></li>
              <li><Link to="/services/cybersecurity" className="text-slate-400 hover:text-[#9e1a32] transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/cloud-solutions" className="text-slate-400 hover:text-[#9e1a32] transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-[#9e1a32] transition-colors">Compliance IT</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-slate-400 mb-4 text-sm">Join our newsletter for the latest IT trends and security insights.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6f1022]/50 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#6f1022] hover:bg-[#8b142a] text-white px-4 rounded-md transition-colors text-sm font-semibold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. 
            <span className="mx-2">|</span>
            <Link to="/privacy" className="hover:text-[#9e1a32] transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-[#9e1a32] transition-colors">Terms of Service</Link>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-[#6f1022]/50 transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
