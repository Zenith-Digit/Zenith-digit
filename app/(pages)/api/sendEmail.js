// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nom, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail', // ou un autre service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_RECEIVER, // votre email de réception
        subject: `Nouveau message de ${nom}`,
        text: message,
      });

      res.status(200).json({ message: 'Email envoyé avec succès' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}
