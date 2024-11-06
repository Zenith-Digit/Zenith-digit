"use client";
import React from "react";
import Form from "@/components/form/Form";
import GardePage from "@/components/pageGarde/GardePage";
import ContactCard from "@/components/profilInfos/infos";

export default function BackgroundBeamsDemo() {
  return (
    <div>
      <GardePage title={"Contact"} />
      <h1 className='text-[#00fefb] text-4xl font-bold m-8 text-center'>Nos Contacts</h1>
      <p className='w-5/6 mx-auto py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias accusantium animi ullam, expedita qui neque nisi perspiciatis reiciendis voluptas repudiandae iste quis non sit facere culpa corporis doloremque facilis optio!</p>
    <div className="max-w-screen-lg mt-10 mx-auto">
      <Form/>
      <div className="grid gap-6 mb-10 sm:grid-cols-1 px-20 md:px-0 md:grid-cols-2 lg:grid-cols-3">
      <ContactCard
        initials="AS"
        name="Abdoul Salim Ali Maazou"
        position="Responsable Commercial"
        email="Abdoulsalim@gmail.com"
        phone="92 00 00 00"
      />
      <ContactCard
        initials="AS"
        name="Abdoul Salim Ali Maazou"
        position="Responsable Commercial"
        email="Abdoulsalim@gmail.com"
        phone="92 00 00 00"
      />
      <ContactCard
        initials="AS"
        name="Abdoul Salim Ali Maazou"
        position="Responsable Commercial"
        email="Abdoulsalim@gmail.com"
        phone="92 00 00 00"
      />
      </div>
    </div>
    <>
    <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Suivez nous</h2>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-5/6 mx-auto my-10">
    
      <iframe src="https://www.facebook.com/abdourahamanesaley.haougui"  className="w-72 h-[400px] "></iframe>
  <iframe src="https://www.codeloccol.org/"  className="w-72 h-[400px] "></iframe>
  <iframe src="https://www.codeloccol.org/"  className="w-72 h-[400px] "></iframe>
  <iframe src="https://www.codeloccol.org/"  className="w-72 h-[400px] "></iframe>
    </div>
    </>
    </div>
  );
}
