import React, { useState } from 'react';
import { portfolioData, CertificateItem } from '../data/portfolioData';
import { Award, CheckCircle2, Clock, ExternalLink, ShieldCheck, HelpCircle } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Certificates: React.FC = () => {
  const { openGuideModal } = usePortfolio();
  const [filterStatus, setFilterStatus] = useState<'All' | 'Verified' | 'In Progress'>('All');

  const certificates = portfolioData.certifications || [];
  const filteredCertificates = filterStatus === 'All'
    ? certificates
    : certificates.filter(c => c.status === filterStatus);

  return (
    <section id="certificates" className="py-20 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span>07</span>
              <span className="text-slate-500">/</span>
              <span>Credentials & Training Badges</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Certifications & Achievements
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
              Authentic credential logging for university coursework completions, technical labs, and specialized training programs.
            </p>
          </div>

          {/* Quick filter tabs */}
          <div className="flex items-center gap-2">
            {(['All', 'Verified', 'In Progress'] as const).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  filterStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Display or Tasteful Empty State */}
        {filteredCertificates.length === 0 ? (
          <div className="p-12 rounded-2xl bg-slate-900/40 border border-slate-800 text-center max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
              Certificates and achievements will be added soon.
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Currently preparing for vendor and academic cybersecurity and data credentials. Verified certificate badges will appear here once finalized.
            </p>
            <button
              onClick={openGuideModal}
              className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold pt-2"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>How to add your certificate credentials</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 text-blue-400">
                      <Award className="w-6 h-6" />
                    </div>
                    {cert.status === 'Verified' ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Credential</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-950/40 px-2.5 py-0.5 rounded border border-amber-800/40">
                        <Clock className="w-3.5 h-3.5" />
                        <span>In Progress / Lab Track</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                    {cert.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
                    {cert.issuingOrganization} · Issued {cert.issueDate}
                  </p>

                  {cert.credentialId && (
                    <div className="mt-3 text-xs font-mono text-slate-400 bg-slate-950/60 px-2.5 py-1 rounded inline-block">
                      ID: {cert.credentialId}
                    </div>
                  )}

                  {/* Skills covered */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                    {cert.skillsCovered.map((s, idx) => (
                      <span key={idx} className="bg-slate-800/60 px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Verifiable Academic Log</span>
                  {cert.verificationLink ? (
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium"
                    >
                      <span>Verify Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-slate-500 italic">Certificate doc available on request</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
