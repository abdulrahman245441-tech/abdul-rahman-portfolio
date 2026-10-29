import React, { useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Sparkles, Shield, Cpu, BarChart3, Globe, Upload, RotateCcw, FileText, Send } from 'lucide-react';

export const Hero: React.FC = () => {
  const { photoUrl, updatePhotoUrl, resetPhotoUrl, isCustomPhoto, openCVModal } = usePortfolio();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          updatePhotoUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-24 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background atmospheric tech gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic & CTA Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Editorial Kicker with clean unboxed metadata */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-400 dark:text-blue-400 light:text-blue-600 tracking-wide uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
              <span>BS Information Technology</span>
              <span className="text-slate-500">·</span>
              <span>GCUF Faisalabad</span>
              <span className="text-slate-500">·</span>
              <span>Pakistan</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1] max-w-2xl text-balance">
              {portfolioData.personal.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl leading-relaxed">
              {portfolioData.personal.subheadline}
            </p>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
              {portfolioData.personal.supportingText}
            </p>

            {/* 4 Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 w-full">
              <a
                href="#skills"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/25 transition-all whitespace-nowrap"
              >
                Explore My Skills
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-900 dark:bg-slate-900 light:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-700/80 dark:border-slate-800 light:border-slate-300 rounded-lg transition-all whitespace-nowrap"
              >
                View My Projects
              </a>

              <button
                type="button"
                onClick={openCVModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-indigo-300 dark:text-indigo-300 light:text-indigo-700 bg-indigo-950/40 dark:bg-indigo-950/40 light:bg-indigo-50 hover:bg-indigo-900/50 border border-indigo-800/50 dark:border-indigo-800/50 light:border-indigo-200 rounded-lg transition-all whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download My CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                <Send className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Domain Anchors */}
            <div className="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              <span className="font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">Specializations:</span>
              <span className="inline-flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-blue-400" /> Cybersecurity</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-purple-400" /> Artificial Intelligence</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5"><BarChart3 className="w-3.5 h-3.5 text-sky-400" /> Data Analytics</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-emerald-400" /> Modern Web Dev</span>
            </div>

          </div>

          {/* Right Column: Prominent Portrait Photo Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group w-full max-w-[360px] sm:max-w-[400px]">
              
              {/* Electric Blue and Purple Backing Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />

              {/* Main Photo Card Frame */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-200 overflow-hidden shadow-2xl">
                
                {/* Photo Aspect Ratio Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                  <img
                    src={photoUrl}
                    alt={`${portfolioData.personal.name} - ${portfolioData.personal.role}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  
                  {/* Subtle Gradient Scrim at Bottom for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Identification Overlay at Bottom of Photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold text-lg leading-tight tracking-tight drop-shadow-sm">
                      {portfolioData.personal.name}
                    </p>
                    <p className="text-xs text-blue-300 font-medium drop-shadow-sm">
                      BSIT Undergraduate · GCUF Faisalabad
                    </p>
                  </div>
                </div>

                {/* Photo Action Toolbar (Upload / Reset) */}
                <div className="p-3 bg-slate-950/95 dark:bg-slate-950/95 light:bg-slate-900 text-slate-300 flex items-center justify-between text-xs border-t border-slate-800">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>Real Photograph Verified</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={handleUploadClick}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 transition-colors"
                      title="Upload your own photo anytime"
                    >
                      <Upload className="w-3 h-3" />
                      <span>{isCustomPhoto ? "Replace" : "Upload New"}</span>
                    </button>

                    {isCustomPhoto && (
                      <button
                        type="button"
                        onClick={resetPhotoUrl}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                        title="Reset back to default suit portrait"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 4-Item Highlights Strip in a Full-Width Row Below Split */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Primary Focus</span>
            <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">Cybersecurity Labs</h4>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">Defensive concepts, network analysis & Linux practice</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold">Academic Program</span>
            <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">BSIT at GCUF</h4>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">Government College University Faisalabad, Pakistan</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-sky-400 font-semibold">Web & CMS</span>
            <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">Modern Frontend & WP</h4>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">Responsive websites, custom landing pages & UX</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Data & AI</span>
            <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">Analytics & Automation</h4>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">Excel BI reporting & practical AI prompt workflows</p>
          </div>
        </div>

      </div>
    </section>
  );
};
