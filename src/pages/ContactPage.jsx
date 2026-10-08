import React, { useState } from 'react';
import { siteConfig } from '../data/siteData';
import { SEO } from '../components/SEO';
import { MapPin, Phone, MessageCircle, Clock, Mail, Instagram, Sparkles, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactPage = ({ onOpenEnquire }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(siteConfig.courses[0].title);
  const [mode, setMode] = useState("Offline");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validatePhone = (num) => {
    const cleanNum = num.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(cleanNum);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
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

    const msgText = `Hi Shiny Glow Academy,\n\nI'm *${name.trim()}*.\nInterested in: *${course}* (${mode} mode).\nMy Number: *${cleanPhone}*${message.trim() ? `\nMessage: ${message.trim()}` : ""}\n\nPlease contact me with course fees and batch start dates.`;

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msgText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO 
        title="Contact Shiny Glow Academy | Perambur, Chennai"
        description="Get in touch with Shiny Glow Academy in Perambur, Chennai. Call or WhatsApp +91 99412 22294 for beautician course fees, batch timings, & location map."
        keywords="contact Shiny Glow Academy, beauty academy phone number Perambur, beautician course inquiry Chennai"
        canonicalPath="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-4 py-1.5 rounded-full border border-sage-200">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-sage-900 leading-tight">
            Contact Admissions & Studio
          </h1>
          <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
            Have a question about course syllabi, fee structure, or weekend workshops? Reach out via WhatsApp, phone, or visit our Perambur academy.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="glass-card p-6 rounded-3xl border border-sage-200 shadow-card text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sage-800 text-white mx-auto flex items-center justify-center">
              <Phone className="w-6 h-6 text-sage-200" />
            </div>
            <h3 className="font-serif text-lg font-bold text-sage-900">Phone & WhatsApp</h3>
            <p className="text-xs text-slate-muted">Direct line for admissions & queries</p>
            <a 
              href={`tel:+${siteConfig.contact.phoneRaw}`} 
              className="text-sm font-bold text-sage-800 hover:underline block"
            >
              {siteConfig.contact.phoneFormatted}
            </a>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-sage-200 shadow-card text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sage-800 text-white mx-auto flex items-center justify-center">
              <MapPin className="w-6 h-6 text-sage-200" />
            </div>
            <h3 className="font-serif text-lg font-bold text-sage-900">Academy Address</h3>
            <p className="text-xs text-slate-muted">{siteConfig.contact.address.full}</p>
            <a 
              href={siteConfig.contact.googleMapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-sage-700 hover:text-sage-900 underline block"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-sage-200 shadow-card text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sage-800 text-white mx-auto flex items-center justify-center">
              <Clock className="w-6 h-6 text-sage-200" />
            </div>
            <h3 className="font-serif text-lg font-bold text-sage-900">Operating Hours</h3>
            <div className="text-xs text-slate-muted space-y-1">
              <p><strong className="text-sage-900">Courses:</strong> Mon - Fri | 11AM - 5PM</p>
              <p><strong className="text-sage-900">Workshops:</strong> Sat - Sun | 11AM - 5PM</p>
              <p><strong className="text-emerald-800">Salon:</strong> Daily | 10AM - 8PM</p>
            </div>
          </div>

        </div>

        {/* Form + Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Direct Form */}
          <div className="lg:col-span-6 glass-card p-8 rounded-3xl border border-sage-200 shadow-card space-y-6">
            <div>
              <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-3 py-1 rounded-full">
                Quick Message
              </span>
              <h3 className="font-serif text-2xl font-bold text-sage-900 mt-2">
                Send Admission Enquiry
              </h3>
              <p className="text-xs text-slate-muted mt-1">
                Submitting this form connects you directly with our team on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-sage-900 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Meenakshi Sundaram"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none ${
                    errors.name ? 'border-red-400 bg-red-50/30' : 'border-sage-200 bg-sage-50/40'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-sage-900 mb-1">
                  Mobile Number (10 Digits) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9941222294"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none ${
                    errors.phone ? 'border-red-400 bg-red-50/30' : 'border-sage-200 bg-sage-50/40'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-sage-900 mb-1">
                  Select Course / Workshop
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-sage-50/40 text-sm font-medium text-sage-900"
                >
                  {siteConfig.courses.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                  {siteConfig.workshops.map(w => <option key={w.id} value={w.title}>{w.title}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-sage-900 mb-1">
                  Learning Mode
                </label>
                <div className="grid grid-cols-2 gap-2 bg-sage-100/60 p-1 rounded-2xl border border-sage-200">
                  <button
                    type="button"
                    onClick={() => setMode('Offline')}
                    className={`py-2 text-xs font-semibold rounded-xl ${mode === 'Offline' ? 'bg-sage-800 text-white' : 'text-sage-800'}`}
                  >
                    Offline (Perambur)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('Online')}
                    className={`py-2 text-xs font-semibold rounded-xl ${mode === 'Online' ? 'bg-sage-800 text-white' : 'text-sage-800'}`}
                  >
                    Online Class
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-sage-900 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about fees, discount offers, or batch dates..."
                  className="w-full px-4 py-2 rounded-xl border border-sage-200 bg-sage-50/40 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#20BA59] hover:bg-[#1A9D49] text-white font-semibold text-sm py-3.5 rounded-2xl shadow-md flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Submit & Chat on WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-sage-200 shadow-card min-h-[400px]">
            <iframe
              title="Shiny Glow Academy Google Map Location"
              src={siteConfig.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>

        {/* Social Links Box */}
        <div className="bg-white rounded-3xl p-8 border border-sage-200 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-sage-900">Follow Our Official Instagram Pages</h4>
            <p className="text-xs text-slate-muted">Stay updated with fresh student results & salon offers.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.socials.academyInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sage-800 text-white font-semibold text-xs px-5 py-3 rounded-2xl flex items-center space-x-2 shadow-xs"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Academy: {siteConfig.socials.academyHandle}</span>
            </a>
            <a
              href={siteConfig.socials.salonInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-800 text-white font-semibold text-xs px-5 py-3 rounded-2xl flex items-center space-x-2 shadow-xs"
            >
              <Instagram className="w-4 h-4 text-emerald-300" />
              <span>Salon: {siteConfig.socials.salonHandle}</span>
            </a>
          </div>
        </div>

      </div>
    </>
  );
};
