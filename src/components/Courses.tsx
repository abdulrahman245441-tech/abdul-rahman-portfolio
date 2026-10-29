import React, { useState } from 'react';
import { portfolioData, CourseTrack } from '../data/portfolioData';
import { Shield, Sparkles, Database, Palette, Code2, Layout, CheckCircle2, Circle, Clock, Award, ExternalLink, ChevronRight, X } from 'lucide-react';

export const Courses: React.FC = () => {
  const [activeModalTrack, setActiveModalTrack] = useState<CourseTrack | null>(null);

  const getTrackIcon = (id: string) => {
    switch (id) {
      case 'cybersecurity':
        return <Shield className="w-5 h-5 text-blue-400" />;
      case 'ai':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'analytics':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'graphic-design':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'web-dev':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'wordpress':
        return <Layout className="w-5 h-5 text-violet-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'Completed Course') {
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Completed</span>
        </span>
      );
    }
    if (status === 'Practicing in Lab') {
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 bg-blue-950/40 px-2.5 py-0.5 rounded border border-blue-800/40">
          <Clock className="w-3.5 h-3.5" />
          <span>Practicing in Lab</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-950/40 px-2.5 py-0.5 rounded border border-amber-800/40">
        <Circle className="w-3.5 h-3.5 fill-amber-400/20" />
        <span>Currently Learning</span>
      </span>
    );
  };

  return (
    <section id="courses" className="py-20 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span>03</span>
              <span className="text-slate-500">/</span>
              <span>Curriculum & Lab Practice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Courses & Learning Journey
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
              Six dedicated learning tracks spanning cybersecurity defense, artificial intelligence, business data analytics, and modern web systems.
            </p>
          </div>

          <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
            Click any course card to inspect topics & lab exercises
          </div>
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.learningTracks.map((track) => {
            const completedCount = track.topics.filter(t => t.status === 'Completed').length;
            const practicingCount = track.topics.filter(t => t.status === 'Practicing').length;

            return (
              <div
                key={track.id}
                onClick={() => setActiveModalTrack(track)}
                className={`group relative p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                  track.isPrimary
                    ? 'border-blue-500/50 shadow-md shadow-blue-500/5 hover:border-blue-400'
                    : 'border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-slate-700'
                }`}
              >
                {/* Primary Tag for Cybersecurity */}
                {track.isPrimary && (
                  <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-sm">
                    Primary Academic Focus
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 group-hover:scale-105 transition-transform">
                      {getTrackIcon(track.id)}
                    </div>
                    <div>{getStatusBadge(track.status)}</div>
                  </div>

                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {track.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
                    {track.provider}
                  </p>

                  <p className="mt-3 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 line-clamp-3 leading-relaxed">
                    {track.description}
                  </p>

                  {/* Syllabus Preview (First 3 topics) */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                      Core Syllabus Topics:
                    </span>
                    {track.topics.slice(0, 3).map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                        {topic.status === 'Completed' ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        )}
                        <span className="truncate">{topic.name}</span>
                      </div>
                    ))}
                    {track.topics.length > 3 && (
                      <p className="text-[11px] text-blue-400 font-medium pt-1">
                        + {track.topics.length - 3} more topics in curriculum
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                  <span>{completedCount} Completed · {practicingCount} Lab</span>
                  <span className="inline-flex items-center gap-1 text-blue-400">
                    <span>Inspect Course</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Course Inspection Modal */}
      {activeModalTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalTrack(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-slate-800">
                {getTrackIcon(activeModalTrack.id)}
              </div>
              <div>
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                  Course Track Details
                </span>
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
                  {activeModalTrack.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-2 mb-6">
              <span>{activeModalTrack.provider}</span>
              <span>·</span>
              {getStatusBadge(activeModalTrack.status)}
            </div>

            <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
              {activeModalTrack.description}
            </p>

            {/* Topics Covered */}
            <div className="space-y-3 mb-6">
              <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 uppercase tracking-wide">
                Detailed Syllabus & Competency Status
              </h4>
              <div className="space-y-2 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 p-4 rounded-xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                {activeModalTrack.topics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-800/40 dark:border-slate-800/40 light:border-slate-200 last:border-0">
                    <span className="font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {topic.name}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                      topic.status === 'Completed'
                        ? 'text-emerald-400 bg-emerald-950/40'
                        : topic.status === 'Practicing'
                        ? 'text-blue-400 bg-blue-950/40'
                        : 'text-amber-400 bg-amber-950/40'
                    }`}>
                      {topic.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="space-y-2 mb-6">
              <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 uppercase tracking-wide">
                Practical Takeaways & Lab Applications
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 list-disc list-inside">
                {activeModalTrack.keyTakeaways.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Configured in portfolioData.ts
              </span>
              <button
                onClick={() => setActiveModalTrack(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
