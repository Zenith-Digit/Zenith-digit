import Image from 'next/image'
import React from 'react'
import darkLogo from './logodark.png'
import Link from 'next/link'
import { Switch } from '../ui/switch'
import { Sheet } from '../ui/sheet'
import { SideNav } from '../sideNav/SideNav'



const Navbar = () => {
  return (
    <nav className='bg-black border-b-4 border-[#00fefb] flex fixed w-full z-50'>
        <div className='mx-auto p-4 w-1/2 ms-8'>
            <Image src={darkLogo} alt='logo' width={60} height={60}/>
        </div>
        <div className='w-1/2 lg:flex justify-around mt-8 hidden'>
            <Link href={'./'} className='text-[#00fefb] text-xl'>Accueil</Link>
            <Link href={'./'} className='text-[#00fefb] text-xl'>Accueil</Link>
            <Link href={'./'} className='text-[#00fefb] text-xl'>Accueil</Link>
            <Link href={'./'} className='text-[#00fefb] text-xl'>Accueil</Link>
        </div>
        <div className='block lg:hidden'><SideNav /></div>
    </nav>
  )
}

export default Navbar
