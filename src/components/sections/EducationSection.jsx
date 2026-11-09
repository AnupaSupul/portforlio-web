import React from 'react';
import { GraduationCap, Bookmark, CheckCircle2 } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-28 lg:py-36 bg-[#FFFFFF] text-slate-900 relative overflow-hidden border-t-2 border-orange-200">
      {/* Radiant ambient orange lighting */}
      <div className="absolute top-1/2 right-10 w-[700px] h-[500px] bg-brand-orange/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-6 bg-brand-orange rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
              06 / EDUCATION
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-sans">
            Academic Foundation & <br />
            <span className="text-brand-orange">Scientific Rigor</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-sans mt-4 font-normal leading-relaxed">
            Theoretical computer science foundations and physical science mathematics forming the analytical core of my engineering approach.
          </p>
        </div>

        {/* 2-Column Academic Composition */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* CARD 1: University of Ruhuna (Col span 7) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border-2 border-orange-200 hover:border-brand-orange shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient orange glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-brand-orange text-white text-xs font-mono font-bold uppercase shadow-sm shadow-brand-orange/30">
                  Undergraduate Degree
                </span>
                <span className="text-xs font-mono text-brand-orange font-bold">
                  September 2023 – Present
                </span>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/40 shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight leading-tight">
                    Bachelor of Computer Science
                  </h3>
                  <div className="text-base font-bold text-brand-orange font-sans mt-1">
                    University of Ruhuna, Sri Lanka
                  </div>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Faculty of Science • Department of Computer Science
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 font-sans leading-relaxed mb-8 font-normal">
                Comprehensive computer science curriculum with strong emphasis on software engineering paradigms, distributed architectures, database systems, and machine learning research.
              </p>

              {/* Core Curricular Pillars */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono text-brand-orange uppercase font-bold tracking-wider block mb-2">
                  CORE CURRICULUM HIGHLIGHTS
                </span>
                {[
                  'Data Structures, Algorithms & Computational Complexity',
                  'Distributed Systems & Modern Database Design (SQL & NoSQL)',
                  'Object-Oriented Design & Full-Stack Web Architecture',
                  'Machine Learning, Computer Vision & Deep Learning Research',
                  'Computer Networks, Cloud Infrastructure & Operating Systems'
                ].map((pill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-sans">
                    <CheckCircle2 size={14} className="text-brand-orange shrink-0 stroke-[2.5]" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-orange-200 flex items-center justify-between text-xs font-mono text-slate-600">
              <span className="font-semibold">ACCREDITED NATIONAL DEGREE</span>
              <span className="text-brand-orange font-bold">READING FOR DEGREE</span>
            </div>
          </div>

          {/* CARD 2: St. Thomas' Boys' College Matara (Col span 5) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border-2 border-orange-200 hover:border-brand-orange shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-mono font-bold uppercase">
                  Advanced Level Examination
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">
                  Completed
                </span>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-brand-orange/40 shrink-0">
                  <Bookmark size={26} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight leading-tight">
                    G.C.E. Advanced Level
                  </h3>
                  <div className="text-sm font-bold text-slate-800 font-sans mt-0.5">
                    St. Thomas' Boys' College, Matara
                  </div>
                  <p className="text-xs text-brand-orange font-mono font-bold mt-0.5">
                    Physical Science Stream
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 font-normal">
                Rigorous mathematical and physical science foundation qualifying for direct university admission in Computer Science.
              </p>

              {/* Verified Examination Results */}
              <div className="bg-white rounded-2xl p-5 border-2 border-orange-200 shadow-sm space-y-3 mb-6">
                <span className="text-[10px] font-mono text-brand-orange uppercase font-bold tracking-wider block mb-1">
                  OFFICIAL EXAMINATION RECORD
                </span>

                <div className="flex items-center justify-between text-sm font-sans pb-2 border-b border-orange-100">
                  <span className="text-slate-800 font-medium">Combined Mathematics</span>
                  <span className="font-mono font-black text-brand-orange text-lg">A</span>
                </div>

                <div className="flex items-center justify-between text-sm font-sans pb-2 border-b border-orange-100">
                  <span className="text-slate-800 font-medium">Chemistry</span>
                  <span className="font-mono font-black text-slate-900 text-lg">B</span>
                </div>

                <div className="flex items-center justify-between text-sm font-sans pb-2 border-b border-orange-100">
                  <span className="text-slate-800 font-medium">Physics</span>
                  <span className="font-mono font-black text-slate-900 text-lg">C</span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-1 text-slate-700">
                  <span className="font-bold">National Z-Score:</span>
                  <span className="font-black text-brand-orange text-base">1.4847</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-orange-200 flex items-center justify-between text-xs font-mono text-slate-600">
              <span className="font-semibold">PHYSICAL SCIENCE STREAM</span>
              <span className="text-brand-orange font-bold">VERIFIED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationSection;
