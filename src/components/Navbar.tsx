import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { portfolioData } from '../data/portfolioData';
import { Sun, Moon, Menu, X, ArrowUpRight, HelpCircle, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme, photoUrl, openCVModal, openGuideModal } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'courses', 'projects', 'services', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Courses', href: '#courses' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Education', href: '#education' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/85 dark:bg-slate-950/90 light:bg-white/90 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 sm:h-20">
          
          {/* Zone 1: Single text element Brand Zone with miniature photo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-sm transition-transform group-hover:scale-105 shrink-0">
              <img
                src={photoUrl}
                alt={portfolioData.personal.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top rounded-full bg-slate-800"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 hidden sm:block">
                BSIT Student · GCUF
              </span>
            </div>
          </a>

          {/* Zone 2: 4-8 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                    isActive
                      ? 'text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold'
                      : 'hover:text-white dark:hover:text-white light:hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + toggles */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Guide Button */}
            <button
              onClick={openGuideModal}
              title="Editing & Vercel Deployment Instructions"
              className="p-2 rounded-lg text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
              aria-label="Help and customization guide"
            >
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Dark/Light mode toggle */}
            <button
              onClick={toggleTheme}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-lg text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
              aria-label="Toggle color theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
              )}
            </button>

            {/* CV Modal trigger button */}
            <button
              onClick={openCVModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>CV</span>
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all whitespace-nowrap shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 dark:border-slate-800 light:border-slate-200 px-4 pt-3 pb-6 transition-all">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCVModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium rounded-lg bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/60"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                View & Download CV
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openGuideModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2 text-xs text-slate-400 hover:text-slate-200"
              >
                <HelpCircle className="w-4 h-4" />
                Customization & Vercel Guide
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
