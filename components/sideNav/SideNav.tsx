import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link"
import { IoMenu } from "react-icons/io5";
import lightLogo from "@/components/navbar/logo.png";
import darkLogo from "@/components/navbar/logodark.png";



export function SideNav({isDarkMode}:{isDarkMode:boolean}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <IoMenu className="text-[#00fefb] m-5 border border-[#00fefb] rounded text-4xl"/>
      </SheetTrigger>
      <SheetContent className={`border-s border-[#00fefb] z-50 ${isDarkMode ? 'bg-white' : 'bg-black'}`}>
        <SheetHeader className="flex-row justify-between w-full">
            <div>
            <Image src={isDarkMode ? lightLogo : darkLogo} alt={"logo"} className="w-20"/>
            </div>
        </SheetHeader>
      <div className=' mt-8 '>
        <div className="my-4 border-t border-[#00fefb] py-2">

        <SheetClose asChild>
            <Link href={'/'} className='text-[#00fefb] text-xl my-14'>Accueil</Link>
        </SheetClose>
        </div>
        <div className="my-4 border-t border-[#00fefb] py-2">

        <SheetClose asChild>
            <Link href={'/apropos'} className='text-[#00fefb] text-xl'>À propos</Link>
        </SheetClose>
        </div>
      
        <div className="my-4 border-t border-[#00fefb] py-2">

        <SheetClose asChild>
        <Link href={'./service'} className='text-[#00fefb] text-xl'>Nos services</Link>
        </SheetClose>
        </div>
        
        <div className="my-4 border-t border-[#00fefb] py-2">

        <SheetClose asChild>
        <Link href={'./contact'} className='text-[#00fefb] text-xl'>Contact</Link>
        </SheetClose>
        </div>
        </div>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
