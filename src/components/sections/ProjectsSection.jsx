import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Scale, ChevronLeft, ChevronRight, Maximize2, Github, CheckCircle2, LayoutGrid, SlidersHorizontal, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../../data/projectsData';
import TiltCard from '../common/TiltCard';
import MagneticButton from '../common/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

// Interactive Multi-Screenshot Component for Production Engineering Projects
const ProductionProjectCard = ({ project, onSelectProject }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const cardRef = useRef(null);
  const touchStartX = useRef(null);

  const screenshots = project.details?.gallery && project.details.gallery.length > 0
    ? project.details.gallery
    : [{ url: project.image, caption: project.title }];

  const currentScreenshot = screenshots[activeImageIndex] || screenshots[0];

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setSlideDirection('prev');
    setActiveImageIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setSlideDirection('next');
    setActiveImageIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  // Touch swipe support for mobile users
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Keyboard navigation support when hovering over card
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  const getMockUrl = (id) => {
    switch (id) {
      case 2: return 'medicare.health/clinical-dashboard';
      case 3: return 'n8n.workflow/ai-automation-pipeline';
      case 4: return 'mathsclass.portal/attendance-qr';
      case 5: return 'plantpathology.ai/vgg19-diagnostics';
      default: return 'project.internal/system';
    }
  };

  return (
    <TiltCard maxTilt={5} className="h-full">
      <div
        ref={cardRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="bg-white rounded-3xl p-4 sm:p-7 border-2 border-orange-200/90 hover:border-brand-orange shadow-md hover:shadow-2xl transition-all duration-300 card-hover-lift flex flex-col justify-between h-full group relative overflow-hidden outline-none focus:ring-2 focus:ring-brand-orange/40"
      >
        {/* Magic UI / Aceternity inspired ambient border glow */}
        <div className="border-beam-glow" />

        <div>
          {/* Top Header Badge Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 relative z-10">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wide">
              {project.category === 'ai' ? 'AUTONOMOUS WORKFLOW' : project.category === 'research' ? 'RESEARCH APPLICATION' : 'FULL-STACK SYSTEM'}
            </span>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-mono text-brand-orange font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                {screenshots.length} Screens
              </span>

              <button
                onClick={() => onSelectProject(project)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-50 hover:bg-brand-orange text-brand-orange hover:text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                title="Open Detailed Case Study"
                aria-label="Open Detailed Case Study"
              >
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* =========================================================================
              INTERACTIVE MULTI-SCREENSHOT SHOWCASE (BROWSER MOCKUP WITH SWIPE & THUMBNAILS)
             ========================================================================= */}
          <div className="mb-5 bg-[#171412] rounded-2xl overflow-hidden border-2 border-orange-200/80 shadow-md group/preview relative z-10">
            {/* Simulated Browser Chrome Top Bar */}
            <div className="bg-[#241F1A] px-2.5 sm:px-3.5 py-2 flex items-center justify-between border-b border-orange-950/40">
              <div className="flex items-center gap-1.5">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              <div className="bg-[#171412] px-2 sm:px-3 py-0.5 rounded-md border border-orange-500/20 text-[9px] sm:text-[10px] font-mono text-orange-200/70 truncate max-w-[130px] sm:max-w-[240px] flex items-center gap-1">
                <span className="text-emerald-400">🔒</span>
                <span className="truncate">{getMockUrl(project.id)}</span>
              </div>

              <div className="text-[10px] font-mono text-orange-300 font-bold shrink-0">
                {activeImageIndex + 1}/{screenshots.length}
              </div>
            </div>

            {/* Main Screenshot Viewport with Smooth Image Transition & Touch Swipe */}
            <div
              onClick={() => onSelectProject(project)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer group/image bg-slate-950 select-none"
            >
              <img
                key={activeImageIndex}
                src={currentScreenshot.url}
                alt={currentScreenshot.caption}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105 ${
                  slideDirection === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                }`}
              />

              {/* Gradient Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-2.5 sm:p-3.5 pointer-events-none">
                <div className="flex items-end justify-between gap-2">
                  <div className="text-white text-[11px] sm:text-xs font-sans font-semibold drop-shadow-md line-clamp-1">
                    <span className="text-brand-orange font-mono font-bold mr-1">[{activeImageIndex + 1}]</span>
                    {currentScreenshot.caption}
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-white/20 hover:bg-brand-orange text-white px-2 py-0.5 rounded backdrop-blur-sm transition-colors shrink-0">
                    <Maximize2 size={10} />
                    <span>Expand</span>
                  </span>
                </div>
              </div>

              {/* Left & Right Arrow Navigation Overlays */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/70 hover:bg-brand-orange text-white flex items-center justify-center transition-all opacity-90 hover:opacity-100 hover:scale-110 shadow-lg backdrop-blur-sm z-20"
                    title="Previous screenshot"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/70 hover:bg-brand-orange text-white flex items-center justify-center transition-all opacity-90 hover:opacity-100 hover:scale-110 shadow-lg backdrop-blur-sm z-20"
                    title="Next screenshot"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
            </div>

            {/* Multi-Screenshot Responsive Thumbnail Selector Row */}
            {screenshots.length > 1 && (
              <div className="bg-[#1C1714] p-2 flex items-center gap-2 border-t border-orange-950/40 overflow-x-auto custom-scrollbar">
                {screenshots.map((s, sIdx) => {
                  const isActive = sIdx === activeImageIndex;
                  return (
                    <button
                      key={sIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSlideDirection(sIdx > activeImageIndex ? 'next' : 'prev');
                        setActiveImageIndex(sIdx);
                      }}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all flex items-center gap-2 p-1 sm:px-2 sm:py-1 shrink-0 ${
                        isActive
                          ? 'border-brand-orange bg-brand-orange/20 ring-1 ring-brand-orange'
                          : 'border-white/10 bg-white/5 opacity-60 hover:opacity-100 hover:border-orange-400/50'
                      }`}
                      aria-label={`View screenshot ${sIdx + 1}: ${s.caption}`}
                    >
                      <img
                        src={s.url}
                        alt={s.caption}
                        className="w-10 sm:w-8 h-6 sm:h-5 object-cover rounded shrink-0"
                      />
                      {/* Caption text visible on sm+ screens, hidden on compact mobile to prevent cut-off */}
                      <span className={`hidden sm:inline text-[10px] font-mono truncate max-w-[120px] text-left ${
                        isActive ? 'text-white font-bold' : 'text-slate-300'
                      }`}>
                        {s.caption.split('&')[0].trim()}
                      </span>
                    </button>
                  );
                })}

                {/* Mobile Screen Swipe Hint */}
                <span className="sm:hidden ml-auto text-[9px] font-mono text-orange-300/70 shrink-0 pr-1">
                  Swipe or tap
                </span>
              </div>
            )}
          </div>

          {/* Project Titles */}
          <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight mb-1.5 group-hover:text-brand-orange transition-colors relative z-10">
            {project.title}
          </h4>
          <div className="text-xs font-bold text-brand-orange mb-3 font-sans relative z-10">
            {project.subtitle}
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-normal mb-5 relative z-10">
            {project.description}
          </p>

          {/* Architecture Highlight Block */}
          <div className="bg-[#FAF8F5] rounded-2xl p-3.5 sm:p-4 border border-orange-100 mb-5 relative z-10">
            <span className="text-[10px] font-mono text-brand-orange uppercase font-bold tracking-wider block mb-2">
              CORE ARCHITECTURAL FEATURES
            </span>
            <div className="text-xs font-sans text-slate-700 space-y-1.5">
              {project.details.features.slice(0, 2).map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">▹</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tags & Action */}
        <div className="pt-4 border-t border-orange-100 flex items-center justify-between relative z-10 gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 sm:px-2.5 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-[10px] sm:text-[11px] font-mono font-semibold text-brand-orange"
              >
                {tag}
              </span>
            ))}
          </div>

          <MagneticButton
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-orange-50 hover:bg-brand-orange text-brand-orange hover:text-white text-xs font-mono font-bold transition-all shadow-sm hover:shadow-md shrink-0"
          >
            <span>CASE STUDY</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </MagneticButton>
        </div>
      </div>
    </TiltCard>
  );
};

const ProjectsSection = ({ onSelectProject }) => {
  const [activePipelineStep, setActivePipelineStep] = useState(3);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'carousel'
  const sectionRef = useRef(null);

  const flagship = projectsData[0]; // Sri Lankan Legal RAG
  const secondaryProjects = projectsData.slice(1);

  // Verified Factual Pipeline for Sri Lankan Legal RAG
  const legalRagPipeline = [
    { id: 0, title: 'User Legal Query', desc: 'Natural language statutory inquiry', tag: 'Client' },
    { id: 1, title: 'FastAPI Backend', desc: 'Asynchronous request handling & parsing', tag: 'API' },
    { id: 2, title: 'Vector Embedding', desc: 'Sentence Transformers dense semantic encoding', tag: 'Embedding' },
    { id: 3, title: 'ChromaDB Retrieval', desc: 'Similarity search across indexed Sri Lankan statutes', tag: 'Vector Store' },
    { id: 4, title: 'Grounded Response', desc: 'Context-augmented legal citations via OpenRouter LLM', tag: 'Output' }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 lg:py-36 bg-[#FAF8F5] text-slate-900 relative overflow-hidden border-t-2 border-orange-200">
      {/* Ambient radiant orange lighting */}
      <div className="absolute top-1/4 left-10 w-[800px] h-[600px] bg-brand-orange/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-6 bg-brand-orange rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
              03 / FEATURED PROJECTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-sans">
            Systems Built for <br />
            <span className="text-brand-orange">Real-World Execution</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-700 font-sans mt-3 sm:mt-4 font-normal leading-relaxed">
            Full-stack platforms, autonomous content pipelines, and domain AI assistants engineered with verified production architectures.
          </p>
        </div>

        {/* =========================================================================
            1. FLAGSHIP PROJECT SHOWCASE: SRI LANKAN LEGAL RAG (INTENTIONALLY PRESERVED)
           ========================================================================= */}
        <div className="bg-gradient-to-br from-[#240B02] via-[#3B1304] to-[#1A0701] rounded-3xl p-4 sm:p-8 lg:p-12 border-2 border-brand-orange text-white shadow-2xl mb-14 sm:mb-16 relative overflow-hidden group">
          {/* Glowing internal orange radiance */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/25 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left: Project Narrative & Actions (Col span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange text-white text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-4 sm:mb-6 shadow-md shadow-brand-orange/40">
                  <Scale size={13} />
                  <span>FLAGSHIP AI RESEARCH PROJECT</span>
                </div>

                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-2 sm:mb-3 font-sans">
                  Sri Lankan Legal RAG
                </h3>
                <div className="text-xs sm:text-base font-bold text-orange-200 mb-4 sm:mb-6 font-sans">
                  AI-Powered Legal Research Assistant
                </div>

                <p className="text-xs sm:text-base text-orange-100 font-sans leading-relaxed font-light mb-6 sm:mb-8">
                  A specialized Retrieval-Augmented Generation system designed to index and query Sri Lankan legislation, indexing statutory frameworks in ChromaDB to provide fact-checked answers with exact statutory references.
                </p>

                {/* Verified Tech Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {['Python', 'FastAPI', 'React.js', 'ChromaDB', 'Docker', 'OpenRouter API'].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-[#2E1106] border border-orange-500/40 text-[10px] sm:text-xs font-mono text-orange-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Responsive full-width on mobile, auto on desktop */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-6 border-t border-orange-500/30">
                <MagneticButton
                  onClick={() => onSelectProject(flagship)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-brand-orange hover:bg-orange-600 text-white font-sans font-bold text-xs sm:text-sm shadow-xl shadow-brand-orange/40 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Open Deep-Dive Case Study</span>
                  <ArrowRight size={15} />
                </MagneticButton>

                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-bold text-xs sm:text-sm transition-all active:scale-95 text-center"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right: Custom Interactive Architecture Flowchart (Col span 7) */}
            <div className="lg:col-span-7 bg-[#2E1106] rounded-2xl p-3.5 sm:p-6 lg:p-8 border border-orange-500/40 shadow-xl">
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-orange-500/30 mb-4 sm:mb-6">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-orange-300 font-bold uppercase tracking-wider block">
                    SYSTEM ARCHITECTURE
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white font-sans">
                    Legal RAG Retrieval & Inference Workflow
                  </h4>
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-orange-200">Interactive Pipeline</span>
              </div>

              {/* Connected Pipeline Flow with mobile-friendly spacing */}
              <div className="space-y-2 sm:space-y-3">
                {legalRagPipeline.map((node) => {
                  const isActive = activePipelineStep === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActivePipelineStep(node.id)}
                      className={`cursor-pointer rounded-xl p-2.5 sm:p-3.5 border-2 transition-all duration-200 flex items-center justify-between ${
                        isActive
                          ? 'bg-[#3B1508] border-brand-orange shadow-lg shadow-brand-orange/30 sm:translate-x-1.5'
                          : 'bg-[#240B02] border-orange-500/30 hover:border-brand-orange'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                        <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                          isActive ? 'bg-brand-orange text-white shadow' : 'bg-orange-500/20 text-orange-300'
                        }`}>
                          0{node.id + 1}
                        </span>
                        <div className="min-w-0">
                          <div className={`text-xs sm:text-sm font-bold font-sans truncate ${isActive ? 'text-white' : 'text-orange-100'}`}>
                            {node.title}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-orange-200/90 font-mono mt-0.5 line-clamp-1">
                            {node.desc}
                          </div>
                        </div>
                      </div>

                      <span className={`text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded border shrink-0 ${
                        isActive
                          ? 'bg-brand-orange text-white border-brand-orange font-bold shadow'
                          : 'bg-orange-500/10 text-orange-300 border-orange-500/20'
                      }`}>
                        {node.tag}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Architecture Legend */}
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-orange-500/30 flex items-center justify-between text-[10px] sm:text-xs font-mono text-orange-200">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold truncate">
                  <CheckCircle2 size={12} className="shrink-0" />
                  <span className="truncate">Context-Grounded Retrieval</span>
                </span>
                <span className="shrink-0">FastAPI + ChromaDB</span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            2. REMAINING FOUR DISTINCT PROJECTS SHOWCASE (WARM SURFACES + ORANGE IDENTITY)
           ========================================================================= */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900 font-sans tracking-tight mb-2">
              Production Engineering Projects
            </h3>
            <p className="text-sm text-slate-600 font-sans">
              Distinct software applications built for clients, enterprise healthcare, and autonomous workflows.
            </p>
          </div>

          {/* Desktop Layout View Switcher: Grid vs Horizontal Carousel */}
          <div className="hidden sm:inline-flex items-center bg-orange-100/70 p-1.5 rounded-2xl border border-orange-200 shadow-inner">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'text-slate-600 hover:text-brand-orange'
              }`}
            >
              <LayoutGrid size={14} />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                viewMode === 'carousel'
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'text-slate-600 hover:text-brand-orange'
              }`}
            >
              <SlidersHorizontal size={14} />
              <span>Horizontal Scroll</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: 2-Column Responsive Grid with 3D Tilt */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {secondaryProjects.map((project) => (
              <ProductionProjectCard
                key={project.id}
                project={project}
                onSelectProject={onSelectProject}
              />
            ))}
          </div>
        ) : (
          /* View Mode 2: Cinematic Horizontal Showcase (Desktop Scrollable) */
          <div className="relative animate-fade-in">
            <div className="flex gap-8 overflow-x-auto pb-6 pt-2 custom-scrollbar snap-x snap-mandatory">
              {secondaryProjects.map((project) => (
                <div key={project.id} className="w-[85vw] sm:w-[540px] lg:w-[600px] shrink-0 snap-center">
                  <ProductionProjectCard
                    project={project}
                    onSelectProject={onSelectProject}
                  />
                </div>
              ))}
            </div>
            <div className="text-center text-xs font-mono text-slate-500 mt-2">
              <span>Scroll horizontally or use touch swipe to browse engineering showcases</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;
