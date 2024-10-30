import React from 'react';
import Image from 'next/image';
import backgroundImage from "../../images/fibre.png"
import "./garde.css"
interface GardePageProps {
  title: string;
}

const GardePage: React.FC<GardePageProps> = ({ title}) => {
  return (
    <div className="guard-page ">
      <div className="content">
        <h1 className='text-4xl md:text-9xl font-bold text-[#00fefb]'>{title}</h1>
        {/* Autres éléments de contenu */}
      </div>
    </div>
  );
};

export default GardePage;