"use client";
import React from 'react'
import './loading.css'
import Image from 'next/image'
import logo from "./logo.png";

const Loading = () => {
  return (
    <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full h-screen flex flex-col items-center justify-center relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300fefb\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00fefb]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#00fefb]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo with modern animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00fefb] to-cyan-400 rounded-full blur-2xl opacity-30 scale-110"></div>
          <Image 
            src={logo} 
            alt={'Zenith Digit Logo'} 
            className='logo w-32 h-32 md:w-40 md:h-40 mx-auto relative z-10'
          />
        </div>

        {/* Loading Text */}
        <h1 className='text-center text-2xl md:text-4xl font-bold text-white mb-4'>
          Zenith Digit
        </h1>
        <p className='text-center text-lg md:text-xl text-[#00fefb] mb-8'>
          En cours de chargement...
        </p>

        {/* Modern Loading Bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-[#00fefb] to-cyan-400 rounded-full loading-bar"></div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-[#00fefb] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#00fefb] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-[#00fefb] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#00fefb]/30 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00fefb]/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
    </div>
  )
}

export default Loading
