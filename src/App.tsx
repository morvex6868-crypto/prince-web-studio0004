/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';
import { WhatWeBuild } from './components/sections/WhatWeBuild';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { HowItWorks } from './components/sections/HowItWorks';
import { Features } from './components/sections/Features';
import { WhyUs } from './components/sections/WhyUs';
import { About } from './components/sections/About';
import { FAQ } from './components/sections/FAQ';
import { CTASection } from './components/sections/CTASection';
import { Contact } from './components/sections/Contact';
import { RequirementWizard } from './components/forms/RequirementWizard';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isRequirementModalOpen, setIsRequirementModalOpen] = useState<boolean>(false);
  const [preselectedBusinessType, setPreselectedBusinessType] = useState<string>('');
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [selectedDemoIdFromHero, setSelectedDemoIdFromHero] = useState<string | null>(null);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'work', 'how-it-works', 'features', 'about', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openRequirementModal = (service?: string, businessType?: string) => {
    setPreselectedService(service || '');
    setPreselectedBusinessType(businessType || '');
    setIsRequirementModalOpen(true);
  };

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-950 selection:text-white">
      {/* 4. Header / Navigation */}
      <Header
        onOpenRequirementModal={() => openRequirementModal()}
        activeSection={activeSection}
      />

      {/* Main Website Sections */}
      <main className="flex-1">
        {/* 5. Hero Section */}
        <Hero
          onOpenRequirementModal={(service, businessType) => openRequirementModal(service, businessType)}
          onNavigateToWork={() => navigateToSection('work')}
          onSelectConceptDemo={(demoId) => setSelectedDemoIdFromHero(demoId)}
        />

        {/* 6. Trust / Value Strip */}
        <TrustStrip />

        {/* 7. What We Build */}
        <WhatWeBuild
          onSelectCategory={(categoryTitle) => {
            const mappedType = categoryTitle.replace(' Websites', '');
            openRequirementModal(undefined, mappedType);
          }}
        />

        {/* 8. Services */}
        <Services
          onSelectService={(serviceTitle) => {
            openRequirementModal(serviceTitle);
          }}
        />

        {/* 9. Our Work / Portfolio */}
        <Portfolio
          onRequestSimilarProject={(category) => {
            openRequirementModal(undefined, category);
          }}
          selectedDemoIdFromHero={selectedDemoIdFromHero}
          onClearHeroDemoSelection={() => setSelectedDemoIdFromHero(null)}
        />

        {/* 10. How It Works */}
        <HowItWorks
          onStartWebsite={() => openRequirementModal()}
        />

        {/* 11. Features */}
        <Features
          onOpenRequirementModal={() => openRequirementModal()}
        />

        {/* 12. Why Prince Web Studio */}
        <WhyUs />

        {/* 13. About */}
        <About />

        {/* 14. FAQ */}
        <FAQ
          onOpenRequirementModal={() => openRequirementModal()}
        />

        {/* 17. Final CTA */}
        <CTASection
          onOpenRequirementModal={() => openRequirementModal()}
          onNavigateToWork={() => navigateToSection('work')}
        />

        {/* 16. Contact */}
        <Contact
          onOpenRequirementModal={() => openRequirementModal()}
        />
      </main>

      {/* 18. Footer */}
      <Footer
        onOpenRequirementModal={(service) => openRequirementModal(service)}
      />

      {/* 15. Get Your Website — Requirement Wizard */}
      <AnimatePresence>
        {isRequirementModalOpen && (
          <RequirementWizard
            isOpen={isRequirementModalOpen}
            onClose={() => {
              setIsRequirementModalOpen(false);
              setPreselectedBusinessType('');
              setPreselectedService('');
            }}
            initialBusinessType={preselectedBusinessType}
            initialService={preselectedService}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
