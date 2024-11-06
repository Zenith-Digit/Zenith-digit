"use client"
import React from "react";
import GardePage from "@/components/pageGarde/GardePage";
import { VisionSection } from "@/components/ourvision/VisionSection";
import LogoCarousel from "@/components/logoSlider/LogoSlider";

export default function page() {
  return (
    <>
    <GardePage title={"A propos"} />
     <div className="border-b-4 border-[#00fefb]">
     <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Bienvenue chez Zenith Digit
     </h2>
     <p className='w-5/6 mx-auto py-4'>Chez Zenith Digit, nous accompagnons les entreprises dans leur transformation numérique pour les aider à atteindre leur plein potentiel. Passionnée par la technologie et le marketing, notre équipe collabore étroitement avec chaque client pour concevoir des stratégies digitales personnalisées et maximiser leur visibilité.</p>
     </div>
     <VisionSection />
     <div className="border-b-4 border-[#00fefb]">
     <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Nos Valeurs
     </h2>
     <div className=" md:flex">
      <div>
        <p className="text-4xl font-bold text-center">💡</p>
        <h2 className="text-[#00fefb] text-2xl font-bold m-8 text-center">Innovation
     </h2>
     <p className='w-5/6 mx-auto py-4'>Nous nous engageons à rester à la pointe des tendances et technologies pour offrir des solutions modernes et efficaces.</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-center">🌟</p>
        <h2 className="text-[#00fefb] text-2xl font-bold m-8 text-center">Excellence
     </h2>
     <p className='w-5/6 mx-auto py-4'>Nous visons la qualité dans chaque projet, assurant à nos clients des résultats qui dépassent leurs attentes.</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-center">💡</p>
        <h2 className="text-[#00fefb] text-2xl font-bold m-8 text-center">Transparence
     </h2>
     <p className='w-5/6 mx-auto py-4'>Nous croyons en une communication honnête et transparente avec nos clients, à chaque étape de la collaboration.</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-center">🤝</p>
        <h2 className="text-[#00fefb] text-2xl font-bold m-8 text-center">Collaboration
     </h2>
     <p className='w-5/6 mx-auto py-4'>Le succès naît de la synergie ; notre équipe travaille en étroite collaboration avec les clients pour comprendre et réaliser leur vision.</p>
      </div>
     </div>
     </div>

     <LogoCarousel />
     </>
  );
}
