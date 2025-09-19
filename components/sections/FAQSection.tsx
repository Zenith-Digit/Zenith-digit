"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien de temps faut-il pour développer un site web ?",
    answer: "Le délai de développement dépend de la complexité de votre projet. Un site vitrine simple peut être livré en 2-4 semaines, tandis qu'une application web complexe peut nécessiter 2-6 mois. Nous vous fournirons un planning détaillé lors de notre première consultation."
  },
  {
    question: "Proposez-vous un support technique après la livraison ?",
    answer: "Oui, nous offrons un support technique complet après la livraison de votre projet. Cela inclut la maintenance, les mises à jour, la correction de bugs et l'assistance technique. Nous proposons différents packages de maintenance selon vos besoins."
  },
  {
    question: "Vos sites sont-ils optimisés pour le mobile ?",
    answer: "Absolument ! Tous nos sites sont développés avec une approche mobile-first et sont entièrement responsives. Ils s'adaptent parfaitement à tous les écrans, des smartphones aux tablettes en passant par les ordinateurs de bureau."
  },
  {
    question: "Travaillez-vous avec des entreprises de toutes tailles ?",
    answer: "Oui, nous travaillons avec des startups, des PME et des grandes entreprises. Notre approche s'adapte à la taille et aux besoins spécifiques de chaque client. Nous proposons des solutions évolutives qui grandissent avec votre entreprise."
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs varient selon la complexité et les fonctionnalités de votre projet. Nous proposons des devis personnalisés gratuits. Contactez-nous pour discuter de vos besoins et obtenir une estimation précise de votre projet."
  },
  {
    question: "Proposez-vous des formations pour utiliser nos outils ?",
    answer: "Oui, nous incluons des sessions de formation dans nos projets pour vous permettre de gérer facilement votre site ou application. Nous fournissons également une documentation complète et restons disponibles pour toute question."
  }
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00fefb]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#00fefb]/5 rounded-full blur-3xl"></div>
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
            Questions Fréquentes
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos services et notre processus de travail
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-[#00fefb] focus:ring-opacity-50 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-[#00fefb] transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-slate-500 group-hover:text-[#00fefb] transition-colors duration-300" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#00fefb]/10 to-cyan-600/10 border border-[#00fefb]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Notre équipe est là pour vous aider. Contactez-nous pour une consultation gratuite.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-[#00fefb] text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Nous Contacter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
