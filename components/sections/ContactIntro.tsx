"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle, Clock, CheckCircle } from "lucide-react";

export function ContactIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Réponse Rapide",
      description: "Nous vous répondons sous 24h maximum"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      description: "Support technique 24/7 pour nos clients"
    },
    {
      icon: CheckCircle,
      title: "Consultation Gratuite",
      description: "Premier échange sans engagement"
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
              <MessageCircle className="w-4 h-4 mr-2" />
              Contactez-Nous
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Prêt à Démarrer
              <span className="block bg-gradient-to-r from-[#00fefb] to-cyan-400 bg-clip-text text-transparent">
                Votre Projet ?
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Nous sommes disponibles pour répondre à toutes vos interrogations et vous soutenir dans vos projets. Contactez-nous sans hésitation, notre équipe est prête à vous offrir une assistance professionnelle et rapide. Vous pouvez nous atteindre par téléphone, par e-mail ou en utilisant le formulaire de contact ci-dessous.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00fefb] to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <method.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{method.title}</h3>
                    <p className="text-slate-400 text-sm">{method.description}</p>
                  </div>
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
                href="#contact-form"
                className="group inline-flex items-center px-8 py-4 bg-[#00fefb] text-black font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Envoyer un Message
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a
                href="tel:+22797000000"
                className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[#00fefb] hover:text-[#00fefb] transition-all duration-300 backdrop-blur-sm"
              >
                Appeler Maintenant
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Informations de Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#00fefb]/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#00fefb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-slate-300">info@zenithdigit.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#00fefb]/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#00fefb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Téléphone</p>
                    <p className="text-slate-300">+227 97 00 00 00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#00fefb]/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#00fefb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Adresse</p>
                    <p className="text-slate-300">Niamey, Niger</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Heures d'Ouverture</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Lundi - Vendredi</span>
                  <span className="text-white font-semibold">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Samedi</span>
                  <span className="text-white font-semibold">9h00 - 15h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Dimanche</span>
                  <span className="text-white font-semibold">Fermé</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
