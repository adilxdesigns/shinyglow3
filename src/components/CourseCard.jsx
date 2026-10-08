import React from 'react';
import { Clock, Calendar, Award, Check, Sparkles, ChevronRight, BookOpen, Layers } from 'lucide-react';
import { PlaceholderImage } from './PlaceholderImage';

export const CourseCard = ({ course, onEnquire }) => {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-7 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between border border-sage-200/80 group">
      
      <div>
        {/* Course Header Image - Full Framing */}
        <div className="mb-5 overflow-hidden rounded-2xl relative h-64 sm:h-72 bg-sage-950 border border-sage-200/60 shadow-md flex items-center justify-center">
          {course.image ? (
            <>
              {/* Ambient Blurred Backdrop */}
              <img 
                src={course.image} 
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-45 scale-110 pointer-events-none"
              />
              {/* Main Full Image */}
              <img 
                src={course.image} 
                alt={course.title}
                className="relative z-10 max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 rounded-xl"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-sage-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </>
          ) : (
            <PlaceholderImage 
              title={course.title}
              category={course.duration}
              height="h-64 sm:h-72"
            />
          )}
        </div>

        {/* Badges & Mode */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {course.badge && (
            <span className="text-[11px] font-bold bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-white px-3.5 py-1 rounded-full shadow-2xs border border-gold-300/40">
              {course.badge}
            </span>
          )}
          <span className="text-[11px] font-bold bg-sage-100/90 text-sage-950 px-3 py-1 rounded-full border border-sage-300/80 shadow-2xs">
            {course.modes.join(" & ")} Modes
          </span>
          <span className="text-[11px] font-semibold text-sage-800 bg-white px-2.5 py-0.5 rounded-full border border-sage-200">
            {course.level}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-sage-950 mb-2 leading-tight group-hover:text-sage-700 transition-colors">
          {course.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-muted mb-4 leading-relaxed font-normal">
          {course.description}
        </p>

        {/* Schedule & Duration Strip */}
        <div className="bg-sage-50/90 p-4 rounded-2xl border border-sage-200/80 space-y-2 mb-4 text-xs">
          <div className="flex items-center text-sage-950 font-bold space-x-2">
            <Clock className="w-4 h-4 text-sage-700 shrink-0" />
            <span>Duration: {course.duration}</span>
          </div>
          <div className="flex items-center text-slate-muted font-medium space-x-2">
            <Calendar className="w-4 h-4 text-sage-700 shrink-0" />
            <span>{course.schedule}</span>
          </div>
          <div className="flex items-center text-sage-900 font-bold space-x-2 pt-1 border-t border-sage-200/80">
            <Award className="w-4 h-4 text-gold-600 shrink-0" />
            <span>{course.certificate}</span>
          </div>
        </div>

        {/* Syllabus Highlights */}
        {course.syllabus && course.syllabus.length > 0 && (
          <div className="mb-5 space-y-2">
            <h4 className="text-xs font-bold text-sage-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-gold-600" /> Key Topics Covered:
            </h4>
            {course.syllabus.slice(0, 4).map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs text-slate-muted font-medium">
                <div className="w-4 h-4 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center shrink-0 mt-0.5 border border-sage-200">
                  <Check className="w-3 h-3 text-sage-700 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

      </div>

      <div>
        {/* Study Material Mandatory Note */}
        <div className="bg-gradient-to-r from-gold-50 via-amber-50 to-gold-50 border border-gold-300/80 p-3 rounded-xl mb-5 text-[11px] text-gold-950 font-semibold flex items-center space-x-2 shadow-2xs">
          <BookOpen className="w-4 h-4 text-gold-700 shrink-0" />
          <span>{course.studyMaterialNote}</span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onEnquire(course.title)}
          className="w-full bg-gradient-to-r from-sage-900 to-sage-800 hover:from-sage-950 hover:to-sage-900 text-white text-xs sm:text-sm font-semibold py-3.5 px-4 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 flex items-center justify-center space-x-2 border border-gold-500/30 group-hover:scale-[1.01]"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>Enquire Syllabus & Fees</span>
          <ChevronRight className="w-4 h-4 text-sage-200" />
        </button>
      </div>

    </div>
  );
};
