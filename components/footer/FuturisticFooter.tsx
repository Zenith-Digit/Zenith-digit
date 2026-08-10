"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Instagram,
  Send,
  Zap,
  Shield,
  Globe,
  Heart
} from "lucide-react";
import { useState } from "react";
import logo from '@/components/loading/logo.png';
import { RotatingLogo } from "@/components/ui/rotating-logo";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub", color: "#00fefb" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0099ff" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#8b5cf6" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#ec4899" },
];

const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/service" },
  { name: "À Propos", href: "/apropos" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Développement Web", href: "/service#web" },
  { name: "Applications Mobile", href: "/service#mobile" },
  { name: "Intelligence Artificielle", href: "/service#ia" },
  { name: "Cybersécurité", href: "/service#security" },
];

export function FuturisticFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="relative bg-black border-t border-cyan-400/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="animated-grid opacity-5" />
        
        {/* Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <RotatingLogo 
                  size={48} 
                  showGlow={true} 
                  showParticles={false}
                  rotationSpeed={6}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <span className="text-xl font-bold holo-text">Zenith</span>
                  <span className="text-xl font-bold text-white ml-1">Digit</span>
                </div>
              </Link>

              <p className="text-slate-300 leading-relaxed mb-6">
                Nous créons l&apos;avenir numérique avec des technologies de pointe et 
                une vision innovante pour transformer votre business.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <span className="text-sm">info@zenithdigit.com</span>
                </div>
                <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <span className="text-sm">+227 97 00 00 00</span>
                </div>
                <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                  <span className="text-sm">Niamey, Niger</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                Navigation
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={service.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                Newsletter
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Restez informé des dernières innovations et tendances technologiques.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-400/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors backdrop-blur-sm"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full futuristic-btn"
                  disabled={isSubscribed}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubscribed ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Inscrit !
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        S&apos;abonner
                      </>
                    )}
                  </span>
                </motion.button>
              </form>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-white font-medium mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="w-10 h-10 rounded-full border border-cyan-400/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-all duration-300 group"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}10, transparent)`
                      }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-cyan-400/20 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-300 text-sm mb-4 md:mb-0 flex items-center">
              © {currentYear} 
              <Link href="/" className="text-cyan-400 hover:text-white transition-colors duration-300 mx-1">
                Zenith Digit
              </Link>
              . Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
              >
                Confidentialité
              </Link>
              <Link 
                href="/terms" 
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
              >
                Conditions d&apos;Utilisation
              </Link>
              <div className="flex items-center text-slate-300">
                Fait avec <Heart className="w-4 h-4 text-red-500 mx-1 pulse-glow" /> au Niger
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
          animate={{ x: [-100, 1200] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </footer>
  );
}

