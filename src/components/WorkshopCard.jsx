import React from 'react';
import { 
  Sparkles, 
  Scissors, 
  Eye, 
  Shirt, 
  Flower2, 
  Wand2, 
  HeartPulse, 
  BookOpen, 
  Calendar, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import { PlaceholderImage } from './PlaceholderImage';

const iconMap = {
  Sparkles: Sparkles,
  Scissors: Scissors,
  Eye: Eye,
  Shirt: Shirt,
  Flower2: Flower2,
  Wand2: Wand2,
  HeartPulse: HeartPulse,
  BookOpen: BookOpen,
};

export const WorkshopCard = ({ workshop, onEnquire }) => {
  const IconComponent = iconMap[workshop.icon] || Sparkles;

  return (
    <div className="glass-card rounded-3xl p-6 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between border border-sage-200/80 group">
      <div>
        
        {/* Card Visual Image - Full Framing */}
        <div className="mb-4 overflow-hidden rounded-2xl relative h-48 bg-sage-950 border border-sage-200/60 shadow-xs flex items-center justify-center">
          {workshop.image ? (
            <>
              {/* Ambient backdrop */}
              <img 
                src={workshop.image} 
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-lg opacity-40 scale-110 pointer-events-none"
              />
              {/* Full uncropped image */}
              <img 
                src={workshop.image} 
                alt={workshop.title}
                className="relative z-10 max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 rounded-lg"
              />
            </>
          ) : (
            <PlaceholderImage 
              title={workshop.title}
              category="Weekend Workshop"
              height="h-48"
            />
          )}
        </div>

        {/* Icon & Days */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sage-900 to-sage-800 border border-gold-500/30 flex items-center justify-center text-gold-400 shadow-soft group-hover:scale-110 transition-transform">
            <IconComponent className="w-5 h-5 text-gold-400" />
          </div>
          <span className="text-[11px] font-bold text-sage-950 bg-sage-100/90 px-3 py-1 rounded-full border border-sage-300/80 shadow-2xs flex items-center gap-1">
            <Calendar className="w-3 h-3 text-sage-700" />
            <span>{workshop.days}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-bold text-sage-950 mb-2 leading-snug group-hover:text-sage-700 transition-colors">
          {workshop.title}
        </h3>

        {/* Timings */}
        <div className="flex items-center space-x-1.5 text-xs text-slate-muted mb-3 font-medium">
          <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
          <span>Timings: {workshop.timings}</span>
        </div>

        {/* Highlights */}
        <p className="text-xs text-slate-muted leading-relaxed mb-4 bg-sage-50/70 p-3 rounded-xl border border-sage-200/60 font-medium">
          {workshop.highlights}
        </p>

      </div>

      <button
        onClick={() => onEnquire(workshop.title)}
        className="w-full bg-gradient-to-r from-sage-900 to-sage-800 hover:from-sage-950 hover:to-sage-900 text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-soft transition-all duration-200 flex items-center justify-center space-x-1.5 border border-gold-500/30"
      >
        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        <span>Enquire Workshop Seat</span>
        <ChevronRight className="w-3.5 h-3.5 text-sage-200" />
      </button>
    </div>
  );
};
