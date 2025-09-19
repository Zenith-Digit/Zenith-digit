"use client";
import React from "react";
import lightLogo from "@/components/navbar/logo.png";
import darkLogo from "@/components/navbar/logodark.png";
import Image from "next/image";
import { 
  Facebook, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Heart
} from "lucide-react";
import Link from "next/link";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300fefb\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00fefb]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src={isDarkMode ? darkLogo : lightLogo}
                  alt="Zenith Digit Logo"
                  className="w-32 h-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Zenith Digit
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Votre partenaire digital de confiance pour transformer vos idées en réalité numérique. 
                  Nous créons des solutions web innovantes et performantes.
                </p>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold text-[#00fefb] mb-4">
                  Suivez-nous
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00fefb] hover:text-black transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00fefb] hover:text-black transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00fefb] hover:text-black transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00fefb] hover:text-black transition-all duration-300 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-[#00fefb] mb-6">
                Liens Rapides
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/apropos" 
                    className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/service" 
                    className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-[#00fefb] mb-6">
                Nos Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 cursor-pointer">
                    Développement Web
                  </span>
                </li>
                <li>
                  <span className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 cursor-pointer">
                    Design UX/UI
                  </span>
                </li>
                <li>
                  <span className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 cursor-pointer">
                    SEO & Marketing
                  </span>
                </li>
                <li>
                  <span className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 cursor-pointer">
                    Gestion Réseaux Sociaux
                  </span>
                </li>
                <li>
                  <span className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 cursor-pointer">
                    Maintenance
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-[#00fefb] mb-6">
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#00fefb] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">
                      <a 
                        href="mailto:info@zenithdigit.com" 
                        className="hover:text-[#00fefb] transition-colors duration-300"
                      >
                        info@zenithdigit.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#00fefb] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">
                      <a 
                        href="tel:+22797000000" 
                        className="hover:text-[#00fefb] transition-colors duration-300"
                      >
                        +227 97 00 00 00
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#00fefb] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">
                      Niamey, Niger
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#00fefb] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">
                      Lun - Ven: 8h00 - 18h00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-8">
            <div className="bg-gradient-to-r from-[#00fefb]/10 to-cyan-600/10 border border-[#00fefb]/20 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Restez Informé
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Recevez nos dernières actualités et conseils digitaux
                  </p>
                </div>
                <div className="flex w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 md:w-64 px-4 py-3 bg-white/10 border border-white/20 rounded-l-full text-white placeholder-slate-400 focus:outline-none focus:border-[#00fefb] transition-colors duration-300"
                  />
                  <button className="px-6 py-3 bg-[#00fefb] text-black font-semibold rounded-r-full hover:bg-cyan-400 transition-colors duration-300">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-slate-300 text-sm mb-4 md:mb-0">
                © {currentYear} <Link href="/" className="text-[#00fefb] hover:text-cyan-400 transition-colors duration-300">Zenith Digit</Link>. 
                Tous droits réservés.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link 
                  href="/privacy" 
                  className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300"
                >
                  Politique de Confidentialité
                </Link>
                <Link 
                  href="/terms" 
                  className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300"
                >
                  Conditions d'Utilisation
                </Link>
                <div className="flex items-center text-slate-300">
                  Fait avec <Heart className="w-4 h-4 text-red-500 mx-1" /> au Niger
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
