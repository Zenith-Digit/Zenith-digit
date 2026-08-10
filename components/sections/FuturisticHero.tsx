"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Zap, Cpu, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from '@/components/loading/logo.png';
import { RotatingLogo } from "@/components/ui/rotating-logo";
import { FuturisticBackground } from "@/components/ui/futuristic-background";

const ParticleField = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 15
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const DataMatrix = () => {
  const characters = "01";
  const [matrix, setMatrix] = useState<string[][]>([]);

  useEffect(() => {
    const cols = 20;
    const rows = 10;
    const newMatrix = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () =>
        characters[Math.floor(Math.random() * characters.length)]
      )
    );
    setMatrix(newMatrix);

    const interval = setInterval(() => {
      setMatrix(prev => 
        prev.map(row => 
          row.map(() => characters[Math.floor(Math.random() * characters.length)])
        )
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none font-mono text-xs text-cyan-400 overflow-hidden">
      {matrix.map((row, i) => (
        <div key={i} className="whitespace-nowrap">
          {row.join('')}
        </div>
      ))}
    </div>
  );
};

export function FuturisticHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black">
      {/* Futuristic Background */}
      <FuturisticBackground variant="neural" intensity="medium" />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      {/* Data Matrix Background */}
      <DataMatrix />
      
      {/* Particle Field */}
      <ParticleField />
      
      {/* Scan Lines Effect */}
      <div className="absolute inset-0 scan-lines pointer-events-none" />

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45"
        style={{ borderRadius: "20%" }}
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cyan-400/20 rounded-full"
      />

      {/* Enhanced Holographic Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      />

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Futuristic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 holo-border px-4 py-2 text-sm text-cyan-400 font-medium"
            >
              <Zap className="w-4 h-4" />
              <span>Technologie Avancée 2024</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full pulse-glow" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="holo-text">Solutions</span>
              <br />
              <span className="text-white">Digitales</span>
              <br />
              <span className="text-neon glow-text">Futuristes</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Nous créons des expériences digitales révolutionnaires qui transforment 
              votre vision en réalité. Intelligence artificielle, interfaces immersives 
              et technologies de pointe au service de votre innovation.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { icon: Cpu, label: "IA Intégrée", value: "100%" },
                { icon: Globe, label: "Portée Globale", value: "50+" },
                { icon: Zap, label: "Performance", value: "99.9%" },
              ].map((stat, index) => (
                <div key={index} className="text-center glass-effect p-4 rounded-lg">
                  <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="futuristic-btn group">
                <span className="relative z-10 flex items-center gap-2">
                  Commencer Maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <button className="flex items-center gap-3 px-6 py-3 text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition-all group">
                <div className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                  <Play className="w-4 h-4 ml-1" />
                </div>
                <span>Voir la Démo</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Futuristic Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Enhanced Rotating Logo */}
              <RotatingLogo 
                size={400} 
                showGlow={true} 
                showParticles={true}
                rotationSpeed={12}
                className="mx-auto"
              />

              {/* Holographic Frame Enhancement */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 holo-border rounded-full"
              />

              {/* Energy Waves */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 1,
                  }}
                  className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}