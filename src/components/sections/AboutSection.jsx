import React, { useState } from 'react';
import { GraduationCap, Briefcase, Sparkles, Check, Code, Cpu, Server, Database, Cloud, Terminal } from 'lucide-react';

const AboutSection = () => {
  const [activeDimension, setActiveDimension] = useState('builder'); // 'builder' | 'researcher'

  return (
    <section id="about" className="py-28 lg:py-36 bg-[#FAF8F5] text-slate-900 relative overflow-hidden">
      {/* Warm ambient orange radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-brand-orange/10 blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-6 bg-brand-orange rounded-full" />
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            01 / ABOUT
          </span>
        </div>

        {/* Top Editorial Row */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.04] font-sans">
              Beyond <br />
              <span className="text-brand-orange">the Syntax</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed font-normal">
              Computer Science undergraduate at the <strong className="text-brand-orange font-bold">University of Ruhuna</strong>, operating across robust full-stack engineering, cloud architectures, and practical machine learning research.
            </p>
          </div>
        </div>

        {/* 3-Column Studio Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: Contextual Credentials (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-4">
            <div className="bg-white rounded-3xl p-6 border-2 border-orange-200/80 shadow-md flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-mono text-brand-orange font-bold uppercase tracking-wider block mb-4">
                  ACADEMIC FOUNDATION
                </span>
                <div className="flex items-start gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-orange/30">
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
                <div className="flex items-start gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-orange/30">
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
          </div>

          {/* CENTER: Rich Burnt-Orange and Bright-Orange Architecture Canvas (Col span 6) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#240B02] via-[#3B1304] to-[#1A0701] rounded-3xl p-6 sm:p-8 border-2 border-brand-orange text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Glowing inner orange ambiance */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Canvas Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-orange-500/30 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-orange animate-pulse" />
                <span className="ml-2 text-xs font-mono font-bold text-orange-200">
                  {activeDimension === 'builder' ? 'fullstack-architecture.manifest' : 'neural-vision.pipeline'}
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[10px] font-mono font-black uppercase shadow-md shadow-brand-orange/40">
                {activeDimension === 'builder' ? 'Full-Stack Distributed System' : 'Deep Learning Vision Pipeline'}
              </span>
            </div>

            {/* DYNAMIC ORANGE-DOMINANT ARCHITECTURE VISUALIZATION */}
            {activeDimension === 'builder' ? (
              <div className="space-y-4 my-auto py-2">
                {/* 1. Client UI Layer */}
                <div className="bg-[#2E1106] rounded-2xl p-4 border border-orange-500/40 shadow-md flex items-center justify-between">
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

                {/* Animated Flow Connector */}
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="px-3 py-0.5 rounded-full bg-brand-orange text-white text-[9px] font-mono font-bold flex items-center gap-1 shadow-md shadow-brand-orange/50">
                    <span>REST & Async APIs</span>
                    <span>↓</span>
                  </div>
                </div>

                {/* 2. Microservices & API Layer */}
                <div className="bg-[#3B1508] rounded-2xl p-4 border-2 border-brand-orange shadow-lg shadow-brand-orange/30 flex items-center justify-between">
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
                  <div className="px-3 py-0.5 rounded-full bg-brand-orange text-white text-[9px] font-mono font-bold flex items-center gap-1 shadow-md shadow-brand-orange/50">
                    <span>Relational & Vector Data</span>
                    <span>↓</span>
                  </div>
                </div>

                {/* 3. Persistence & Cloud Infrastructure */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-[#2E1106] rounded-2xl p-3.5 border border-orange-500/40 flex items-center gap-2.5">
                    <Database size={16} className="text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Data Storage</div>
                      <div className="text-[10px] text-orange-200 font-mono">MySQL • MongoDB • ChromaDB</div>
                    </div>
                  </div>

                  <div className="bg-[#2E1106] rounded-2xl p-3.5 border border-orange-500/40 flex items-center gap-2.5">
                    <Cloud size={16} className="text-orange-300 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Cloud Infrastructure</div>
                      <div className="text-[10px] text-orange-200 font-mono">Docker • AWS (EC2, S3)</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 my-auto py-2">
                {/* 1. Agricultural Leaf Data */}
                <div className="bg-[#2E1106] rounded-2xl p-4 border border-orange-500/40 shadow-md flex items-center justify-between">
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
                  <div className="px-3 py-0.5 rounded-full bg-brand-orange text-white text-[9px] font-mono font-bold flex items-center gap-1 shadow-md shadow-brand-orange/50">
                    <span>Feature Extraction Convolutions</span>
                    <span>↓</span>
                  </div>
                </div>

                {/* 2. Deep Convolutional Architecture */}
                <div className="bg-[#3B1508] rounded-2xl p-4 border-2 border-brand-orange shadow-lg shadow-brand-orange/30 flex items-center justify-between">
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
                  <div className="px-3 py-0.5 rounded-full bg-brand-orange text-white text-[9px] font-mono font-bold flex items-center gap-1 shadow-md shadow-brand-orange/50">
                    <span>Classification & RAG Vectors</span>
                    <span>↓</span>
                  </div>
                </div>

                {/* 3. Diagnostic Inference & Publications */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-[#2E1106] rounded-2xl p-3.5 border border-orange-500/40 flex items-center gap-2.5">
                    <Cpu size={16} className="text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Diagnostic Output</div>
                      <div className="text-[10px] text-orange-200 font-mono">Brown Spot • 92.62% Test Acc</div>
                    </div>
                  </div>

                  <div className="bg-[#2E1106] rounded-2xl p-3.5 border border-orange-500/40 flex items-center gap-2.5">
                    <Terminal size={16} className="text-orange-300 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Legal RAG Retrieval</div>
                      <div className="text-[10px] text-orange-200 font-mono">ChromaDB • Vector Similarity</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Status Terminal */}
            <div className="mt-4 pt-3 border-t border-orange-500/30 flex items-center justify-between text-[11px] font-mono text-orange-200">
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
            <div
              onClick={() => setActiveDimension('builder')}
              className={`cursor-pointer rounded-3xl p-6 border-2 transition-all duration-300 flex-1 flex flex-col justify-between ${
                activeDimension === 'builder'
                  ? 'bg-white border-brand-orange shadow-xl ring-4 ring-brand-orange/20 scale-[1.02]'
                  : 'bg-white/80 border-orange-200 hover:border-brand-orange hover:bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-md shadow-brand-orange/30">
                    <Code size={20} />
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
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
                <span>→</span>
              </div>
            </div>

            {/* DIMENSION 2: The Researcher */}
            <div
              onClick={() => setActiveDimension('researcher')}
              className={`cursor-pointer rounded-3xl p-6 border-2 transition-all duration-300 flex-1 flex flex-col justify-between ${
                activeDimension === 'researcher'
                  ? 'bg-white border-brand-orange shadow-xl ring-4 ring-brand-orange/20 scale-[1.02]'
                  : 'bg-white/80 border-orange-200 hover:border-brand-orange hover:bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-md shadow-brand-orange/30">
                    <Cpu size={20} />
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
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
                <span>→</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
