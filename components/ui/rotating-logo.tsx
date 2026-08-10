"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from '@/components/loading/logo.png';

interface RotatingLogoProps {
  size?: number;
  showGlow?: boolean;
  showParticles?: boolean;
  rotationSpeed?: number;
  className?: string;
}

export function RotatingLogo({ 
  size = 120, 
  showGlow = true, 
  showParticles = true,
  rotationSpeed = 10,
  className = "" 
}: RotatingLogoProps) {
  const [particles, setParticles] = useState<Array<{id: number, angle: number, distance: number, delay: number}>>([]);

  useEffect(() => {
    if (showParticles) {
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        angle: (i * 30) + Math.random() * 10,
        distance: 80 + Math.random() * 40,
        delay: Math.random() * 2
      }));
      setParticles(newParticles);
    }
  }, [showParticles]);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: rotationSpeed * 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, transparent, rgba(0, 254, 251, 0.1), transparent)"
        }}
      />

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: rotationSpeed * 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-2 border border-blue-400/20 rounded-full"
      />

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: rotationSpeed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-4 border border-cyan-300/40 rounded-full"
      />

      {/* Holographic Glow */}
      {showGlow && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"
          />
          
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
          />
        </>
      )}

      {/* Central Logo Container */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: rotationSpeed * 3,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        className="absolute inset-6 glass-effect rounded-full flex items-center justify-center overflow-hidden"
      >
        {/* Data Stream Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full"
            style={{
              background: "conic-gradient(from 0deg, transparent 70%, rgba(0, 254, 251, 0.3) 80%, transparent 90%)"
            }}
          />
        </div>

        {/* Logo */}
        <Image
          src={logo}
          alt="Zenith Digit"
          width={size * 0.4}
          height={size * 0.4}
          className="relative z-10 drop-shadow-2xl"
        />

        {/* Inner Pulse */}
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-2 bg-cyan-400/10 rounded-full blur-sm"
        />
      </motion.div>

      {/* Orbiting Particles */}
      {showParticles && particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{ rotate: 360 }}
          transition={{
            duration: rotationSpeed + particle.delay,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
          className="absolute inset-0"
          style={{ transformOrigin: "center" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-cyber"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) translateY(-${particle.distance}px)`,
            }}
          />
        </motion.div>
      ))}

      {/* Corner Accents */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60" />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60" />

      {/* Scanning Line */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: rotationSpeed * 0.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent transform -translate-x-1/2" />
      </motion.div>
    </div>
  );
}
