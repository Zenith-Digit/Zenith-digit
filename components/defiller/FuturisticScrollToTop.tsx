"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Zap } from "lucide-react";

export function FuturisticScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Progress Ring */}
            <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 56 56">
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="rgba(0, 254, 251, 0.1)"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="24"
                stroke="#00fefb"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scrollProgress / 100 }}
                transition={{ duration: 0.1 }}
                style={{
                  filter: "drop-shadow(0 0 6px #00fefb)",
                }}
              />
            </svg>

            {/* Button Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 glass-effect rounded-full border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300 relative overflow-hidden">
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Icon */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronUp className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                </motion.div>

                {/* Spark Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {Array.from({ length: 4 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        top: "2px",
                        left: "50%",
                        transformOrigin: "0 22px",
                        transform: `rotate(${i * 90}deg) translateX(-0.5px)`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.25,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${30 + i * 15}%`,
                    top: `${40 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              whileHover={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="glass-effect px-3 py-2 rounded-lg border border-cyan-400/30 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span className="text-sm text-white">Retour au sommet</span>
                </div>
                {/* Arrow */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-cyan-400/30 border-y-4 border-y-transparent" />
              </div>
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

