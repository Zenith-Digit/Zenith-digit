"use client";

import { useState, useEffect } from "react";
import { Switch } from "@nextui-org/switch";
import { FaMoon } from "react-icons/fa";
import {  MdWbSunny} from "react-icons/md";



interface ModeProps {
  onToggle: (isDarkMode: boolean) => void;
}

export default function Mode({ onToggle }: ModeProps) {
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
    // Gestion des classes de body
    if (isDarkMode) {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-black", "text-white");
    } else {
      document.body.classList.add("bg-black", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    }

    // Appeler la fonction de callback pour notifier le parent
    onToggle(isDarkMode);
  }, [isDarkMode, onToggle]);

  return (
    <Switch
      className=""
      defaultSelected={isDarkMode}
      size="lg"
      color="secondary"
      isSelected={isDarkMode}
      onChange={(e) => {
        setIsDarkMode(e.target.checked); // Mettre à jour l'état
      }}
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <FaMoon />
        ) : (
          <MdWbSunny className="text-black" />
        )
      }
    />
  );
}
