import React from 'react'
import './loading.css'
import Image from 'next/image'
import logo from "./logo.png";


const Loading = () => {
  return (
    <div className='bg-black w-full  items-center py-20'>
      <Image src={logo} alt={'logo'} className='logo w-2/12 mx-auto '/>
      <h1 className='text-center md:text-2xl mt-10 text-[#00fefb]'>En cours de chargement ...</h1>
    </div>
  )
}

export default Loading
