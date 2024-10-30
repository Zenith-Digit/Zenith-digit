'use client'
import Image from 'next/image';
import React from 'react';
import './logoslider.css';

interface InfiniteLogoCarouselProps {
  logos: any[]; // Liste des URLs d'images de logos
}

const LogoCarousel: React.FC<InfiniteLogoCarouselProps> = ({ logos }) => {
  return (
    <div className='border-b-4 border-[#00fefb] py-8'>
    <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Nos partenaire</h2>
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-scroll flex items-center gap-8">
        {/* Affiche les logos deux fois pour l'effet de boucle */}
        {logos.concat(logos).map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-16 w-auto object-contain"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default LogoCarousel;
