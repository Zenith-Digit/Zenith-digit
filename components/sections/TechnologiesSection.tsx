"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", logo: "⚛️" },
      { name: "Next.js", logo: "▲" },
      { name: "TypeScript", logo: "🔷" },
      { name: "Tailwind CSS", logo: "🎨" },
      { name: "Framer Motion", logo: "🎭" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: "🟢" },
      { name: "Express", logo: "🚀" },
      { name: "MongoDB", logo: "🍃" },
      { name: "PostgreSQL", logo: "🐘" },
      { name: "Firebase", logo: "🔥" }
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", logo: "📱" },
      { name: "Flutter", logo: "🦋" },
      { name: "Expo", logo: "📦" },
      { name: "Ionic", logo: "⚡" }
    ]
  },
  {
    category: "Design",
    items: [
      { name: "Figma", logo: "🎨" },
      { name: "Adobe XD", logo: "✨" },
      { name: "Photoshop", logo: "🖼️" },
      { name: "Illustrator", logo: "🎯" }
    ]
  }
];

export function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00fefb]/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00fefb]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technologies & Outils
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nous utilisons les technologies les plus récentes et les outils les plus performants pour créer des solutions digitales d&apos;exception
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-[#00fefb] mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + techIndex * 0.1 
                      }}
                      className="flex items-center space-x-3 group/item"
                    >
                      <div className="text-2xl group-hover/item:scale-110 transition-transform duration-300">
                        {tech.logo}
                      </div>
                      <span className="text-white group-hover/item:text-[#00fefb] transition-colors duration-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#00fefb]/10 to-cyan-600/10 border border-[#00fefb]/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Toujours à la Pointe de l&apos;Innovation
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Notre équipe se forme continuellement aux nouvelles technologies pour vous offrir les solutions les plus modernes et performantes. 
              Nous suivons les dernières tendances du développement web et mobile pour rester compétitifs sur le marché.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
