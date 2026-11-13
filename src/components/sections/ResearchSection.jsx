import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Activity, Database, CheckCircle2, Scan } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from '../common/TiltCard';
import MagneticButton from '../common/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const checkReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const ResearchSection = ({ navigateToResearch }) => {
  const [valAcc, setValAcc] = useState(() => (checkReducedMotion() ? 95.27 : 0));
  const [testAcc, setTestAcc] = useState(() => (checkReducedMotion() ? 92.62 : 0));
  const sectionRef = useRef(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    if (checkReducedMotion()) {
      return;
    }

    const ctx = gsap.context(() => {
      // Numerical counter animation for verified research metrics
      ScrollTrigger.create({
        trigger: metricsRef.current,
        start: 'top 80%',
        onEnter: () => {
          const counterObj = { val: 0, test: 0 };
          gsap.to(counterObj, {
            val: 95.27,
            test: 92.62,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              setValAcc(counterObj.val);
              setTestAcc(counterObj.test);
            },
          });
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="research" ref={sectionRef} className="py-28 lg:py-36 bg-[#FAF8F5] text-slate-900 relative overflow-hidden border-t-2 border-orange-200">
      {/* Radiant ambient orange lighting */}
      <div className="absolute top-1/3 right-10 w-[800px] h-[600px] bg-brand-orange/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-6 bg-brand-orange rounded-full" />
              <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
                04 / RESEARCH LAB
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-sans">
              Rice Leaf <br />
              <span className="text-brand-orange">Disease Detection</span>
            </h2>
          </div>

          <div className="max-w-md text-left md:text-right">
            <p className="text-base text-slate-700 font-sans font-normal leading-relaxed">
              Undergraduate machine learning research at the <strong className="text-brand-orange font-bold">University of Ruhuna</strong>, evaluating deep convolutional neural networks for agricultural plant pathology.
            </p>
            <MagneticButton
              onClick={navigateToResearch}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange text-white text-xs font-mono font-bold shadow-md shadow-brand-orange/30 hover:bg-orange-600 transition-all hover:scale-105"
            >
              <span>EXPLORE FULL RESEARCH LAB</span>
              <ArrowRight size={14} />
            </MagneticButton>
          </div>
        </div>

        {/* 1. SCIENTIFIC SHOWCASE: SPECIMEN ANALYSIS + PROMINENT ORANGE METRICS */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-14">

          {/* LEFT: Specimen Visualizer with Target Bounding Box (Col span 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border-2 border-orange-200 shadow-md card-hover-lift flex flex-col justify-between relative overflow-hidden group">
            <div className="border-beam-glow" />
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <Scan size={14} className="text-brand-orange animate-pulse" />
                  <span>PATHOLOGY SPECIMEN</span>
                </span>
                <span className="text-brand-orange font-bold">Helminthosporium oryzae</span>
              </div>

              {/* Specimen Frame with High-Tech Reticle & Laser Sweep */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 border-2 border-orange-300 mb-4 group shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1200"
                  alt="Brown Spot Rice Leaf Specimen"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Laser scan line sweep */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-80 animate-scan pointer-events-none" />

                {/* Animated Target Bounding Box in Electric Orange */}
                <div className="absolute top-[22%] left-[24%] w-44 h-32 border-2 border-brand-orange rounded-xl pointer-events-none animate-radar shadow-[0_0_24px_rgba(255,85,0,0.5)]">
                  <span className="absolute -top-3.5 left-2 bg-brand-orange text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>Brown Spot (Detected)</span>
                  </span>
                  <div className="absolute bottom-2 right-2 text-right">
                    <span className="text-[11px] font-mono font-bold text-orange-200 block">
                      Val Acc: 95.27%
                    </span>
                    <span className="text-[9px] font-mono text-slate-300">
                      VGG19 Architecture
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-orange-100 flex items-center justify-between text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <CheckCircle2 size={14} />
                Brown Spot Foliar Lesion
              </span>
              <span className="text-brand-orange font-bold">Agricultural Vision</span>
            </div>
          </div>

          {/* RIGHT: Prominent Orange Numerical Statements & Methodology (Col span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border-2 border-orange-200 shadow-md card-hover-lift flex flex-col justify-between relative overflow-hidden group">
            <div className="border-beam-glow" />
            <div>
              <span className="text-xs font-mono text-brand-orange font-bold uppercase tracking-wider block mb-4">
                VERIFIED EMPIRICAL RESEARCH RESULTS (BROWN SPOT)
              </span>

              {/* Large Typographic Orange Numerical Statements with Smooth Count-Up */}
              <div ref={metricsRef} className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-6 rounded-2xl border-2 border-brand-orange shadow-md">
                  <div className="text-xs font-mono text-brand-orange font-bold uppercase tracking-wider">
                    Validation Accuracy
                  </div>
                  <div className="text-5xl sm:text-6xl font-black text-brand-orange font-mono my-2 tracking-tight">
                    {valAcc.toFixed(2)}%
                  </div>
                  <p className="text-xs text-slate-700 font-sans">
                    Top validation benchmark attained on Brown Spot foliar classification.
                  </p>
                </div>

                <div className="bg-orange-50/60 p-6 rounded-2xl border-2 border-orange-200">
                  <div className="text-xs font-mono text-slate-700 font-bold uppercase tracking-wider">
                    Test Accuracy
                  </div>
                  <div className="text-5xl sm:text-6xl font-black text-slate-900 font-mono my-2 tracking-tight">
                    {testAcc.toFixed(2)}%
                  </div>
                  <p className="text-xs text-slate-700 font-sans">
                    Generalization score on unseen real-world testing samples.
                  </p>
                </div>
              </div>

              {/* Connected 5-Stage Experimental Pipeline */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Activity size={16} className="text-brand-orange" />
                  <span className="text-xs font-mono text-brand-orange font-bold uppercase tracking-wider">
                    Five-Stage Research Methodology
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {[
                    { step: '01', title: 'Data Collection', desc: 'Field imagery' },
                    { step: '02', title: 'Preprocessing', desc: 'Noise filtration' },
                    { step: '03', title: 'Augmentation', desc: 'Dataset balance' },
                    { step: '04', title: 'Model Training', desc: 'VGG19 Transfer' },
                    { step: '05', title: 'Evaluation', desc: '95.27% Conf' }
                  ].map((p, idx) => (
                    <div key={idx} className="bg-[#FAF8F5] rounded-xl p-3 border border-orange-200 text-center hover:border-brand-orange hover:bg-orange-50/50 transition-all card-hover-lift">
                      <div className="text-xs font-mono font-bold text-brand-orange mb-1">
                        {p.step}
                      </div>
                      <div className="text-xs font-bold text-slate-900 font-sans leading-tight">
                        {p.title}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-1">
                        {p.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Models Evaluated row */}
            <div className="pt-6 mt-6 border-t border-orange-100 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-slate-700 font-bold">MODELS EVALUATED:</span>
              <div className="flex flex-wrap gap-2">
                {['VGG19 (Primary - 95.27%)', 'VGG16', 'Custom CNN', 'CNN + SVM'].map((m, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-lg border transition-all ${
                      m.includes('Primary')
                        ? 'bg-brand-orange text-white font-bold border-brand-orange shadow-sm scale-105'
                        : 'bg-orange-50 border-orange-200 text-slate-800 hover:border-brand-orange'
                    }`}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 2. PUBLICATIONS & ACADEMIC DISSEMINATION ROW WITH 3D TILT */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-5 bg-brand-orange rounded-full" />
            <h3 className="text-2xl font-black text-slate-900 font-sans tracking-tight">
              Peer-Reviewed Publications & Symposia
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Publication 1: APSURS 2025 */}
            <TiltCard maxTilt={5}>
              <div className="bg-white rounded-3xl p-7 border-2 border-orange-200 hover:border-brand-orange shadow-md hover:shadow-xl transition-all card-hover-lift relative overflow-hidden flex flex-col justify-between h-full group">
                <div className="border-beam-glow" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-mono font-bold">
                      APSURS 2025
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">November 2025</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 font-sans leading-snug mb-3 group-hover:text-brand-orange transition-colors">
                    Identification of Brown Spot Leaf Disease Using Machine Learning
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    4th Applied Sciences Undergraduate Research Symposium, Sabaragamuwa University of Sri Lanka.
                  </p>
                </div>

                <a
                  href="https://scholar.google.com/scholar?q=Identification+of+Brown+Spot+Leaf+Disease+Machine+Learning+Anupa+Supul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 pt-4 border-t border-orange-100 flex items-center justify-between text-xs font-mono font-bold text-brand-orange hover:text-slate-900 transition-colors"
                >
                  <span>SEARCH PROCEEDING</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </TiltCard>

            {/* Publication 2: RITSCON 2026 */}
            <TiltCard maxTilt={5}>
              <div className="bg-white rounded-3xl p-7 border-2 border-orange-200 hover:border-brand-orange shadow-md hover:shadow-xl transition-all card-hover-lift relative overflow-hidden flex flex-col justify-between h-full group">
                <div className="border-beam-glow" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-mono font-bold">
                      RITSCON 2026
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">February 2026</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 font-sans leading-snug mb-3 group-hover:text-brand-orange transition-colors">
                    Machine Learning and Deep Learning-Based Approaches for Rice Leaf Disease
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Presented & Published Research Paper, Department of Computer Science, University of Ruhuna.
                  </p>
                </div>

                <a
                  href="https://scholar.google.com/scholar?q=Rice+Leaf+Disease+Detection+Sri+Lanka+Anupa+Supul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 pt-4 border-t border-orange-100 flex items-center justify-between text-xs font-mono font-bold text-brand-orange hover:text-slate-900 transition-colors"
                >
                  <span>SEARCH PROCEEDING</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </TiltCard>

            {/* Publication 3: Planned Open Dataset */}
            <TiltCard maxTilt={5}>
              <div className="bg-white rounded-3xl p-7 border-2 border-orange-200 hover:border-brand-orange shadow-md hover:shadow-xl transition-all card-hover-lift relative overflow-hidden flex flex-col justify-between h-full group">
                <div className="border-beam-glow" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-mono font-bold">
                      UPCOMING RELEASE
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">Planned: Dec 2026</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 font-sans leading-snug mb-3 group-hover:text-brand-orange transition-colors">
                    Rice Plant Leaf Disease Image Dataset
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Curated multi-condition agricultural field image dataset to be released publicly for open benchmark reproduction.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-orange-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>OPEN ACADEMIC RELEASE</span>
                  <Database size={14} />
                </div>
              </div>
            </TiltCard>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ResearchSection;
