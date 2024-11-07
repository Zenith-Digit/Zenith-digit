import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col h-screen items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-[#00fefb] my-4">404 - Page non trouvée</h1>
        <p>La page que vous cherchez n'existe pas.</p>
        <Link href={'/'} className="my-4 text-blue-400">Retour a la page d'accueil</Link>
      </div>
    );
  }