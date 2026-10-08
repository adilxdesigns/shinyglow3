import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  MapPin, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Instagram, 
  Phone, 
  Star, 
  Scissors, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { CourseCard } from '../components/CourseCard';
import { WorkshopCard } from '../components/WorkshopCard';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { FAQSection } from '../components/FAQSection';
import { SEO } from '../components/SEO';
import { PlaceholderImage } from '../components/PlaceholderImage';

export const HomePage = ({ onOpenEnquire }) => {
  return (
    <>
      <SEO 
        title="Learn Professional Beauty & Makeup Courses in Perambur"
        description="Shiny Glow Academy in Perambur, Chennai offers certified beautician courses, 3-month international diplomas, weekend workshops in nail & eyelash extensions, saree pre-pleating. Enroll today!"
      />

      <div className="space-y-20 pb-12">
        
        {/* HERO SECTION */}
        <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 px-4 sm:px-6 overflow-hidden">
          {/* Subtle background glow graphics */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-sage-200/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-50 via-amber-50 to-gold-100 border border-gold-400/60 px-4 py-1.5 rounded-full text-xs font-bold text-gold-900 shadow-2xs">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span>#1 Beauty & Makeup Training Academy in Perambur</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl xl:text-6xl font-extrabold text-sage-950 leading-[1.15] tracking-tight">
                Learn Professional <span className="text-gradient-gold">Beauty & Makeup</span> at Shiny Glow Academy
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-slate-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Transform your passion into a lucrative beauty career. Certified cosmetology, HD makeup artistry, and specialized weekend skill workshops in Perambur, Chennai. Both <strong className="text-sage-950 font-semibold">Online</strong> & <strong className="text-sage-950 font-semibold">Offline</strong> options with live practical models.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onOpenEnquire('3-Month Master Diploma')}
                  className="w-full sm:w-auto bg-gradient-to-r from-sage-900 to-sage-800 hover:from-sage-950 hover:to-sage-900 text-white font-semibold text-sm px-8 py-4 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 flex items-center justify-center space-x-2.5 transform hover:-translate-y-0.5 border border-gold-500/30"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Enquire Now (WhatsApp)</span>
                  <ChevronRight className="w-4 h-4 text-sage-200" />
                </button>

                <Link
                  to="/courses"
                  className="w-full sm:w-auto bg-white hover:bg-sage-50/80 text-sage-950 font-semibold text-sm px-8 py-4 rounded-2xl border border-sage-300 shadow-xs transition-all text-center flex items-center justify-center space-x-2"
                >
                  <BookOpen className="w-4 h-4 text-sage-700" />
                  <span>View All Courses</span>
                </Link>
              </div>

              {/* Trust Micro Strip */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-muted">
                <span className="flex items-center space-x-1.5">
                  <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
                  <span>4.9★ Student Rating</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-sage-700" />
                  <span>ISO Standards Curriculum</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-sage-700" />
                  <span>International Diploma</span>
                </span>
              </div>

            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 rounded-4xl bg-gradient-to-tr from-gold-500/20 via-sage-500/20 to-gold-400/20 blur-xl opacity-70" />

              <div className="glass-card rounded-3xl p-3 border border-sage-300/80 shadow-hover overflow-hidden relative z-10">
                <img 
                  src="/assets/WhatsApp Image 2026-10-07 at 11.35.17 PM (1).jpeg" 
                  alt="Shiny Glow Academy South Indian Bridal Model" 
                  className="w-full h-80 sm:h-[430px] object-cover object-top rounded-2xl shadow-md"
                />
                
                {/* Floating Highlight Pill */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gold-300/60 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage-900 to-sage-800 text-gold-400 flex items-center justify-center font-bold text-lg shrink-0 border border-gold-500/30">
                    ✨
                  </div>
                  <div>
                    <div className="text-xs font-bold text-sage-950">Shiny Glow Academy & Salon</div>
                    <div className="text-[11px] text-slate-muted font-medium">Certified Cosmetology & Bridal Masterclasses</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* HIGHLIGHTS STRIP */}
        <section className="bg-gradient-to-r from-sage-800 via-sage-700 to-sage-800 text-white py-10 px-4 sm:px-6 shadow-md">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.highlightsStrip.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3.5 bg-white/10 p-4 rounded-2xl backdrop-blur-xs border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-sage-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base font-bold leading-tight">{item.text}</h4>
                  <p className="text-xs text-sage-100/80 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COURSES PREVIEW SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-3.5 py-1 rounded-full border border-sage-200">
                Core Diploma & Certificate Programs
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sage-900 mt-3">
                Featured Academy Courses
              </h2>
            </div>
            <Link
              to="/courses"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-semibold text-sage-800 hover:text-sage-900 bg-white px-5 py-2.5 rounded-xl border border-sage-300 hover:bg-sage-50 transition-all"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.courses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onEnquire={(title) => onOpenEnquire(title)} 
              />
            ))}
          </div>
        </section>

        {/* WEEKEND WORKSHOPS PREVIEW */}
        <section className="bg-sage-100/50 py-16 px-4 sm:px-6 border-y border-sage-200/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-sage-300">
                Saturday & Sunday Classes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sage-900">
                Weekend Skill Workshops
              </h2>
              <p className="text-xs sm:text-sm text-slate-muted">
                Fast-track your skills in specialized trending beauty arts. Perfect for working professionals, students, and beauty enthusiasts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.workshops.slice(0, 4).map((ws) => (
                <WorkshopCard
                  key={ws.id}
                  workshop={ws}
                  onEnquire={(title) => onOpenEnquire(title)}
                />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/workshops"
                className="inline-flex items-center space-x-2 bg-sage-800 hover:bg-sage-900 text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-2xl shadow-soft transition-all"
              >
                <span>View All 8 Weekend Workshops</span>
                <ChevronRight className="w-4 h-4 text-sage-200" />
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-3 py-1 rounded-full border border-sage-200">
                Why Shiny Glow Academy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sage-900 leading-tight">
                Empowering You to Build a Successful Beauty Career
              </h2>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                Located right in Perambur, Chennai, we blend rigorous practical training with real-world client handling techniques so you graduate job-ready or prepared to launch your studio.
              </p>

              <div className="pt-2">
                <div className="rounded-3xl overflow-hidden border border-sage-200/80 shadow-md h-[400px] sm:h-[440px] bg-sage-950 relative group flex items-center justify-center">
                  {/* Ambient Blurred Backdrop */}
                  <img 
                    src="/assets/WhatsApp Image 2026-10-07 at 11.35.15 PM.jpeg" 
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110 pointer-events-none"
                  />
                  {/* Full Uncropped Practical Training Image */}
                  <img 
                    src="/assets/WhatsApp Image 2026-10-07 at 11.35.15 PM.jpeg" 
                    alt="Shiny Glow Practical Training Session"
                    className="relative z-10 max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 rounded-2xl py-1"
                  />
                  <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sage-200 shadow-md text-xs font-semibold text-sage-900 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sage-700" />
                    <span>Live Practical & Student Mentorship Studio</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {siteConfig.whyChooseUs.map((reason, idx) => (
                <div 
                  key={idx} 
                  className="glass-card p-5 rounded-2xl border border-sage-200/80 shadow-xs flex items-start space-x-4 hover:shadow-soft transition-all"
                >
                  <div className="w-10 h-10 rounded-2xl bg-sage-800 text-white font-serif font-bold text-base flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-sage-900">{reason.title}</h4>
                    <p className="text-xs text-slate-muted mt-1 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SALON TEASER (Shiny Plush) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#F0FAF4] via-[#F6FCF8] to-[#E5F7EC] rounded-3xl p-8 sm:p-12 border border-sage-200/80 shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage-300/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-sage-800 text-white text-xs font-semibold px-3.5 py-1 rounded-full shadow-xs">
                  <Scissors className="w-3.5 h-3.5 text-sage-200" />
                  <span>Sister Brand</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sage-900">
                  Looking for Luxury Beauty Care? Discover <span className="italic">Shiny Plush</span>
                </h2>

                <p className="text-xs sm:text-sm text-sage-900/80 leading-relaxed max-w-2xl">
                  In addition to our academy, we operate <strong>Shiny Plush</strong> — a premier beauty studio in Perambur specializing in hydra facials, keratin hair care, HD bridal makeovers, and organic waxing.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {siteConfig.salonServices.map((srv, i) => (
                    <span key={i} className="text-xs font-medium bg-white/90 text-sage-900 px-3 py-1 rounded-full border border-sage-200">
                      {srv.title}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/salon"
                    className="bg-sage-800 hover:bg-sage-900 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-soft transition-all flex items-center space-x-2"
                  >
                    <span>Explore Shiny Plush</span>
                    <ChevronRight className="w-4 h-4 text-sage-200" />
                  </Link>

                  <a
                    href={siteConfig.socials.salonInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-sage-50 text-sage-900 font-semibold text-xs sm:text-sm px-5 py-3 rounded-2xl border border-sage-300 transition-all flex items-center space-x-2"
                  >
                    <Instagram className="w-4 h-4 text-purple-600" />
                    <span>@shinyplush_on</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl overflow-hidden border border-emerald-300/80 shadow-md h-72 relative group">
                  <img 
                    src="/assets/WhatsApp Image 2026-10-07 at 11.41.19 PM (1).jpeg" 
                    alt="Shiny Plush Studio Makeover" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent opacity-60" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* GALLERY PREVIEW */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-3.5 py-1 rounded-full border border-sage-200">
              Student Work & Practicals
            </span>
            <h2 className="font-serif text-3xl font-bold text-sage-900">
              Training Gallery Highlights
            </h2>
          </div>

          <GalleryLightbox previewOnly={true} />

          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 bg-white hover:bg-sage-50 text-sage-900 font-semibold text-xs sm:text-sm px-6 py-3 rounded-2xl border border-sage-300 shadow-xs transition-all"
            >
              <span>View Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4 text-sage-700" />
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS PLACEHOLDER */}
        <section className="bg-sage-50/70 py-16 px-4 sm:px-6 border-y border-sage-200/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-sage-200">
                Student Testimonials
              </span>
              <h2 className="font-serif text-3xl font-bold text-sage-900">
                What Our Graduates Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.testimonials.map((t, idx) => (
                <div key={idx} className="glass-card p-6 rounded-3xl border border-sage-200 shadow-card flex flex-col justify-between">
                  <div>
                    <div className="flex text-amber-400 space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-muted italic leading-relaxed mb-4">
                      "{t.comment}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sage-100">
                    <h4 className="font-serif text-sm font-bold text-sage-900">{t.name}</h4>
                    <p className="text-[11px] text-sage-700 font-medium">{t.role}</p>
                    <p className="text-[10px] text-slate-muted">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTAGRAM BOTH ACCOUNTS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 border border-sage-200 shadow-soft text-center space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-3.5 py-1 rounded-full">
                Social Community
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sage-900">
                Connect With Us on Instagram
              </h2>
              <p className="text-xs sm:text-sm text-slate-muted max-w-lg mx-auto">
                Follow our daily student practical reels, bridal transformations, and workshop announcements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.socials.academyInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Academy: {siteConfig.socials.academyHandle}</span>
              </a>

              <a
                href={siteConfig.socials.salonInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-sage-800 hover:bg-sage-900 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Instagram className="w-4 h-4 text-emerald-300" />
                <span>Salon: {siteConfig.socials.salonHandle}</span>
              </a>
            </div>
          </div>
        </section>

        {/* LOCATION & TIMINGS MAP SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Timings & Contact Info */}
            <div className="lg:col-span-5 glass-card p-7 rounded-3xl border border-sage-200 shadow-card flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-3 py-1 rounded-full">
                  Visit Us in Perambur
                </span>
                <h3 className="font-serif text-2xl font-bold text-sage-900 mt-3 mb-4">
                  Location & Operating Hours
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-sage-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sage-900 block font-semibold">Address:</strong>
                      <span className="text-slate-muted">{siteConfig.contact.address.full}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-sage-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sage-900 block font-semibold">Call / WhatsApp:</strong>
                      <a href={`tel:+${siteConfig.contact.phoneRaw}`} className="text-sage-800 hover:underline font-medium">
                        {siteConfig.contact.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-sage-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <strong className="text-sage-900 block font-semibold">Timings:</strong>
                      <p className="text-slate-muted"><strong className="text-sage-900">Mon - Fri:</strong> 11:00 AM – 5:00 PM (Main Courses)</p>
                      <p className="text-slate-muted"><strong className="text-sage-900">Sat - Sun:</strong> 11:00 AM – 5:00 PM (Workshops)</p>
                      <p className="text-emerald-900"><strong className="text-emerald-900">Salon:</strong> 10:00 AM – 8:00 PM (Daily)</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenEnquire('General Enquiry')}
                className="w-full bg-sage-800 hover:bg-sage-900 text-white font-semibold text-xs sm:text-sm py-3 rounded-2xl shadow-soft"
              >
                Get Directions & Fee Info on WhatsApp
              </button>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-sage-200 shadow-card min-h-[340px]">
              <iframe
                title="Shiny Glow Academy Location Map Perambur"
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQSection onOpenEnquire={onOpenEnquire} />

        {/* FINAL CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-sage-900 via-sage-800 to-sage-900 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-sage-200 uppercase tracking-widest bg-white/10 px-4 py-1 rounded-full border border-white/10">
                Admissions Open for Next Batch
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold leading-tight">
                Ready to Become a Certified Beauty Professional?
              </h2>
              <p className="text-xs sm:text-sm text-sage-100/90 leading-relaxed">
                Join Shiny Glow Academy in Perambur, Chennai today. Limited seats per batch for personalized attention.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenEnquire('3-Month Master Diploma')}
                className="w-full sm:w-auto bg-[#20BA59] hover:bg-[#1A9D49] text-white font-semibold text-sm px-8 py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 fill-white" />
                <span>Enquire Admission via WhatsApp</span>
              </button>

              <a
                href={`tel:+${siteConfig.contact.phoneRaw}`}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-8 py-4 rounded-2xl border border-white/20 transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-sage-200" />
                <span>Call: {siteConfig.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
