"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
// import Logo from "../../../images/kim.jpg";

const teamMembers = [
  {
    name: "Abdoul Salim Ali Maazou",
    position: "Responsable Commercial",
    email: "abdoulsalim@zenithdigit.com",
    phone: "+227 92 00 00 00",
    avatar: "AS",
    bio: "Expert en stratégie commerciale avec plus de 5 ans d&apos;expérience dans le domaine digital.",
    availability: "Disponible maintenant"
  },
  {
    name: "Fatima Oumarou",
    position: "Chef de Projet",
    email: "fatima@zenithdigit.com",
    phone: "+227 93 00 00 00",
    avatar: "FO",
    bio: "Gestionnaire de projets agiles avec une forte expérience dans le suivi de projets digitaux.",
    availability: "Disponible dans 2h"
  },
  {
    name: "Ibrahim Sani",
    position: "Développeur Lead",
    email: "ibrahim@zenithdigit.com",
    phone: "+227 94 00 00 00",
    avatar: "IS",
    bio: "Développeur full-stack expérimenté spécialisé en React, Node.js et bases de données.",
    availability: "Disponible maintenant",
    image: "/images/kim.jpg"
  }
];

export function ContactTeamSection() {
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
            Notre Équipe de Contact
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Rencontrez les membres de notre équipe qui sont là pour vous accompagner dans vos projets et répondre à toutes vos questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full object-cover border-4 border-[#00fefb] group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-[#00fefb] to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-2xl">{member.avatar}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#00fefb] font-medium mb-2">
                    {member.position}
                  </p>
                  <div className="flex items-center justify-center text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {member.availability}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 text-center">
                  {member.bio}
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 mr-3 text-[#00fefb]" />
                    <span className="text-slate-600 dark:text-slate-300 truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 mr-3 text-[#00fefb]" />
                    <span className="text-slate-600 dark:text-slate-300">{member.phone}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 bg-[#00fefb] text-black font-semibold py-2 px-4 rounded-lg hover:bg-cyan-400 transition-colors duration-300 text-center text-sm"
                  >
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300 text-center text-sm"
                  >
                    <Phone className="w-4 h-4 inline mr-1" />
                    Appeler
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#00fefb]/10 to-cyan-600/10 border border-[#00fefb]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Besoin d&apos;une Réponse Immédiate ?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Notre équipe est disponible pour répondre à vos questions urgentes. N&apos;hésitez pas à nous contacter directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+22797000000"
                className="inline-flex items-center px-6 py-3 bg-[#00fefb] text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler Maintenant
              </a>
              <a
                href="mailto:info@zenithdigit.com"
                className="inline-flex items-center px-6 py-3 border-2 border-[#00fefb] text-[#00fefb] font-semibold rounded-full hover:bg-[#00fefb] hover:text-black transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Envoyer un Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
