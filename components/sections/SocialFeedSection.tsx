"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Heart, MessageCircle, Share2 } from "lucide-react";

const socialPosts = [
  {
    platform: "Facebook",
    content: "Découvrez notre nouveau projet de développement web pour une entreprise locale. Une solution moderne et performante qui transforme leur présence digitale !",
    author: "Zenith Digit",
    time: "2h",
    likes: 24,
    comments: 8,
    shares: 3,
    color: "from-blue-500 to-blue-600"
  },
  {
    platform: "LinkedIn",
    content: "Les tendances du développement web en 2024 : découvrez les technologies qui vont révolutionner votre entreprise cette année.",
    author: "Zenith Digit",
    time: "5h",
    likes: 45,
    comments: 12,
    shares: 7,
    color: "from-blue-600 to-blue-700"
  },
  {
    platform: "Instagram",
    content: "Behind the scenes de notre équipe en action ! Créativité, innovation et passion au service de vos projets digitaux.",
    author: "zenithdigit",
    time: "1j",
    likes: 89,
    comments: 15,
    shares: 4,
    color: "from-pink-500 to-purple-600"
  },
  {
    platform: "Twitter",
    content: "Conseil du jour : L'optimisation SEO commence par un contenu de qualité. Pensez d'abord à vos utilisateurs, les moteurs de recherche suivront !",
    author: "@zenithdigit",
    time: "3h",
    likes: 32,
    comments: 6,
    shares: 9,
    color: "from-blue-400 to-blue-500"
  }
];

export function SocialFeedSection() {
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
            Suivez-Nous
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Restez connecté avec nous sur nos réseaux sociaux pour découvrir nos derniers projets, conseils et actualités du monde digital.
          </p>
        </motion.div>

        {/* Social Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.platform}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 bg-gradient-to-r ${post.color} rounded-full flex items-center justify-center mr-3`}>
                      <span className="text-white font-bold text-sm">
                        {post.platform.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {post.author}
                      </h3>
                      <p className="text-slate-500 text-sm">{post.time}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#00fefb] transition-colors duration-300" />
                </div>

                {/* Post Content */}
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {post.content}
                </p>

                {/* Post Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-slate-500 hover:text-red-500 transition-colors duration-300 cursor-pointer">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center text-slate-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                    <div className="flex items-center text-slate-500 hover:text-green-500 transition-colors duration-300 cursor-pointer">
                      <Share2 className="w-4 h-4 mr-1" />
                      <span className="text-sm">{post.shares}</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                    {post.platform}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
            Rejoignez Notre Communauté
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href="#"
              className="group inline-flex items-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
              Instagram
            </a>
            <a
              href="#"
              className="group inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="#"
              className="group inline-flex items-center px-6 py-3 bg-blue-400 text-white font-semibold rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
