"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Users, Smartphone, Zap } from "lucide-react";
import Image from "next/image";
import wireframe from '@/images/wir.jpg';
import design from '@/images/fig.jpg';

const designFeatures = [
  {
    icon: Palette,
    title: "Design Personnalisé",
    description: "Création d'interfaces uniques qui reflètent parfaitement l'identité de votre marque et captent l'attention de vos utilisateurs."
  },
  {
    icon: Users,
    title: "UX Centrée Utilisateur",
    description: "Conception d'expériences utilisateur intuitives basées sur les besoins et comportements de votre audience cible."
  },
  {
    icon: Smartphone,
    title: "Design Responsive",
    description: "Interfaces adaptatives qui offrent une expérience optimale sur tous les appareils : desktop, tablette et mobile."
  },
  {
    icon: Zap,
    title: "Performance Optimisée",
    description: "Designs légers et rapides qui améliorent les temps de chargement et l'expérience utilisateur globale."
  }
];

const designProcess = [
  {
    step: "01",
    title: "Recherche & Analyse",
    description: "Étude de votre marché, analyse de la concurrence et compréhension des besoins utilisateurs."
  },
  {
    step: "02",
    title: "Wireframing",
    description: "Création de maquettes fonctionnelles pour structurer l'architecture de votre interface."
  },
  {
    step: "03",
    title: "Design & Prototypage",
    description: "Développement du design visuel et création de prototypes interactifs pour valider l'expérience."
  },
  {
    step: "04",
    title: "Tests & Itération",
    description: "Tests utilisateurs et améliorations continues pour optimiser l'expérience finale."
  }
];

export function DesignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%2300fefb\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00fefb]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-600/5 rounded-full blur-3xl"></div>
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
            Design UX/UI
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Nous concevons des interfaces modernes et intuitives pour offrir à vos utilisateurs une expérience fluide et engageante, tout en renforçant votre image de marque.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {designFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00fefb] to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Notre Processus de Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00fefb] to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Wireframes & Maquettes
            </h4>
            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src={wireframe} 
                alt="Wireframe example" 
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Design Final
            </h4>
            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src={design} 
                alt="Final design example" 
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#00fefb]/10 to-cyan-600/10 border border-[#00fefb]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Créons Votre Interface Idéale
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Discutons de votre projet et découvrons comment nous pouvons créer une expérience utilisateur exceptionnelle pour votre marque.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-[#00fefb] text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Démarrer Mon Projet
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
