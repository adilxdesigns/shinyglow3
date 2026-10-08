import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Sparkles, ExternalLink, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const Footer = ({ onOpenEnquire }) => {
  return (
    <footer className="bg-gradient-to-b from-sage-950 via-sage-900 to-sage-950 text-white border-t border-gold-500/30 pt-16 pb-24 md:pb-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        
        {/* Col 1: Brand & Bio */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sage-900 to-sage-800 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-soft">
              <Sparkles className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white leading-tight">
                Shiny Glow Academy
              </h3>
              <p className="text-xs text-gold-400 font-semibold">Beauty & Cosmetology Institute</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-sage-200/90 font-normal">
            {siteConfig.brand.academyShortDesc}
          </p>
          <div className="pt-2 flex flex-col space-y-2">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
              Follow Us On Instagram
            </span>
            <div className="flex flex-col space-y-2">
              <a
                href={siteConfig.socials.academyInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-white hover:text-gold-300 bg-white/10 px-3.5 py-2 rounded-xl border border-white/10 w-fit hover:border-gold-400/40 transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Academy: {siteConfig.socials.academyHandle}</span>
                <ExternalLink className="w-3 h-3 text-gold-400" />
              </a>
              <a
                href={siteConfig.socials.salonInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-white hover:text-gold-300 bg-white/10 px-3.5 py-2 rounded-xl border border-white/10 w-fit hover:border-gold-400/40 transition-all"
              >
                <Instagram className="w-4 h-4 text-purple-400" />
                <span>Salon: {siteConfig.socials.salonHandle}</span>
                <ExternalLink className="w-3 h-3 text-gold-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-serif text-base font-bold text-white border-b border-gold-500/30 pb-2 flex items-center justify-between">
            <span>Quick Navigation</span>
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-sage-200">
            <li><Link to="/" className="hover:text-gold-400 transition-colors">Home Page</Link></li>
            <li><Link to="/courses" className="hover:text-gold-400 transition-colors">Courses & Diplomas</Link></li>
            <li><Link to="/workshops" className="hover:text-gold-400 transition-colors">Weekend Workshops</Link></li>
            <li><Link to="/salon" className="hover:text-gold-400 text-gold-300 font-semibold transition-colors">Shiny Plush Salon</Link></li>
            <li><Link to="/gallery" className="hover:text-gold-400 transition-colors">Academy Photo Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Academy</Link></li>
            <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact & Directions</Link></li>
          </ul>
        </div>

        {/* Col 3: Popular Training */}
        <div className="space-y-4">
          <h4 className="font-serif text-base font-bold text-white border-b border-gold-500/30 pb-2 flex items-center justify-between">
            <span>Top Programs</span>
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
          </h4>
          <ul className="space-y-2.5 text-xs text-sage-200 font-medium">
            <li><button onClick={() => onOpenEnquire('Advanced Beauty + Makeup (International)')} className="text-left hover:text-gold-400 transition-colors">3-Month Master Diploma (Intl Certificate)</button></li>
            <li><button onClick={() => onOpenEnquire('Professional Makeup Classes')} className="text-left hover:text-gold-400 transition-colors">1-Month Professional Makeup Class</button></li>
            <li><button onClick={() => onOpenEnquire('Advanced Beauty, Cosmetology & Aesthetic Courses')} className="text-left hover:text-gold-400 transition-colors">15-Day Cosmetology & Aesthetics</button></li>
            <li><button onClick={() => onOpenEnquire('Nail Extensions Workshop')} className="text-left hover:text-gold-400 transition-colors">Weekend Nail Extensions Workshop</button></li>
            <li><button onClick={() => onOpenEnquire('Saree Pre-pleating & Box Folding')} className="text-left hover:text-gold-400 transition-colors">Weekend Saree Pre-Pleating Class</button></li>
            <li><button onClick={() => onOpenEnquire('Eyelash Extensions Workshop')} className="text-left hover:text-gold-400 transition-colors">Weekend Eyelash Extensions Masterclass</button></li>
          </ul>
        </div>

        {/* Col 4: Address & Timings */}
        <div className="space-y-4">
          <h4 className="font-serif text-base font-bold text-white border-b border-gold-500/30 pb-2 flex items-center justify-between">
            <span>Location & Hours</span>
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
          </h4>
          <div className="space-y-3.5 text-xs text-sage-200">
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{siteConfig.contact.address.full}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href={`tel:+${siteConfig.contact.phoneRaw}`} className="hover:text-gold-300 font-bold text-white">
                {siteConfig.contact.phoneFormatted}
              </a>
            </div>
            <div className="flex items-start space-x-2.5">
              <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p><strong className="text-white font-semibold">Courses:</strong> Mon - Fri | 11 AM - 5 PM</p>
                <p><strong className="text-white font-semibold">Workshops:</strong> Sat - Sun | 11 AM - 5 PM</p>
                <p><strong className="text-gold-300 font-semibold">Salon:</strong> Daily | 10 AM - 8 PM</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SEO Keyword Footer Strip */}
      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-sage-800 text-[11px] text-sage-400 leading-relaxed text-center relative z-10">
        <p className="mb-2">
          <strong className="text-gold-400">Local Keywords:</strong> Beautician Course in Perambur, Chennai | Professional Makeup Academy near me | Cosmetology Training Perambur | Nail Extension Workshop Chennai | Saree Pre-pleating Classes | Eyelash Extensions Certification | Shiny Plush Beauty Salon Perambur.
        </p>
        <p className="flex items-center justify-center gap-1 font-medium">
          © {new Date().getFullYear()} Shiny Glow Academy & Shiny Plush Salon. All rights reserved. Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for aspiring beauty professionals.
        </p>
      </div>
    </footer>
  );
};
