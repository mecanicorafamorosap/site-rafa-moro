import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EmergencySection } from './components/EmergencySection';
import { ServicesSection } from './components/ServicesSection';
import { PartnersSection } from './components/PartnersSection';
import { CompletedJobsSection } from './components/CompletedJobsSection';
import { VideosSection } from './components/VideosSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingEmergencyButton } from './components/FloatingEmergencyButton';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Scroll to section handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Listen to scroll to update active section in navbar
  useEffect(() => {
    const sectionIds = ['inicio', 'servicos', 'socorro', 'parceiros', 'trabalhos', 'videos', 'contato'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (id === 'inicio' && window.scrollY < 400) {
          setActiveSection('inicio');
          break;
        }
        const elem = document.getElementById(id);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-gray-100 flex flex-col font-sans selection:bg-red-600 selection:text-white pb-14 lg:pb-0">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <div id="inicio">
          <Hero
            onOpenEmergency={() => handleNavigate('socorro')}
            onExploreServices={() => handleNavigate('servicos')}
          />
        </div>

        {/* 24-Hour Emergency System Section */}
        <EmergencySection />

        {/* Professional Auto Services Section */}
        <ServicesSection
          onOpenEmergency={() => handleNavigate('socorro')}
        />

        {/* Partner Network Section (Towing, Hotels, Inns, Car Wash, Tires) */}
        <PartnersSection />

        {/* Completed Daily Workshop Vehicles Showcase */}
        <CompletedJobsSection />

        {/* Educational Video Library & Safety Advice */}
        <VideosSection />

        {/* Location & Contact Section */}
        <ContactSection />
      </main>

      {/* Official Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Floating Emergency Button for Mobile & Desktop */}
      <FloatingEmergencyButton
        onOpenEmergency={() => handleNavigate('socorro')}
      />
    </div>
  );
}
