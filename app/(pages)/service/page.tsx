"use client"
import React from 'react'
import GardePage from '@/components/pageGarde/GardePage';
import { ServicesIntro } from '@/components/sections/ServicesIntro';
import { BlueCard } from '@/components/cards/BlueCard';
import { SEOSection } from '@/components/sections/SEOSection';
import { DesignSection } from '@/components/sections/DesignSection';
import { SocialMediaSection } from '@/components/sections/SocialMediaSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import WebDev from '@/components/webDev/WebDev';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <GardePage title='Services' />
      
      {/* Introduction Section */}
      <ServicesIntro />
      
      {/* Main Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nos Services Principaux
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services digitaux conçus pour propulser votre entreprise vers le succès
            </p>
          </div>
          <BlueCard />
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Développement Web
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Des solutions web modernes et performantes adaptées à vos besoins spécifiques
            </p>
          </div>
          <WebDev />
        </div>
      </section>

      {/* SEO Section */}
      <SEOSection />

      {/* Design Section */}
      <DesignSection />

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}