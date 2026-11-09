import React from 'react';
import { Microscope, ArrowLeft, ExternalLink, Cpu, GitBranch, CheckCircle2, Award, BookOpen, Layers, BarChart3, Database } from 'lucide-react';
import { researchData } from '../data/researchData';
import ResearchCarousel from './ResearchCarousel';

const ResearchView = ({ navigateToMain }) => {

  return (
    <div className="pt-24 min-h-screen bg-[#070A10] text-slate-300 font-sans animate-fade-in relative overflow-x-hidden selection:bg-brand-orange selection:text-white">

      {/* Atmospheric Background Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Back navigation bar */}
        <div className="py-6 flex items-center justify-between border-b border-white/10 mb-12">
          <button
            onClick={navigateToMain}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white border border-white/10 text-xs font-mono font-bold tracking-wider text-slate-300 transition-all duration-200"
          >
            <ArrowLeft size={16} />
            <span>RETURN TO MAIN PORTFOLIO</span>
          </button>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ACTIVE RESEARCH PIPELINE</span>
          </div>
        </div>

        {/* Lab Hero */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-orange uppercase mb-4">
            <Microscope size={16} />
            <span>ACADEMIC RESEARCH LAB</span>
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[1.02] mb-6">
            Deep Learning for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-300 to-orange-500 italic drop-shadow-[0_4px_24px_rgba(255,85,0,0.3)]">
              Plant Pathology.
            </span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-slate-400 leading-relaxed font-light max-w-3xl">
            Undergraduate machine learning research at the University of Ruhuna, applying deep convolutional neural networks and transfer learning architectures to identify foliar diseases in Sri Lankan rice crops.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Affiliation</div>
              <div className="text-white font-sans font-bold text-base">University of Ruhuna</div>
              <div className="text-xs text-slate-400">Department of Computer Science</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Target Crop Pathology</div>
              <div className="text-white font-sans font-bold text-base">Oryza sativa (Rice)</div>
              <div className="text-xs text-slate-400">Brown Spot, Leaf Blast, Bacterial Blight</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Top Model Accuracy</div>
              <div className="text-brand-orange font-mono font-bold text-2xl">95.27% <span className="text-xs text-slate-400 font-sans font-normal">Val</span></div>
              <div className="text-xs text-emerald-400 font-mono">92.62% Test Accuracy</div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {researchData.metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/10 relative overflow-hidden"
            >
              <div className="text-xs font-mono uppercase text-brand-orange tracking-wider mb-2">
                {m.label}
              </div>
              <div className="font-display font-bold text-4xl sm:text-5xl text-white mb-2 tracking-tight">
                {m.value}{m.unit}
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-400 font-light">
                {m.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Systematic 4-Stage Methodology */}
        <div className="mb-28">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-orange uppercase mb-2">
              <GitBranch size={14} />
              <span>SYSTEMATIC WORKFLOW</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Four-Stage Research Pipeline
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base mt-2 font-light">
              From field data acquisition across diverse agro-ecological zones to model evaluation and inference optimization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchData.pipeline.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 rounded-3xl p-7 border border-white/10 hover:border-brand-orange/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="font-mono text-3xl font-extrabold text-brand-orange/40 group-hover:text-brand-orange transition-colors mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-500">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>Validated Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benchmark Matrix */}
        <div className="mb-28 bg-slate-900/70 rounded-3xl p-8 sm:p-10 border border-white/10 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-orange uppercase mb-2">
                <BarChart3 size={14} />
                <span>EMPIRICAL BENCHMARKS</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Model Architecture Comparison
              </h2>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Evaluated on identical 70/20/10 split
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-4">Architecture</th>
                  <th className="py-4 px-4">Validation Acc</th>
                  <th className="py-4 px-4">Test Acc</th>
                  <th className="py-4 px-4">Parameters</th>
                  <th className="py-4 px-4">Classification Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {researchData.benchmarks.map((b, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-white/5 transition-colors ${
                      b.model.includes('Selected') ? 'bg-brand-orange/10 font-bold' : ''
                    }`}
                  >
                    <td className="py-4 px-4 text-white font-mono flex items-center gap-2">
                      {b.model.includes('Selected') && <span className="w-2 h-2 rounded-full bg-brand-orange" />}
                      <span>{b.model}</span>
                    </td>
                    <td className="py-4 px-4 text-brand-orange font-mono font-bold">{b.valAcc}</td>
                    <td className="py-4 px-4 text-slate-300 font-mono">{b.testAcc}</td>
                    <td className="py-4 px-4 text-slate-400 font-mono">{b.params}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-mono ${
                        b.model.includes('Selected')
                          ? 'bg-brand-orange/20 text-brand-orange border border-brand-orange/30 font-bold'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Field Imagery Visualizer */}
        <div className="mb-28">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-orange uppercase mb-2">
              <Layers size={14} />
              <span>DATASET SAMPLES</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Field Specimen Visualizer
            </h2>
          </div>

          <ResearchCarousel
            items={[
              {
                image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=2072',
                title: 'Rice Leaf Brown Spot Pathology',
                description: 'Field specimens exhibiting characteristic Helminthosporium oryzae lesions collected under direct natural sunlight.'
              },
              {
                image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop',
                title: 'Multi-Spectral Feature Extraction',
                description: 'Feature maps generated across intermediate convolutional blocks isolating leaf venation from necrosis.'
              },
              {
                image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070',
                title: 'VGG19 Deep Feature Space',
                description: 'Dense 16-convolutional layer pipeline feeding fully connected classification layers with softmax output.'
              }
            ]}
          />
        </div>

        {/* Peer-Reviewed Publications & Symposia */}
        <div className="mb-28">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-orange uppercase mb-2">
              <BookOpen size={14} />
              <span>ACADEMIC DISSEMINATION</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Publications & Symposium Proceedings
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base mt-2 font-light">
              Peer-reviewed papers and conference presentations validating this methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchData.publications.map((pub, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-3xl p-8 border border-white/10 hover:border-brand-orange/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-mono font-bold border border-brand-orange/30">
                      {pub.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {pub.date}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {pub.title}
                  </h3>

                  <div className="text-sm font-sans font-bold text-slate-300 mb-1">
                    {pub.venue}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mb-6">
                    {pub.institution}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-orange hover:text-white transition-colors"
                  >
                    <span>SEARCH SCHOLAR RECORD</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="text-xs font-mono text-slate-500">PEER REVIEWED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Return Button CTA */}
        <div className="text-center pb-24">
          <button
            onClick={navigateToMain}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-orange hover:bg-orange-600 text-white font-sans font-bold text-base shadow-xl shadow-brand-orange/20 transition-all hover:scale-105"
          >
            <ArrowLeft size={18} />
            <span>Back to Full Engineering Portfolio</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResearchView;
