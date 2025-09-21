"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aminata Traoré",
    role: "Directrice Marketing",
    company: "TechNiger",
    content: "Zenith Digit a transformé notre présence en ligne. Leur expertise en développement web et SEO nous a permis d'augmenter notre trafic de 300% en seulement 6 mois.",
    rating: 5,
    avatar: "AT"
  },
  {
    name: "Ibrahim Sani",
    role: "CEO",
    company: "StartupNiger",
    content: "Une équipe exceptionnelle qui comprend parfaitement les besoins des entreprises africaines. Leur approche personnalisée et leur professionnalisme sont remarquables.",
    rating: 5,
    avatar: "IS"
  },
  {
    name: "Fatima Oumarou",
    role: "Propriétaire",
    company: "Boutique Moderne",
    content: "Grâce à Zenith Digit, notre boutique en ligne a connu un succès fulgurant. Le design est magnifique et les ventes ont explosé depuis le lancement.",
    rating: 5,
    avatar: "FO"
  }
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00fefb]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00fefb]/10 rounded-full blur-3xl"></div>
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
            Ce que Disent Nos Clients
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre plus grande récompense. Découvrez leurs témoignages authentiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-[#00fefb]/20 text-4xl font-serif">&quot;</div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00fefb] text-[#00fefb]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00fefb] to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role} chez {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
