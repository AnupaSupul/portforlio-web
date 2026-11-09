import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, ArrowUp, Copy, Check } from 'lucide-react';

const ContactSection = ({ scrollTo }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('supulanupa@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-[#240B02] via-[#1A0801] to-[#0E0400] text-white pt-28 pb-12 overflow-hidden">
      {/* Ambient glowing fiery horizon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-brand-orange/30 via-orange-600/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Closing Headline & Action Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 pb-16 border-b border-white/10">

          {/* Left: Section Marker & Kinetic Headline */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-6 bg-brand-orange rounded-full" />
              <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
                08 / CONTACT
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-sans">
              Let's Build <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-300 to-orange-400">
                Something Meaningful.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-sans font-light leading-relaxed max-w-xl">
              Open to software engineering opportunities, research collaborations and interesting technical projects.
            </p>
          </div>

          {/* Right: Email Pill Button & Social Circles */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Email Pill Button */}
            <a
              href="mailto:supulanupa@gmail.com"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-orange-50 text-slate-900 font-sans font-bold text-sm shadow-xl shadow-black/40 hover:scale-105 transition-all duration-300"
            >
              <Mail size={16} className="text-brand-orange" />
              <span>supulanupa@gmail.com</span>
            </a>

            {/* Copy Button */}
            <button
              onClick={handleCopyEmail}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
              title="Copy Email Address"
            >
              {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={16} />}
            </button>

            {/* Circular Social Buttons */}
            <a
              href="https://github.com/AnupaSupul"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-brand-orange border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/anupa-supul-a511822ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-brand-orange border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="/cv/AnupaSupulCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-brand-orange border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
              title="Download Verified CV (PDF)"
            >
              <FileText size={18} />
            </a>
          </div>

        </div>

        {/* Minimal Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-sans">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-brand-orange flex items-center justify-center text-white font-black text-xs font-display">
              A
            </div>
            <span className="font-bold text-white text-sm tracking-tight font-sans">
              Anupa Supul
            </span>
          </div>

          {/* Navigation Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 font-sans">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Tech Stack' },
              { id: 'projects', label: 'Projects' },
              { id: 'research', label: 'Research' },
              { id: 'experience', label: 'Experience' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (scrollTo) {
                    scrollTo(link.id);
                  } else {
                    const el = document.getElementById(link.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-brand-orange transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Copyright & Back To Top */}
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Anupa Supul. All rights reserved.</span>
            <button
              onClick={() => {
                if (scrollTo) {
                  scrollTo('home');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-orange hover:text-white flex items-center justify-center transition-colors"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;
