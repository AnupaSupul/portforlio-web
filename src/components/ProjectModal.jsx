import React, { useState, useEffect } from 'react';
import { X, Activity, Shield, CheckCircle2, Cpu, Layers, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play for gallery if multiple slides
  useEffect(() => {
    if (!project?.details?.gallery || project.details.gallery.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % project.details.gallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project]);

  if (!project) return null;

  const { details } = project;
  const githubUrl = project.github || 'https://github.com/AnupaSupul';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-white/15 rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-fade-in-up z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-slate-900/90 backdrop-blur-md z-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-orange uppercase tracking-wider mb-1">
              <span>FEATURED SPECIFICATION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Gallery Section */}
          {details?.gallery && details.gallery.length > 0 && (
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-black group overflow-hidden">
              {details.gallery.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    idx === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.caption}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                    <p className="text-white text-base sm:text-lg font-sans font-medium drop-shadow-md">
                      {slide.caption}
                    </p>
                  </div>
                </div>
              ))}

              {/* Prev / Next controls */}
              {details.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev - 1 + details.gallery.length) % details.gallery.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-brand-orange text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev + 1) % details.gallery.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-brand-orange text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Dots */}
              {details.gallery.length > 1 && (
                <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                  {details.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeSlide ? 'bg-brand-orange w-6' : 'bg-white/40 w-2'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {details ? (
            <div className="p-6 sm:p-10 grid md:grid-cols-3 gap-8 sm:gap-10">
              {/* Main Content (Left 2/3) */}
              <div className="md:col-span-2 space-y-8">

                {/* Overview */}
                <section>
                  <h3 className="font-display font-bold text-xl text-white mb-3 flex items-center gap-2.5">
                    <Activity size={20} className="text-brand-orange" />
                    <span>Executive Overview</span>
                  </h3>
                  <p className="font-sans text-slate-300 leading-relaxed text-base sm:text-lg font-light">
                    {details.overview}
                  </p>
                </section>

                {/* Problem & Solution Cards */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-2xl">
                    <h4 className="text-red-400 font-mono font-bold mb-2 text-xs uppercase flex items-center gap-2">
                      <Shield size={14} /> The Problem
                    </h4>
                    <p className="font-sans text-slate-300 text-sm leading-relaxed font-light">
                      {details.problem}
                    </p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl">
                    <h4 className="text-emerald-400 font-mono font-bold mb-2 text-xs uppercase flex items-center gap-2">
                      <CheckCircle2 size={14} /> The Engineered Solution
                    </h4>
                    <p className="font-sans text-slate-300 text-sm leading-relaxed font-light">
                      {details.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <section>
                  <h3 className="font-display font-bold text-xl text-white mb-4">
                    Key Architectural Capabilities
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm font-sans font-light">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Outcome */}
                <section className="border-t border-white/10 pt-6">
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    Measured Impact & Outcome
                  </h3>
                  <p className="font-sans text-slate-300 italic text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                    "{details.outcome}"
                  </p>
                </section>
              </div>

              {/* Sidebar (Right 1/3) */}
              <div className="space-y-6">
                {/* Tech Stack Card */}
                <div className="bg-slate-800/60 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xs font-mono font-bold text-brand-orange mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Cpu size={16} /> Technical Stack
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-slate-400 font-mono mb-1">Frontend Layer</div>
                      <div className="text-white font-sans text-sm font-semibold">{details.techStack.frontend}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono mb-1">Backend Services</div>
                      <div className="text-white font-sans text-sm font-semibold">{details.techStack.backend}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono mb-1">Persistence & Vector</div>
                      <div className="text-white font-sans text-sm font-semibold">{details.techStack.database}</div>
                    </div>
                  </div>
                </div>

                {/* My Role Card */}
                <div className="bg-slate-800/60 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xs font-mono font-bold text-brand-orange mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Layers size={16} /> Engineering Contributions
                  </h3>
                  <p className="font-sans text-slate-300 text-sm leading-relaxed font-light">
                    {details.role}
                  </p>
                </div>

                {/* Actions */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-brand-orange hover:bg-orange-600 text-white font-sans font-bold text-sm rounded-xl transition-all shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2"
                >
                  <Github size={18} />
                  <span>View Source on GitHub</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-500 font-sans">
              Detailed specification coming soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
