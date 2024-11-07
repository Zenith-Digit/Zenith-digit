"use client";

import { useEffect } from "react";
import Link from 'next/link'

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col h-screen items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-[#00fefb] my-4">500 - Erreur serveur</h1>
      <p>Une erreur est survenue. Veuillez réessayer plus tard.</p>
      <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-[#00fefb] text-white rounded">
        Réessayer
      </button>
      <Link href={'/'} className="my-4 text-blue-400">Retour a la page d'accueil</Link>
    </div>
  );
}
