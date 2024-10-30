import React, { useState } from 'react';

export default function Form() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validation simple
    if (!nom || !email || !message) {
      alert("Tous les champs sont obligatoires.");
      return;
    }

    try {
      // Envoi des données à l'API pour traitement via Nodemailer
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        setNom('');
        setEmail('');
        setMessage('');
        alert("Message envoyé avec succès !");
      } else {
        alert("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Erreur de connexion à l'API.");
    }
  };

  return (
    <>
      <div className="bg-[#00fefb] rounded-lg mb-20">
        <div className="py-8 lg:py-16 px-4 md:px-0 mx-auto max-w-screen-md">
          <h2 className="mb-10 text-4xl md:text-6xl tracking-tight font-extrabold text-center text-black">
            Contactez-nous
          </h2>
          {submitted && (
            <p className="text-green-500 text-center mb-4">Merci pour votre message !</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="subject" className="block mb-2 text-2xl font-extrabold text-black">
                Nom & Prénom
              </label>
              <input
                type="text"
                id="subject"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 md:h-16 rounded-lg border border-gray-300 shadow-sm focus:ring-black focus:border-x-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                placeholder="Dites-nous comment vous appelez-vous ?"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-2xl font-extrabold text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 md:h-16 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@exemple.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-2xl font-extrabold text-black">
                Votre message
              </label>
              <textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 md:h-80 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Laissez un commentaire..."
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 px-5 text-2xl bg-black font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
