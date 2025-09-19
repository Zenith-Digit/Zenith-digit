"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Lightbulb, 
  Star, 
  Eye, 
  Users,
  Target,
  Shield
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous nous engageons à rester à la pointe des tendances et technologies pour offrir des solutions modernes et efficaces.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Nous visons la qualité dans chaque projet, assurant à nos clients des résultats qui dépassent leurs attentes.",
    color: "from-blue-400 to-purple-500"
  },
  {
    icon: Eye,
    title: "Transparence",
    description: "Nous croyons en une communication honnête et transparente avec nos clients, à chaque étape de la collaboration.",
    color: "from-green-400 to-teal-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Le succès naît de la synergie ; notre équipe travaille en étroite collaboration avec les clients pour comprendre et réaliser leur vision.",
    color: "from-pink-400 to-rose-500"
  },
  {
    icon: Target,
    title: "Précision",
    description: "Chaque détail compte. Nous nous concentrons sur la précision et l'attention aux détails pour livrer des projets parfaits.",
    color: "from-indigo-400 to-blue-500"
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Nos clients peuvent compter sur nous. Nous respectons nos engagements et livrons toujours dans les délais convenus.",
    color: "from-emerald-400 to-green-500"
  }
];

export function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#00fefb]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Nos Valeurs Fondamentales
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ces valeurs guident chacune de nos décisions et façonnent notre approche du travail avec nos clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#00fefb]/10 to-cyan-600/10 border border-[#00fefb]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Partagez Nos Valeurs ?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Si ces valeurs résonnent avec vous, nous serions ravis de collaborer ensemble sur votre prochain projet.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-[#00fefb] text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Travaillons Ensemble
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
