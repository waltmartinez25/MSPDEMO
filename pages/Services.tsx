
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Star, 
  Server, 
  Cloud, 
  Lock, 
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Quote,
  Activity,
  Cpu,
  ShieldAlert,
  Database
} from 'lucide-react';
import { COMPANY_NAME, SERVICES } from '../constants.tsx';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The most proactive IT partner we've ever had in 15 years of business. Their NOC team identifies issues before we even notice a blip.",
    author: "Sarah Jenkins",
    role: "CEO at Summit Logistics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    quote: "Switching to NexGen's managed security stack dropped our incident reports by 85%. Their compliance roadmap made our last audit effortless.",
    author: "Marcus Thorne",
    role: "Director of IT at HealthLink",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    quote: "Their cloud migration strategy saved us thousands in overhead. We now have a truly global workforce with zero latency issues.",
    author: "Elena Zhao",
    role: "CTO at FinStream",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop",
    rating: 5
  }
];

const Services: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial, isPaused]);

  // Construct the JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Managed IT & Cybersecurity Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_NAME,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1200 Innovation Way",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      },
      "telephone": "+1-800-555-8324"
    },
    "description": "Enterprise-grade Managed IT Services including 24/7 monitoring, cybersecurity hardening, and scalable cloud infrastructure for modern businesses.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services Catalog",
      "itemListElement": SERVICES.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "url": `https://nexgenit.com/services/${service.slug}`
        }
      }))
    }
  };

  return (
    <div className="pt-20 overflow-hidden">
      <Helmet>
        <title>Managed IT & Cybersecurity Services | {COMPANY_NAME}</title>
        <meta name="description" content="Discover professional Managed IT solutions, 24/7 technical support, and advanced cybersecurity for growing enterprises. Scale securely with NexGen IT." />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative py-32 md:py-48 flex items-center justify-center hero-mesh">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              Eliminate Downtime. <br /> 
              <span className="gradient-text">Secure Your Future.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              NexGen IT provides the proactive engineering, multi-layer security, and scalable cloud architecture that modern enterprises need to thrive without technical friction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-[#6f1022] hover:bg-[#8b142a] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-[#6f1022]/40 active:scale-95">
                Book a Security Audit →
              </Link>
              <button className="w-full sm:w-auto glass-effect border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all">
                Our Managed Framework
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview of Service (Managed Support) */}
      <section className="py-32 bg-slate-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              {...fadeInUp}
              className="lg:w-1/2"
            >
              <span className="text-[#9e1a32] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Strategic IT</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Managed IT Operations</h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-[#6f1022]/10 rounded-2xl flex items-center justify-center text-[#9e1a32] flex-shrink-0 group-hover:bg-[#6f1022] group-hover:text-white transition-all duration-300">
                    <Server size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">24/7/365 NOC Monitoring</h3>
                    <p className="text-slate-400 leading-relaxed">Our Network Operations Center monitors your critical infrastructure around the clock, resolving bottlenecks before they impact your staff.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-[#6f1022]/10 rounded-2xl flex items-center justify-center text-[#9e1a32] flex-shrink-0 group-hover:bg-[#6f1022] group-hover:text-white transition-all duration-300">
                    <Activity size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">vCIO Strategic Planning</h3>
                    <p className="text-slate-400 leading-relaxed">Regular technology business reviews (TBRs) to align your IT roadmap with your long-term growth and budgetary goals.</p>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-wrap gap-4">
                <button className="bg-[#6f1022] hover:bg-[#8b142a] text-white px-8 py-4 rounded-xl font-bold transition-all">Get Started →</button>
                <button className="glass-dark border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">Support Tiers</button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-10 bg-[#6f1022]/5 rounded-full blur-[100px]"></div>
              <div className="aspect-square glass-dark rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-3xl">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc91?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Server Infrastructure" />
                <div className="relative z-10 w-24 h-24 bg-white/5 backdrop-blur-xl rounded-3xl flex items-center justify-center text-white border border-white/20">
                  <Server size={48} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Solutions We Offer (Security & Cloud) */}
      <section className="py-32 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <motion.div 
              {...fadeInUp}
              className="lg:w-1/2"
            >
              <span className="text-[#9e1a32] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Cyber Resilience</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Fortress Security & Cloud</h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-[#6f1022]/10 rounded-2xl flex items-center justify-center text-[#9e1a32] flex-shrink-0 group-hover:bg-[#6f1022] group-hover:text-white transition-all duration-300">
                    <ShieldAlert size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Managed EDR & SOC</h3>
                    <p className="text-slate-400 leading-relaxed">Advanced endpoint detection and response backed by a human-led Security Operations Center for 24/7 threat hunting.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-[#6f1022]/10 rounded-2xl flex items-center justify-center text-[#9e1a32] flex-shrink-0 group-hover:bg-[#6f1022] group-hover:text-white transition-all duration-300">
                    <Cloud size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Cloud Optimization</h3>
                    <p className="text-slate-400 leading-relaxed">Cost-effective Azure and AWS management designed for peak performance, automated backup, and disaster recovery.</p>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-wrap gap-4">
                <button className="bg-[#6f1022] hover:bg-[#8b142a] text-white px-8 py-4 rounded-xl font-bold transition-all">Audit My Security →</button>
                <button className="glass-dark border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">Cloud Roadmap</button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-10 bg-red-950/10 rounded-full blur-[100px]"></div>
              <div className="aspect-square glass-dark rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-3xl">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Cybersecurity Center" />
                <div className="relative z-10 w-24 h-24 bg-white/5 backdrop-blur-xl rounded-3xl flex items-center justify-center text-white border border-white/20">
                  <Lock size={48} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Benefits / Why Choose Us Grid */}
      <section className="py-32 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <motion.div 
              {...fadeInUp}
              className="lg:w-1/3"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Why Choose<br />The NexGen Edge</h2>
              <p className="text-slate-400 mb-12 leading-relaxed text-lg">
                We bridge the gap between complex enterprise IT and business objectives, providing elite technical management without the overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#6f1022] hover:bg-[#8b142a] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#6f1022]/20">Get Started →</button>
                <button className="glass-dark border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">Client Benefits</button>
              </div>
            </motion.div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Proactive Response", icon: <Zap />, desc: "We solve 92% of hardware and network issues before your team even notices a slowdown." },
                { title: "Compliance Mastery", icon: <ShieldCheck />, desc: "Specialized frameworks for HIPAA, CMMC, and SOC2 ensuring your legal standing is never at risk." },
                { title: "Uptime SLA", icon: <Activity />, desc: "99.99% uptime guarantee backed by multi-site redundancy and automated disaster recovery." },
                { title: "BDR Infrastructure", icon: <Database />, desc: "Ransomware-proof backup solutions that guarantee your data is recoverable in minutes, not days." }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, backgroundColor: 'rgba(111, 16, 34, 0.05)' }}
                  className="glass-dark p-12 rounded-3xl border border-white/5 text-left transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#6f1022]/10 rounded-2xl flex items-center justify-center text-[#9e1a32] mb-8">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Auto-Rotating Testimonial Section */}
      <section 
        className="py-32 bg-slate-900/10 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#9e1a32] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Client Success</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Proven Technical Leadership</h2>
              <p className="text-slate-400 text-lg">Reliability is our baseline. Strategic partnership is our specialty.</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full glass-dark border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/30 transition-all active:scale-90"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white hover:bg-slate-700 transition-all active:scale-90"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="relative min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass-dark rounded-[3rem] border border-white/5 p-10 md:p-16 flex flex-col md:flex-row gap-16 items-center shadow-3xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 text-[#6f1022]/10 pointer-events-none">
                  <Quote size={200} fill="currentColor" />
                </div>
                <div className="w-full md:w-1/3 aspect-square rounded-[2.5rem] bg-slate-900 border border-white/5 flex items-center justify-center text-slate-700 overflow-hidden relative shadow-2xl">
                   <img 
                    src={TESTIMONIALS[activeTestimonial].image} 
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt={TESTIMONIALS[activeTestimonial].author} 
                   />
                </div>
                <div className="md:w-2/3 relative z-10">
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#6f1022" className="text-[#6f1022]" />
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                    "{TESTIMONIALS[activeTestimonial].quote}"
                  </h3>
                  <div className="flex items-center gap-6 mt-12">
                    <div className="w-14 h-[1px] bg-[#6f1022]"></div>
                    <div>
                      <span className="text-white font-bold text-xl block">{TESTIMONIALS[activeTestimonial].author}</span>
                      <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">{TESTIMONIALS[activeTestimonial].role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="flex justify-center gap-3 mt-12">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 transition-all duration-300 rounded-full ${activeTestimonial === i ? 'w-12 bg-[#6f1022]' : 'w-2 bg-slate-800 hover:bg-slate-700'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partners Logo Strip */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30">
            {['Microsoft', 'Cisco', 'Amazon AWS', 'Fortinet', 'Dell', 'Datto', 'Sophos'].map(l => (
              <span key={l} className="text-3xl font-black text-slate-400 hover:text-white transition-all cursor-default select-none">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Portfolio Preview (IT Projects) */}
      <section className="py-32 bg-slate-900/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Case Studies</h2>
            <p className="text-slate-400 text-lg">Explore how we've navigated complex technical challenges for our enterprise partners.</p>
          </div>

          <div className="relative mb-16">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { title: "Azure Cloud Migration", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" },
                { title: "HIPAA Compliance Revamp", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" },
                { title: "Ransomware Recovery", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600" },
                { title: "Network Core Upgrade", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc91?auto=format&fit=crop&q=80&w=800" }
              ].map((caseStudy, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="group relative aspect-[4/5] rounded-[2rem] bg-slate-900 border border-white/5 flex items-center justify-center text-slate-700 overflow-hidden cursor-pointer shadow-xl"
                >
                   <img src={caseStudy.img} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={caseStudy.title} />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80"></div>
                   <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform px-4">
                     <h4 className="text-white font-bold text-xl mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{caseStudy.title}</h4>
                     <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:border-[#6f1022]/50 group-hover:bg-[#6f1022]/20 transition-all mx-auto">
                       <ArrowRight size={32} />
                     </div>
                   </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="text-center">
            <Link to="/portfolio" className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl">Browse Full Case Studies</Link>
          </div>
        </div>
      </section>

      {/* 8. Contact Section (Refined Split Layout) */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Let's talk about <br /> your operations.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">Book a comprehensive technology audit and find out where your business is most at risk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
             {[
               { title: "Direct Solutions:", val: "solutions@nexgenit.com", icon: <Mail size={24} /> },
               { title: "Emergency Support:", val: "+1 (800) 555-TECH", icon: <Phone size={24} /> },
               { title: "Global Headquarters:", val: "1200 Innovation Way, San Francisco, CA", icon: <MapPin size={24} /> }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="glass-dark p-10 rounded-3xl border border-white/5 flex items-start gap-6 group hover:border-[#6f1022]/30 transition-all"
               >
                  <div className="w-14 h-14 rounded-2xl bg-[#6f1022]/5 flex items-center justify-center text-[#9e1a32] group-hover:bg-[#6f1022] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-xs block mb-2">{item.title}</span>
                    <span className="text-white text-lg font-semibold">{item.val}</span>
                  </div>
               </motion.div>
             ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-0 rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-slate-900/50">
             <div className="lg:col-span-4 bg-slate-900/80 p-12 md:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 hero-mesh opacity-20 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#6f1022]/10 rounded-3xl flex items-center justify-center text-[#9e1a32] mb-10 shadow-inner">
                     <ShieldCheck size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-8 leading-tight">Is your network at risk? Get a Free Audit.</h3>
                  <p className="text-slate-400 mb-10 leading-relaxed text-lg">Our senior security analysts will perform a deep scan of your external vulnerabilities and report back with a clear remediation roadmap.</p>
                  <button className="text-white font-bold text-lg hover:text-[#9e1a32] transition-colors relative group">
                    Explore our expertise
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#6f1022] transform scale-x-100 group-hover:scale-x-110 transition-transform"></div>
                  </button>
                </div>
             </div>
             
             <div className="lg:col-span-6 bg-white p-12 md:p-16 text-slate-900 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                    <input type="text" placeholder="e.g. Brian Clark" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#6f1022] focus:ring-4 focus:ring-[#6f1022]/5 transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                    <input type="email" placeholder="email@company.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#6f1022] focus:ring-4 focus:ring-[#6f1022]/5 transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Phone</label>
                    <input type="tel" placeholder="(123) 456 - 7890" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#6f1022] focus:ring-4 focus:ring-[#6f1022]/5 transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Company</label>
                    <input type="text" placeholder="Business Name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#6f1022] focus:ring-4 focus:ring-[#6f1022]/5 transition-all" />
                  </div>
                </div>
                <div className="space-y-3 mb-10">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Your Requirements</label>
                  <textarea placeholder="Tell us about your IT challenges, cybersecurity needs, or cloud roadmap..." rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#6f1022] focus:ring-4 focus:ring-[#6f1022]/5 transition-all resize-none"></textarea>
                </div>
                <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-3 shadow-2xl active:scale-95">
                   Request Audit Now
                   <ArrowRight size={20} />
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
