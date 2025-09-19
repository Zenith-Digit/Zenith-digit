"use client";
import React from "react";
import Form from "@/components/form/Form";
import GardePage from "@/components/pageGarde/GardePage";
import { ContactIntro } from "@/components/sections/ContactIntro";
import { ContactTeamSection } from "@/components/sections/ContactTeamSection";
import { SocialFeedSection } from "@/components/sections/SocialFeedSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <GardePage title={"Contact"} />
      
      {/* Introduction Section */}
      <ContactIntro />
      
      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Envoyez-Nous un Message
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Utilisez le formulaire ci-dessous pour nous faire part de votre projet ou de vos questions. Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Form />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <ContactTeamSection />

      {/* Social Feed Section */}
      <SocialFeedSection />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
