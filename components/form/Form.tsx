import React, { useState } from 'react';
import { toast } from 'sonner';

export default function Form() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [btn, setBtn] = useState(false)

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setBtn(true)
    // Validation simple
    if (!nom || !email || !message) {
      toast.error("Tous les champs sont obligatoires.",{
        position: 'top-right',
        style:{
          backgroundColor: "red",
          color: 'white'
        }
      });
      setBtn(false)
      return;
    }

    try {
      // Envoi des données à l'API pour traitement via Nodemailer
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email, message }),
      });
const res = await response.json()
      if (response.ok) {
        setNom('');
        setEmail('');
        setMessage('');
        setBtn(false)
        toast.success(res.message,{
          position: 'top-right',
          style:{
            backgroundColor: "#00fefb",
            color: 'white'
          }
        })
      } else {
        setBtn(false)
        toast.error(res.message,{
          position: 'top-right',
          style:{
            backgroundColor: "red",
            color: 'white'
          }
        })
      }
    } catch (error) {
      console.error("Erreur :", error);
      setBtn(false)
      toast.error('Erreur de connexion au serveur',{
        position: 'top-right',
        style:{
          backgroundColor: "red",
          color: 'white'
        }
      })
    }
  };

  return (
    <>
      <div className="bg-[#00fefb] rounded-lg w-5/6 md:w-2/3 lg:px-10 md:max-w-screen-md mx-auto mb-20">
        <div className="py-4 px-4 md:px-10 lg:px-0 mx-auto max-w-screen-sm">
          <h2 className="mb-10 text-2xl md:text-5xl tracking-tight font-extrabold text-center text-black">
            Contactez-nous
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="subject" className="block mb-2 md:text-2xl font-extrabold text-black">
                Nom & Prénom
              </label>
              <input
                type="text"
                id="subject"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 md:h-16 rounded-lg border border-gray-300 shadow-sm focus:ring-black focus:border-x-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                placeholder="Dites-nous comment vous appelez-vous ?"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 md:text-2xl font-extrabold text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm border border-gray-300 md:h-16 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@exemple.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 md:text-2xl font-extrabold text-black">
                Votre message
              </label>
              <textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 md:h-60 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Laissez un commentaire..."
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
              disabled= {btn}
                type="submit"
                className={`py-3 px-5 md:text-2xl ${btn ? "bg-neutral-500" : "bg-black"} font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
              >
                {btn? "...." : "Envoyer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
