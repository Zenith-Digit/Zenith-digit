'use client'
import ansi from '@/images/ansi.png';
import adu from '@/images/adu.png';
import cipmen from '@/images/cipmen.png';
import codeloccol from '@/images/Codeloccol.png'
import kim from '@/images/logokim.png'
import Es from '@/images/logoEs.png'
import Image from 'next/image';
import React from 'react';
import './logoslider.css';



const LogoCarousel = () => {

  const logos = [
    ansi,
    adu,
    cipmen,
    codeloccol,
    kim,
    Es,
    ansi,
    adu,
    cipmen,
    codeloccol,
    kim,
    Es,
    ansi,
    adu,
    cipmen,
    codeloccol,
    kim,
    Es,
    ansi,
    adu,
    cipmen,
    codeloccol,
    kim,
    Es,
    ansi,
    adu,
    cipmen,
    codeloccol,
    kim,
    Es,
    ansi,
    adu,
    cipmen,
    codeloccol,
    kim,
    Es,
  ]


  return (
    <div className=' py-8'>
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
