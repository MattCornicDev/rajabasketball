import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/User'; // Assurez-vous que le chemin est correct
import dbConnect from '@/lib/mongodb';

// Fonction pour enregistrer un nouvel utilisateur
const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password, name } = req.body; // Incluez le champ name

    const newUser = new User({
        email,
        password, // Assurez-vous de hacher le mot de passe avant de l'enregistrer
        name, // Ajoutez le champ name ici
    });

    await newUser.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès' });
};

// Handler de l'API
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect(); // Connexion à la base de données

    if (req.method === 'POST') {
        return registerUser(req, res); // Appel à la fonction d'enregistrement
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
};

export default handler;
