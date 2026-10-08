import React from 'react';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { SEO } from '../components/SEO';
import { Sparkles } from 'lucide-react';

export const GalleryPage = ({ onOpenEnquire }) => {
  return (
    <>
      <SEO 
        title="Student Practical & Training Photo Gallery | Shiny Glow Academy"
        description="View photo portfolio of student makeup practicals, cosmetology training, weekend workshops, and bridal work at Shiny Glow Academy, Perambur, Chennai."
        keywords="beauty academy gallery Perambur, student makeup portfolio Chennai, beautician practical photos"
        canonicalPath="/gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-4 py-1.5 rounded-full border border-sage-200">
            Academy Photo Gallery
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-sage-900 leading-tight">
            Academy Practical & Work Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
            Browse through live practical sessions, weekend workshop demonstrations, student makeup creations, and client work.
          </p>
        </div>

        <GalleryLightbox previewOnly={false} />

        <div className="bg-sage-100/60 p-8 rounded-3xl border border-sage-200 text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="font-serif text-xl font-bold text-sage-900">Inspired by Our Students' Work?</h3>
          <p className="text-xs text-slate-muted">
            Start your own beauty journey today. Enroll in our upcoming offline batch in Perambur or interactive online program.
          </p>
          <button
            onClick={() => onOpenEnquire('3-Month Master Diploma')}
            className="bg-sage-800 hover:bg-sage-900 text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-2xl shadow-soft"
          >
            Enquire Admissions Now
          </button>
        </div>

      </div>
    </>
  );
};
