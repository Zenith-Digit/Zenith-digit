"use client";
import React from "react";
import Form from "@/components/form/Form";
import GardePage from "@/components/pageGarde/GardePage";
import ContactCard from "@/components/profilInfos/infos";
import Logo from  "../../../images/kim.jpg"

export default function BackgroundBeamsDemo() {
  return (
    <div>
      <GardePage title={"Contact"} />
      <h1 className='text-[#00fefb] text-4xl font-bold m-8 text-center'>Nos Contacts</h1>
      <p className='w-5/6 mx-auto py-4'>Nous sommes disponibles pour répondre à toutes vos interrogations et vous soutenir dans vos projets. Contactez-nous sans hésitation, notre équipe est prête à vous offrir une assistance professionnelle et rapide.
                                        Vous pouvez nous atteindre par téléphone, par e-mail ou en utilisant le formulaire de contact ci-dessous. Nous nous engageons à vous répondre rapidement.</p>
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
        avatar={Logo}
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
    
      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcodeloccol%2Fposts%2Fpfbid031gYksstWFPfFeBo3mj7Y89okaEwU6WdgNPXrk4tw6rXhdE8CZcjXj2Q9GpPR6vWUl&show_text=true&width=500"  className="w-72 h-[400px] "></iframe>
  <iframe src="https://www.codeloccol.org/"  className="w-72 h-[400px] "></iframe>
  <iframe src="https://www.codeloccol.org/"  className="w-72 h-[400px] "></iframe>
  <iframe src="https://www.codeloccol.org/"  className="w-72 h-[400px] "></iframe>
    </div>
    </>
    </div>
  );
}
