import React from 'react';
import Image from 'next/image';
import "./garde.css"
import logo from '@/components/loading/logo.png'
import { motion } from 'framer-motion';


interface GardePageProps {
  title: string;
}

const GardePage: React.FC<GardePageProps> = ({ title}) => {
  return (
    <div className="guard-page border-b-4 border-[#00fefb] ">
      <div className="content bg-black/50 w-full h-full">
       <motion.div
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative z-10 "
              >
      <Image src={logo} alt={'logo'} className='go w-24 md:w-32 lg:w-44 mx-auto m-4 mt-20'/>
              </motion.div>
        <h1 className='text-4xl md:text-6xl font-bold text-[#00fefb]'>{title}</h1>
        {/* Autres éléments de contenu */}
      </div>
    </div>
  );
};

export default GardePage;