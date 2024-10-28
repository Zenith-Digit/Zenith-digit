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
    <footer className="border-t-4 border-[#00fefb] text-center">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="md:mb-0">
            <Image
              src={isDarkMode ? darkLogo : lightLogo}  // Changement dynamique du logo
              alt="logo"
              className="w-24 mx-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-start md:justify-between md:w-2/3">
            <div>
              <h2 className="text-xl text-[#00fefb] mb-4 md:text-4xl">Resources</h2>
              <ul className=" sm:text-xl">
                <li className="mb-4">
                  <Link href="https://flowbite.com/" className="hover:underline">Flowbite</Link>
                </li>
                <li>
                  <Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl text-[#00fefb] mb-4 md:text-4xl">Follow us</h2>
              <ul className=" sm:text-xl">
                <li className="mb-4">
                  <Link href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</Link>
                </li>
                <li>
                  <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl text-[#00fefb] mb-4 md:text-4xl">Pages</h1>
              <ul className=" sm:text-xl">
                <li className="mb-2"><Link href={'./'} className="hover:underline">Accueil</Link></li>
                <li className="mb-2"><Link href={'./apropos'} className='hover: hover:underline'>À propos</Link></li>
                <li className="mb-2"><Link href={'./service'} className=' hover:underline'>Nos services</Link></li>
                <li className="mb-2"><Link href={'./contact'} className=' hover:underline'>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full my-10">
          <hr className="border-t border-[#00fefb]" />
        </div>

        {/* Footer Bottom Text */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-xl sm:text-center">© 2024 <Link href="https://flowbite.com/" className="hover:underline">ZenithDigit™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 w-1/3 mx-auto justify-between sm:mt-0 ">
            <Link href="https://www.facebook.com" className="sm:text-4xl hover:text-[#00fefb]" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link href="https://www.linkedin.com" className=" sm:text-4xl hover:text-[#00fefb]" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
            <Link href="https://www.instagram.com" className="sm:text-4xl hover:text-[#00fefb]" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="https://www.twitter.com" className="sm:text-4xl hover:text-[#00fefb]" aria-label="X Twitter">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
