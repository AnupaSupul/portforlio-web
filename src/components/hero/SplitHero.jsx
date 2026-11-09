import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, Github, Linkedin, Mail, FileText, Menu } from 'lucide-react';

const SplitHero = ({ scrollTo, activeSection = 'home', onOpenMobileMenu }) => {
  // Portrait flip state: 'blazer' (cursor on left) vs 'denim' (cursor on right)
  const [activePortrait, setActivePortrait] = useState(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('look=denim')) {
      return 'denim';
    }
    return 'blazer';
  });
  
  // Parallax rotation & translation values
  const [parallax, setParallax] = useState({ rotX: 0, rotY: 0, tx: 0, ty: 0 });
  const targetParallax = useRef({ rotX: 0, rotY: 0, tx: 0, ty: 0 });
  const animFrameId = useRef(null);

  // Mouse move handler with center dead zone
  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 1. DIRECTIONAL SWITCHING WITH CENTER DEAD ZONE
      // Left boundary: 46.5% of width, Right boundary: 53.5% of width
      const deadZoneLeft = width * 0.465;
      const deadZoneRight = width * 0.535;

      if (clientX < deadZoneLeft) {
        setActivePortrait('blazer');
      } else if (clientX > deadZoneRight) {
        setActivePortrait('denim');
      }
      // Between deadZoneLeft and deadZoneRight: maintain previous state (no rapid flutter)

      // 2. PARALLAX & TILT (Normalized from center)
      const normX = (clientX - width / 2) / (width / 2); // -1 to 1
      const normY = (clientY - height / 2) / (height / 2); // -1 to 1

      // Subtle limits: rotateX max ±3.5deg, rotateY max ±5deg, translate max ±6px
      targetParallax.current = {
        rotX: -normY * 3.5,
        rotY: normX * 5,
        tx: normX * 6,
        ty: normY * 3,
      };
    };

    // Smooth lerp loop for 60fps damped parallax
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateParallax = () => {
      setParallax((prev) => ({
        rotX: lerp(prev.rotX, targetParallax.current.rotX, 0.08),
        rotY: lerp(prev.rotY, targetParallax.current.rotY, 0.08),
        tx: lerp(prev.tx, targetParallax.current.tx, 0.08),
        ty: lerp(prev.ty, targetParallax.current.ty, 0.08),
      }));
      animFrameId.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animFrameId.current = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // Touch/Tap fallback for mobile & tablet
  const handlePortraitTap = () => {
    setActivePortrait((prev) => (prev === 'blazer' ? 'denim' : 'blazer'));
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-brand-orange-deep text-white select-none"
      style={{
        background: 'radial-gradient(circle at 25% 45%, #FF5500 0%, #B83A00 35%, #240B02 75%, #140601 100%)',
      }}
    >
      {/* AMBIENT CURVED LIGHT ARCS & GLOW SPHERES (Reference design atmospheric background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large ambient orange glow sphere */}
        <div
          className="absolute -left-24 top-1/4 w-[600px] h-[600px] rounded-full blur-[110px] opacity-60 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,106,0,0.85) 0%, rgba(255,85,0,0.4) 50%, transparent 70%)',
          }}
        />

        {/* Outer orbital light ring */}
        <div
          className="absolute left-[-15%] top-[-10%] w-[900px] h-[900px] rounded-full border border-orange-400/20 pointer-events-none"
          style={{
            boxShadow: '0 0 80px rgba(255, 106, 0, 0.15)',
            transform: 'rotate(-15deg)',
          }}
        />

        {/* Second curved light arc */}
        <div
          className="absolute left-[5%] bottom-[-20%] w-[800px] h-[800px] rounded-full border border-orange-400/30 pointer-events-none"
          style={{
            transform: 'rotate(25deg)',
          }}
        />
      </div>

      {/* TOP BRAND HEADER (Left side) */}
      <header className="absolute top-6 left-6 md:left-12 z-30 flex items-center gap-3">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          {/* Stylized 'A' Monogram matching reference */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center font-display font-black text-2xl text-white shadow-lg shadow-orange-900/40 group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="font-sans font-bold text-lg md:text-xl text-white tracking-tight">
            Anupa Supul
          </span>
        </a>
      </header>

      {/* MAIN TWO-COLUMN SPLIT CONTAINER */}
      <div className="relative w-full h-full min-h-screen flex flex-col lg:flex-row z-10">

        {/* ========================================================================= */}
        {/* LEFT COLUMN: BURNT ORANGE CANVAS & LARGE CONDENSED TYPOGRAPHY             */}
        {/* ========================================================================= */}
        <div className="w-full lg:w-[48%] h-auto lg:h-full flex flex-col justify-center px-6 sm:px-12 lg:pl-16 lg:pr-6 pt-28 pb-16 lg:py-0 z-10 relative">

          {/* Role Category Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-sans text-white/90 w-max shadow-sm mb-6 lg:mb-8">
            <span>Software Engineer</span>
            <span className="text-orange-400">•</span>
            <span>Cloud</span>
            <span className="text-orange-400">•</span>
            <span>AI Research</span>
          </div>

          {/* Large Condensed Architectural Headline */}
          <div className="space-y-0 leading-none mb-6">
            <h1 className="font-display font-bold italic uppercase tracking-tighter text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-white select-none">
              ANUPA
            </h1>
            <h1
              className="font-display font-bold italic uppercase tracking-tighter text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-brand-orange-bright select-none"
              style={{
                filter: 'drop-shadow(0 0 35px rgba(255, 106, 0, 0.45))',
              }}
            >
              SUPUL
            </h1>
          </div>

          {/* Narrative Subtext */}
          <p className="font-sans text-base sm:text-lg text-white/90 max-w-md leading-relaxed mb-8 font-light">
            Building impactful software, cloud solutions and AI-driven research.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('projects');
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white shadow-xl shadow-black/25 hover:bg-orange-50 hover:shadow-orange-500/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              style={{ color: '#FF5500' }}
            >
              <span className="font-sans font-extrabold text-base tracking-tight text-brand-orange" style={{ color: '#FF5500' }}>
                View My Work ↗
              </span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm text-white font-sans font-semibold text-base hover:bg-white/10 hover:border-white/60 active:scale-[0.98] transition-all duration-200"
            >
              <span>Get in Touch →</span>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: PORCELAIN WHITE CARD PANEL                                  */}
        {/* ========================================================================= */}
        <div className="w-full lg:w-[52%] h-full min-h-[560px] lg:min-h-screen relative flex flex-col justify-between p-6 sm:p-10 lg:p-14 z-10">

          {/* The White Rounded Inset Card */}
          <div className="absolute inset-0 bg-white rounded-t-[44px] lg:rounded-t-none lg:rounded-tl-[64px] shadow-2xl z-0 overflow-hidden" />

          {/* TOP NAVIGATION BAR (Inside the white panel) */}
          <nav className="relative z-20 flex items-center justify-between w-full pt-2">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative text-sm font-sans font-semibold transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-slate-900 font-bold'
                        : 'text-slate-500 hover:text-brand-orange'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-brand-orange rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile / Compact Menu Trigger Button */}
            <button
              onClick={onOpenMobileMenu}
              className="ml-auto p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 hover:text-brand-orange shadow-sm transition-all focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </nav>

          {/* REDESIGNED EDITORIAL INFORMATION BLOCK (Upper-middle area of white panel) */}
          <div className="relative z-20 my-auto pt-10 pb-16 lg:py-4 max-w-md ml-auto mr-8 sm:mr-14 lg:mr-20 text-left">
            {/* Eyebrow: AVAILABLE FOR with pulsing orange indicator */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-orange uppercase mb-3">
              <span>AVAILABLE FOR</span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
            </div>

            {/* Main Heading: Large, bold, dark-charcoal */}
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl xl:text-[54px] text-slate-900 leading-[1.08] tracking-tight mb-4">
              Software & <br />
              Research Roles
            </h2>

            {/* Supporting Content with thin vertical accent divider */}
            <div className="border-l-2 border-brand-orange/40 pl-4 py-1 space-y-2.5 mt-4">
              <p className="font-sans text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                Open to software engineering opportunities, research collaborations and full-stack development roles.
              </p>
              <p className="font-sans text-xs sm:text-sm text-slate-500 font-normal">
                Computer Science Undergraduate at University of Ruhuna.
              </p>
            </div>
          </div>

          {/* VERTICAL SOCIAL ICONS (Pinned vertically near the right edge of the card) */}
          <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3.5">
            {[
              { icon: Github, href: "https://github.com/AnupaSupul", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/anupasupul", label: "LinkedIn" },
              { icon: Mail, href: "mailto:supulanupa@gmail.com", label: "Email" },
              { icon: FileText, href: "/cv/AnupaSupulCV.pdf", label: "Authoritative CV (PDF)" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-md shadow-slate-200/80 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-brand-orange hover:border-orange-200 hover:shadow-lg hover:-translate-x-1 transition-all duration-200 group"
                title={social.label}
                aria-label={social.label}
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* BOTTOM-RIGHT SCROLL-DOWN INDICATOR */}
          <div
            onClick={() => scrollTo('about')}
            className="absolute bottom-6 sm:bottom-8 right-6 lg:right-10 z-20 flex flex-col items-center cursor-pointer group select-none"
          >
            {/* Thin vertical line leading down */}
            <div className="w-[1.5px] h-8 bg-gradient-to-b from-transparent to-brand-orange/60 mb-2 group-hover:h-10 transition-all duration-300" />

            {/* Circular orange button with downward arrow */}
            <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-orange-500/35 group-hover:translate-y-1 transition-all duration-300 group-hover:bg-brand-orange-bright">
              <ArrowDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </div>

            {/* Caption */}
            <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-600 mt-1.5 group-hover:text-brand-orange transition-colors">
              Scroll Down
            </span>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* CENTRAL OVERLAPPING DUAL-PORTRAIT 3D ENGINE                               */}
      {/* Overlaps the seam between burnt-orange and white panels                   */}
      {/* Increased size by ~18-20% with head & upper body visually dominant        */}
      {/* ========================================================================= */}
      <div
        className="relative lg:absolute -mt-8 sm:-mt-12 lg:mt-0 lg:bottom-0 left-1/2 -translate-x-1/2 lg:-translate-x-[48%] z-20 pointer-events-auto cursor-pointer w-[360px] sm:w-[500px] lg:w-[min(96vw,740px)] xl:w-[820px] h-[500px] sm:h-[640px] lg:h-[min(88vh,860px)] xl:h-[92vh]"
        onClick={handlePortraitTap}
      >
        {/* PARALLAX & TILT WRAPPER (Outer Node) */}
        <div
          className="w-full h-full perspective-1200"
          style={{
            transform: `perspective(1200px) rotateX(${parallax.rotX}deg) rotateY(${parallax.rotY}deg) translate3d(${parallax.tx}px, ${parallax.ty}px, 0px)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* DIRECTIONAL 180° Y-AXIS FLIP CONTAINER (Inner Node) */}
          <div
            className="w-full h-full relative preserve-3d"
            style={{
              transform: activePortrait === 'denim' ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.65s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            {/* FRONT FACE: NAVY BLAZER PORTRAIT (Active when cursor is on Left) */}
            <div
              className="absolute inset-0 backface-hidden flex items-end justify-center pointer-events-none"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <img
                src="/hero-blazer.png"
                alt="Anupa Supul - Software Engineer"
                className="h-full w-auto max-w-none object-contain object-bottom select-none"
                style={{
                  filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.35)) drop-shadow(-8px 0 25px rgba(255,85,0,0.28))',
                }}
              />
            </div>

            {/* BACK FACE: BLUE DENIM PORTRAIT (Active when cursor is on Right) */}
            {/* Normalized with scale(1.14) and rotateY(180deg) to match eye-line & head height perfectly */}
            <div
              className="absolute inset-0 backface-hidden flex items-end justify-center pointer-events-none"
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <img
                src="/hero-denim.png"
                alt="Anupa Supul - AI & Systems Researcher"
                className="h-full w-auto max-w-none object-contain object-bottom select-none"
                style={{
                  transform: 'scale(1.14)',
                  transformOrigin: 'bottom center',
                  filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.25))',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
