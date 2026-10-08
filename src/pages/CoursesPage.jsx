import React from 'react';
import { siteConfig } from '../data/siteData';
import { CourseCard } from '../components/CourseCard';
import { SEO } from '../components/SEO';
import { Clock, Calendar, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export const CoursesPage = ({ onOpenEnquire }) => {
  // Course structured schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": siteConfig.courses.map((course, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
          "@type": "EducationalOrganization",
          "name": siteConfig.brand.academyName,
          "address": siteConfig.contact.address.full
        }
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Beauty & Makeup Courses in Perambur | Cosmetology Diplomas"
        description="Explore 5-day beauty basics, 15-day cosmetology, 1-month makeup artistry, and 3-month international master diploma at Shiny Glow Academy, Perambur, Chennai."
        keywords="beautician course in Perambur, makeup course in Perambur, cosmetology course Chennai, beauty academy Perambur"
        canonicalPath="/courses"
        schema={courseSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-sage-800 uppercase tracking-wider bg-sage-100 px-4 py-1.5 rounded-full border border-sage-200">
            Academy Career Programs
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-sage-900 leading-tight">
            Professional Beauty & Cosmetology Courses
          </h1>
          <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
            Hands-on practical training designed for beginner, intermediate, and advanced artists. Complete study materials provided as per course.
          </p>

          {/* Quick Schedule Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white p-3 rounded-2xl border border-sage-200 shadow-xs text-xs font-semibold text-sage-900">
            <span className="flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-sage-600" />
              <span>Schedule: Monday to Friday</span>
            </span>
            <span className="text-sage-300">|</span>
            <span className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-sage-600" />
              <span>Timings: 11:00 AM to 5:00 PM</span>
            </span>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteConfig.courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnquire={(title) => onOpenEnquire(title)}
            />
          ))}
        </div>

        {/* Enrollment & Materials Notice Banner */}
        <div className="bg-gradient-to-r from-sage-800 to-sage-700 text-white rounded-3xl p-8 shadow-soft grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <h3 className="font-serif text-2xl font-bold flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-sage-300" />
              <span>Study Materials & Practice Kits</span>
            </h3>
            <p className="text-xs sm:text-sm text-sage-100/90 leading-relaxed">
              Every course student receives structured curriculum notes and guidance on professional beauty toolkits. Flexible fee payment options available.
            </p>
          </div>
          <div className="md:col-span-4 text-right">
            <button
              onClick={() => onOpenEnquire('General Academy Enquiry')}
              className="w-full bg-white hover:bg-sage-50 text-sage-900 font-semibold text-xs sm:text-sm py-3 px-6 rounded-2xl shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-sage-700" />
              <span>Enquire Admission Details</span>
            </button>
          </div>
        </div>

      </div>
    </>
  );
};
