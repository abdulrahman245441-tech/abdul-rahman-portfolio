import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp, Mail, Github, Linkedin, MessageSquare, HelpCircle, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const { photoUrl, openCVModal, openGuideModal } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-indigo-500 shrink-0">
                <img
                  src={photoUrl}
                  alt={portfolioData.personal.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-full bg-slate-800"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white dark:text-white light:text-slate-900 block">
                  {portfolioData.personal.name}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 block">
                  BSIT Undergraduate · GCUF Faisalabad
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Developing practical digital solutions across cybersecurity lab research, modern responsive web applications, and data analytics.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                title="Send Email"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.whatsappLink}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Direct"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-blue-400 transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resource & Actions (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Student Resources
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={openCVModal}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white text-left"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>View & Print Curriculum Vitae</span>
              </button>

              <button
                onClick={openGuideModal}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white text-left"
              >
                <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
                <span>Customization & Vercel Guide</span>
              </button>

              <span className="text-[11px] text-slate-500 pt-2 block">
                GCUF Student ID / Portfolio Reference
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved. Built with React, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
