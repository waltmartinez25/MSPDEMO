
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users, Award, Star } from 'lucide-react';
import { TEAM, COMPANY_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-8"
          >
            Your Trusted IT Partner <br />
            <span className="gradient-text">Since 2012</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            NexGen IT was founded on a simple premise: small and medium businesses deserve the same enterprise-grade technology and security as Fortune 500 companies.
          </motion.p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                What started as a three-person consulting firm in a small office has grown into a leading regional Managed Service Provider. We have weathered the shifting tides of the tech industry by staying focused on one thing: our clients' success.
              </p>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Today, {COMPANY_NAME} serves hundreds of clients across various sectors, maintaining a focus on proactive management and rigorous cybersecurity.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#9e1a32] mb-2">12+</div>
                  <div className="text-slate-500 uppercase tracking-widest text-xs font-bold">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#9e1a32] mb-2">50+</div>
                  <div className="text-slate-500 uppercase tracking-widest text-xs font-bold">Expert Staff</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-10 rounded-3xl border border-white/5 relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6f1022]/10 rounded-full blur-3xl -z-10"></div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="text-[#6f1022]" /> Our Mission
              </h3>
              <p className="text-slate-300 text-xl leading-relaxed italic mb-8">
                "To empower businesses by removing technology as a hurdle and transforming it into a strategic competitive advantage through expert management and uncompromising security."
              </p>
              <hr className="border-white/10 mb-8" />
              <h3 className="text-xl font-bold text-white mb-6">Core Values</h3>
              <ul className="space-y-4">
                {[
                  { title: "Integrity First", desc: "Honest communication and transparent pricing, always." },
                  { title: "Relentless Security", desc: "We never compromise on the safety of your data." },
                  { title: "Innovative Thinking", desc: "Solving tomorrow's problems with today's best tech." }
                ].map((val, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#6f1022]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap size={12} className="text-[#6f1022]" />
                    </div>
                    <div>
                      <span className="font-bold text-white block">{val.title}</span>
                      <span className="text-slate-400 text-sm">{val.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#6f1022]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#6f1022] font-medium mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.certifications.map(cert => (
                    <span key={cert} className="text-[10px] font-bold bg-slate-900 text-slate-400 px-2 py-1 rounded border border-white/5">
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Grid */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Official Partners & Certifications</h2>
            <p className="text-slate-400">We maintain the highest levels of certification with global technology leaders.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40">
             <div className="text-center p-8 glass-dark rounded-xl border border-white/5 flex flex-col items-center">
                <Shield className="w-12 h-12 mb-4 text-[#6f1022]" />
                <span className="font-bold text-white uppercase text-xs tracking-widest">CompTIA Certified</span>
             </div>
             <div className="text-center p-8 glass-dark rounded-xl border border-white/5 flex flex-col items-center">
                <Award className="w-12 h-12 mb-4 text-[#6f1022]" />
                <span className="font-bold text-white uppercase text-xs tracking-widest">Microsoft Gold</span>
             </div>
             <div className="text-center p-8 glass-dark rounded-xl border border-white/5 flex flex-col items-center">
                <Star className="w-12 h-12 mb-4 text-[#6f1022]" />
                <span className="font-bold text-white uppercase text-xs tracking-widest">Cisco Premier</span>
             </div>
             <div className="text-center p-8 glass-dark rounded-xl border border-white/5 flex flex-col items-center">
                <Users className="w-12 h-12 mb-4 text-[#6f1022]" />
                <span className="font-bold text-white uppercase text-xs tracking-widest">AWS Select Partner</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
