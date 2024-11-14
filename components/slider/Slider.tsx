"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { FlipWords } from "../ui/flip-words";
import Image from "next/image";
import logo from '@/components/loading/logo.png'
import Link from "next/link";


export function Slider() {
  const images = [
    "https://i.pinimg.com/736x/00/0d/d0/000dd0f9a45b09109ac185d960f83ca6.jpg",
    "https://i.pinimg.com/736x/1a/fc/0f/1afc0f30b3674e8608d1f50766065b8d.jpg",
    "https://images.pexels.com/photos/25437427/pexels-photo-25437427/free-photo-of-programmation-et-configuration-du-bureau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  return (
    <ImagesSlider className="h-[400px] md:h-[40rem] border-b-4 border-[#00fefb]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            <Image src={logo} alt={'logo'} className='logo w-24 md:w-32 lg:w-44 mx-auto m-4'/>
            <p className="text-[#00fefb] m-2">Zenith Digit</p>
          <p>specialisé en <FlipWords words={['Developpement web', 'Developpement Mobile','Web design']} /></p>
        </motion.p>
        <Link href={"/contact"} >
        <button  className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Contactez nous →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#00fefb] to-transparent" />
        </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
