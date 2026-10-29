import React, { useState } from 'react';
import { portfolioData, SkillLevel } from '../data/portfolioData';
import { Shield, Cpu, BarChart3, Palette, Globe, Layout, CheckCircle, Clock, BookOpen, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...portfolioData.skills.map((c) => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return <Shield className="w-5 h-5 text-blue-400" />;
      case 'Artificial Intelligence':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Data Analytics':
        return <BarChart3 className="w-5 h-5 text-sky-400" />;
      case 'Design':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'WordPress & AI Websites':
        return <Layout className="w-5 h-5 text-indigo-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const getLevelBadge = (level: SkillLevel) => {
    switch (level) {
      case 'Hands-on Lab':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/40 dark:bg-emerald-950/40 light:bg-emerald-50 px-2 py-0.5 rounded border border-emerald-800/40">
            <CheckCircle className="w-3 h-3" />
            <span>Hands-on Lab</span>
          </span>
        );
      case 'Practicing':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 bg-blue-950/40 dark:bg-blue-950/40 light:bg-blue-50 px-2 py-0.5 rounded border border-blue-800/40">
            <Clock className="w-3 h-3" />
            <span>Practicing</span>
          </span>
        );
      case 'Learning':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-950/40 dark:bg-amber-950/40 light:bg-amber-50 px-2 py-0.5 rounded border border-amber-800/40">
            <BookOpen className="w-3 h-3" />
            <span>Learning</span>
          </span>
        );
      case 'Familiar':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 bg-purple-950/40 dark:bg-purple-950/40 light:bg-purple-50 px-2 py-0.5 rounded border border-purple-800/40">
            <CheckCircle className="w-3 h-3" />
            <span>Familiar</span>
          </span>
        );
    }
  };

  const filteredCategories = selectedCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span>02</span>
              <span className="text-slate-500">/</span>
              <span>Capabilities Dashboard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Technical & Creative Skills
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
              Honest capability mapping marked with genuine practice stages rather than arbitrary artificial percentage bars.
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 shrink-0">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Lab Verified</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Practicing</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Learning</span>
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3 text-sm py-1.5 border-b border-slate-800/40 dark:border-slate-800/40 light:border-slate-100 last:border-0"
                    >
                      <span className="font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                        {skill.name}
                      </span>
                      <div className="shrink-0">
                        {getLevelBadge(skill.level)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>{cat.skills.length} core proficiencies</span>
                <span className="text-blue-400">GCUF BSIT Track</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
