import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [selectedIndex, setSelectedIndex] = useState(null);
  const touchStartX = useRef(null);

  const categories = ["All", "Academy", "Makeup", "Workshops", "Salon"];

  const filteredItems = previewOnly
    ? galleryItems.slice(0, 6)
    : activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const selectedItem = selectedIndex !== null && filteredItems[selectedIndex] ? filteredItems[selectedIndex] : null;

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (diffX > 40) {
      handleNext(); // Swipe left -> next image
    } else if (diffX < -40) {
      handlePrev(); // Swipe right -> prev image
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      {!previewOnly && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setSelectedIndex(null);
              }}
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
        {filteredItems.map((item, index) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            key={item.id}
            onClick={() => setSelectedIndex(index)}
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
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-sage-950/85 backdrop-blur-md select-none"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 border border-sage-200"
            >
              {/* Close Button & Image Counter Badge */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-semibold text-sage-700 bg-sage-100 px-3 py-1 rounded-full border border-sage-200">
                  Photo {selectedIndex + 1} of {filteredItems.length}
                </span>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="w-9 h-9 rounded-full bg-sage-900 text-white flex items-center justify-center hover:bg-sage-800 transition-colors shadow-lg"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Display Area with Nav Buttons */}
              <div className="relative rounded-2xl overflow-hidden max-h-[68vh] bg-slate-900 flex items-center justify-center min-h-[300px]">
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 z-30 w-11 h-11 rounded-full bg-sage-950/70 hover:bg-sage-900 text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105 shadow-xl border border-white/20"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Animated Image */}
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selectedItem.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="max-h-[68vh] w-auto max-w-full object-contain pointer-events-none"
                  />
                </AnimatePresence>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 z-30 w-11 h-11 rounded-full bg-sage-950/70 hover:bg-sage-900 text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105 shadow-xl border border-white/20"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption & Navigation Hint */}
              <div className="mt-4 pt-3 border-t border-sage-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-sage-700 uppercase tracking-wider">
                    {selectedItem.tag}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-sage-900">
                    {selectedItem.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-slate-muted">
                  <span className="hidden sm:inline-block bg-sage-50 px-3 py-1 rounded-lg border border-sage-200/60">
                    💡 Tip: Swipe or use ← → arrow keys
                  </span>
                  <span>Shiny Glow Academy • Perambur</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

