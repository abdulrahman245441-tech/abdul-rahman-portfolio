import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { portfolioData } from '../data/portfolioData';
import { X, Download, Printer, FileText, CheckCircle, GraduationCap, Shield, Mail, Phone, MapPin } from 'lucide-react';

export const CVModal: React.FC = () => {
  const { isCVModalOpen, closeCVModal } = usePortfolio();

  if (!isCVModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden print:border-none print:shadow-none print:max-h-full print:rounded-none">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <h3 className="font-bold text-base text-white dark:text-white light:text-slate-900">
              Curriculum Vitae Preview · {portfolioData.personal.name}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={closeCVModal}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-8">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-white dark:text-white light:text-slate-900">
              {portfolioData.personal.name}
            </h1>
            <p className="text-sm font-medium text-blue-400">
              {portfolioData.personal.role}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{portfolioData.personal.email}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{portfolioData.personal.location}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>GCUF Undergraduate</span>
              </span>
            </div>
          </div>

          {/* Professional Objective */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              Professional Profile & Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              Enthusiastic and disciplined BS Information Technology undergraduate student at Government College University Faisalabad (GCUF) seeking an internship or entry-level opportunity. Hands-on experience with defensive cybersecurity lab setups, data analysis in Microsoft Excel, responsive web engineering, and WordPress deployments. Dedicated to building reliable, secure, and user-friendly digital systems.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
              Education
            </h2>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1 text-sm">
              <div className="flex items-center justify-between font-bold text-white">
                <span>{portfolioData.education.degree}</span>
                <span className="text-xs text-blue-400">{portfolioData.education.startYear} – {portfolioData.education.expectedGraduation}</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {portfolioData.education.institution} · {portfolioData.education.location}
              </p>
              <div className="pt-2 text-xs text-slate-400">
                <strong>Coursework:</strong> {portfolioData.education.relevantCoursework.join(', ')}
              </div>
            </div>
          </div>

          {/* Technical Competencies */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
              Technical & Creative Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <strong className="text-blue-300 block mb-1">Cybersecurity (Lab Practice):</strong>
                <span className="text-slate-300">Networking (TCP/IP), Linux terminal, Wireshark packet capture, Nmap scanning, defensive hardening.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <strong className="text-purple-300 block mb-1">Artificial Intelligence:</strong>
                <span className="text-slate-300">Prompt engineering, LLM workflow automation, AI-assisted development tools.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <strong className="text-sky-300 block mb-1">Data Analytics:</strong>
                <span className="text-slate-300">Microsoft Excel (PivotTables, Formulas, Data cleaning), visual KPI reporting.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <strong className="text-emerald-300 block mb-1">Web Development & CMS:</strong>
                <span className="text-slate-300">HTML5, CSS3, Tailwind CSS, JavaScript basics, WordPress customization.</span>
              </div>
            </div>
          </div>

          {/* Academic & Freelance Projects */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
              Selected Projects & Lab Work
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {portfolioData.projects.slice(0, 4).map((p) => (
                <div key={p.id} className="border-b border-slate-800/60 pb-3 last:border-0">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{p.title}</span>
                    <span className="text-xs text-slate-400">{p.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {p.description}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Technologies: {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950/50 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <p className="text-xs text-slate-400">
            To provide your own PDF CV, drop <code className="text-blue-400">Abdul_Rahman_CV.pdf</code> into <code className="text-blue-400">/public/assets/</code>.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={closeCVModal}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
