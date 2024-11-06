import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import logo from '@/components/navbar/logodark.png'
import Image from "next/image";
import './vision.css'
export function  VisionSection() {
  return (
    <BackgroundBeamsWithCollision className="border-b-4 border-[#00fefb] vis">
      <div className="bg-black/50 w-full h-full">
      <div className="lg:flex max-w-5xl mx-auto px-8 ">
        <div className="lg:w-1/2 lg:mt-36">
      <h2 className="text-[#00fefb] text-4xl font-bold p-8">Notre vision</h2>
      <p className=" w-5/6 mx-auto py-4 text-white">Nous aspirons à devenir un partenaire de confiance pour les entreprises, en les dotant des outils et des stratégies qui leur permettent de se démarquer et de grandir durablement dans l’environnement digital.</p>
      
      </div>
      <div className="lg:w-1/2 lg:mt-36">
      <h2 className="text-[#00fefb] text-4xl font-bold m-8">Notre Mission</h2>
      <p className=" w-5/6 mx-auto py-4 text-white">Notre mission est de rendre la transformation digitale accessible à toutes les entreprises, peu importe leur taille, pour les aider à prospérer dans un monde numérique en constante évolution.</p>
      </div>
      </div>
      </div>
        
    </BackgroundBeamsWithCollision>
  );
}
