import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail, FileText } from 'lucide-react';
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
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer z-50 group"
            onClick={() => handleNavigation('home')}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center font-display font-black text-xl text-white shadow-md shadow-orange-900/40 group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="text-xl font-bold text-slate-100 tracking-tight font-display">
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
          <div className="md:hidden z-50">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-slate-300 hover:text-brand-orange transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-slate-950/98 backdrop-blur-2xl animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-brand-orange/20 hover:border-brand-orange/40 transition-all border border-white/10"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Nav Links */}
          <div className="flex flex-col items-center space-y-6 mb-10">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Tech Stack' },
              { id: 'projects', label: 'Projects' },
              { id: 'research', label: 'Research' },
              { id: 'experience', label: 'Experience' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'contact', label: 'Contact' },
              { id: 'research-page', label: 'Open Research Lab ↗', special: true }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-2xl sm:text-3xl font-display font-bold tracking-tight transition-all duration-300 transform
                  ${item.special
                    ? 'text-brand-orange hover:scale-105'
                    : 'text-slate-300 hover:text-white hover:scale-105'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links Footer */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/AnupaSupul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-brand-orange hover:border-brand-orange transition-all"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anupa-supul-a511822ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-brand-orange hover:border-brand-orange transition-all"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:supulanupa@gmail.com"
              className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-brand-orange hover:border-brand-orange transition-all"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="/cv/AnupaSupulCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-brand-orange hover:border-brand-orange transition-all"
              title="Download CV (PDF)"
            >
              <FileText size={20} />
            </a>
          </div>

          {/* Brand Accent Line */}
          <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
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
