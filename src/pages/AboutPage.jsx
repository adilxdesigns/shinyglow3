import React from 'react';
import { siteConfig } from '../data/siteData';
import { SEO } from '../components/SEO';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { Award, BookOpen, Heart, ShieldCheck, Sparkles, Users, CheckCircle2 } from 'lucide-react';

export const AboutPage = ({ onOpenEnquire }) => {
  return (
    <>
      <SEO 
        title="About Shiny Glow Academy | Premier Beautician Institute Perambur"
        description="Learn about Shiny Glow Academy in Perambur, Chennai. Dedicated to empowering women & beauty professionals through 100% hands-on cosmetology & makeup education."
        keywords="about Shiny Glow Academy, beautician training institute Perambur, cosmetology school Chennai"
        canonicalPath="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-4 py-1.5 rounded-full border border-sage-200">
            About Our Institute
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-sage-900 leading-tight">
            Building Confidence & Careers Through Professional Beauty Education
          </h1>
          <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
            Shiny Glow Academy was established with a singular mission: to deliver accessible, high-standard, and practical beauty education in Perambur, Chennai.
          </p>
        </div>

        {/* Vision & Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sage-900">
              Our Training Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
              At Shiny Glow Academy, we believe true mastery comes from active practice, not just textbook theory. That's why every course module is structured with 100% hands-on practice on live models under close expert guidance.
            </p>
            <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
              Whether you want to learn quick 5-day beauty basics, upgrade your weekend skills with nail and eyelash extensions, or earn an International Master Diploma, our trainers guide you step-by-step from zero experience to studio-ready confidence.
            </p>

            <div className="pt-2 space-y-2">
              {[
                "Comprehensive study materials provided as per course",
                "ISO standard hygienic lab & modern beauty equipment",
                "Dedicated focus on salon business pricing & client handling",
                "Flexible Online & Offline batch options"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-sage-900">
                  <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-sage-200/80 shadow-hover h-80 sm:h-96 relative group">
              <img 
                src="/assets/WhatsApp Image 2026-10-07 at 11.35.15 PM.jpeg" 
                alt="Shiny Glow Trainer & Student Session" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-950/40 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-2xl border border-sage-200 shadow-md text-xs font-semibold text-sage-900 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-sage-700 shrink-0" />
                <span>Real Live Model Practicals at Perambur Studio</span>
              </div>
            </div>
          </div>

        </div>

        {/* Pillars Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-3xl border border-sage-200 shadow-card text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-800 mx-auto flex items-center justify-center">
              <Award className="w-6 h-6 text-sage-700" />
            </div>
            <h3 className="font-serif text-lg font-bold text-sage-900">Recognized Certification</h3>
            <p className="text-xs text-slate-muted leading-relaxed">
              Earn course certificates and international accreditation for our 3-month master program to build trust with clients worldwide.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-sage-200 shadow-card text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-800 mx-auto flex items-center justify-center">
              <Users className="w-6 h-6 text-sage-700" />
            </div>
            <h3 className="font-serif text-lg font-bold text-sage-900">Personalized Batches</h3>
            <p className="text-xs text-slate-muted leading-relaxed">
              We maintain small batch sizes so every student gets individual attention, technique corrections, and customized mentoring.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-sage-200 shadow-card text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-800 mx-auto flex items-center justify-center">
              <Heart className="w-6 h-6 text-sage-700" />
            </div>
            <h3 className="font-serif text-lg font-bold text-sage-900">Shiny Plush Synergy</h3>
            <p className="text-xs text-slate-muted leading-relaxed">
              Students get exposure to real salon workflows, client consultations, and luxury treatments at our sister salon Shiny Plush.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sage-800 to-sage-700 text-white rounded-3xl p-8 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold">Ready to Visit Our Perambur Academy?</h3>
          <p className="text-xs sm:text-sm text-sage-100 max-w-lg mx-auto">
            Schedule a free counseling session and live classroom demo with our head instructor.
          </p>
          <button
            onClick={() => onOpenEnquire('Academy Visit & Counseling')}
            className="bg-white text-sage-900 hover:bg-sage-50 font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-2xl shadow-md transition-all inline-flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-sage-700" />
            <span>Book Campus Demo on WhatsApp</span>
          </button>
        </div>

      </div>
    </>
  );
};
