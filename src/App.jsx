import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Linkedin, Github } from 'lucide-react';
import MainView from './components/MainView';
import ResearchView from './components/ResearchView';
import NavLink from './components/NavLink';
import GlassCard from './components/GlassCard'; // Keep it if used elsewhere or for future

const App = () => {
  const [currentView, setCurrentView] = useState('main'); // 'main' | 'research'
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only track sections in main view
      if (currentView === 'main') {
        const sections = ['home', 'about', 'skills', 'certifications', 'research', 'projects', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= -200 && rect.top <= 400;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('research');
      return;
    }

    // If navigating to standard sections
    if (currentView === 'research') {
      setCurrentView('main');
      // Wait for render then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-brand-orange selection:text-white overflow-x-hidden">

      {/* Sticky Navigation (Visible when scrolled past hero) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'opacity-100 translate-y-0 bg-slate-950/90 backdrop-blur-xl shadow-xl shadow-black/40 py-3 md:py-4 border-b border-white/10'
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
            <div className="text-xl font-bold text-slate-100 tracking-tight">
              Anupa Supul
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink id="home" label="Home" onClick={handleNavigation} isActive={activeSection === 'home'} />
            <NavLink id="about" label="About" onClick={handleNavigation} isActive={activeSection === 'about'} />
            <NavLink id="skills" label="Tech Stack" onClick={handleNavigation} isActive={activeSection === 'skills'} />
            <NavLink id="certifications" label="Certifications" onClick={handleNavigation} isActive={activeSection === 'certifications'} />
            <NavLink id="projects" label="Projects" onClick={handleNavigation} isActive={activeSection === 'projects'} />
            <NavLink id="research-page" label="Research Lab" onClick={handleNavigation} isActive={currentView === 'research'} isAction={true} />
            <NavLink id="contact" label="Contact" onClick={handleNavigation} isActive={activeSection === 'contact'} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-slate-300 hover:text-brand-orange"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay (Accessible from both Hero and Sticky Nav) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-slate-950/98 backdrop-blur-2xl animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-brand-orange/20 hover:border-brand-orange/40 transition-all border border-white/10"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Nav Links */}
          <div className="flex flex-col items-center space-y-7 mb-10">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Tech Stack' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'projects', label: 'Projects' },
              { id: 'research-page', label: 'Research Lab', special: true },
              { id: 'contact', label: 'Contact' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-3xl sm:text-4xl font-bold tracking-tight transition-all duration-300 transform
                  ${item.special
                    ? 'text-brand-orange hover:scale-105'
                    : 'text-slate-300 hover:text-white hover:scale-105'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links Footer */}
          <div className="flex items-center gap-5 mt-4">
            <a href="https://github.com/AnupaSupul" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-brand-orange hover:border-brand-orange transition-all" title="GitHub">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/anupa-supul-a511822ab/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-brand-orange hover:border-brand-orange transition-all" title="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="mailto:supulanupa@gmail.com" className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-brand-orange hover:border-brand-orange transition-all" title="Email">
              <Mail size={22} />
            </a>
            <a href="/cv/AnupaSupulCV.pdf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-brand-orange hover:border-brand-orange transition-all" title="CV (PDF)">
              <FileText size={22} />
            </a>
          </div>

          {/* Brand Accent Line */}
          <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent"></div>
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
        <ResearchView />
      )}

      {/* FOOTER (Shared across views) */}
      <footer id="contact" className="bg-gradient-to-b from-slate-900 to-black pt-32 pb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20vw] font-bold text-white whitespace-nowrap animate-float-slow">CONNECT</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Innovate?</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-md font-light">
                I'm available for research collaborations, full-stack opportunities, or just a chat about systems architecture.
              </p>

              <a href="mailto:supulanupa@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors text-lg group">
                Start a Conversation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <a href="https://www.linkedin.com/in/anupa-supul-a511822ab/" className="group flex items-center justify-between p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white">LinkedIn</div>
                    <div className="text-slate-400 text-sm">Professional Profile</div>
                  </div>
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a href="https://github.com/AnupaSupul" className="group flex items-center justify-between p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-500/50 hover:bg-slate-900 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 border border-slate-700 text-white rounded-xl group-hover:scale-110 transition-transform">
                    <Github size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white">GitHub</div>
                    <div className="text-slate-400 text-sm">Code Repositories</div>
                  </div>
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Anupa Supul. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;