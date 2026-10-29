import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ExternalLink, Github, Eye, X, CheckCircle, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  const categories = [
    'All Projects',
    'Cybersecurity',
    'Artificial Intelligence',
    'Data Analytics',
    'Graphic Design',
    'Web Development',
    'WordPress Websites'
  ];

  const filteredProjects = selectedCategory === 'All Projects'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span>04</span>
              <span className="text-slate-500">/</span>
              <span>Practical Work & Prototypes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Featured Projects & Lab Work
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
              Authentic projects and lab implementations representing current skills across cybersecurity, web development, data visualization, and design.
            </p>
          </div>

          <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
            Showing {filteredProjects.length} of {portfolioData.projects.length} works
          </div>
        </div>

        {/* Category Filter Buttons (Functional Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 overflow-hidden shadow-sm hover:border-slate-700 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image Frame */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                {/* Category & Status Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                  <span className="font-semibold px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-sm border border-white/10">
                    {project.category}
                  </span>
                  {project.statusText && (
                    <span className="text-slate-300 drop-shadow-sm font-medium">
                      {project.statusText}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Clean Unboxed Tech Stack Separated by Dots */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                    {project.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {i < project.technologies.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub Repository"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        title="Live Preview"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Modal Header Image */}
            <div className="relative aspect-[21/9] w-full bg-slate-950">
              <img
                src={activeCaseStudy.image}
                alt={activeCaseStudy.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 dark:from-slate-900 light:from-white via-transparent to-transparent" />
              
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-900 backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Case Study · {activeCaseStudy.category}
                </span>
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-1">
                  {activeCaseStudy.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Project Overview & Problem Statement
                </h4>
                <p className="text-sm sm:text-base text-slate-200 dark:text-slate-200 light:text-slate-700 leading-relaxed">
                  {activeCaseStudy.caseStudy.overview}
                </p>
              </div>

              {/* Objectives */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Objectives
                </h4>
                <ul className="space-y-1.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                  {activeCaseStudy.caseStudy.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Details */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Technical Architecture & Tooling
                </h4>
                <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-1.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {activeCaseStudy.caseStudy.technicalDetails.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono text-xs">·</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Outcomes & Practical Lessons
                </h4>
                <ul className="space-y-1.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                  {activeCaseStudy.caseStudy.outcomes.map((out, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-8 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950/40 flex items-center justify-between">
              <div className="text-xs text-slate-500">
                Replace in <code className="text-blue-400">portfolioData.ts</code>
              </div>

              <div className="flex items-center gap-3">
                {activeCaseStudy.githubUrl && (
                  <a
                    href={activeCaseStudy.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
