import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const FAQSection = ({ onOpenEnquire }) => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-transparent via-sage-50/40 to-transparent">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-sage-100/80 px-3.5 py-1.5 rounded-full border border-sage-200 text-xs font-semibold text-sage-800">
            <HelpCircle className="w-3.5 h-3.5 text-sage-600" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sage-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-muted max-w-xl mx-auto">
            Everything you need to know about beauty courses, weekend workshops, certification, and admissions in Perambur, Chennai.
          </p>
        </div>

        <div className="space-y-4">
          {siteConfig.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-sage-200/80 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
              >
                <span className="font-serif text-base font-semibold text-sage-900 leading-snug">
                  {faq.q}
                </span>
                <span className={`w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  openIdx === idx ? 'rotate-180 bg-sage-800 text-white' : 'text-sage-800'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-muted leading-relaxed border-t border-sage-100">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-gradient-to-r from-sage-800 to-sage-700 text-white p-6 sm:p-8 rounded-3xl shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold">Have a specific question about fee installments or batch dates?</h4>
            <p className="text-xs text-sage-200 mt-1">Chat directly with our admissions counselor on WhatsApp.</p>
          </div>
          <button
            onClick={() => onOpenEnquire('General Academy Enquiry')}
            className="bg-white text-sage-900 hover:bg-sage-100 font-semibold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md transition-all shrink-0 flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-sage-700" />
            <span>Ask Admissions Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};
