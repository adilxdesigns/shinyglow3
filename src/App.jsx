import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { EnquiryModal } from './components/EnquiryModal';

import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { SalonPage } from './pages/SalonPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll reset component on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCourseForEnquiry, setSelectedCourseForEnquiry] = useState("");

  const handleOpenEnquire = (courseName = "") => {
    setSelectedCourseForEnquiry(courseName);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquire = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAFBF9] text-slate-heading">
          
          {/* Header Navigation */}
          <Navbar onOpenEnquire={handleOpenEnquire} />

          {/* Page View Body */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage onOpenEnquire={handleOpenEnquire} />} />
              <Route path="/courses" element={<CoursesPage onOpenEnquire={handleOpenEnquire} />} />
              <Route path="/workshops" element={<WorkshopsPage onOpenEnquire={handleOpenEnquire} />} />
              <Route path="/salon" element={<SalonPage onOpenEnquire={handleOpenEnquire} />} />
              <Route path="/gallery" element={<GalleryPage onOpenEnquire={handleOpenEnquire} />} />
              <Route path="/about" element={<AboutPage onOpenEnquire={handleOpenEnquire} />} />
              <Route path="/contact" element={<ContactPage onOpenEnquire={handleOpenEnquire} />} />
              <Route path="*" element={<HomePage onOpenEnquire={handleOpenEnquire} />} />
            </Routes>
          </main>

          {/* Shared Footer */}
          <Footer onOpenEnquire={handleOpenEnquire} />

          {/* Mobile Bottom Action Bar */}
          <MobileStickyBar onOpenEnquire={handleOpenEnquire} />

          {/* Global Floating WhatsApp Widget */}
          <WhatsAppFloat />

          {/* Enquiry Modal & WhatsApp Redirect */}
          <EnquiryModal
            isOpen={isEnquiryOpen}
            onClose={handleCloseEnquire}
            initialCourse={selectedCourseForEnquiry}
          />

        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
