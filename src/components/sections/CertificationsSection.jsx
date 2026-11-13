import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Download, X, ShieldCheck, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experienceData } from '../../data/experienceData';
import TiltCard from '../common/TiltCard';
import MagneticButton from '../common/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const CertificationsSection = () => {
  const [activeCertModal, setActiveCertModal] = useState(null);
  const sectionRef = useRef(null);

  const certs = experienceData.certifications;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cert-card-stagger',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-28 lg:py-36 bg-[#FAF8F5] text-slate-900 relative overflow-hidden border-t-2 border-orange-200">
      {/* Radiant ambient orange lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-brand-orange/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-6 bg-brand-orange rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
              07 / CERTIFICATIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-sans">
            AWS Cloud <br />
            <span className="text-brand-orange">Certifications</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-sans mt-4 font-normal leading-relaxed">
            Industry-recognized AWS accreditations validating core cloud architectures, compute, storage, networking, and cloud security best practices.
          </p>
        </div>

        {/* Curated Credential Gallery Grid with 3D Tilt */}
        <div className="grid md:grid-cols-3 gap-8">
          {certs.map((cert, index) => {
            const pdfPath = `/certificates/${cert.pdf}`;
            return (
              <div key={index} className="cert-card-stagger">
                <TiltCard maxTilt={5} className="h-full">
                  <div className="group bg-white rounded-3xl p-8 border-2 border-orange-200 hover:border-brand-orange shadow-md hover:shadow-2xl transition-all duration-300 card-hover-lift flex flex-col justify-between relative overflow-hidden h-full">
                    <div className="border-beam-glow" />
                    {/* Top Orange Gradient Bar */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-orange via-amber-400 to-orange-600" />

                    <div>
                      {/* AWS Emblem Row */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex flex-col">
                          <span className="text-2xl font-black text-slate-900 tracking-tighter font-sans">
                            aws
                          </span>
                          {/* AWS Orange Smile */}
                          <div className="w-10 h-2 border-b-2 border-brand-orange rounded-full -mt-0.5" />
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-mono font-bold border border-orange-300">
                          <ShieldCheck size={14} />
                          Verified
                        </span>
                      </div>

                      <span className="text-xs font-mono text-brand-orange font-bold uppercase tracking-wider block mb-2">
                        {cert.issuer}
                      </span>

                      <h3 className="text-xl font-black text-slate-900 group-hover:text-brand-orange transition-colors font-sans mb-3 leading-tight">
                        {cert.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-normal mb-8">
                        {cert.desc}
                      </p>
                    </div>

                    {/* Layered Actions: View PDF Modal & Direct Download */}
                    <div className="pt-6 border-t border-orange-100 flex items-center gap-3">
                      <MagneticButton
                        onClick={() => setActiveCertModal({ ...cert, url: pdfPath })}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-orange hover:bg-orange-600 text-white text-xs font-sans font-bold transition-all shadow-md shadow-brand-orange/30 group-hover:shadow-lg"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={14} />
                      </MagneticButton>

                      <a
                        href={pdfPath}
                        download={cert.pdf}
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-orange-50 hover:bg-orange-100 text-brand-orange border border-orange-200 transition-colors shrink-0"
                        title="Download Official PDF"
                      >
                        <Download size={16} />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        {/* Credential Authenticity Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-white border-2 border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Award className="text-brand-orange shrink-0" size={26} />
            <p className="text-sm text-slate-700 font-sans">
              Authentic credential records issued by <strong className="text-slate-900 font-bold">Amazon Web Services Training and Certification</strong>.
            </p>
          </div>
          <a
            href="/cv/AnupaSupulCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-bold text-brand-orange hover:underline whitespace-nowrap"
          >
            VERIFY IN OFFICIAL CV (PDF) →
          </a>
        </div>

      </div>

      {/* PDF Modal Viewer */}
      {activeCertModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border-2 border-brand-orange overflow-hidden">
            <div className="px-6 py-4 border-b border-orange-200 flex items-center justify-between bg-orange-50/50">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-orange" size={22} />
                <div>
                  <h4 className="font-bold text-base text-slate-900 leading-tight">
                    {activeCertModal.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    {activeCertModal.issuer}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeCertModal.url}
                  download
                  className="p-2 rounded-xl text-slate-500 hover:text-brand-orange hover:bg-orange-100 transition-colors"
                  title="Download PDF"
                >
                  <Download size={18} />
                </a>
                <button
                  onClick={() => setActiveCertModal(null)}
                  className="p-2 rounded-xl text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors"
                  title="Close viewer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-slate-900 p-2 sm:p-4 overflow-hidden flex items-center justify-center min-h-[400px]">
              <iframe
                src={`${activeCertModal.url}#toolbar=0`}
                title={activeCertModal.title}
                className="w-full h-full min-h-[500px] rounded-xl border border-slate-700 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
