import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Scale, Activity, Youtube, BookOpen, Microscope, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

const ProjectsSection = ({ onSelectProject }) => {
  const [activePipelineStep, setActivePipelineStep] = useState(3);

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
    <section id="projects" className="py-28 lg:py-36 bg-[#FAF8F5] text-slate-900 relative overflow-hidden border-t-2 border-orange-200">
      {/* Ambient radiant orange lighting */}
      <div className="absolute top-1/4 left-10 w-[800px] h-[600px] bg-brand-orange/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-6 bg-brand-orange rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
              03 / FEATURED PROJECTS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-sans">
            Systems Built for <br />
            <span className="text-brand-orange">Real-World Execution</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-sans mt-4 font-normal leading-relaxed">
            Full-stack platforms, autonomous content pipelines, and domain AI assistants engineered with verified production architectures.
          </p>
        </div>

        {/* 1. FLAGSHIP PROJECT SHOWCASE: SRI LANKAN LEGAL RAG (RICH BURNT ORANGE GRADIENT) */}
        <div className="bg-gradient-to-br from-[#240B02] via-[#3B1304] to-[#1A0701] rounded-3xl p-8 sm:p-12 border-2 border-brand-orange text-white shadow-2xl mb-16 relative overflow-hidden group">
          {/* Glowing internal orange radiance */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/25 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left: Project Narrative & Actions (Col span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-md shadow-brand-orange/40">
                  <Scale size={14} />
                  <span>FLAGSHIP AI RESEARCH PROJECT</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-3 font-sans">
                  Sri Lankan Legal RAG
                </h3>
                <div className="text-sm sm:text-base font-bold text-orange-200 mb-6 font-sans">
                  AI-Powered Legal Research Assistant
                </div>

                <p className="text-sm sm:text-base text-orange-100 font-sans leading-relaxed font-light mb-8">
                  A specialized Retrieval-Augmented Generation system designed to index and query Sri Lankan legislation, indexing statutory frameworks in ChromaDB to provide fact-checked answers with exact statutory references.
                </p>

                {/* Verified Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Python', 'FastAPI', 'React.js', 'ChromaDB', 'Docker', 'OpenRouter API'].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#2E1106] border border-orange-500/40 text-xs font-mono text-orange-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-orange-500/30">
                <button
                  onClick={() => onSelectProject(flagship)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-orange hover:bg-orange-600 text-white font-sans font-bold text-sm shadow-xl shadow-brand-orange/40 transition-all hover:scale-105"
                >
                  <span>Open Deep-Dive Case Study</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-bold text-sm transition-all"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right: Custom Interactive Architecture Flowchart (Col span 7) */}
            <div className="lg:col-span-7 bg-[#2E1106] rounded-2xl p-6 sm:p-8 border border-orange-500/40 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-orange-500/30 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-orange-300 font-bold uppercase tracking-wider block">
                    SYSTEM ARCHITECTURE
                  </span>
                  <h4 className="text-base font-bold text-white font-sans">
                    Legal RAG Retrieval & Inference Workflow
                  </h4>
                </div>
                <span className="text-xs font-mono text-orange-200">Interactive Pipeline</span>
              </div>

              {/* Connected Pipeline Flow */}
              <div className="space-y-3">
                {legalRagPipeline.map((node) => {
                  const isActive = activePipelineStep === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActivePipelineStep(node.id)}
                      className={`cursor-pointer rounded-xl p-3.5 border-2 transition-all duration-200 flex items-center justify-between ${
                        isActive
                          ? 'bg-[#3B1508] border-brand-orange shadow-lg shadow-brand-orange/30 translate-x-1.5'
                          : 'bg-[#240B02] border-orange-500/30 hover:border-brand-orange'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                          isActive ? 'bg-brand-orange text-white shadow' : 'bg-orange-500/20 text-orange-300'
                        }`}>
                          0{node.id + 1}
                        </span>
                        <div>
                          <div className={`text-xs sm:text-sm font-bold font-sans ${isActive ? 'text-white' : 'text-orange-100'}`}>
                            {node.title}
                          </div>
                          <div className="text-[11px] text-orange-200 font-mono mt-0.5">
                            {node.desc}
                          </div>
                        </div>
                      </div>

                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ${
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
              <div className="mt-5 pt-4 border-t border-orange-500/30 flex items-center justify-between text-xs font-mono text-orange-200">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 size={13} />
                  Context-Grounded Statutory Retrieval
                </span>
                <span>FastAPI + ChromaDB</span>
              </div>
            </div>

          </div>
        </div>

        {/* 2. REMAINING FOUR DISTINCT PROJECTS SHOWCASE (WARM SURFACES + ORANGE IDENTITY) */}
        <div className="mb-6">
          <h3 className="text-2xl font-black text-slate-900 font-sans tracking-tight mb-2">
            Production Engineering Projects
          </h3>
          <p className="text-sm text-slate-600 font-sans mb-8">
            Distinct software applications built for clients, enterprise healthcare, and autonomous workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl p-8 border-2 border-orange-200 hover:border-brand-orange shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-mono font-bold uppercase">
                      {project.category === 'ai' ? 'AUTONOMOUS WORKFLOW' : 'FULL-STACK SYSTEM'}
                    </span>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-10 h-10 rounded-full bg-orange-50 hover:bg-brand-orange text-brand-orange hover:text-white flex items-center justify-center transition-colors shadow-sm"
                      title="Open Case Study"
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  <h4 className="text-2xl font-black text-slate-900 font-sans tracking-tight mb-2 group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h4>
                  <div className="text-xs font-bold text-brand-orange mb-4 font-sans">
                    {project.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-normal mb-6">
                    {project.description}
                  </p>

                  {/* Architecture Highlight Block */}
                  <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-orange-100 mb-6">
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
                <div className="pt-6 border-t border-orange-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-[11px] font-mono font-semibold text-brand-orange"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-mono font-bold text-brand-orange hover:text-slate-900 transition-colors flex items-center gap-1"
                  >
                    <span>CASE STUDY</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
