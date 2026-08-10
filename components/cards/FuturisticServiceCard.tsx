"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
}

interface FuturisticServiceCardProps {
  service: Service;
  index: number;
}

export function FuturisticServiceCard({ service, index }: FuturisticServiceCardProps) {
  const { icon: Icon, title, description, features, color } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      {/* Main Card */}
      <div className="relative h-full glass-effect rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden">
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}10, transparent)`
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                background: color,
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Icon Container */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative mb-6"
        >
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${color}20, ${color}10)`,
              border: `1px solid ${color}30`
            }}
          >
            {/* Icon Glow Effect */}
            <div 
              className="absolute inset-0 blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `${color}20` }}
            />
            
            <Icon 
              className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" 
              style={{ color }}
            />
            
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 border rounded-xl opacity-30"
              style={{ borderColor: color }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {description}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + featureIndex * 0.1 }}
                className="flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
                  style={{ background: color }}
                />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`
          }}
        />

        {/* Corner Accents */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors duration-500" />

        {/* Data Flow Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          viewBox="0 0 300 400"
        >
          <defs>
            <linearGradient id={`flow-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0" />
              <stop offset="50%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M50,50 Q150,100 250,150 T350,250"
            stroke={`url(#flow-${index})`}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Hover Shadow */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: color }}
      />
    </motion.div>
  );
}

