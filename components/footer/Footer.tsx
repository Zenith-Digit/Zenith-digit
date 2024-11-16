import React from "react";
import lightLogo from "@/components/navbar/logo.png";
import darkLogo from "@/components/navbar/logodark.png";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

interface FooterProps {
  isDarkMode: boolean;  // Recevoir l'état du mode sombre
}

const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer className="border-t-4 border-[#00fefb] bottom-0">
      <div className="mx-auto w-full pt-4">
        <div className="md:flex md:justify-between px-4">
          {/* Logo */}
          <div className="md:mb-0">
            <Image
              src={isDarkMode ? darkLogo : lightLogo}  // Changement dynamique du logo
              alt="logo"
              className="w-24 md:w-40 mx-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3  md:justify-between w-2/3">
            <div className=" flex flex-col justify-start items-start">
              <h2 className="text-xl text-[#00fefb] md:text-center mb-4 md:text-3xl">Pages</h2>
              <ul className=" sm:text-xl flex flex-col items-start">
                <li className="mb-2"><Link href={'./'} className="hover:underline">Accueil</Link></li>
                <li className="mb-2"><Link href={'./apropos'} className='hover: hover:underline'>À propos</Link></li>
                <li className="mb-2"><Link href={'./service'} className=' hover:underline'>Nos services</Link></li>
                <li className="mb-2"><Link href={'./contact'} className=' hover:underline'>Contact</Link></li>
              </ul>
            </div>
            <div className="  flex flex-col justify-start items-start">
              <h2 className="text-xl text-[#00fefb] mb-4 md:text-3xl">Adresse</h2>
              <ul className="flex flex-col items-start sm:text-xl">
                <li className="mb-2"><Link href={'./apropos'} className='hover:underline'>Email: info@zenithdigit.com</Link></li>
                <li className="mb-2"><Link href={'./service'} className='hover:underline'>Whatsapp: +227 9700000</Link></li>
              </ul>
            </div>
            <div className="  flex flex-col justify-start items-start">
              <h2 className="text-xl text-[#00fefb] mb-4 md:text-3xl">Reseaux sociaux</h2>
              <ul className="flex flex-col items-start sm:text-xl">
                <li className="mb-2 flex hover:text-[#00fefb]">
                  <Link href="https://www.facebook.com" className="sm:text-4xl me-3 sm:mt-1 md:mt-0" aria-label="Facebook">
                    <FaFacebook />
                  </Link>
                  Facebook
                </li>
                <li className="mb-2 flex hover:text-[#00fefb]">
                  <Link href="https://www.linkedin.com" className=" sm:text-4xl me-3 sm:mt-1 md:mt-0" aria-label="LinkedIn">
                    <FaLinkedin />
                  </Link>
                  Linkedin
                </li>
                <li className="mb-2 flex hover:text-[#00fefb]">
                  <Link href="https://www.instagram.com" className="sm:text-4xl me-3 sm:mt-1 md:mt-0" aria-label="Instagram">
                    <FaInstagram />
                  </Link>
                  Instagram
                </li>
                <li className="mb-2 flex hover:text-[#00fefb]">
                  <Link href="https://www.twitter.com" className="sm:text-4xl me-3 sm:mt-1 md:mt-0" aria-label="X Twitter">
                    <FaXTwitter />
                  </Link>
                  Twitter
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator Line */}

        {/* Footer Bottom Text */}
        <div className="text-center w-full bg-[#00fefb] bottom-0 text-black rounded-t-2xl">
          <span className="text-sm sm:text-lg">© 2024 <Link href="/" className="hover:underline">ZenithDigit™</Link>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
