import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, Layers } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <span>06</span>
            <span className="text-slate-500">/</span>
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            Education & University Journey
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Currently enrolled in the undergraduate degree program at Government College University Faisalabad.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="p-8 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-100">
            
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{education.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
                  {education.degree}
                </h3>
                <p className="text-base font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {education.institution} ({education.institutionAbbr})
                </p>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 text-xs text-slate-400 shrink-0">
              <div className="flex items-center gap-1.5 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 px-3 py-1.5 rounded-lg">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{education.startYear} – {education.expectedGraduation} (Expected)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 px-3 py-1.5 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{education.location}</span>
              </div>
            </div>

          </div>

          <div className="pt-6 space-y-6">
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-4xl">
              {education.description}
            </p>

            {/* Relevant Coursework */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Relevant Coursework & Core Disciplines</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {education.relevantCoursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-2"
                  >
                    <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
