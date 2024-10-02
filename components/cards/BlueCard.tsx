import React, { ReactNode } from 'react'



const BlueCard = ({titre, icon , text}:{titre: string, icon: ReactNode, text: string}) => {
  return (
    <div className='mt-14 border min-h-64 items-center  border-[#00fefb] bg-[#00fefb] rounded m-4'>
      <div className=' border-b-2 border-black '>
        <div className='p-4 border-[#00fefb] border-2 bg-black w-[70px] mx-auto rounded-full mt-[-40px] text-[#00fefb] text-4xl'>{icon}</div>
        <p className='bg-[#00fefb] text-center font-bold text-2xl uppercase'>{titre}</p>
      </div>
      <p className='bg-[#00fefb] text-center p-4'>{text}</p>
    </div>
  )
}

export default BlueCard
