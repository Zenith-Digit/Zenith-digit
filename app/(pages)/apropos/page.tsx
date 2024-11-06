"use client"
import React from "react";
import QuiSommesNous from "@/components/apropos/QuiSommesNous";
import NotreEquipe from "@/components/apropos/notreEquipe";
import GardePage from "@/components/pageGarde/GardePage";
import { VisionSection } from "@/components/ourvision/VisionSection";

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
     </>
  );
}
