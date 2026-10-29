import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, ShieldCheck, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <span>01</span>
            <span className="text-slate-500">/</span>
            <span>Background & Aspirations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            About Abdul Rahman
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Undergraduate IT student with an authentic focus on defensive cybersecurity, data analysis, and modern web creation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg">
            {portfolioData.personal.aboutText.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 group"
              >
                <span>Explore my course syllabus & lab practice</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Quick Facts & Verified Student Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span>Verified Academic Profile</span>
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white dark:text-white light:text-slate-900">Current Program: </span>
                    <span className="text-slate-300 dark:text-slate-300 light:text-slate-600">{portfolioData.education.degree}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white dark:text-white light:text-slate-900">Institution: </span>
                    <span className="text-slate-300 dark:text-slate-300 light:text-slate-600">{portfolioData.education.institution}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white dark:text-white light:text-slate-900">Location: </span>
                    <span className="text-slate-300 dark:text-slate-300 light:text-slate-600">{portfolioData.personal.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white dark:text-white light:text-slate-900">Ethical Stance: </span>
                    <span className="text-slate-300 dark:text-slate-300 light:text-slate-600">Strictly authorized, defensive security & educational research</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white dark:text-white light:text-slate-900">Availability: </span>
                    <span className="text-slate-300 dark:text-slate-300 light:text-slate-600">Student internships, collaborative projects, freelance web tasks</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Expected Graduation: 2027</span>
                <span className="text-emerald-400 font-medium">Enrolled & Active</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
