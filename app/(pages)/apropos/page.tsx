"use client"
import React from "react";
import GardePage from "@/components/pageGarde/GardePage";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { VisionSection } from "@/components/ourvision/VisionSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import LogoCarousel from "@/components/logoSlider/LogoSlider";

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <GardePage title={"À Propos"} />
      
      {/* Introduction Section */}
      <AboutIntro />
      
      {/* Vision & Mission Section */}
      <VisionSection />
      
      {/* Values Section */}
      <ValuesSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Partners Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nos Partenaires
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Des entreprises de confiance qui nous font confiance pour leurs projets digitaux
            </p>
          </div>
          <LogoCarousel />
        </div>
      </section>
    </>
  );
}
