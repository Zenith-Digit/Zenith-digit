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
    title: "Développement Web",
    description:
      "Créez un site performant et sur-mesure. Nos experts en développement web construisent des plateformes adaptées à vos besoins pour maximiser l’engagement et offrir une expérience utilisateur fluide et efficace.",
    icon: <TbWorldWww />, // Icône associée à Stripe
  },
  {
    title: "Référencement SEO",
    description:
      "Augmentez votre visibilité sur les moteurs de recherche. Notre expertise SEO optimise votre site pour capter un trafic organique qualifié et renforcer votre présence en ligne.",
    icon: <FaMobileScreenButton />, // Icône associée à Netflix
  },
  {
    title: "Web Design",
    description:
      "Concevez un site captivant. Nos designers UX/UI créent des interfaces esthétiques et intuitives qui attirent et fidélisent vos visiteurs, en mettant l'accent sur l’expérience utilisateur.",
    icon: <MdOutlineDesignServices />, // Icône associée à Google
  },
  {
    title: "infographie",
    description:
      "Communiquez visuellement. Nos infographies et visuels personnalisés transmettent vos messages efficacement, captant l’attention et favorisant la compréhension de votre contenu.",
    icon: <SiAdobephotoshop />, // Icône associée à Meta (anciennement Facebook)
  },
  {
    title: "Stratégie Digitale",
    description:
      "Élaborez une stratégie digitale complète et personnalisée. Nous analysons vos besoins et objectifs pour concevoir des actions digitales qui génèrent des résultats mesurables et durables.",
    icon: <IoIosDocument />, // Icône associée à Amazon
  },
  {
    title: "social propulcer",
    description:
      "Développez votre audience en ligne grâce à une gestion stratégique des réseaux sociaux. Nous créons et publions des contenus engageants pour accroître la notoriété et l’engagement de votre marque.",
    icon: <IoShareSocialSharp />, // Icône associée à Microsoft
  },
];
