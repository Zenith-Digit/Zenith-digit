"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle, Star, Users } from "lucide-react";

export function ServicesIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    "Solutions sur mesure adaptées à vos besoins",
    "Équipe d'experts certifiés et expérimentés",
    "Support technique 24/7",
    "Livraison dans les délais convenus",
    "Prix compétitifs et transparents",
    "Garantie de satisfaction client"
  ];

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Clients Satisfaits",
      description: "Des entreprises qui nous font confiance"
    },
    {
      icon: Star,
      number: "98%",
      label: "Satisfaction",
      description: "Taux de satisfaction client"
    },
    {
      icon: CheckCircle,
      number: "100+",
      label: "Projets Livrés",
      description: "Solutions digitales réussies"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300fefb\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00fefb]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#00fefb]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-[#00fefb]/10 border border-[#00fefb]/20 rounded-full text-[#00fefb] text-sm font-medium mb-8"
            >
              <Star className="w-4 h-4 mr-2" />
              Nos Services Premium
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Solutions Digitales
              <span className="block bg-gradient-to-r from-[#00fefb] to-cyan-400 bg-clip-text text-transparent">
                Complètes
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Nous proposons une variété de services adaptés à vos exigences. Que vous ayez besoin de développement web, de création d'interfaces contemporaines ou d'optimisation de vos projets numériques, notre expertise est à votre service. Avec une approche personnalisée, nous assurons des solutions créatives, performantes et en phase avec vos ambitions.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-[#00fefb] mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-[#00fefb] text-black font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Démarrer un Projet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a
                href="#services"
                className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[#00fefb] hover:text-[#00fefb] transition-all duration-300 backdrop-blur-sm"
              >
                Découvrir Nos Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00fefb] to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00fefb]">{stat.number}</div>
                    <div className="text-white font-semibold">{stat.label}</div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
