import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/siteData';

export const Navbar = ({ onOpenEnquire }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Shiny Plush', path: '/salon', isSalon: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Banner Bar */}
      <div className="bg-sage-900 text-white text-xs py-2 px-4 border-b border-sage-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Perambur, Chennai</span>
            </span>
            <span className="hidden sm:inline-block text-sage-600">|</span>
            <span className="hidden sm:inline-block text-sage-200">Mon-Fri: 11AM - 5PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:+${siteConfig.contact.phoneRaw}`}
              className="flex items-center space-x-1.5 hover:text-gold-300 transition-colors font-medium text-sage-100"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="glass-header shadow-xs py-3.5 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sage-900 to-sage-800 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-soft group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-serif text-lg font-bold text-sage-950 tracking-tight leading-tight">
                  Shiny Glow
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-gold-100 text-gold-800 px-2 py-0.5 rounded-full border border-gold-300/60 shadow-2xs">
                  Academy
                </span>
              </div>
              <span className="text-[11px] font-medium text-sage-700 flex items-center gap-1">
                + <span className="font-semibold italic text-emerald-800">Shiny Plush Salon</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? link.isSalon
                      ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-300/80 shadow-xs'
                      : 'bg-sage-100 text-sage-950 font-bold border border-sage-300/80 shadow-xs'
                    : link.isSalon
                      ? 'text-emerald-800 hover:bg-emerald-50/80 font-semibold'
                      : 'text-slate-muted hover:text-sage-950 hover:bg-sage-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => onOpenEnquire()}
              className="bg-gradient-to-r from-sage-900 to-sage-800 hover:from-sage-950 hover:to-sage-900 text-white font-semibold text-xs xl:text-sm px-6 py-2.5 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2 border border-gold-500/30"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Enquire Admissions</span>
              <ChevronRight className="w-4 h-4 text-sage-200" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenEnquire()}
              className="bg-sage-800 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-sm"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-sage-800 hover:bg-sage-100 transition-colors focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-sage-200 shadow-xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-sage-100 text-sage-900 font-semibold'
                      : 'text-slate-muted hover:bg-sage-50 hover:text-sage-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-sage-400" />
                </Link>
              ))}

              <div className="pt-3 border-t border-sage-200 space-y-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenEnquire();
                  }}
                  className="w-full bg-sage-800 text-white font-medium text-sm py-3 rounded-2xl shadow-md text-center flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-sage-200" />
                  <span>Enquire Course / Workshop</span>
                </button>
                <a
                  href={`tel:+${siteConfig.contact.phoneRaw}`}
                  className="w-full bg-sage-50 text-sage-800 border border-sage-200 text-sm font-semibold py-2.5 rounded-2xl text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-sage-700" />
                  <span>Call: {siteConfig.contact.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
