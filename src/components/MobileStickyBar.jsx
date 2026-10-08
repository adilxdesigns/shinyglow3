import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const MobileStickyBar = ({ onOpenEnquire }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-sage-200 px-3 py-2.5 shadow-2xl flex items-center gap-2">
      {/* Call Button */}
      <a
        href={`tel:+${siteConfig.contact.phoneRaw}`}
        className="flex-1 bg-sage-100 hover:bg-sage-200 text-sage-900 border border-sage-300/80 text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center space-x-1.5 transition-colors"
      >
        <Phone className="w-4 h-4 text-sage-800" />
        <span>Call Us</span>
      </a>

      {/* Direct Enquire Modal Button */}
      <button
        onClick={() => onOpenEnquire()}
        className="flex-1 bg-sage-800 hover:bg-sage-900 text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center space-x-1.5 shadow-md transition-colors"
      >
        <Sparkles className="w-4 h-4 text-sage-200" />
        <span>Enquire Now</span>
      </button>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hi Shiny Glow Academy, I would like to enquire about your beauty courses and workshops.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#20BA59] hover:bg-[#1A9D49] text-white p-2.5 rounded-xl flex items-center justify-center shadow-md transition-colors shrink-0"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>
    </div>
  );
};
