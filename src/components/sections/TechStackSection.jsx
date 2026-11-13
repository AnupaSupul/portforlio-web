import React, { useState, useEffect, useRef } from 'react';
import { Server, Database, Cpu, Cloud, Code, CheckCircle2, Sparkles, Activity } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from '../common/TiltCard';

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  const [selectedLayerId, setSelectedLayerId] = useState('application'); // 'frontend' | 'application' | 'data' | 'ai' | 'infrastructure'
  const sectionRef = useRef(null);
  const layersListRef = useRef(null);

  const layers = [
    {
      id: 'frontend',
      number: '01',
      title: 'FRONTEND & CLIENT LAYER',
      subtitle: 'Responsive user interfaces with client-side state management and component architecture.',
      icon: Code,
      accent: '#FF5500',
      technologies: [
        { name: 'React.js', role: 'Component UI Architecture' },
        { name: 'Next.js', role: 'Server-Side Rendering & App Routing' },
        { name: 'Tailwind CSS', role: 'Utility-First Responsive Styling' },
        { name: 'JavaScript (ES6+)', role: 'Modern Asynchronous Scripting' },
        { name: 'HTML5 / CSS3', role: 'Semantic Layout & Web Standards' }
      ]
    },
    {
      id: 'application',
      number: '02',
      title: 'APPLICATION & SERVICES LAYER',
      subtitle: 'Backend microservices, REST APIs, enterprise logic, and asynchronous request routing.',
      icon: Server,
      accent: '#FF5500',
      technologies: [
        { name: 'Node.js', role: 'Event-Driven Runtime Environment' },
        { name: 'Express.js', role: 'RESTful API Routing & Middleware' },
        { name: 'Spring Boot', role: 'Enterprise Java Microservices' },
        { name: 'FastAPI', role: 'High-Performance Python Async APIs' },
        { name: 'Java 17', role: 'Object-Oriented Backend Systems' },
        { name: 'Python', role: 'Backend Services & AI Scripting' }
      ]
    },
    {
      id: 'data',
      number: '03',
      title: 'DATA & RETRIEVAL LAYER',
      subtitle: 'Relational ACID integrity, document storage, and persistent vector databases for RAG.',
      icon: Database,
      accent: '#FF6A00',
      technologies: [
        { name: 'MySQL', role: 'Relational Schema & Structured Queries' },
        { name: 'MongoDB', role: 'Document Storage & NoSQL Schemas' },
        { name: 'ChromaDB', role: 'Persistent Vector Embeddings for RAG' },
        { name: 'SQL', role: 'Complex Joins & Database Transactions' }
      ]
    },
    {
      id: 'ai',
      number: '04',
      title: 'AI & DEEP LEARNING LAYER',
      subtitle: 'Convolutional neural networks for computer vision, feature extraction, and LLM integrations.',
      icon: Cpu,
      accent: '#FF5500',
      technologies: [
        { name: 'TensorFlow & Keras', role: 'Deep Learning Model Training' },
        { name: 'VGG16 & VGG19', role: 'Transfer Learning Architectures' },
        { name: 'CNN Architectures', role: 'Computer Vision Feature Extraction' },
        { name: 'Sentence Transformers', role: 'Contextual Vector Embeddings' },
        { name: 'OpenRouter & Gemini', role: 'Large Language Model API Integration' }
      ]
    },
    {
      id: 'infrastructure',
      number: '05',
      title: 'CLOUD & INFRASTRUCTURE LAYER',
      subtitle: 'Containerized deployment environments, cloud instances, object storage, and version control.',
      icon: Cloud,
      accent: '#FF6A00',
      technologies: [
        { name: 'Docker', role: 'Multi-Stage Containerization' },
        { name: 'Amazon EC2', role: 'Cloud Compute Instances' },
        { name: 'Amazon S3', role: 'Object Storage & Static Assets' },
        { name: 'Git & GitHub', role: 'Version Control & Collaborative Workflows' },
        { name: 'Postman', role: 'API Testing & Endpoint Validation' }
      ]
    }
  ];

  const activeLayer = layers.find(l => l.id === selectedLayerId) || layers[1];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tech-layer-item',
        { opacity: 0, x: -25 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: layersListRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 lg:py-36 bg-gradient-to-b from-[#FFF7ED] via-[#FAF8F5] to-[#FFF7ED] text-slate-900 relative overflow-hidden border-t-2 border-orange-200">
      {/* Radiant orange ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-brand-orange/15 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-6 bg-brand-orange rounded-full" />
              <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
                02 / TECH STACK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-sans">
              Technical <br />
              <span className="text-brand-orange">Expertise</span>
            </h2>
          </div>

          <p className="text-sm sm:text-lg text-slate-700 font-sans max-w-md font-normal leading-relaxed">
            An interconnected software engineering ecosystem spanning client interfaces, backend microservices, vector retrieval, and AWS cloud containerization.
          </p>
        </div>

        {/* 2-Column Layered Ecosystem: Left Architecture Diagram | Right Selected Layer Deep Dive */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: Full Interactive Architecture System (Col span 7) */}
          <div ref={layersListRef} className="lg:col-span-7 flex flex-col gap-3.5">
            <div className="flex items-center justify-between text-xs font-mono text-brand-orange font-bold pb-2 px-1 border-b border-orange-200 mb-2">
              <span className="flex items-center gap-1.5">
                <Activity size={14} className="text-brand-orange animate-pulse" />
                <span>INTERCONNECTED SYSTEM ARCHITECTURE</span>
              </span>
              <span>CLICK TO INSPECT LAYER</span>
            </div>

            {layers.map((layer, index) => {
              const isSelected = selectedLayerId === layer.id;
              const Icon = layer.icon;

              return (
                <div key={layer.id} className="relative tech-layer-item">
                  {/* Layer Card */}
                  <div
                    onClick={() => setSelectedLayerId(layer.id)}
                    className={`cursor-pointer rounded-2xl p-3.5 sm:p-5 border-2 transition-all duration-300 card-hover-lift flex items-center justify-between shadow-sm group ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#240B02] to-[#3B1304] text-white border-brand-orange ring-4 ring-brand-orange/20 shadow-xl shadow-brand-orange/20 sm:translate-x-2'
                        : 'bg-white border-orange-100 hover:border-brand-orange hover:bg-orange-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-4 min-w-0 pr-2">
                      {/* Layer Step Badge */}
                      <span className={`text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-3 py-1 rounded-xl shadow-sm transition-colors shrink-0 ${
                        isSelected ? 'bg-brand-orange text-white' : 'bg-orange-100 text-brand-orange'
                      }`}>
                        {layer.number}
                      </span>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105 ${
                          isSelected ? 'bg-brand-orange text-white' : 'bg-orange-50 border border-orange-200 text-brand-orange'
                        }`}>
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <h3 className={`text-xs sm:text-base font-bold font-sans tracking-tight truncate ${
                            isSelected ? 'text-white' : 'text-slate-900'
                          }`}>
                            {layer.title}
                          </h3>
                          <p className={`text-[10px] sm:text-xs font-mono mt-0.5 truncate ${
                            isSelected ? 'text-orange-200' : 'text-slate-500'
                          }`}>
                            {layer.technologies.slice(0, 3).map(t => t.name).join(' • ')} + {layer.technologies.length - 3} more
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isSelected && (
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-white uppercase bg-brand-orange px-2.5 py-1 rounded-full shadow-md animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          <span>Active</span>
                        </span>
                      )}
                      <span className={`text-sm sm:text-base font-bold transition-transform duration-300 ${isSelected ? 'text-brand-orange rotate-90' : 'text-slate-400 group-hover:translate-x-1'}`}>
                        →
                      </span>
                    </div>
                  </div>

                  {/* Visual Data Flow Arrow Between Layers with illuminated pulse */}
                  {index < layers.length - 1 && (
                    <div className="flex justify-center my-1.5 relative">
                      <div className={`w-1 h-3.5 rounded-full transition-colors ${
                        isSelected ? 'bg-brand-orange shadow-md shadow-brand-orange/50 animate-pulse' : 'bg-orange-200'
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: Active Layer Inspection Card (Col span 5) with TiltCard */}
          <div className="lg:col-span-5 sticky top-28">
            <TiltCard maxTilt={5}>
              <div className="bg-gradient-to-br from-[#240B02] via-[#3B1304] to-[#1A0701] rounded-3xl p-4 sm:p-8 border-2 border-brand-orange text-white shadow-2xl relative overflow-hidden group/detail">
                {/* Top orange glow with subtle pulse */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

                <div className="flex items-center justify-between mb-4 sm:mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/40 shrink-0">
                      <activeLayer.icon size={22} />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-orange-300 font-bold uppercase tracking-wider block">
                        LAYER {activeLayer.number} SPECIFICATION
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white font-sans tracking-tight">
                        {activeLayer.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-orange-100 font-sans leading-relaxed mb-4 sm:mb-6 font-light relative z-10">
                  {activeLayer.subtitle}
                </p>

                {/* Detailed Technology Nodes (Full Names + Roles) */}
                <div className="space-y-2.5 sm:space-y-3 mb-6 relative z-10">
                  <span className="text-[10px] sm:text-[11px] font-mono text-orange-300 uppercase font-bold tracking-wider block flex items-center gap-1.5">
                    <Sparkles size={12} className="text-brand-orange" />
                    <span>ENGINEERED TECHNOLOGIES & ROLES</span>
                  </span>

                  {activeLayer.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-[#2E1106]/90 backdrop-blur-sm rounded-2xl p-2.5 sm:p-3.5 border border-orange-500/40 hover:border-brand-orange hover:bg-[#3B1508] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-sm animate-pulse-dot" />
                        <span className="text-xs sm:text-sm font-bold text-white font-sans">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono text-orange-200/90 pl-3.5 sm:pl-0">
                        {tech.role}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Architecture Integration Notice */}
                <div className="pt-3 sm:pt-4 border-t border-orange-500/30 flex items-center justify-between text-[10px] sm:text-xs font-mono text-orange-200 relative z-10">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <CheckCircle2 size={13} />
                    Verified in Production
                  </span>
                  <span className="text-orange-300">Production Ready</span>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
