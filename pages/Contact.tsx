
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Managed IT',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: 'Managed IT', message: '' });
      alert("Thank you! Your message has been sent. We'll get back to you within 15 minutes.");
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-white mb-6"
          >
            Let's Transform Your <br />
            <span className="gradient-text">IT Infrastructure</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            Average initial response time: <strong>15 Minutes</strong> during business hours.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-dark p-8 rounded-3xl border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <ShieldCheck size={100} />
               </div>
               <h3 className="text-2xl font-bold text-white mb-8">Direct Contact</h3>
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-[#6f1022]/10 flex items-center justify-center text-[#6f1022] flex-shrink-0">
                     <Phone size={20} />
                   </div>
                   <div>
                     <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                     <p className="text-white font-bold text-lg hover:text-[#9e1a32] transition-colors cursor-pointer">+1 (800) 555-TECH</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-[#6f1022]/10 flex items-center justify-center text-[#6f1022] flex-shrink-0">
                     <Mail size={20} />
                   </div>
                   <div>
                     <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email Support</p>
                     <p className="text-white font-bold text-lg hover:text-[#9e1a32] transition-colors cursor-pointer">solutions@nexgenit.com</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-[#6f1022]/10 flex items-center justify-center text-[#6f1022] flex-shrink-0">
                     <MapPin size={20} />
                   </div>
                   <div>
                     <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Office Location</p>
                     <p className="text-white font-bold">1200 Innovation Way, Suite 400<br />San Francisco, CA 94105</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-[#6f1022]/10 flex items-center justify-center text-[#6f1022] flex-shrink-0">
                     <Clock size={20} />
                   </div>
                   <div>
                     <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Business Hours</p>
                     <p className="text-white font-bold">Mon - Fri: 8:00 AM - 6:00 PM PST<br />24/7 Monitoring for Clients</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="glass-dark p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Other Ways to Connect</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-[#6f1022]" />
                    <span className="text-white font-medium">Book Consultation</span>
                  </div>
                  <ChevronRight size={18} className="text-slate-600 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="text-[#6f1022]" />
                    <span className="text-white font-medium">Start Live Chat</span>
                  </div>
                  <ChevronRight size={18} className="text-slate-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-dark p-10 rounded-[2rem] border border-white/5">
              <h3 className="text-3xl font-bold text-white mb-8">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#6f1022]/50 transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="john@company.com" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#6f1022]/50 transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#6f1022]/50 transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Company Name</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    placeholder="Acme Corp" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#6f1022]/50 transition-all" 
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Service Interest</label>
                  <select 
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#6f1022]/50 transition-all appearance-none"
                  >
                    <option>Managed IT Services</option>
                    <option>Cybersecurity & Compliance</option>
                    <option>Cloud Solutions</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your IT challenges..." 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#6f1022]/50 transition-all" 
                  ></textarea>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button 
                    disabled={submitted}
                    className="w-full bg-[#6f1022] hover:bg-[#8b142a] disabled:bg-[#4a0a16] text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-[#6f1022]/20 flex items-center justify-center gap-3 transition-all active:scale-95"
                  >
                    {submitted ? 'Sending...' : 'Send Message'}
                    <Send size={24} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-6 mt-24">
        <div className="rounded-[2.5rem] overflow-hidden h-[400px] relative border border-white/5">
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
             <div className="text-center">
               <MapPin size={48} className="text-[#6f1022] mx-auto mb-4" />
               <p className="text-slate-400">Interactive Map View Placeholder</p>
               <p className="text-slate-600 text-sm">San Francisco HQ</p>
             </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
