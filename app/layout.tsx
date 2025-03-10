"use client"

// import localFont from "next/font/local";
import React, { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/defiller/ScrollToTop";


// const geistSans = localFont({
//   src: "./fonts/Montserrat-VariableFont_wght.ttf",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/Montserrat-Italic-VariableFont_wght.ttf",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
interface RootLayoutProps {
  children: React.ReactNode; // Spécifier le type de `children`
}
export default function RootLayout({ children }: RootLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkBodyClass = () => {
      setIsDarkMode(document.body.classList.contains("bg-black"));
    };

    checkBodyClass();
    const observer = new MutationObserver(checkBodyClass);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en">
      <body className={`antialiased ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <Navbar />
        <div className="pt-24">{children}</div> {/* children est typé correctement */}
        <Toaster />
        <ScrollToTop />
        <Footer isDarkMode={isDarkMode} />
      </body>
    </html>
  );
}