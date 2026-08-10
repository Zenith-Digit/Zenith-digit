import { BlueCard } from "@/components/cards/BlueCard";
import { ModernHero } from "@/components/sections/ModernHero";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { VisionSection } from "@/components/ourvision/VisionSection";
import Realiser from "@/components/realisation/Realisation";
import LogoCarousel from "@/components/logoSlider/LogoSlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <ModernHero />
      
      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Des solutions digitales complètes pour transformer votre entreprise et atteindre vos objectifs
            </p>
          </div>
          <BlueCard />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Portfolio Section */}
      {/* <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nos Réalisations
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets récents qui témoignent de notre expertise
            </p>
          </div>
          <Realiser />
        </div>
      </section> */}

      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter Section */}
      <NewsletterSection />

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
