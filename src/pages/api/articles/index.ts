import dbConnect from '@/lib/mongodb';
import Article from '@/models/Article';
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireSession } from '@/lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            try {
                await dbConnect();
                const articles = await Article.find({}).lean();
                res.status(200).json(articles);
            } catch (error) {
                console.error('Article list failed:', error);
                res.status(500).json({ message: 'Impossible de charger les articles pour le moment.' });
            }
            break;

        case 'POST':
            try {
                const session = requireSession(req, res);
                if (!session) return;
                const { title, content } = req.body ?? {};
                if (typeof title !== 'string' || !title.trim() || typeof content !== 'string' || !content.trim()) {
                    return res.status(400).json({ message: 'Un titre et un contenu sont requis.' });
                }
                await dbConnect();
                const newArticle = await Article.create({
                    title: title.trim(),
                    content: content.trim(),
                    authorId: session.id,
                });
                res.status(201).json(newArticle);
            } catch (error) {
                console.error('Article creation failed:', error);
                res.status(500).json({ message: 'Impossible de créer cet article pour le moment.' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}