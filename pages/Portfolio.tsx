
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Filter, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Managed IT', 'Cybersecurity', 'Cloud Solutions'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Work</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">See how we've helped businesses across industries overcome technical challenges and drive growth through innovation.</p>
      </section>

      <section className="container mx-auto px-6">
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          <div className="flex items-center gap-2 text-slate-500 mr-4">
            <Filter size={18} />
            <span className="text-sm font-bold uppercase tracking-widest">Filter:</span>
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${filter === cat ? 'bg-[#6f1022] text-white border-[#6f1022] shadow-lg shadow-[#6f1022]/20' : 'bg-transparent text-slate-400 border-white/10 hover:border-[#6f1022]/50 hover:text-[#9e1a32]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col h-full"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-[#6f1022] text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg inline-block mb-3">
                      {project.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                      Key Results:
                    </h4>
                    {project.results.map((res, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#9e1a32] font-medium">
                        <ArrowRight size={14} />
                        {res}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full py-4 glass-dark border border-white/5 rounded-2xl font-bold text-white hover:bg-[#6f1022]/10 hover:border-[#6f1022]/50 transition-all flex items-center justify-center gap-2 group/btn">
                  View Detailed Case Study
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 mt-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Industries We Specialize In</h2>
            <p className="text-slate-400">Deep domain expertise across various complex sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Healthcare', 'Finance', 'Manufacturing', 'Legal', 'Education', 'Non-Profit'].map(ind => (
              <div key={ind} className="glass-dark p-6 rounded-2xl border border-white/5 text-center hover:border-[#6f1022]/30 transition-all">
                <div className="font-bold text-white text-sm tracking-wide">{ind}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
