import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as yup from 'yup';

const schema = yup.object().shape({
  nom: yup.string().required('Le nom est obligatoire'),
  email: yup.string().email('Veuillez entrer une adresse email valide').required('L\'email est obligatoire'),
  message: yup.string().required('Le message est obligatoire'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await schema.validate(body);

    const { nom, email, message } = body;

    // Configuration Nodemailer (à remplacer par vos informations)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // Utilise 465 avec `secure: true`
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
     await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${nom}`,
      text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ message: 'Message envoyé avec succès' }, { status: 200 });
  } catch (error) {
    console.error(error);
    if (error instanceof yup.ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}
