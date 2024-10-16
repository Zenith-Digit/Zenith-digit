"use client";

import { useState, useEffect } from "react";
import { Switch } from "@nextui-org/switch";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function Mode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Utiliser useEffect pour changer la classe du body selon l'état isDarkMode
  useEffect(() => {
    const navElement = document.querySelector("nav");
  if (navElement) {
    if (isDarkMode) {
      navElement.classList.add("bg-white");
      navElement.classList.remove("bg-black");
    } else {
      navElement.classList.add("bg-black");
      navElement.classList.remove("bg-white");
    }
  }
    if (isDarkMode) {
      document.body.classList.add("bg-white");
      document.body.classList.add("text-black");
      document.body.classList.remove("bg-black");
      document.body.classList.remove("text-white");
    } else {
      document.body.classList.add("bg-black");
      document.body.classList.add("text-white");
      document.body.classList.remove("bg-white");
      document.body.classList.remove("text-black");
    }
  }, [isDarkMode]); // Déclenchement à chaque changement de isDarkMode
  

  return (
    <Switch
    className="m-10 border px-2 bg-black"
      defaultSelected={isDarkMode}
      size="lg"
      color="secondary"
      isSelected={isDarkMode}
      onChange={(e) => setIsDarkMode(e.target.checked)} // Mettre à jour l'état
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <MoonIcon className="text-gray-500" />
        ) : (
          <SunIcon className="text-gray-500 " />
        )
      }
    >
    </Switch>
  );
}
