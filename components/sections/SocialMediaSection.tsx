"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Share2, Users, TrendingUp, MessageCircle } from "lucide-react";

const socialFeatures = [
  {
    icon: Share2,
    title: "Gestion de Contenu",
    description: "Création et publication de contenus engageants adaptés à chaque plateforme pour maximiser l&apos;engagement de votre audience."
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Gestion active de votre communauté en ligne avec réponses rapides et interactions personnalisées."
  },
  {
    icon: TrendingUp,
    title: "Stratégie de Croissance",
    description: "Développement de stratégies personnalisées pour augmenter votre portée et fidéliser votre audience."
  },
  {
    icon: MessageCircle,
    title: "Engagement & Interaction",
    description: "Création d'interactions authentiques qui renforcent la relation avec vos followers et prospects."
  }
];

const socialPlatforms = [
  {
    name: "Facebook",
    color: "text-blue-600",
    icon: "📘",
    description: "Communauté et engagement"
  },
  {
    name: "Instagram",
    color: "text-pink-500",
    icon: "📷",
    description: "Visuel et storytelling"
  },
  {
    name: "LinkedIn",
    color: "text-blue-700",
    icon: "💼",
    description: "Professionnel et B2B"
  },
  {
    name: "Twitter",
    color: "text-blue-400",
    icon: "🐦",
    description: "Actualités et tendances"
  },
  {
    name: "TikTok",
    color: "text-black dark:text-white",
    icon: "🎵",
    description: "Créatif et viral"
  },
  {
    name: "YouTube",
    color: "text-red-600",
    icon: "📺",
    description: "Vidéo et éducation"
  }
];

export function SocialMediaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300fefb\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00fefb]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl"></div>
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
            Réseaux Sociaux
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nous sommes actifs sur diverses plateformes afin de maintenir le lien avec vous. Abonnez-vous pour être au courant de nos dernières nouvelles, de nos projets en développement, et bien d&apos;autres choses ! Restez à jour, engagez-vous avec nous et intégrez notre communauté.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {socialFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00fefb] to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Plateformes Gérées
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <h4 className={`font-semibold ${platform.color} mb-2`}>
                    {platform.name}
                  </h4>
                  <p className="text-slate-400 text-xs">
                    {platform.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00fefb] mb-2">10K+</div>
            <div className="text-slate-300">Followers Engagés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00fefb] mb-2">95%</div>
            <div className="text-slate-300">Taux d&apos;Engagement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00fefb] mb-2">24/7</div>
            <div className="text-slate-300">Community Management</div>
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
            <h3 className="text-2xl font-semibold text-white mb-4">
              Rejoignez Notre Communauté
            </h3>
            <p className="text-slate-300 mb-6">
              Suivez-nous sur nos réseaux sociaux pour rester informé de nos dernières actualités, conseils et projets en cours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
