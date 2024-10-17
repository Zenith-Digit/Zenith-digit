import React from 'react'
import './loading.css'
import Image from 'next/image'
import logo from "./logo.png";


const Loading = () => {
  return (
    <div className='bg-black w-full h-screen items-center mt-20 pt-32'>
      <Image src={logo} alt={'logo'} className='logo w-1/12 mx-auto '/>
      <h1 className='text-center text-[#00fefb]'>En cours de chargement</h1>
    </div>
  )
}

export default Loading
