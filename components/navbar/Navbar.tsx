"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import DarkLogo from './logodark.png';
import LightLogo from './logo.png'; // Assurez-vous d'importer le logo clair
import Link from 'next/link';
import { SideNav } from '../sideNav/SideNav';
import Mode from '../mode/Mode';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fonction pour changer le mode
  const handleToggleMode = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
  };

  return (
    <nav className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-700/20 flex fixed w-full z-50 shadow-lg'>
      <div className='container mx-auto px-6 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <Image 
            src={isDarkMode ? LightLogo : DarkLogo}
            alt='Zenith Digit Logo' 
            width={50} 
            height={50}
            className="hover:scale-110 transition-transform duration-300"
          />
          <span className="ml-3 text-xl font-bold text-slate-900 dark:text-white">
            Zenith Digit
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-8'>
          <Link 
            href={'./'} 
            className='text-slate-700 dark:text-slate-300 hover:text-[#00fefb] transition-colors duration-300 font-medium'
          >
            Accueil
          </Link>
          <Link 
            href={'./apropos'} 
            className='text-slate-700 dark:text-slate-300 hover:text-[#00fefb] transition-colors duration-300 font-medium'
          >
            À propos
          </Link>
          <Link 
            href={'./service'} 
            className='text-slate-700 dark:text-slate-300 hover:text-[#00fefb] transition-colors duration-300 font-medium'
          >
            Services
          </Link>
          <Link 
            href={'./contact'} 
            className='text-slate-700 dark:text-slate-300 hover:text-[#00fefb] transition-colors duration-300 font-medium'
          >
            Contact
          </Link>
          
          {/* CTA Button */}
          <Link
            href={'./contact'}
            className='bg-[#00fefb] text-black px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-colors duration-300 shadow-lg hover:shadow-xl'
          >
            Démarrer
          </Link>
        </div>
        
        {/* Mobile Menu & Dark Mode */}
        <div className='flex items-center space-x-4'>
          <Mode onToggle={handleToggleMode} />
          <div className='block lg:hidden'>
            <SideNav isDarkMode={isDarkMode}/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
