"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, TrendingUp, Target, BarChart3 } from "lucide-react";

const seoFeatures = [
  {
    icon: Search,
    title: "Audit SEO Complet",
    description: "Analyse approfondie de votre site pour identifier les opportunités d'amélioration et optimiser votre référencement naturel."
  },
  {
    icon: TrendingUp,
    title: "Optimisation Mots-Clés",
    description: "Recherche et intégration stratégique des mots-clés pertinents pour améliorer votre visibilité sur les moteurs de recherche."
  },
  {
    icon: Target,
    title: "Contenu Optimisé",
    description: "Création de contenu de qualité optimisé SEO pour attirer et engager votre audience cible."
  },
  {
    icon: BarChart3,
    title: "Suivi & Reporting",
    description: "Monitoring continu de vos performances avec des rapports détaillés et des recommandations d'amélioration."
  }
];

const searchEngines = [
  { name: "Google", color: "text-blue-500", icon: "🔍" },
  { name: "Bing", color: "text-blue-600", icon: "🔎" },
  { name: "Yahoo", color: "text-purple-500", icon: "📧" },
  { name: "DuckDuckGo", color: "text-yellow-500", icon: "🦆" },
  { name: "Baidu", color: "text-red-500", icon: "🇨🇳" }
];

export function SEOSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
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
            Référencement SEO
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Améliorez votre présence sur Internet avec un référencement SEO efficace. Générez davantage de visiteurs, renforcez votre classement sur les moteurs de recherche et accroissez votre notoriété pour atteindre un public élargi.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {seoFeatures.map((feature, index) => (
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

        {/* Search Engines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
            Optimisé pour Tous les Moteurs de Recherche
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {searchEngines.map((engine, index) => (
              <motion.div
                key={engine.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {engine.icon}
                </div>
                <span className={`font-semibold ${engine.color}`}>
                  {engine.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#00fefb]/10 to-cyan-600/10 border border-[#00fefb]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Prêt à Améliorer Votre Visibilité ?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Contactez-nous pour un audit SEO gratuit et découvrez comment améliorer votre classement sur les moteurs de recherche.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-[#00fefb] text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Audit SEO Gratuit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
