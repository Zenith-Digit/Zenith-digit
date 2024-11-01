"use client"
import React from 'react'
import GardePage from '@/components/pageGarde/GardePage';
import { BlueCard } from '@/components/cards/BlueCard';
import WebDev from '@/components/webDev/WebDev';
import { AiOutlineBaidu } from "react-icons/ai";
import { FaYahoo } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoftbing } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";


export default function CardHoverEffectDemo() {
  return (
    <>
    <GardePage title='Service' />
    <h1 className='text-[#00fefb] text-4xl font-bold m-8 text-center'>Nos Services</h1>
    <p className='w-5/6 mx-auto py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias accusantium animi ullam, expedita qui neque nisi perspiciatis reiciendis voluptas repudiandae iste quis non sit facere culpa corporis doloremque facilis optio!</p>
    <div className=" mx-auto px-8 border-b-4 border-[#00fefb]">
      <BlueCard />
    </div>
    <WebDev />
    <div>
    <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Référencement SEO
        </h2>
        <p className='w-5/6 mx-auto py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias accusantium animi ullam, expedita qui neque nisi perspiciatis reiciendis voluptas repudiandae iste quis non sit facere culpa corporis doloremque facilis optio!</p>
        <div className='flex justify-between w-5/6 mx-auto my-10'>
          <AiOutlineBaidu className='text-4xl text-[#0000AB]'/>
          <FaYahoo className='text-4xl text-[#5F01D1]'/>
          <FcGoogle className='text-4xl'/>
          <SiMicrosoftbing className='text-4xl text-[#2D6CEE]'/>
          <FaMeta className='text-4xl text-[#0A85FA]'/>
        </div>
    </div>
    </>
  );
}