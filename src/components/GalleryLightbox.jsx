import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { PlaceholderImage } from './PlaceholderImage';

const galleryItems = [
  { id: 1, title: "South Indian Bridal Makeover", category: "Makeup", tag: "Academy Practical", image: "/assets/WhatsApp Image 2026-10-07 at 11.35.17 PM (1).jpeg" },
  { id: 2, title: "Trainer & Student Practical Session", category: "Academy", tag: "Live Mentorship", image: "/assets/WhatsApp Image 2026-10-07 at 11.35.15 PM.jpeg" },
  { id: 3, title: "Traditional Muhurtham Bridal Look", category: "Makeup", tag: "Bridal Artistry", image: "/assets/WhatsApp Image 2026-10-07 at 11.35.16 PM.jpeg" },
  { id: 4, title: "Bridal Hair Updo & Floral Artistry", category: "Workshops", tag: "Hair Styling", image: "/assets/WhatsApp Image 2026-10-07 at 11.35.17 PM.jpeg" },
  { id: 5, title: "Close-up HD Eye & Face Makeup", category: "Makeup", tag: "Student Portfolio", image: "/assets/WhatsApp Image 2026-10-07 at 11.35.18 PM.jpeg" },
  { id: 6, title: "Shiny Plush Luxury Bridal Portrait", category: "Salon", tag: "Shiny Plush Studio", image: "/assets/WhatsApp Image 2026-10-07 at 11.41.19 PM (1).jpeg" },
  { id: 7, title: "Contemporary South Indian Bridal Look", category: "Makeup", tag: "Master Class", image: "/assets/WhatsApp Image 2026-10-07 at 11.41.21 PM (1).jpeg" },
  { id: 8, title: "Saree Draping & Pre-pleating Demo", category: "Workshops", tag: "Weekend Workshop", image: "/assets/WhatsApp Image 2026-10-07 at 11.41.21 PM (2).jpeg" },
  { id: 9, title: "Bharatanatyam Dance Makeup Makeover", category: "Makeup", tag: "Traditional Art", image: "/assets/WhatsApp Image 2026-10-07 at 11.41.23 PM (1).jpeg" },
  { id: 10, title: "Hair Extension & Updo Styling", category: "Workshops", tag: "Hair Extensions", image: "/assets/WhatsApp Image 2026-10-07 at 11.41.24 PM.jpeg" },
  { id: 11, title: "Hydra Facial & Cosmetology Therapy", category: "Academy", tag: "Skin Cosmetology", image: "/assets/course_advanced_cosmetology.png" },
  { id: 12, title: "Professional Gel Nail Art & Extensions", category: "Workshops", tag: "Nail Studio", image: "/assets/service_nail_extensions.png" },
  { id: 13, title: "Keratin Hair Spa Transformation", category: "Salon", tag: "Hair Treatment", image: "/assets/service_hair_keratin.png" },
  { id: 14, title: "Foundation Beauty & Facial Hygiene", category: "Academy", tag: "Beginner Course", image: "/assets/course_beauty_basics.png" }
];

export const GalleryLightbox = ({ previewOnly = false }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ["All", "Academy", "Makeup", "Workshops", "Salon"];

  const filteredItems = previewOnly
    ? galleryItems.slice(0, 6)
    : activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      {!previewOnly && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-sage-800 text-white shadow-soft'
                  : 'bg-white text-slate-muted hover:bg-sage-100 hover:text-sage-900 border border-sage-200'
              }`}
            >
              {cat === "All" ? "All Photos" : cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="cursor-pointer group relative overflow-hidden rounded-3xl border border-sage-200/80 shadow-card hover:shadow-hover transition-all duration-300 bg-sage-950 h-[380px] sm:h-[420px] flex items-center justify-center"
          >
            {/* Ambient Blurred Backdrop */}
            <img 
              src={item.image} 
              alt="" 
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110 pointer-events-none"
            />
            
            {/* Full Uncropped Image */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="relative z-10 max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 rounded-2xl py-1"
            />

            <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-sage-900 border border-sage-200 shadow-md">
              {item.tag}
            </div>
            
            {/* Hover overlay badge */}
            <div className="absolute inset-0 z-30 bg-sage-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-5 text-center">
              <span className="text-white font-serif font-bold text-base mb-2">{item.title}</span>
              <div className="bg-white/90 px-4 py-2 rounded-2xl text-sage-900 flex items-center space-x-2 shadow-lg">
                <ZoomIn className="w-4 h-4 text-sage-700" />
                <span className="text-xs font-semibold">View Full Image</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sage-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-6 border border-sage-200"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-sage-900 text-white flex items-center justify-center hover:bg-sage-800 transition-colors shadow-lg"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden max-h-[70vh] bg-slate-900 flex items-center justify-center">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-sage-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-sage-700 uppercase tracking-wider">
                    {selectedItem.tag}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-sage-900">
                    {selectedItem.title}
                  </h4>
                </div>
                <div className="text-xs text-slate-muted">
                  Shiny Glow Academy • Perambur
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
