import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import { assertAuthConfigured, clearSessionCookie, createSessionToken, setSessionCookie } from '@/lib/auth';
import { Buffer } from 'node:buffer';

// Fonction d'inscription
export const register = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, password } = req.body ?? {};
    if (
        typeof name !== 'string' || !name.trim() || name.trim().length > 100 ||
        typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        typeof password !== 'string' || password.length < 8 || Buffer.byteLength(password, 'utf8') > 72
    ) {
        return res.status(400).json({ message: 'Nom, email valide et mot de passe de 8 caractères minimum requis.' });
    }

    try {
        const normalizedEmail = email.trim().toLowerCase();
        const existingUser = await User.findOne({ email: normalizedEmail });
        if (existingUser) {
            return res.status(409).json({ message: 'Un compte existe déjà avec cet email.' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password: hashedPassword,
        });
        const token = createSessionToken({ id: user.id, role: user.role || 'member' });
        setSessionCookie(res, token);
        return res.status(201).json({
            user: { id: user.id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'code' in error && error.code === 11000) {
            return res.status(409).json({ message: 'Un compte existe déjà avec cet email.' });
        }
        throw error;
    }
};

// Fonction de connexion
export const login = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body ?? {};
    if (
        typeof email !== 'string' ||
        typeof password !== 'string' ||
        !password ||
        Buffer.byteLength(password, 'utf8') > 72
    ) {
        return res.status(400).json({ message: 'Email et mot de passe requis.' });
    }

    const user = await User.findOne({ email: email.trim().toLowerCase() }).select('+password');
    if (!user) {
        return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    const hasBcryptHash = /^\$2[aby]\$\d{2}\$/.test(user.password);
    const isMatch = hasBcryptHash
        ? await bcrypt.compare(password, user.password)
        : password === user.password;
    if (!isMatch) {
        return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    if (!hasBcryptHash) {
        user.password = await bcrypt.hash(password, 12);
        await user.save();
    }

    const token = createSessionToken({ id: user.id, role: user.role || 'member' });
    setSessionCookie(res, token);
    return res.status(200).json({
        user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'DELETE') {
            clearSessionCookie(res);
            return res.status(204).end();
        }

        if (req.method !== 'POST') {
            res.setHeader('Allow', ['POST', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }

        assertAuthConfigured();
        await dbConnect();
        if (req.body?.action === 'register') return await register(req, res);
        if (req.body?.action === 'login') return await login(req, res);
        return res.status(400).json({ message: 'Action d’authentification invalide.' });
    } catch (error) {
        console.error('Authentication API failed:', error);
        return res.status(500).json({ message: 'Une erreur est survenue. Réessayez plus tard.' });
    }
};

export default handler;