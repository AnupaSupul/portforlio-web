import React, { useState } from 'react';
import SplitHero from './hero/SplitHero';
import AboutSection from './sections/AboutSection';
import TechStackSection from './sections/TechStackSection';
import ProjectsSection from './sections/ProjectsSection';
import ResearchSection from './sections/ResearchSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';
import ProjectModal from './ProjectModal';

const MainView = ({ scrollTo, navigateToResearch, onOpenMobileMenu }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-full bg-[#FAF8F5] overflow-hidden">
      {/* 00 / Split-Screen Hero (UNTOUCHED) */}
      <SplitHero scrollTo={scrollTo} onOpenMobileMenu={onOpenMobileMenu} />

      {/* 01 / About Section (Beyond the Syntax — Interactive Architecture Canvas) */}
      <AboutSection scrollTo={scrollTo} />

      {/* 02 / Tech Stack (Technical Expertise — 5-Layer Interactive Ecosystem) */}
      <TechStackSection />

      {/* 03 / Featured Projects (Sri Lankan Legal RAG Hybrid Pipeline + Distinct Projects) */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* 04 / Academic Research Lab (Rice Leaf Disease Detection — Specimen & 95.27% Accuracy) */}
      <ResearchSection navigateToResearch={navigateToResearch} />

      {/* 05 / Experience & Leadership (BotCalm Professional Timeline) */}
      <ExperienceSection />

      {/* 06 / Education (Academic Foundation & Rigor — Ruhuna & St. Thomas') */}
      <EducationSection />

      {/* 07 / AWS Cloud Certifications (Curated Gallery & Live PDF Previews) */}
      <CertificationsSection />

      {/* 08 / Contact Section & Minimal Brand Footer (UNTOUCHED) */}
      <ContactSection scrollTo={scrollTo} />

      {/* Expanded Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default MainView;
