"use client"
import { HoverEffect } from "../ui/card-hover-effect";
import { TbWorldWww } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { IoIosDocument } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5"; // Import des icônes

export function BlueCard() {
  return (
    <div className="max-w-5xl mx-auto px-8 relative z-10 w-full h-full" data-aos="fade-up">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Développement web",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    icon: <TbWorldWww />, // Icône associée à Stripe
  },
  {
    title: "Développement mobile",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    icon: <FaMobileScreenButton />, // Icône associée à Netflix
  },
  {
    title: "web design",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    icon: <MdOutlineDesignServices />, // Icône associée à Google
  },
  {
    title: "infographie",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    icon: <SiAdobephotoshop />, // Icône associée à Meta (anciennement Facebook)
  },
  {
    title: "bureautique",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    icon: <IoIosDocument />, // Icône associée à Amazon
  },
  {
    title: "social propulcer",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    icon: <IoShareSocialSharp />, // Icône associée à Microsoft
  },
];
