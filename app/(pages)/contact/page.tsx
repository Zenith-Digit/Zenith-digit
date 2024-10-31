"use client";
import React from "react";
import Form from "@/components/form/Form";
import GardePage from "@/components/pageGarde/GardePage";
import ContactCard from "@/components/profilInfos/infos";

export default function BackgroundBeamsDemo() {
  return (
    <div>
      <GardePage title={"Contact"} />
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
    
    </div>
  );
}
