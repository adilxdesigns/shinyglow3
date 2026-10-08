import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const WhatsAppFloat = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi Shiny Glow Academy, I'm interested in your beauty courses / workshops. Please share details."
  )}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 group">
      {/* Tooltip on hover */}
      <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-sage-900 text-white text-xs font-medium px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us on WhatsApp 👋
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-13 h-13 md:w-14 md:h-14 bg-[#20BA59] hover:bg-[#1A9D49] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
