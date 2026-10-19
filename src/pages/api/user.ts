import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/User';
import dbConnect from '@/lib/mongodb';
import { requireSession } from '@/lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const session = requireSession(req, res);
        if (!session) return;

        await dbConnect();
        const user = await User.findById(session.id).select('name email role');
        if (!user) {
            return res.status(401).json({ message: 'Cette session ne correspond plus à un compte actif.' });
        }

        return res.status(200).json({
            user: { id: user.id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        console.error('User API failed:', error);
        return res.status(500).json({ message: 'Impossible de charger votre profil pour le moment.' });
    }
}
