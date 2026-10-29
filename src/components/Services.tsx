import React from 'react';
import { portfolioData, ServiceItem } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';
import { Globe, Cpu, Layout, FileSpreadsheet, Palette, Sparkles, ArrowRight, Check, ShieldCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const { setContactSubject } = usePortfolio();

  const handleInquire = (service: ServiceItem) => {
    setContactSubject(`Inquiry regarding ${service.title}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'service-wordpress':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'service-ai-web':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'service-business-portfolio':
        return <Layout className="w-5 h-5 text-sky-400" />;
      case 'service-landing-page':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'service-graphics':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'service-excel':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'service-ai-tools':
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-20 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span>05</span>
              <span className="text-slate-500">/</span>
              <span>Freelance & Technical Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Services & Practical Solutions
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
              Honest, practical technical and creative assistance based on verified student skills, clean workflows, and transparent communication.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Strict ethical guidelines & clear scopes</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.services.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Scope items */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                    Service Deliverables:
                  </span>
                  {service.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100">
                <button
                  type="button"
                  onClick={() => handleInquire(service)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800/80 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-700/60 hover:border-blue-500 transition-all group"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Cybersecurity Notice Card */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-950/20 dark:bg-blue-950/20 light:bg-blue-50/60 border border-blue-900/40 dark:border-blue-900/40 light:border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                Security & Cybersecurity Boundaries
              </h4>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5">
                All cybersecurity practice is strictly focused on defensive security fundamentals, secure web configurations, and authorized educational laboratory environments. No unauthorized testing or hacking is performed.
              </p>
            </div>
          </div>
          <a
            href="#courses"
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 whitespace-nowrap shrink-0"
          >
            Review Security Lab Scope →
          </a>
        </div>

      </div>
    </section>
  );
};
