"use client"
import React from 'react'
import { Slider } from '@/components/slider/Slider';
import { BlueCard } from '@/components/cards/BlueCard';

export default function CardHoverEffectDemo() {
  return (
    <>
    <Slider/>
    <h1 className='text-white text-center mt-10 mb-10 text-6xl'>Nos Services</h1>
    <div className="max-w-5xl mx-auto px-8">
      <BlueCard />
    </div>
    </>
  );
}