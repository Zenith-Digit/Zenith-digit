"use client";
import Link from "next/link";
import { Search, Home, ArrowLeft, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300fefb\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00fefb]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* 404 Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00fefb] to-cyan-400 rounded-full blur-2xl opacity-30 scale-110"></div>
          <div className="relative w-32 h-32 bg-gradient-to-r from-[#00fefb] to-cyan-400 rounded-full flex items-center justify-center mx-auto">
            <Search className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* 404 Content */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#00fefb] mb-4">
          Page Non Trouvée
        </h2>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée. Vérifiez l&apos;URL ou utilisez les liens ci-dessous pour naviguer.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            href={'/'} 
            className="group inline-flex items-center px-8 py-4 bg-[#00fefb] text-black font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Retour à l&apos;Accueil
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[#00fefb] hover:text-[#00fefb] transition-all duration-300 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Page Précédente
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Pages Populaires
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link 
              href="/" 
              className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 text-sm"
            >
              Accueil
            </Link>
            <Link 
              href="/service" 
              className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 text-sm"
            >
              Services
            </Link>
            <Link 
              href="/apropos" 
              className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 text-sm"
            >
              À Propos
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-300 hover:text-[#00fefb] transition-colors duration-300 text-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            Besoin d&apos;Aide ?
          </h3>
          <p className="text-slate-300 text-sm mb-4">
            Si vous pensez qu&apos;il s&apos;agit d&apos;une erreur, contactez-nous.
          </p>
          <a 
            href="mailto:info@zenithdigit.com"
            className="inline-flex items-center text-[#00fefb] hover:text-cyan-400 transition-colors duration-300"
          >
            <Mail className="w-4 h-4 mr-2" />
            info@zenithdigit.com
          </a>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#00fefb]/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00fefb]/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
}
