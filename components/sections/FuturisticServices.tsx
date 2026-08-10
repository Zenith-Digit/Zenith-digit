"use client";
import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Shield, 
  Brain, 
  Palette, 
  BarChart3,
  Cpu,
  Globe
} from "lucide-react";
import { FuturisticServiceCard } from "@/components/cards/FuturisticServiceCard";

const services = [
  {
    icon: Code,
    title: "Développement Web Avancé",
    description: "Applications web modernes avec les dernières technologies et frameworks pour une performance optimale.",
    features: [
      "React/Next.js & TypeScript",
      "Architecture microservices",
      "Progressive Web Apps (PWA)",
      "Optimisation SEO avancée"
    ],
    color: "#00fefb"
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Applications natives et cross-platform avec une expérience utilisateur exceptionnelle.",
    features: [
      "React Native & Flutter",
      "Applications natives iOS/Android",
      "Intégration API avancée",
      "Push notifications intelligentes"
    ],
    color: "#0099ff"
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Solutions IA personnalisées pour automatiser et optimiser vos processus métier.",
    features: [
      "Machine Learning & Deep Learning",
      "Traitement du langage naturel",
      "Vision par ordinateur",
      "Chatbots intelligents"
    ],
    color: "#8b5cf6"
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Protection avancée de vos données et systèmes avec les meilleures pratiques de sécurité.",
    features: [
      "Audit de sécurité complet",
      "Chiffrement avancé",
      "Protection contre les menaces",
      "Conformité RGPD"
    ],
    color: "#ef4444"
  },
  {
    icon: Palette,
    title: "Design UX/UI Futuriste",
    description: "Interfaces utilisateur innovantes avec une approche centrée sur l'expérience utilisateur.",
    features: [
      "Design System moderne",
      "Prototypage interactif",
      "Tests utilisateur",
      "Animations avancées"
    ],
    color: "#f59e0b"
  },
  {
    icon: BarChart3,
    title: "Analytics & Data Science",
    description: "Analyse de données avancée pour des insights métier et une prise de décision éclairée.",
    features: [
      "Tableaux de bord interactifs",
      "Analyse prédictive",
      "Big Data processing",
      "Visualisation de données"
    ],
    color: "#10b981"
  },
  {
    icon: Cpu,
    title: "Cloud & DevOps",
    description: "Infrastructure cloud scalable et processus de déploiement automatisés.",
    features: [
      "Architecture cloud native",
      "CI/CD automatisé",
      "Monitoring & observabilité",
      "Scaling automatique"
    ],
    color: "#6366f1"
  },
  {
    icon: Globe,
    title: "Transformation Digitale",
    description: "Accompagnement complet dans votre transformation digitale avec une vision stratégique.",
    features: [
      "Stratégie digitale",
      "Modernisation des systèmes",
      "Formation des équipes",
      "Support continu"
    ],
    color: "#ec4899"
  }
];

export function FuturisticServices() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="animated-grid opacity-10" />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Futuristic Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 holo-border px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full pulse-glow" />
            <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">
              Services Avancés
            </span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full pulse-glow" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="holo-text">Technologies</span>
            <br />
            <span className="text-white">du Futur</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Nous maîtrisons les technologies les plus avancées pour créer des solutions 
            digitales révolutionnaires qui propulsent votre entreprise vers l&apos;avenir.
          </p>

          {/* Animated Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-8"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FuturisticServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à Révolutionner Votre Business ?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Discutons de votre projet et découvrons ensemble comment nos technologies 
              avancées peuvent transformer votre vision en réalité.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="futuristic-btn"
            >
              <span className="relative z-10">Démarrer Votre Projet</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Neural Network Visualization */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00fefb" stopOpacity="0" />
              <stop offset="50%" stopColor="#00fefb" stopOpacity="1" />
              <stop offset="100%" stopColor="#0099ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Neural Network Connections */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line
              key={i}
              x1={100 + i * 100}
              y1={200}
              x2={150 + i * 100}
              y2={600}
              stroke="url(#neural-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Neural Nodes */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={200 + i * 200}
              cy={400}
              r="4"
              fill="#00fefb"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
