import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Check, Code, Cpu, Database, Cloud, Terminal, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from '../common/TiltCard';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const [activeDimension, setActiveDimension] = useState('builder'); // 'builder' | 'researcher'
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const canvasRef = useRef(null);

  // ScrollTrigger entrance for heading & content
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Split line entrance for headline
      gsap.fromTo(
        '.about-reveal-line',
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
          },
        }
      );

      // Canvas entrance
      gsap.fromTo(
        canvasRef.current,
        { scale: 0.96, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: canvasRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-36 bg-[#FAF8F5] text-slate-900 relative overflow-hidden">
      {/* Warm ambient orange radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-brand-orange/10 blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">

        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-6 bg-brand-orange rounded-full" />
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            01 / ABOUT
          </span>
        </div>

        {/* Top Editorial Row with Masked Split-Text Reveal */}
        <div ref={headlineRef} className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.04] font-sans">
              <span className="block overflow-hidden">
                <span className="about-reveal-line block">Beyond</span>
              </span>
              <span className="block overflow-hidden">
                <span className="about-reveal-line block text-brand-orange">the Syntax</span>
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-lg text-slate-700 font-sans leading-relaxed font-normal">
              Computer Science undergraduate at the <strong className="text-brand-orange font-bold">University of Ruhuna</strong>, operating across robust full-stack engineering, cloud architectures, and practical machine learning research.
            </p>
          </div>
        </div>

        {/* 3-Column Studio Showcase */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

          {/* LEFT: Contextual Credentials (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-4">
            <TiltCard maxTilt={5} className="h-full">
              <div className="bg-white rounded-3xl p-4 sm:p-6 border-2 border-orange-200/80 shadow-md card-hover-lift relative overflow-hidden group flex flex-col justify-between h-full">
                <div className="border-beam-glow" />
                <div>
                  <span className="text-[11px] font-mono text-brand-orange font-bold uppercase tracking-wider block mb-4">
                    ACADEMIC FOUNDATION
                  </span>
                  <div className="flex items-start gap-3.5 mb-6 group/item">
                    <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-orange/30 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        Computer Science Undergraduate
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 font-medium">
                        University of Ruhuna, Sri Lanka
                      </p>
                      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-orange-100 text-[10px] font-mono font-bold text-brand-orange">
                        2023 — Present
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-brand-orange font-bold uppercase tracking-wider block mb-4 pt-4 border-t border-orange-100">
                    INDUSTRY INTERNSHIP
                  </span>
                  <div className="flex items-start gap-3.5 mb-6 group/item">
                    <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-orange/30 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        Intern Software Engineer
                      </h3>
                      <p className="text-xs text-brand-orange font-bold mt-0.5">
                        BotCalm
                      </p>
                      <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-orange-100 text-[10px] font-mono font-bold text-brand-orange">
                        Apr 2026 – Oct 2026
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-orange-100">
                  <span className="text-[10px] font-mono text-brand-orange uppercase font-bold tracking-wider block mb-1">
                    CORE INTERESTS
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Full-Stack Systems • Backend APIs • Deep Learning Vision • Cloud Deployment
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* CENTER: Rich Burnt-Orange and Bright-Orange Architecture Canvas (Col span 6) */}
          <div
            ref={canvasRef}
            className="lg:col-span-6 bg-gradient-to-br from-[#240B02] via-[#3B1304] to-[#1A0701] rounded-3xl p-4 sm:p-8 border-2 border-brand-orange text-white shadow-2xl flex flex-col justify-between relative overflow-hidden group/canvas"
          >
            {/* Glowing inner orange ambiance with gentle pulse */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/25 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* SVG Background Circuit Particles */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF5500" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFAA00" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path d="M 50 100 L 200 100 L 250 150 L 450 150 L 500 200" fill="none" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="6 4" className="animate-flow-beam" />
              <path d="M 100 350 L 250 350 L 300 300 L 550 300" fill="none" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="8 6" className="animate-flow-beam" />
            </svg>

            {/* Canvas Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 border-b border-orange-500/30 mb-4 sm:mb-6 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping-slow" />
                <span className="text-[11px] sm:text-xs font-mono font-bold text-orange-200 truncate">
                  {activeDimension === 'builder' ? 'fullstack-architecture.manifest' : 'neural-vision.pipeline'}
                </span>
              </div>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-brand-orange text-white text-[9px] sm:text-[10px] font-mono font-black uppercase shadow-md shadow-brand-orange/40 flex items-center gap-1.5">
                <Sparkles size={11} />
                <span>{activeDimension === 'builder' ? 'Full-Stack Architecture' : 'Vision Pipeline'}</span>
              </span>
            </div>

            {/* DYNAMIC ORANGE-DOMINANT ARCHITECTURE VISUALIZATION */}
            <div className="relative z-10 transition-opacity duration-300">
              {activeDimension === 'builder' ? (
                <div className="space-y-4 my-auto py-2 animate-fade-in">
                  {/* 1. Client UI Layer */}
                  <div className="bg-[#2E1106]/90 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/40 shadow-md flex items-center justify-between hover:border-brand-orange transition-all hover:translate-x-1">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold text-xs font-mono shadow-md">
                        UI
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-sans">Client Interaction Layer</div>
                        <div className="text-[11px] text-orange-200 font-mono">React.js • Next.js • Tailwind CSS • Responsive SPAs</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-orange-300 bg-orange-500/20 px-2 py-0.5 rounded border border-orange-500/30">Client</span>
                  </div>

                  {/* Animated Flow Connector with Glowing Particle */}
                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="px-3 py-0.5 rounded-full bg-brand-orange text-white text-[9px] font-mono font-bold flex items-center gap-1.5 shadow-md shadow-brand-orange/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>REST & Async APIs</span>
                      <span>↓</span>
                    </div>
                  </div>

                  {/* 2. Microservices & API Layer */}
                  <div className="bg-[#3B1508]/90 backdrop-blur-sm rounded-2xl p-4 border-2 border-brand-orange shadow-lg shadow-brand-orange/30 flex items-center justify-between hover:translate-x-1 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white text-brand-orange flex items-center justify-center font-black text-xs font-mono shadow">
                        API
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-sans">Application & Services Layer</div>
                        <div className="text-[11px] text-orange-100 font-mono">Node.js • Express.js • Spring Boot • FastAPI</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-white bg-brand-orange px-2 py-0.5 rounded font-bold shadow">Backend Core</span>
                  </div>

                  {/* Animated Flow Connector */}
                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="px-3 py-0.5 rounded-full bg-brand-orange text-white text-[9px] font-mono font-bold flex items-center gap-1.5 shadow-md shadow-brand-orange/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Relational & Vector Data</span>
                      <span>↓</span>
                    </div>
                  </div>

                  {/* 3. Persistence & Cloud Infrastructure */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-[#2E1106]/90 backdrop-blur-sm rounded-2xl p-3.5 border border-orange-500/40 flex items-center gap-2.5 hover:border-brand-orange transition-colors">
                      <Database size={16} className="text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Data Storage</div>
                        <div className="text-[10px] text-orange-200 font-mono">MySQL • MongoDB • ChromaDB</div>
                      </div>
                    </div>

                    <div className="bg-[#2E1106]/90 backdrop-blur-sm rounded-2xl p-3.5 border border-orange-500/40 flex items-center gap-2.5 hover:border-brand-orange transition-colors">
                      <Cloud size={16} className="text-orange-300 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Cloud Infrastructure</div>
                        <div className="text-[10px] text-orange-200 font-mono">Docker • AWS (EC2, S3)</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 my-auto py-2 animate-fade-in">
                  {/* 1. Agricultural Leaf Data */}
                  <div className="bg-[#2E1106]/90 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/40 shadow-md flex items-center justify-between hover:border-brand-orange transition-all hover:translate-x-1">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold text-xs font-mono shadow-md">
                        IMG
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-sans">Field Specimen Input</div>
                        <div className="text-[11px] text-orange-200 font-mono">Real-world Rice Leaf Images • Brown Spot Pathology</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-orange-300 bg-orange-500/20 px-2 py-0.5 rounded border border-orange-500/30">Agricultural Dataset</span>
                  </div>

                  {/* Animated Flow Connector */}
                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="px-3 py-0.5 rounded-full bg-brand-orange text-white text-[9px] font-mono font-bold flex items-center gap-1.5 shadow-md shadow-brand-orange/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Feature Extraction Convolutions</span>
                      <span>↓</span>
                    </div>
                  </div>

                  {/* 2. Deep Convolutional Architecture */}
                  <div className="bg-[#3B1508]/90 backdrop-blur-sm rounded-2xl p-4 border-2 border-brand-orange shadow-lg shadow-brand-orange/30 flex items-center justify-between hover:translate-x-1 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white text-brand-orange flex items-center justify-center font-black text-xs font-mono shadow">
                        CNN
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-sans">VGG19 Transfer Learning Architecture</div>
                        <div className="text-[11px] text-orange-100 font-mono">Dense Feature Convolutions • Max Pooling • Softmax</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-white bg-brand-orange px-2 py-0.5 rounded font-bold shadow">95.27% Val</span>
                  </div>

                  {/* Animated Flow Connector */}
                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="px-3 py-0.5 rounded-full bg-brand-orange text-white text-[9px] font-mono font-bold flex items-center gap-1.5 shadow-md shadow-brand-orange/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Classification & RAG Vectors</span>
                      <span>↓</span>
                    </div>
                  </div>

                  {/* 3. Diagnostic Inference & Publications */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-[#2E1106]/90 backdrop-blur-sm rounded-2xl p-3.5 border border-orange-500/40 flex items-center gap-2.5 hover:border-brand-orange transition-colors">
                      <Cpu size={16} className="text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Diagnostic Output</div>
                        <div className="text-[10px] text-orange-200 font-mono">Brown Spot • 92.62% Test Acc</div>
                      </div>
                    </div>

                    <div className="bg-[#2E1106]/90 backdrop-blur-sm rounded-2xl p-3.5 border border-orange-500/40 flex items-center gap-2.5 hover:border-brand-orange transition-colors">
                      <Terminal size={16} className="text-orange-300 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Legal RAG Retrieval</div>
                        <div className="text-[10px] text-orange-200 font-mono">ChromaDB • Vector Similarity</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status Terminal */}
            <div className="mt-4 pt-3 border-t border-orange-500/30 flex items-center justify-between text-[11px] font-mono text-orange-200 relative z-10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Architecture State: {activeDimension === 'builder' ? 'FULLSTACK_OPERATIONAL' : 'MODEL_VALIDATED'}
              </span>
              <span className="text-orange-300">TensorFlow • FastAPI</span>
            </div>
          </div>

          {/* RIGHT: Two Professional Dimensions (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">

            {/* DIMENSION 1: The Builder */}
            <TiltCard maxTilt={6} className="flex-1">
              <div
                onClick={() => setActiveDimension('builder')}
                className={`cursor-pointer rounded-3xl p-4 sm:p-6 border-2 transition-all duration-300 flex flex-col justify-between h-full card-hover-lift relative overflow-hidden ${
                  activeDimension === 'builder'
                    ? 'bg-white border-brand-orange shadow-xl ring-4 ring-brand-orange/20 scale-[1.01]'
                    : 'bg-white/90 border-orange-200 hover:border-brand-orange hover:bg-white'
                }`}
              >
                <div className="border-beam-glow" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-md shadow-brand-orange/30">
                      <Code size={20} />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                      activeDimension === 'builder' ? 'bg-orange-500 text-white shadow' : 'bg-orange-100 text-brand-orange'
                    }`}>
                      {activeDimension === 'builder' ? 'ACTIVE VIEW' : 'SWITCH'}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-sans tracking-tight mb-2">
                    The Builder
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed mb-4">
                    Engineering robust web applications, scalable backends, and cloud infrastructure.
                  </p>

                  <ul className="space-y-2">
                    {[
                      'Full-stack application development',
                      'React.js and Next.js interfaces',
                      'Node.js, Express.js & Spring Boot',
                      'REST API & database architecture',
                      'Docker containerization & AWS'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-sans">
                        <Check size={13} className="text-brand-orange shrink-0 stroke-[3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-orange-100 flex items-center justify-between text-xs font-mono font-bold text-brand-orange">
                  <span>VIEW ARCHITECTURE</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </TiltCard>

            {/* DIMENSION 2: The Researcher */}
            <TiltCard maxTilt={6} className="flex-1">
              <div
                onClick={() => setActiveDimension('researcher')}
                className={`cursor-pointer rounded-3xl p-4 sm:p-6 border-2 transition-all duration-300 flex flex-col justify-between h-full card-hover-lift relative overflow-hidden ${
                  activeDimension === 'researcher'
                    ? 'bg-white border-brand-orange shadow-xl ring-4 ring-brand-orange/20 scale-[1.01]'
                    : 'bg-white/90 border-orange-200 hover:border-brand-orange hover:bg-white'
                }`}
              >
                <div className="border-beam-glow" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-md shadow-brand-orange/30">
                      <Cpu size={20} />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                      activeDimension === 'researcher' ? 'bg-orange-500 text-white shadow' : 'bg-orange-100 text-brand-orange'
                    }`}>
                      {activeDimension === 'researcher' ? 'ACTIVE VIEW' : 'SWITCH'}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-sans tracking-tight mb-2">
                    The Researcher
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed mb-4">
                    Applying deep convolutional networks and Retrieval-Augmented Generation to domain challenges.
                  </p>

                  <ul className="space-y-2">
                    {[
                      'Deep learning vision (CNN, VGG16/19)',
                      'Rice leaf disease pathology (95.27%)',
                      'Retrieval-Augmented Generation (RAG)',
                      'Legal AI research & ChromaDB',
                      'Symposium papers (APSURS & RITSCON)'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-sans">
                        <Check size={13} className="text-brand-orange shrink-0 stroke-[3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-orange-100 flex items-center justify-between text-xs font-mono font-bold text-brand-orange">
                  <span>VIEW PIPELINE</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </TiltCard>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
