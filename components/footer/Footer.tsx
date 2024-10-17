import React from "react";
import lightLogo from "@/components/navbar/logo.png";
import darkLogo from "@/components/navbar/logodark.png";
import Image from "next/image";

interface FooterProps {
  isDarkMode: boolean;  // Recevoir l'état du mode sombre
}

const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer className="border-t-4 border-[#00fefb]">
      <div>
        <Image
          src={isDarkMode ? darkLogo : lightLogo}  // Changer dynamiquement le logo
          alt="logo"
          className="w-24 lg:w-44"
        />
      </div>
    </footer>
  );
};

export default Footer;
