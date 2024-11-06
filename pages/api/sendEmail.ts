import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import * as yup from 'yup';

const schema = yup.object().shape({
  nom: yup.string().required('Le nom est obligatoire'),
  email: yup.string().email('Veuillez entrer une adresse email valide').required('L\'email est obligatoire'),
  message: yup.string().required('Le message est obligatoire'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    const { nom, email, message } = await schema.validate(req.body, { abortEarly: false });

    // Configuration Nodemailer (à remplacer par vos informations)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    const info = await transporter.sendMail({
      from: email,
      to: 'abdoulrazakadamoubello@gmail.com',
      subject: `Nouveau message de ${nom}`,
      text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log('Message envoyé : %s', info.messageId);
    res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de l\'envoi du message' });
  }
}