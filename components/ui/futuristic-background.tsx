"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FuturisticBackgroundProps {
  variant?: "grid" | "neural" | "matrix" | "particles" | "waves";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export function FuturisticBackground({ 
  variant = "grid", 
  intensity = "medium",
  className = "" 
}: FuturisticBackgroundProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const getOpacity = () => {
    switch (intensity) {
      case "low": return "opacity-10";
      case "medium": return "opacity-20";
      case "high": return "opacity-30";
      default: return "opacity-20";
    }
  };

  const GridBackground = () => (
    <div className={`absolute inset-0 ${getOpacity()}`}>
      {/* Main Grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 254, 251, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 254, 251, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Secondary Grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "-25px -25px"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
        }}
      />

      {/* Accent Lines */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0, 254, 251, 0.4) 2px, transparent 2px),
            linear-gradient(-45deg, rgba(0, 212, 255, 0.4) 2px, transparent 2px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );

  const NeuralBackground = () => {
    const [nodes, setNodes] = useState<Array<{id: number, x: number, y: number, connections: number[]}>>([]);

    useEffect(() => {
      const nodeCount = intensity === "high" ? 20 : intensity === "medium" ? 15 : 10;
      const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        connections: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => 
          Math.floor(Math.random() * nodeCount)
        ).filter(conn => conn !== i),
      }));
      setNodes(newNodes);
    }, [intensity]);

    return (
      <div className={`absolute inset-0 ${getOpacity()}`}>
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00fefb" stopOpacity="0" />
              <stop offset="50%" stopColor="#00fefb" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Connections */}
          {nodes.map((node) =>
            node.connections.map((connId) => {
              const connNode = nodes[connId];
              if (!connNode) return null;
              
              return (
                <motion.line
                  key={`${node.id}-${connId}`}
                  x1={node.x}
                  y1={node.y}
                  x2={connNode.x}
                  y2={connNode.y}
                  stroke="url(#neural-gradient)"
                  strokeWidth="0.1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              );
            })
          )}
          
          {/* Nodes */}
          {nodes.map((node) => (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r="0.3"
              fill="#00fefb"
              animate={{
                r: [0.2, 0.4, 0.2],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>
    );
  };

  const MatrixBackground = () => {
    const [matrix, setMatrix] = useState<string[][]>([]);
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    useEffect(() => {
      const cols = Math.floor(dimensions.width / 20) || 50;
      const rows = Math.floor(dimensions.height / 20) || 30;
      
      const newMatrix = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () =>
          characters[Math.floor(Math.random() * characters.length)]
        )
      );
      setMatrix(newMatrix);

      const interval = setInterval(() => {
        setMatrix(prev => 
          prev.map(row => 
            row.map(() => 
              Math.random() > 0.95 ? characters[Math.floor(Math.random() * characters.length)] : row[Math.floor(Math.random() * row.length)]
            )
          )
        );
      }, 100);

      return () => clearInterval(interval);
    }, [dimensions]);

    return (
      <div className={`absolute inset-0 ${getOpacity()} font-mono text-xs overflow-hidden`}>
        {matrix.map((row, i) => (
          <motion.div
            key={i}
            className="whitespace-nowrap text-cyan-400"
            animate={{
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          >
            {row.join('')}
          </motion.div>
        ))}
      </div>
    );
  };

  const ParticlesBackground = () => {
    const [particles, setParticles] = useState<Array<{
      id: number, 
      x: number, 
      y: number, 
      size: number, 
      speed: number,
      delay: number
    }>>([]);

    useEffect(() => {
      const particleCount = intensity === "high" ? 100 : intensity === "medium" ? 60 : 30;
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 10 + 5,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    }, [intensity]);

    return (
      <div className={`absolute inset-0 ${getOpacity()}`}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-cyan-400 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.speed,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  };

  const WavesBackground = () => (
    <div className={`absolute inset-0 ${getOpacity()}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00fefb" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0099ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M0,${50 + i * 5} Q25,${40 + i * 5} 50,${50 + i * 5} T100,${50 + i * 5}`}
            stroke="url(#wave-gradient)"
            strokeWidth="0.5"
            fill="none"
            animate={{
              d: [
                `M0,${50 + i * 5} Q25,${40 + i * 5} 50,${50 + i * 5} T100,${50 + i * 5}`,
                `M0,${50 + i * 5} Q25,${60 + i * 5} 50,${50 + i * 5} T100,${50 + i * 5}`,
                `M0,${50 + i * 5} Q25,${40 + i * 5} 50,${50 + i * 5} T100,${50 + i * 5}`,
              ],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );

  const renderBackground = () => {
    switch (variant) {
      case "neural": return <NeuralBackground />;
      case "matrix": return <MatrixBackground />;
      case "particles": return <ParticlesBackground />;
      case "waves": return <WavesBackground />;
      default: return <GridBackground />;
    }
  };

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {renderBackground()}
      
      {/* Scanning Lines */}
      <motion.div
        animate={{ y: ["-100%", "100vh"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
      />
      
      <motion.div
        animate={{ y: ["-100%", "100vh"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"
      />
    </div>
  );
}
