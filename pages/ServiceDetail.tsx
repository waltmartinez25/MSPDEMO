
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SERVICES, getIcon, COMPANY_NAME } from '../constants';
import { CheckCircle2, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" />;

  const detailSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.fullDescription || service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_NAME
    },
    "offers": service.pricing ? service.pricing.map(tier => ({
      "@type": "Offer",
      "name": tier.name,
      "price": tier.price.replace(/[^0-9.]/g, ''),
      "priceCurrency": "USD"
    })) : undefined
  };

  return (
    <div className="pt-32">
      <Helmet>
        <title>{service.title} | {COMPANY_NAME}</title>
        <meta name="description" content={service.description} />
        <script type="application/ld+json">
          {JSON.stringify(detailSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/services" className="text-[#6f1022] font-bold flex items-center gap-1 mb-6 hover:translate-x-[-4px] transition-transform">
              <ChevronRight size={18} className="rotate-180" /> Back to Services
            </Link>
            <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">{service.title}</h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">{service.fullDescription || service.description}</p>
            <div className="flex flex-wrap gap-4 mb-10">
              {service.features.map(feat => (
                <span key={feat} className="glass-dark border border-white/10 px-4 py-2 rounded-lg text-sm text-slate-300">
                  {feat}
                </span>
              ))}
            </div>
            <a href="#contact-section" className="bg-[#6f1022] hover:bg-[#8b142a] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#6f1022]/20 inline-block">
              Request Service Details
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#6f1022]/20 rounded-3xl blur-3xl"></div>
            <img src={`https://picsum.photos/seed/${service.slug}-detail/800/600`} alt={service.title} className="relative rounded-3xl shadow-2xl border border-white/5" />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Invest in {service.title}?</h2>
            <p className="text-slate-400">Our MSP framework ensures your technology is a driver of success, not a hurdle to overcome.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits?.map((benefit, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-dark p-8 rounded-2xl border border-white/5 flex gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6f1022]/10 flex items-center justify-center text-[#6f1022] flex-shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Outcome {idx + 1}</h4>
                  <p className="text-slate-400 leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Tiers */}
      {service.pricing && (
        <section className="py-24 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white mb-4">Service Plans</h2>
              <p className="text-slate-400">Predictable monthly investments for elite technology management.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.pricing.map((tier, idx) => (
                <div 
                  key={tier.name}
                  className={`relative p-8 rounded-3xl border ${tier.recommended ? 'border-[#6f1022] bg-[#6f1022]/5 shadow-2xl shadow-[#6f1022]/10' : 'border-white/5 glass-dark'} flex flex-col h-full`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6f1022] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-black text-white">{tier.price}</div>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle2 size={18} className="text-[#6f1022]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.recommended ? 'bg-[#6f1022] text-white hover:bg-[#8b142a]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    Choose {tier.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && (
        <section className="py-24 bg-slate-900/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="glass-dark p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
                  <p className="text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="contact-section" className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#6f1022] to-red-950 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Scale Your Operations Safely</h2>
            <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">Get in touch today to schedule a deep-dive consultation about our {service.title} and how we can tailor them to your specific workflows.</p>
            <Link to="/contact" className="bg-white text-[#6f1022] hover:bg-red-50 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
              Book Consultation Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
