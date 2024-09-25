import Image from 'next/image'
import React from 'react'
import darkLogo from './logodark.png'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='bg-black border-b-4 border-[#00fefb] flex'>
        <div className='mx-auto p-4 w-1/2 ms-8'>
            <Image src={darkLogo} alt='logo' width={100} height={100}/>
        </div>
        <div className='w-1/2 flex justify-around mt-14 '>
            <Link href={'./'} className='text-[#00fefb] text-2xl'>Accueil</Link>
            <Link href={'./'} className='text-[#00fefb] text-2xl'>Accueil</Link>
            <Link href={'./'} className='text-[#00fefb] text-2xl'>Accueil</Link>
            <Link href={'./'} className='text-[#00fefb] text-2xl'>Accueil</Link>
        </div>
    </nav>
  )
}

export default Navbar
