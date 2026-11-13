import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail, FileText, ArrowRight, Sparkles } from 'lucide-react';
import MainView from './components/MainView';
import ResearchView from './components/ResearchView';
import NavLink from './components/NavLink';
import ContactSection from './components/sections/ContactSection';
import ScrollProgress from './components/common/ScrollProgress';
import { useSmoothScroll, scrollToTarget } from './hooks/useSmoothScroll';

const App = () => {
  const [currentView, setCurrentView] = useState('main'); // 'main' | 'research'
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize Lenis + GSAP ScrollTrigger synchronization
  useSmoothScroll();

  // Handle scroll for navbar styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only track sections in main view
      if (currentView === 'main') {
        const sections = ['home', 'about', 'skills', 'projects', 'research', 'experience', 'education', 'certifications', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= -250 && rect.top <= 350;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  const handleNavigation = (id) => {
    setMobileMenuOpen(false);

    // If navigating to Research page
    if (id === 'research-page') {
      setCurrentView('research');
      scrollToTarget(0);
      setActiveSection('research');
      return;
    }

    // If navigating to standard sections from Research page
    if (currentView === 'research') {
      setCurrentView('main');
      setTimeout(() => {
        if (id === 'home') {
          scrollToTarget(0);
        } else {
          scrollToTarget(`#${id}`);
        }
      }, 100);
    } else {
      if (id === 'home') {
        scrollToTarget(0);
      } else {
        scrollToTarget(`#${id}`);
      }
    }
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-slate-800 selection:bg-brand-orange selection:text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Navigation (Appears smoothly when scrolled past hero) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'opacity-100 translate-y-0 bg-slate-950/90 backdrop-blur-xl shadow-xl shadow-black/50 py-3 md:py-4 border-b border-white/10'
        : 'opacity-0 -translate-y-full pointer-events-none py-4'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer z-50 group"
            onClick={() => handleNavigation('home')}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center font-display font-black text-lg sm:text-xl text-white shadow-md shadow-orange-900/40 group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight font-display">
              ANUPA SUPUL
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-7">
            <NavLink id="home" label="Home" onClick={handleNavigation} isActive={activeSection === 'home' && currentView === 'main'} />
            <NavLink id="about" label="About" onClick={handleNavigation} isActive={activeSection === 'about'} />
            <NavLink id="skills" label="Tech Stack" onClick={handleNavigation} isActive={activeSection === 'skills'} />
            <NavLink id="projects" label="Projects" onClick={handleNavigation} isActive={activeSection === 'projects'} />
            <NavLink id="research" label="Research" onClick={handleNavigation} isActive={activeSection === 'research' && currentView === 'main'} />
            <NavLink id="experience" label="Experience" onClick={handleNavigation} isActive={activeSection === 'experience'} />
            <NavLink id="certifications" label="Certifications" onClick={handleNavigation} isActive={activeSection === 'certifications'} />
            <NavLink id="contact" label="Contact" onClick={handleNavigation} isActive={activeSection === 'contact'} />
            <NavLink id="research-page" label="Research Lab ↗" onClick={handleNavigation} isActive={currentView === 'research'} isAction={true} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50 flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-brand-orange hover:border-brand-orange/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          NEXT-LEVEL CLASSY EDITORIAL MOBILE MENU DRAWER
         ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-gradient-to-b from-[#180803]/98 via-[#1F0A04]/98 to-[#120501]/98 backdrop-blur-3xl text-white p-6 animate-fade-in overflow-y-auto">
          {/* Subtle Ambient Glow Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-72 h-72 bg-brand-orange/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Brand Bar & Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-orange-500/20 relative z-10 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center font-display font-black text-lg text-white shadow-md shadow-brand-orange/40">
                A
              </div>
              <div>
                <span className="text-base font-bold font-display tracking-tight block leading-tight">
                  ANUPA SUPUL
                </span>
                <span className="text-[10px] font-mono text-brand-orange font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  AVAILABLE FOR ROLES
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange border border-white/15 text-slate-200 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Middle: Numbered Classy Editorial Navigation Links */}
          <div className="my-auto py-6 flex flex-col space-y-3 relative z-10">
            {[
              { id: 'home', num: '00', label: 'Home' },
              { id: 'about', num: '01', label: 'About' },
              { id: 'skills', num: '02', label: 'Tech Stack' },
              { id: 'projects', num: '03', label: 'Featured Projects' },
              { id: 'research', num: '04', label: 'Research Lab' },
              { id: 'experience', num: '05', label: 'Experience & Leadership' },
              { id: 'education', num: '06', label: 'Academic Rigor' },
              { id: 'certifications', num: '07', label: 'AWS Certifications' },
              { id: 'contact', num: '08', label: 'Contact' },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all group text-left ${
                    isActive
                      ? 'bg-brand-orange/15 border border-brand-orange/40 text-brand-orange'
                      : 'hover:bg-white/5 text-slate-200 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold text-orange-400/80">
                      {item.num}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold font-sans tracking-tight group-hover:translate-x-1.5 transition-transform">
                      {item.label}
                    </span>
                  </div>

                  <span className={`text-xs font-mono transition-transform ${
                    isActive ? 'text-brand-orange translate-x-1' : 'text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                  }`}>
                    →
                  </span>
                </button>
              );
            })}

            {/* Special Highlight Link: Research Lab */}
            <div className="pt-2">
              <button
                onClick={() => handleNavigation('research-page')}
                className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-brand-orange/20 via-[#3B1304] to-brand-orange/20 border-2 border-brand-orange/60 text-white flex items-center justify-between shadow-lg shadow-brand-orange/20 active:scale-[0.99] transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles size={16} className="text-brand-orange animate-pulse" />
                  <span className="text-sm font-bold font-mono tracking-tight text-white">
                    EXPLORE DEDICATED RESEARCH LAB
                  </span>
                </div>
                <ArrowRight size={16} className="text-brand-orange" />
              </button>
            </div>
          </div>

          {/* Bottom Actions & Social Row */}
          <div className="pt-4 border-t border-orange-500/20 relative z-10 shrink-0 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <a
                href="/cv/AnupaSupulCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-sans font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/40 active:scale-95 transition-all"
              >
                <FileText size={15} />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="mailto:supulanupa@gmail.com"
                className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href="https://github.com/AnupaSupul"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-brand-orange hover:border-brand-orange flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/anupa-supul-a511822ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-brand-orange hover:border-brand-orange flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:supulanupa@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-brand-orange hover:border-brand-orange flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* VIEW SWITCHER */}
      {currentView === 'main' ? (
        <MainView
          scrollTo={handleNavigation}
          navigateToResearch={() => handleNavigation('research-page')}
          activeSection={activeSection}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
        />
      ) : (
        <>
          <ResearchView navigateToMain={() => handleNavigation('home')} />
          <ContactSection scrollTo={handleNavigation} />
        </>
      )}

    </div>
  );
};

export default App;
