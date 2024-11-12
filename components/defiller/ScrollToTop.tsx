// components/ScrollToTop.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"top" | "bottom">(
    "top"
  );

  // Gérer la visibilité du bouton en fonction du défilement
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        setScrollDirection("top");
      } else if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
        setIsVisible(true);
        setScrollDirection("bottom");
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fonction pour défiler en haut ou en bas
  const scrollTo = () => {
    if (scrollDirection === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    isVisible && (
      <Button
        onClick={scrollTo}
        className="fixed bottom-5 right-5 bg-primary hover:bg-primary-dark rounded-full p-3 shadow-[#00fefb]"
      >
        {scrollDirection === "top" ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </Button>
    )
  );
}
