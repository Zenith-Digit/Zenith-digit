"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Abdoul Salim Ali Maazou",
    position: "Responsable Commercial",
    email: "abdoulsalim@zenithdigit.com",
    phone: "+227 92 00 00 00",
    avatar: "AS",
    bio: "Expert en stratégie commerciale avec plus de 5 ans d'expérience dans le domaine digital.",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Fatima Oumarou",
    position: "Développeuse Full-Stack",
    email: "fatima@zenithdigit.com",
    phone: "+227 93 00 00 00",
    avatar: "FO",
    bio: "Spécialisée en React, Node.js et bases de données. Passionnée par l'innovation technologique.",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Ibrahim Sani",
    position: "UI/UX Designer",
    email: "ibrahim@zenithdigit.com",
    phone: "+227 94 00 00 00",
    avatar: "IS",
    bio: "Créateur d'expériences utilisateur exceptionnelles avec une expertise en design thinking.",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Aminata Traoré",
    position: "Chef de Projet",
    email: "aminata@zenithdigit.com",
    phone: "+227 95 00 00 00",
    avatar: "AT",
    bio: "Gestionnaire de projets agiles avec une forte expérience dans le suivi de projets digitaux.",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Mohamed Diallo",
    position: "Développeur Mobile",
    email: "mohamed@zenithdigit.com",
    phone: "+227 96 00 00 00",
    avatar: "MD",
    bio: "Expert en développement d'applications mobiles natives et cross-platform.",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Aïcha Moussa",
    position: "Marketing Digital",
    email: "aicha@zenithdigit.com",
    phone: "+227 97 00 00 00",
    avatar: "AM",
    bio: "Spécialiste en marketing digital et gestion des réseaux sociaux pour maximiser la visibilité.",
    linkedin: "#",
    github: "#"
  }
];

export function TeamSection() {
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
            Notre Équipe d'Experts
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Rencontrez les talents passionnés qui transforment vos idées en solutions digitales exceptionnelles
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
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00fefb] to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#00fefb] font-medium">
                    {member.position}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 text-center">
                  {member.bio}
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Mail className="w-4 h-4 mr-3 text-[#00fefb]" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Phone className="w-4 h-4 mr-3 text-[#00fefb]" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-[#00fefb] hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-[#00fefb] hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#00fefb]/10 to-cyan-600/10 border border-[#00fefb]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Rejoignez Notre Équipe
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Nous recherchons toujours des talents passionnés pour rejoindre notre équipe et participer à des projets innovants.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-[#00fefb] text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Postuler Maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
