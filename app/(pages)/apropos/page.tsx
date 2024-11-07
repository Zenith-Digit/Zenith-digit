"use client"
import React from "react";
import GardePage from "@/components/pageGarde/GardePage";
import { VisionSection } from "@/components/ourvision/VisionSection";
import LogoCarousel from "@/components/logoSlider/LogoSlider";
import ContactCard from "@/components/profilInfos/infos";

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
     <div className=" md:flex py-4">
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
        <p className="text-4xl font-bold text-center">🔎</p>
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
     <div className="border-b-4 border-[#00fefb]">
     <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Notre Equipe
     </h2>
    <div className="grid gap-6 mb-10 sm:grid-cols-1 px-20 md:px-0 md:grid-cols-2 lg:grid-cols-3 ">
    <ContactCard
        initials="AS"
        name="Abdoul Salim Ali Maazou"
        position="Responsable Commercial"
        email="Abdoulsalim@gmail.com"
        phone="92 00 00 00"
      />
      <ContactCard
        initials="AS"
        name="Abdoul Salim Ali Maazou"
        position="Responsable Commercial"
        email="Abdoulsalim@gmail.com"
        phone="92 00 00 00"
      />
      <ContactCard
        initials="AS"
        name="Abdoul Salim Ali Maazou"
        position="Responsable Commercial"
        email="Abdoulsalim@gmail.com"
        phone="92 00 00 00"
      />
    </div>
    </div>
     <LogoCarousel />
     </>
  );
}
