import React from 'react';
import { siteConfig } from '../data/siteData';
import { WorkshopCard } from '../components/WorkshopCard';
import { SEO } from '../components/SEO';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export const WorkshopsPage = ({ onOpenEnquire }) => {
  return (
    <>
      <SEO 
        title="Weekend Beauty Workshops in Perambur | Saturday & Sunday Classes"
        description="Master nail extensions, hair extensions, eyelash extensions, saree pre-pleating, artificial flower making & hair styling during weekend workshops at Shiny Glow Academy, Perambur."
        keywords="nail extension course Chennai, hair extension training Chennai, eyelash extension course Chennai, saree pre-pleating course, weekend beautician workshop Perambur"
        canonicalPath="/workshops"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-4 py-1.5 rounded-full border border-sage-200">
            Saturday & Sunday Special Masterclasses
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-sage-900 leading-tight">
            Weekend Skill Upgradation Workshops
          </h1>
          <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
            Intensive 2-day hands-on workshops designed to master high-paying beauty trends like nail extensions, eyelash extensions, saree box folding, and hair styling.
          </p>

          {/* Timing Pill */}
          <div className="inline-flex items-center space-x-3 bg-white px-4 py-2 rounded-2xl border border-sage-200 shadow-xs text-xs font-semibold text-sage-900">
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-sage-600" />
              <span>Days: Saturday & Sunday</span>
            </span>
            <span className="text-sage-300">|</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-sage-600" />
              <span>Timings: 11:00 AM to 5:00 PM</span>
            </span>
          </div>
        </div>

        {/* 8 Workshop Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.workshops.map((ws) => (
            <WorkshopCard
              key={ws.id}
              workshop={ws}
              onEnquire={(title) => onOpenEnquire(title)}
            />
          ))}
        </div>

        {/* Workshop Bottom Banner */}
        <div className="bg-gradient-to-r from-sage-900 to-sage-800 text-white rounded-3xl p-8 text-center space-y-4 shadow-soft">
          <h3 className="font-serif text-2xl font-bold">Want to book multiple weekend workshops?</h3>
          <p className="text-xs sm:text-sm text-sage-200 max-w-xl mx-auto">
            Combo discounts available for students enrolling in 2 or more weekend workshops. Contact our coordinator to reserve your desk.
          </p>
          <button
            onClick={() => onOpenEnquire('Weekend Workshop Combo Enquiry')}
            className="bg-[#20BA59] hover:bg-[#1A9D49] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md transition-all inline-flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4 fill-white" />
            <span>Enquire Workshop Combo via WhatsApp</span>
          </button>
        </div>

      </div>
    </>
  );
};
