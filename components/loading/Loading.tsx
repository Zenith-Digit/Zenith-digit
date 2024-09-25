import React from 'react'
import './loading.css'
import Image from 'next/image'
import logo from "./logo.png";


const Loading = () => {
  return (
    <div className='bg-black w-full h-screen items-center pt-32'>
      <Image src={logo} alt={'logo'} className='logo w-2/6 mx-auto '/>
    </div>
  )
}

export default Loading
