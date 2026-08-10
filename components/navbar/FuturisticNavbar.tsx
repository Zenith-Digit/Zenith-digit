"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Zap, Shield, Cpu } from "lucide-react";
import logo from '@/components/loading/logo.png';
import { useTheme } from "next-themes";
import { RotatingLogo } from "@/components/ui/rotating-logo";

const navItems = [
  { name: "Accueil", href: "/" },
  { 
    name: "Services", 
    href: "/service",
    submenu: [
      { name: "Développement Web", href: "/service#web", icon: Cpu },
      { name: "Applications Mobile", href: "/service#mobile", icon: Zap },
      { name: "Cybersécurité", href: "/service#security", icon: Shield },
    ]
  },
  { name: "À Propos", href: "/apropos" },
  { name: "Contact", href: "/contact" },
];

export function FuturisticNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-cyber border-b border-cyan-400/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <RotatingLogo 
              size={48} 
              showGlow={true} 
              showParticles={false}
              rotationSpeed={8}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <motion.span 
                className="text-xl font-bold holo-text"
                animate={{
                  textShadow: [
                    "0 0 10px #00fefb",
                    "0 0 20px #00fefb, 0 0 30px #00d4ff",
                    "0 0 10px #00fefb"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Zenith
              </motion.span>
              <span className="text-xl font-bold text-white ml-1">Digit</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium group"
                >
                  <span className="relative">
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 glass-effect border border-cyan-400/20 rounded-lg overflow-hidden"
                    >
                      {item.submenu.map((subItem, index) => (
                        <motion.div
                          key={subItem.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={subItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 group"
                          >
                            <subItem.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <span>{subItem.name}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </motion.button>

            {/* CTA Button */}
            <Link href="/contact" className="futuristic-btn">
              <span className="relative z-10">Démarrer un Projet</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-effect border-t border-cyan-400/20"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                          >
                            <subItem.icon className="w-4 h-4" />
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="futuristic-btn w-full text-center"
                  >
                    <span className="relative z-10">Démarrer un Projet</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Neural Network Background Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 100">
          <defs>
            <linearGradient id="neural" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00fefb" />
              <stop offset="50%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#0099ff" />
            </linearGradient>
            <linearGradient id="neural2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0099ff" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#00fefb" />
            </linearGradient>
          </defs>
          
          {/* Primary Neural Path */}
          <motion.path
            d="M0,50 Q100,20 200,50 T400,50"
            stroke="url(#neural)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Secondary Neural Path */}
          <motion.path
            d="M0,30 Q150,60 300,30 T400,30"
            stroke="url(#neural2)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          
          {/* Tertiary Neural Path */}
          <motion.path
            d="M0,70 Q200,40 400,70"
            stroke="url(#neural)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          
          {/* Neural Nodes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={50 + i * 40}
              cy={50 + Math.sin(i) * 20}
              r="1"
              fill="#00fefb"
              animate={{
                r: [0.5, 2, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Holographic Overlay */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(90deg, transparent, rgba(0, 254, 251, 0.03), transparent)",
            "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.03), transparent)",
            "linear-gradient(90deg, transparent, rgba(0, 254, 251, 0.03), transparent)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 pointer-events-none"
      />
    </motion.nav>
  );
}

