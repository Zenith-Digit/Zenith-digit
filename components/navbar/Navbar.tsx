"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import DarkLogo from './logodark.png';
import LightLogo from './logo.png'; // Assurez-vous d'importer le logo clair
import Link from 'next/link';
import { Switch } from '../ui/switch';
import { Sheet } from '../ui/sheet';
import { SideNav } from '../sideNav/SideNav';
import Mode from '../mode/Mode';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fonction pour changer le mode
  const handleToggleMode = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
  };

  return (
    <nav className='bg-black border-b-4 border-[#00fefb] flex fixed w-full z-50'>
      <div className='mx-auto p-4 w-1/2 ms-3 md:ms-8'>
        <Image 
          src={isDarkMode ? LightLogo : DarkLogo} // Changez le logo ici
          alt='logo' 
          width={60} 
          height={60} 
        />
      </div>
      <div className='w-1/2 lg:flex justify-around mt-8 hidden'>
        <Link href={'./'} className='text-[#00fefb] text-xl'>Accueil</Link>
        <Link href={'./apropos'} className='text-[#00fefb] text-xl'>À propos</Link>
        <Link href={'./service'} className='text-[#00fefb] text-xl'>Nos services</Link>
        <Link href={'./contact'} className='text-[#00fefb] text-xl'>Contact</Link>
      </div>
      <Mode onToggle={handleToggleMode} /> {/* Passez la fonction de gestion */}
      <div className='block lg:hidden'><SideNav /></div>
    </nav>
  );
}

export default Navbar;
