import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, BookOpen, Upload, Image, Link2, Rocket, CheckCircle2, Copy } from 'lucide-react';

export const GuideModal: React.FC = () => {
  const { isGuideModalOpen, closeGuideModal } = usePortfolio();
  const [copiedSection, setCopiedSection] = React.useState<string | null>(null);

  if (!isGuideModalOpen) return null;

  const copySnippet = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-slate-900 text-slate-100 border border-slate-800 rounded-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h3 className="font-bold text-base text-white">
              Abdul Rahman · Portfolio Customization & Deployment Guide
            </h3>
          </div>

          <button
            onClick={closeGuideModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm">
          
          {/* Step 1: Uploading Profile Picture */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <Upload className="w-5 h-5 text-blue-400" />
              <span>1. How to Upload & Change Your Profile Photo</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Your real sky blue suit photograph is already pre-configured as the default profile image across the Navbar and Hero sections. You have two ways to replace it anytime:
            </p>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Instant Browser Upload:</strong> Click the <span className="text-blue-400 font-semibold">"Upload New"</span> button directly on your photo card in the Hero section. It immediately updates live in your browser and saves to your local storage.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Permanent File Replacement:</strong> Place your new photo in <code className="text-blue-400">/public/assets/</code> (e.g., <code className="text-blue-400">my_photo.jpg</code>) and update <code className="text-blue-400">profilePhoto</code> in <code className="text-blue-400">/src/data/portfolioData.ts</code>.</span>
              </div>
            </div>
          </div>

          {/* Step 2: Replacing Contact Details & Social Links */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <Link2 className="w-5 h-5 text-purple-400" />
              <span>2. How to Update Contact & Social Media Links</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              All personal information is managed in one central file: <code className="text-blue-400">/src/data/portfolioData.ts</code>. Open that file to update:
            </p>
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
              <p>email: "abdulrahman245441@gmail.com",</p>
              <p>whatsappLink: "https://wa.me/923000000000",</p>
              <p>linkedinUrl: "https://linkedin.com/in/your-username",</p>
              <p>githubUrl: "https://github.com/your-username",</p>
            </div>
          </div>

          {/* Step 3: Project Screenshots & Certificates */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <Image className="w-5 h-5 text-sky-400" />
              <span>3. How to Add Project Screenshots & Certificates</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To add real project screenshots or certificate images:
            </p>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5">
              <li>Save your screenshots inside <code className="text-blue-400">/public/projects/</code> (e.g. <code className="text-blue-400">/projects/dashboard.png</code>).</li>
              <li>In <code className="text-blue-400">/src/data/portfolioData.ts</code>, set the <code className="text-blue-400">image</code> property of each project to that path.</li>
              <li>To add a certificate, append an entry to <code className="text-blue-400">certifications</code> array in <code className="text-blue-400">portfolioData.ts</code> with your credential ID and verification URL.</li>
            </ul>
          </div>

          {/* Step 4: Deploying to Vercel */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <Rocket className="w-5 h-5 text-emerald-400" />
              <span>4. Steps to Deploy on Vercel for Free</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs text-slate-300">
              <p><strong>Step A:</strong> Initialize a Git repository and push this code to your GitHub account:</p>
              <div className="p-2 rounded bg-slate-900 font-mono text-[11px] text-blue-300 flex justify-between items-center">
                <span>git init &amp;&amp; git add . &amp;&amp; git commit -m "Initial portfolio commit" &amp;&amp; git push</span>
                <button
                  onClick={() => copySnippet('git init && git add . && git commit -m "Initial portfolio commit"', 'git')}
                  className="text-slate-400 hover:text-white"
                >
                  {copiedSection === 'git' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p><strong>Step B:</strong> Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-blue-400 underline">vercel.com</a> and sign in with GitHub.</p>
              <p><strong>Step C:</strong> Click <strong>"Add New Project"</strong>, select your portfolio repository, and click <strong>"Deploy"</strong>.</p>
              <p><strong>Step D:</strong> Vercel will automatically detect Vite and publish your site with a free custom SSL domain (e.g. <code className="text-blue-300">abdulrahman.vercel.app</code>) in ~30 seconds!</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <span className="text-xs text-slate-400">Designed for Abdul Rahman · GCUF BSIT</span>
          <button
            onClick={closeGuideModal}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
