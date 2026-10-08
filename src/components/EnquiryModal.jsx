import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, Sparkles, BookOpen } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const EnquiryModal = ({ isOpen, onClose, initialCourse = "" }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [mode, setMode] = useState("Offline");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // List of courses and workshops combined for dropdown options
  const courseOptions = [
    ...siteConfig.courses.map((c) => c.title),
    ...siteConfig.workshops.map((w) => w.title),
    "General Academy Enquiry",
    "Shiny Plush Salon Appointment"
  ];

  useEffect(() => {
    if (isOpen) {
      setCourse(initialCourse || siteConfig.courses[0].title);
      setErrors({});
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen, initialCourse]);

  const validatePhone = (num) => {
    // Clean spaces/dashes
    const cleanNum = num.replace(/\D/g, "");
    // Check 10-digit starting with 6, 7, 8, or 9
    return /^[6-9]\d{9}$/.test(cleanNum);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(cleanPhone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Construct WhatsApp message payload
    const msgText = `Hi Shiny Glow Academy,\n\nI'm *${name.trim()}*.\nI am interested in: *${course}* (${mode} mode).\nMy Phone Number: *${cleanPhone}*${message.trim() ? `\nMessage: ${message.trim()}` : ""}\n\nPlease share course details, fees, and next batch start dates. Thank you!`;

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msgText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger redirect after brief success view
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        onClose();
      }, 1200);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sage-950/40 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-sage-200/80 my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-sage-950 via-sage-900 to-emerald-950 p-6 text-white relative border-b border-gold-500/30">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Admissions & Course Enquiry</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Shiny Glow Academy</h3>
            <p className="text-xs text-sage-200 mt-1 font-medium">
              Perambur, Chennai • Fill below for syllabus & fee breakdown on WhatsApp
            </p>
          </div>

          {/* Form / Success view */}
          <div className="p-6 bg-white">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center border border-emerald-300">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700" />
                </div>
                <h4 className="font-serif text-xl font-bold text-sage-950">Enquiry Prepared!</h4>
                <p className="text-sm text-slate-muted max-w-xs font-medium">
                  Opening WhatsApp to send your enquiry directly to Shiny Glow Academy admissions team...
                </p>
                <span className="text-xs font-bold text-sage-900 bg-gold-100 px-4 py-1.5 rounded-full border border-gold-300 animate-pulse">
                  Redirecting to WhatsApp...
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-bold text-sage-950 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ananya Sundaram"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors font-medium ${
                      errors.name ? 'border-red-400 bg-red-50/30' : 'border-sage-200 focus:border-sage-600 bg-sage-50/40 text-sage-950'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1 font-semibold">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-xs font-bold text-sage-950 mb-1">
                    Mobile Number (10 Digits) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-sage-800">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9941222294"
                      className={`w-full pl-12 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors font-medium ${
                        errors.phone ? 'border-red-400 bg-red-50/30' : 'border-sage-200 focus:border-sage-600 bg-sage-50/40 text-sage-950'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1 font-semibold">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Course Selection Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-sage-950 mb-1 flex items-center space-x-1">
                    <BookOpen className="w-3.5 h-3.5 text-gold-600" />
                    <span>Interested Course or Workshop</span>
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-sage-50/40 text-sm focus:outline-none focus:border-sage-600 text-sage-950 font-semibold"
                  >
                    {courseOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Mode Toggle */}
                <div>
                  <label className="block text-xs font-bold text-sage-950 mb-1.5">
                    Preferred Learning Mode
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-sage-100/70 p-1 rounded-2xl border border-sage-200">
                    <button
                      type="button"
                      onClick={() => setMode('Offline')}
                      className={`py-2 text-xs font-bold rounded-xl transition-all ${
                        mode === 'Offline'
                          ? 'bg-sage-900 text-white shadow-sm'
                          : 'text-sage-800 hover:text-sage-950'
                      }`}
                    >
                      Offline Class (Perambur)
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('Online')}
                      className={`py-2 text-xs font-bold rounded-xl transition-all ${
                        mode === 'Online'
                          ? 'bg-sage-900 text-white shadow-sm'
                          : 'text-sage-800 hover:text-sage-950'
                      }`}
                    >
                      Online Virtual Class
                    </button>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-bold text-sage-950 mb-1">
                    Message / Preferred Start Date (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Please send fee breakdown and weekend timings."
                    className="w-full px-4 py-2 rounded-xl border border-sage-200 bg-sage-50/40 text-sm focus:outline-none focus:border-sage-600 text-sage-950 font-medium"
                  />
                </div>

                {/* Action Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-gradient-to-r from-sage-900 via-sage-800 to-sage-900 hover:from-sage-950 hover:to-sage-900 text-white font-bold text-sm py-3.5 rounded-2xl shadow-soft hover:shadow-hover transition-all flex items-center justify-center space-x-2 border border-gold-500/30"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>{isSubmitting ? 'Preparing WhatsApp...' : 'Submit & Connect on WhatsApp'}</span>
                </button>

                <p className="text-[11px] text-center text-slate-muted font-medium">
                  🔒 We respect your privacy. No spam. Direct WhatsApp connection.
                </p>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
