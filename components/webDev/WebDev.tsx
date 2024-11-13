import Image from 'next/image'
import React from 'react'
import kim from "@/images/kim.jpg";
import kimTab from "@/images/kim-tab.jpg";
import kimDesk from "@/images/kim-desk.jpg";


const WebDev = () => {
  return (
    <div className='border-b-4 border-[#00fefb]'>
        <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Développement web
        </h2>
        <p className='w-5/6 mx-auto py-8 text-center text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-wide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias accusantium animi ullam, expedita qui neque nisi perspiciatis reiciendis voluptas repudiandae iste quis non sit facere culpa corporis doloremque facilis optio!</p>
    <div className='lg:flex gap-6 justify-around py-10'>
{/* mobile devise */}


<div className='py-10'>
<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <Image src={kim} className="dark:hidden w-[272px] h-[572px]" alt="" width='300' height='300'/>
        <Image src={kim} className="hidden dark:block w-[272px] h-[572px]" alt="" width='300' height='300'/>
    </div>
</div>
</div>
{/* tablette devise */}



<div className='py-10'>
<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
        <Image src={kimTab} className="dark:hidden h-[426px] md:h-[654px]" alt="" />
        <Image src={kimTab} className="hidden dark:block h-[426px] md:h-[654px]" alt="" />
    </div>
</div>
</div>
{/* desktap devise */}


<div className='py-10'>

<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
    <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
        <Image src={kimDesk} className="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl" alt="" />
        <Image src={kimDesk} className="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl" alt="" />
    </div>
</div>
<div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
<div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>

</div>


    </div>
    </div>
  )
}

export default WebDev