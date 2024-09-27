import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import  logo  from '@/components/navbar/logodark.png';


export function SideNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <IoMenu className="text-[#00fefb] m-5 border border-[#00fefb] rounded text-4xl"/>
      </SheetTrigger>
      <SheetContent className="bg-black border-s border-[#00fefb] z-50">
        <SheetHeader className="flex-row justify-between w-full">
            <div>
            <Image src={logo} alt={"logo"} className="w-20"/>
            </div>
          <SheetClose asChild>
            <IoClose className="text-[#00fefb]  border border-[#00fefb] rounded text-4xl"/>
          </SheetClose>
        </SheetHeader>
      <div className=' mt-8 '>
        <div className="my-4 border-t border-[#00fefb] py-2">

        <SheetClose asChild>
            <Link href={'/'} className='text-[#00fefb] text-xl my-14'>Accueil</Link>
        </SheetClose>
        </div>
        <div className="my-4 border-t border-[#00fefb] py-2">

        <SheetClose asChild>
            <Link href={'/'} className='text-[#00fefb] text-xl'>Accueil</Link>
        </SheetClose>
        </div>
      
        <div className="my-4 border-t border-[#00fefb] py-2">

        <SheetClose asChild>
            <Link href={'/'} className='text-[#00fefb] text-xl'>Accueil</Link>
        </SheetClose>
        </div>
        
        <div className="my-4 border-t border-[#00fefb] py-2">

        <SheetClose asChild>
            <Link href={'/'} className='text-[#00fefb] text-xl'>Accueil</Link>
        </SheetClose>
        </div>
        </div>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
