"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import logo from './logo.png'

export function Parallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      logo,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      logo,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      logo,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      logo,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      logo,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      logo,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
logo,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      logo,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      logo,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      logo,
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      logo,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      logo,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      logo,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      logo,
  },
];
