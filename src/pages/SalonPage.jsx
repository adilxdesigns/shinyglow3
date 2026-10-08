import React from 'react';
import { siteConfig } from '../data/siteData';
import { SEO } from '../components/SEO';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { Scissors, Sparkles, Clock, MapPin, Phone, Instagram, CheckCircle2, ChevronRight } from 'lucide-react';

export const SalonPage = ({ onOpenEnquire }) => {
  const salonSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": siteConfig.brand.salonName,
    "description": siteConfig.brand.salonShortDesc,
    "telephone": siteConfig.contact.phoneFormatted,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.line1,
      "addressLocality": "Perambur",
      "addressRegion": "Chennai, Tamil Nadu",
      "postalCode": siteConfig.contact.address.pincode,
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <SEO 
        title="Shiny Plush | Beauty Studio in Perambur, Chennai"
        description="Shiny Plush is a luxury beauty studio in Perambur offering Hydra facials, keratin hair treatment, HD bridal makeovers, and nail extension services."
        keywords="beauty studio in Perambur, hair studio Perambur, hydra facial Perambur, bridal makeup Perambur, Shiny Plush"
        canonicalPath="/salon"
        schema={salonSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-14">
        
        {/* Hero Banner for Shiny Plush */}
        <div className="bg-gradient-to-br from-sage-950 via-sage-900 to-emerald-950 text-white rounded-4xl p-8 sm:p-14 border border-gold-500/30 shadow-hover relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-300 text-xs font-bold px-4 py-1.5 rounded-full border border-gold-400/40 shadow-xs">
                <Scissors className="w-4 h-4 text-gold-400" />
                <span>Luxury Beauty Suite in Perambur</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Shiny Plush <span className="italic text-gold-400 font-normal">Salon</span>
              </h1>

              <p className="text-xs sm:text-sm text-sage-100/90 leading-relaxed max-w-xl font-normal">
                Experience soothing skincare rituals, keratin hair transformations, and custom HD bridal makeovers in a relaxed, hygienic, and elegant luxury atmosphere.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-sage-200">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>Open Daily: 10:00 AM – 8:00 PM</span>
                </span>
                <span className="text-gold-500">•</span>
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>Perambur, Chennai</span>
                </span>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenEnquire('Shiny Plush Salon Appointment')}
                  className="bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-2xl shadow-gold transition-all flex items-center space-x-2 transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Book Salon Appointment</span>
                </button>

                <a
                  href={siteConfig.socials.salonInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-2xl border border-white/20 transition-all flex items-center space-x-2"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Follow @shinyplush_on</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-gold-400/40 shadow-2xl h-80 sm:h-96 relative group">
                <img 
                  src="/assets/WhatsApp Image 2026-10-07 at 11.41.19 PM (1).jpeg" 
                  alt="Shiny Plush Studio Makeover" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-sage-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-gold-500/30 shadow-lg text-xs font-semibold text-gold-300 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Exclusive HD Bridal & Skincare Transformations</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sage-950 uppercase tracking-wider bg-gold-100/90 px-4 py-1.5 rounded-full border border-gold-300/60 shadow-2xs">
              Our Signature Treatments
            </span>
            <h2 className="font-serif text-3xl font-bold text-sage-950">
              Salon Services Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.salonServices.map((service, idx) => (
              <div key={idx} className="glass-card rounded-3xl overflow-hidden border border-sage-200/80 shadow-card hover:shadow-hover transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-48 overflow-hidden relative bg-sage-950 flex items-center justify-center">
                    <img 
                      src={service.image} 
                      alt="" 
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-lg opacity-40 scale-110 pointer-events-none"
                    />
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="relative z-10 max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 rounded-lg py-1"
                    />
                    <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-sage-950 border border-sage-200 shadow-2xs flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                      <span>Signature Care</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-sage-950 mb-2 group-hover:text-sage-700 transition-colors">{service.title}</h3>
                    <p className="text-xs text-slate-muted leading-relaxed mb-2 font-medium">{service.desc}</p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    onClick={() => onOpenEnquire(`Salon Service: ${service.title}`)}
                    className="w-full bg-gradient-to-r from-sage-900 to-sage-800 hover:from-sage-950 hover:to-sage-900 text-white font-semibold text-xs py-3 rounded-2xl shadow-soft transition-all flex items-center justify-center space-x-1.5 border border-gold-500/30"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>Enquire Service Pricing</span>
                    <ChevronRight className="w-3.5 h-3.5 text-sage-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Highlight CTA */}
        <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-soft text-center space-y-4 max-w-3xl mx-auto">
          <Instagram className="w-10 h-10 text-purple-600 mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-emerald-950">
            See Our Latest Salon Client Transformations
          </h3>
          <p className="text-xs text-slate-muted">
            Visit our official Instagram page for real client before/after photos, hair smoothening results, and bridal lookbooks.
          </p>
          <a
            href={siteConfig.socials.salonInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-6 py-3 rounded-2xl shadow-md"
          >
            <span>Visit @shinyplush_on Instagram</span>
          </a>
        </div>

      </div>
    </>
  );
};
