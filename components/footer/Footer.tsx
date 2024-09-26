import React from 'react'
import logo from '@/components/navbar/logodark.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t-4 border-[#00fefb]'>
      <div>
        <Image src={logo} alt={'logo'}  className='w-24 lg:w-44'/>
      </div>

    </footer>
  )
}

export default Footer
