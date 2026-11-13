import React, { useEffect, useRef } from 'react';
import { Briefcase, Award, Users, ChevronRight, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from '../common/TiltCard';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const timelineBarRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Draw-on-scroll timeline bar
      if (timelineBarRef.current) {
        gsap.fromTo(
          timelineBarRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 85%',
              scrub: 0.5,
            },
          }
        );
      }

      // Staggered reveal for timeline milestones
      gsap.fromTo(
        '.timeline-milestone',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-28 lg:py-36 bg-[#FAF8F5] text-slate-900 relative overflow-hidden border-t-2 border-orange-200">
      {/* Radiant ambient orange lighting */}
      <div className="absolute top-1/2 left-10 w-[700px] h-[500px] bg-brand-orange/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-6 bg-brand-orange rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
              05 / EXPERIENCE & LEADERSHIP
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-sans">
            Engineering Experience & <br />
            <span className="text-brand-orange">Leadership Track</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-sans mt-4 font-normal leading-relaxed">
            Hands-on professional software engineering in an Agile development lifecycle, coupled with university-wide hackathon leadership.
          </p>
        </div>

        {/* Editorial Vertical Orange Timeline with Scroll-Driven Progress */}
        <div className="relative pl-8 sm:pl-14 space-y-12 max-w-4xl">
          {/* Base Background Track Line */}
          <div className="absolute left-[3px] sm:left-[5px] top-4 bottom-4 w-1 bg-orange-200/80 rounded-full" />

          {/* Dynamic Draw-on-Scroll Electric-Orange Timeline Bar */}
          <div
            ref={timelineBarRef}
            className="absolute left-[2px] sm:left-[4px] top-4 bottom-4 w-1.5 bg-gradient-to-b from-brand-orange via-[#FF6A00] to-brand-orange rounded-full origin-top shadow-[0_0_12px_rgba(255,85,0,0.8)]"
          />

          {/* Animated Traveling Light Beam on Timeline Line */}
          <div className="absolute left-[2px] sm:left-[4px] top-0 bottom-0 w-1.5 overflow-hidden pointer-events-none">
            <div className="w-full h-24 bg-gradient-to-b from-transparent via-white to-transparent animate-timeline-flow" />
          </div>

          {/* ITEM 1: BotCalm Software Engineer Internship */}
          <div className="relative group timeline-milestone">
            {/* Prominent Glowing Electric-Orange Timeline Node */}
            <div className="absolute -left-[45px] sm:-left-[69px] top-2 w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/50 ring-4 ring-orange-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10">
              <Briefcase size={20} />
            </div>

            <TiltCard maxTilt={4}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-orange-200 hover:border-brand-orange shadow-md hover:shadow-2xl transition-all duration-300 card-hover-lift relative overflow-hidden">
                <div className="border-beam-glow" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="px-3.5 py-1 rounded-full bg-brand-orange text-white text-xs font-mono font-bold uppercase w-max shadow-sm shadow-brand-orange/30">
                    Professional Software Internship
                  </span>
                  <span className="text-sm font-mono text-brand-orange font-bold flex items-center gap-1.5">
                    <Calendar size={15} />
                    April 20, 2026 – October 29, 2026
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight mb-1">
                  Intern Software Engineer
                </h3>
                <div className="text-base font-bold text-brand-orange mb-6 font-sans">
                  BotCalm
                </div>

                {/* Exact Verified Responsibilities */}
                <div className="space-y-3">
                  {[
                    'React.js and Next.js development for database-driven web applications.',
                    'REST API development, endpoint documentation, and microservice integration.',
                    'Database-driven application engineering with SQL and NoSQL data structures.',
                    'Full-stack architecture workflows and modern release cycle deployments.',
                    'Agile collaboration with cross-functional engineering teams in daily standups and sprint reviews.',
                    'Software testing, quality assurance, code review, and systematic bug fixing.'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans">
                      <ChevronRight size={16} className="text-brand-orange shrink-0 mt-0.5 stroke-[3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>

          {/* ITEM 2: RushCoder 3.0 Hackathon Leader */}
          <div className="relative group timeline-milestone">
            <div className="absolute -left-[45px] sm:-left-[69px] top-2 w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/50 ring-4 ring-orange-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10">
              <Award size={20} />
            </div>

            <TiltCard maxTilt={4}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-orange-200 hover:border-brand-orange shadow-md hover:shadow-2xl transition-all duration-300 card-hover-lift relative overflow-hidden">
                <div className="border-beam-glow" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="px-3.5 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-mono font-bold uppercase w-max">
                    University Leadership
                  </span>
                  <span className="text-xs font-mono text-slate-600 font-bold">
                    Flagship Coding Event
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight mb-1">
                  Organizing Committee Member & Public Relations Team Leader
                </h3>
                <div className="text-sm font-bold text-slate-700 mb-4 font-sans">
                  RushCoder 3.0 Hackathon — University of Ruhuna
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-light">
                  Spearheaded comprehensive public relations, university outreach campaigns, participant engagement, and media coordination for the annual coding hackathon organized by the Department of Computer Science.
                </p>
              </div>
            </TiltCard>
          </div>

          {/* ITEM 3: Sasnaka Sansadaya */}
          <div className="relative group timeline-milestone">
            <div className="absolute -left-[45px] sm:-left-[69px] top-2 w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/50 ring-4 ring-orange-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10">
              <Users size={20} />
            </div>

            <TiltCard maxTilt={4}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-orange-200 hover:border-brand-orange shadow-md hover:shadow-2xl transition-all duration-300 card-hover-lift relative overflow-hidden">
                <div className="border-beam-glow" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="px-3.5 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-mono font-bold uppercase w-max">
                    Community Development
                  </span>
                  <span className="text-xs font-mono text-slate-600 font-bold">
                    National Outreach
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight mb-1">
                  Active Member
                </h3>
                <div className="text-sm font-bold text-slate-700 mb-4 font-sans">
                  Sasnaka Sansadaya
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-light">
                  Contributed to national student mentoring initiatives, higher education guidance workshops, and community development programs across Sri Lanka.
                </p>
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
