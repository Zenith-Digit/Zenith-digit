import React from "react";
import lightLogo from "@/components/navbar/logo.png";
import darkLogo from "@/components/navbar/logodark.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

interface FooterProps {
  isDarkMode: boolean;  // Recevoir l'état du mode sombre
}

const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer className="border-t-4 border-[#00fefb] flex justify-around">
      <div>
        <Image
          src={isDarkMode ? darkLogo : lightLogo}  // Changer dynamiquement le logo
          alt="logo"
          className="w-24 lg:w-44"
        />
      </div>
      <div className="flex-col justify-between">
        <ul>
        
          <li className="m-2"><Link href={'./'} className='text-[#00fefb] text-xl'>ACCUEIL</Link></li>
          <li className="m-2"><Link href={'./apropos'} className='text-[#00fefb] text-xl'>À PROPOS</Link></li>
          <li className="m-2"><Link href={'./service'} className='text-[#00fefb] text-xl'>NOS SERVICES</Link></li>
          <li className="m-2"><Link href={'./contact'} className='text-[#00fefb] text-xl'>CONTACT</Link></li>
        </ul>
        
        
        
      </div>
      <div className="flex-col justify-between gap-4 m-2">
        <Link href={"Facebook.com"}  className="text-4xl text-[#00fefb]"><FaFacebook className="m-2"/></Link>
        <Link href={"linkedin.com"}  className="text-4xl text-[#00fefb]"><FaLinkedin className="m-2"/></Link>
        <Link href={"instagram.com"}  className="text-4xl text-[#00fefb]"><FaInstagram className="m-2"/></Link>
        <Link href={"twiter.com"}  className="text-4xl text-[#00fefb]"><FaXTwitter className="m-2"/></Link>
      </div>
    </footer>
  );
};

export default Footer;
