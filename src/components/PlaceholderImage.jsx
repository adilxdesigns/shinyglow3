import React from 'react';
import { Sparkles } from 'lucide-react';

export const PlaceholderImage = ({ 
  title = "Shiny Glow Academy", 
  category = "Beauty & Makeup Training",
  height = "h-64",
  className = ""
}) => {
  return (
    <div className={`relative w-full ${height} rounded-2xl overflow-hidden bg-gradient-to-br from-[#E8F1EA] via-[#F4F7F5] to-[#D1E3D5] flex flex-col items-center justify-center p-6 border border-sage-200/60 shadow-sm group ${className}`}>
      {/* Background botanical subtle circles */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-sage-300/20 blur-xl group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-sage-400/15 blur-xl group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>

      <div className="z-10 text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-white/90 shadow-sm flex items-center justify-center mb-3 text-sage-700 group-hover:scale-110 transition-transform duration-300">
          <Sparkles className="w-6 h-6 text-sage-600" />
        </div>
        <span className="text-xs font-semibold tracking-wider text-sage-700 uppercase mb-1 bg-white/80 px-3 py-1 rounded-full border border-sage-200/60">
          {category}
        </span>
        <h4 className="font-serif text-lg text-sage-900 font-medium max-w-xs leading-snug">
          {title}
        </h4>
        <p className="text-[11px] text-slate-muted mt-2">
          Image Placeholder • Replace from /src/assets
        </p>
      </div>
    </div>
  );
};
