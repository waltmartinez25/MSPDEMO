
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Zap, TrendingUp, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, PROJECTS, getIcon } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-mesh">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-[#6f1022]/30 text-[#9e1a32] text-sm font-semibold mb-8"
            >
              <Shield size={16} />
              <span>Next-Generation IT Management</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1]"
            >
              Secure, Reliable IT Solutions <br />
              <span className="gradient-text">That Scale With Your Business</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We provide enterprise-level IT support, cloud infrastructure, and cybersecurity services designed to help small and medium businesses thrive in a digital-first economy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-[#6f1022] hover:bg-[#8b142a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-[#6f1022]/30 flex items-center justify-center gap-2 group"
              >
                Get Free Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto glass-effect hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/10 flex items-center justify-center gap-2"
              >
                View Our Services
              </Link>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 glass-dark rounded-3xl border border-white/5"
          >
            {[
              { label: 'Uptime Guarantee', value: '99.9%', icon: <TrendingUp className="text-[#9e1a32]" /> },
              { label: 'Avg. Response Time', value: '15m', icon: <Clock className="text-[#9e1a32]" /> },
              { label: 'Cybersecurity Score', value: 'A+', icon: <Shield className="text-[#9e1a32]" /> },
              { label: 'Clients Served', value: '250+', icon: <Users className="text-[#9e1a32]" /> },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div className="mb-3 p-2 rounded-lg bg-[#6f1022]/10">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Abstract Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#6f1022]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
              {['Microsoft', 'Cisco', 'AWS', 'Google', 'Dell', 'Datto'].map((partner) => (
                <span key={partner} className="text-2xl font-black text-slate-600">{partner}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Innovative Solutions <br /><span className="text-[#6f1022]">Built for Scale</span></h2>
              <p className="text-slate-400 text-lg">We offer a comprehensive suite of IT services designed to protect your data, optimize your infrastructure, and drive your business forward.</p>
            </div>
            <Link to="/services" className="text-[#9e1a32] font-bold hover:text-[#6f1022] flex items-center gap-2 group">
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6f1022] to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative h-full glass-dark p-8 rounded-2xl border border-white/5 group-hover:border-[#6f1022]/30 transition-all flex flex-col">
                  <div className="w-14 h-14 bg-[#6f1022]/10 rounded-xl flex items-center justify-center text-[#9e1a32] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#9e1a32] transition-colors">{service.title}</h3>
                  <p className="text-slate-400 mb-8 flex-grow">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-[#6f1022]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="flex items-center gap-2 text-white font-semibold hover:text-[#9e1a32] transition-colors group/btn"
                  >
                    Learn More
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Why Businesses <br /><span className="text-[#6f1022]">Trust NexGen IT</span></h2>
              <div className="space-y-8">
                {[
                  { title: "Proactive Partnership", text: "We don't just fix what's broken. We anticipate risks and provide strategic guidance to prevent issues before they occur.", icon: <Zap size={24} /> },
                  { title: "Security-First Mindset", text: "Security isn't an add-on; it's baked into everything we do, ensuring your data is protected at every layer of your infrastructure.", icon: <Shield size={24} /> },
                  { title: "Rapid Support Response", text: "Our team of certified engineers is available 24/7, with average response times under 15 minutes for critical issues.", icon: <Clock size={24} /> },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#6f1022]/10 flex items-center justify-center text-[#6f1022]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#6f1022]/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://picsum.photos/seed/techteam/800/600" 
                alt="Our IT Team" 
                className="relative rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-10 -left-10 glass-dark p-6 rounded-2xl border border-white/10 shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#6f1022] flex items-center justify-center text-white font-bold">99%</div>
                  <div className="text-sm font-bold text-white">Client Retention Rate</div>
                </div>
                <p className="text-xs text-slate-400">Our clients stick with us because we deliver on our promises every single day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Success Stories</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Real challenges, tangible results. See how we've helped businesses across various industries transform their technology.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass-dark border border-white/5"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#6f1022] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <Link to="/portfolio" className="text-[#9e1a32] text-sm font-bold flex items-center gap-1 group/link">
                    Read Case Study
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f1022] to-red-900"></div>
            <div className="absolute inset-0 hero-mesh opacity-50"></div>
            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Secure Your <br />Business Future?</h2>
              <p className="text-red-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto">Schedule a free 30-minute consultation with our IT experts to discuss your challenges and discover your path to digital excellence.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="w-full sm:w-auto bg-white text-[#6f1022] hover:bg-red-50 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl">
                  Schedule Free Consultation
                </Link>
                <div className="flex items-center gap-2 text-red-100">
                  <CheckCircle2 size={24} />
                  <span className="font-medium">No obligation. No hard sell.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
