import React, { ReactNode } from 'react'


const Card = ({titre, icon , text}:{titre: string, icon: ReactNode, text: string}) => {
  return (
    <div className='mt-14 border min-h-64 items-center border-[#00fefb] rounded m-4'>
      <div className='p-2 border-b border-[#00fefb]'>
        <div className='p-4 bg-[#00fefb] w-[70px] mx-auto rounded-full mt-[-40px] text-4xl'>{icon}</div>
        <p className='text-[#00fefb] text-center font-bold text-2xl uppercase'>{titre}</p>
      </div>
      <p className='text-[#00fefb] text-center p-4'>{text}</p>
    </div>
  )
}

export default Card
