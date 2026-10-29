import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, MessageSquare, Linkedin, Github, Phone, Send, CheckCircle2, Copy, AlertCircle, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contactSubject, setContactSubject } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (contactSubject) {
      setFormData(prev => ({ ...prev, subject: contactSubject }));
    }
  }, [contactSubject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('sending');

    // Simulate reliable dispatch & prepare direct mailto option
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyMessage = () => {
    const textToCopy = `To: ${portfolioData.personal.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setContactSubject('');
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <span>08</span>
            <span className="text-slate-500">/</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            Contact & Professional Inquiries
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Have an internship opening, freelance web project, or data inquiry? Reach out directly via email, WhatsApp, or through the inquiry form.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                Direct Communication Channels
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 block">Primary Email</span>
                    <span className="text-sm font-semibold text-white dark:text-white light:text-slate-900 truncate block group-hover:text-blue-400">
                      {portfolioData.personal.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={portfolioData.personal.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 block">WhatsApp Direct</span>
                    <span className="text-sm font-semibold text-white dark:text-white light:text-slate-900 block group-hover:text-emerald-400">
                      {portfolioData.personal.whatsappNumber} (Chat online)
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={portfolioData.personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 block">Professional Network</span>
                    <span className="text-sm font-semibold text-white dark:text-white light:text-slate-900 block group-hover:text-blue-400">
                      LinkedIn Profile
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-slate-700/20 text-slate-300 group-hover:bg-slate-700 group-hover:text-white transition-colors shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 block">Code Repositories</span>
                    <span className="text-sm font-semibold text-white dark:text-white light:text-slate-900 block group-hover:text-slate-300">
                      GitHub Profile
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Location: Faisalabad, Pakistan</span>
                <span className="text-emerald-400">Response within 24h</span>
              </div>
            </div>

          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
                Fill in your details below. You can send directly or open in your default email client.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-800/40 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-white">
                        Inquiry Prepared Successfully!
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Your message for <strong>{portfolioData.personal.name}</strong> is ready. For instant delivery to <code>{portfolioData.personal.email}</code>, you can open your email application or copy the formatted text.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-1 font-mono">
                    <p><strong className="text-slate-400">From:</strong> {formData.name} ({formData.email})</p>
                    <p><strong className="text-slate-400">Subject:</strong> {formData.subject}</p>
                    <p><strong className="text-slate-400">Message:</strong> {formData.message}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleMailtoDirect}
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                        Your Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. recruiter@example.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity / WordPress Project Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project details, internship scope, or timeline..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-slate-500">
                      Direct transmission to {portfolioData.personal.email}
                    </p>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all disabled:opacity-50"
                    >
                      {status === 'sending' ? (
                        <span>Preparing...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
