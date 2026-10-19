// pages/api/articles/[id].ts
import dbConnect from '@/lib/mongodb';
import Article from '@/models/Article';
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireSession } from '@/lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case 'GET':
            try {
                await dbConnect();
                const article = await Article.findById(id);
                if (!article) return res.status(404).json({ message: 'Article not found' });
                res.status(200).json(article);
            } catch (error) {
                console.error('Article lookup failed:', error);
                res.status(500).json({ message: 'Impossible de charger cet article pour le moment.' });
            }
            break;

        case 'PUT':
            try {
                const session = requireSession(req, res);
                if (!session) return;
                await dbConnect();
                const currentArticle = await Article.findById(id);
                if (!currentArticle) return res.status(404).json({ message: 'Article not found' });
                if (currentArticle.authorId.toString() !== session.id && session.role !== 'admin') {
                    return res.status(403).json({ message: 'Vous ne pouvez pas modifier cet article.' });
                }
                const { title, content } = req.body ?? {};
                if (typeof title !== 'string' || !title.trim() || typeof content !== 'string' || !content.trim()) {
                    return res.status(400).json({ message: 'Un titre et un contenu sont requis.' });
                }
                const article = await Article.findByIdAndUpdate(
                    id,
                    { title: title.trim(), content: content.trim() },
                    { new: true, runValidators: true },
                );
                if (!article) return res.status(404).json({ message: 'Article not found' });
                res.status(200).json(article);
            } catch (error) {
                console.error('Article update failed:', error);
                res.status(500).json({ message: 'Impossible de modifier cet article pour le moment.' });
            }
            break;

        case 'DELETE':
            try {
                const session = requireSession(req, res);
                if (!session) return;
                await dbConnect();
                const article = await Article.findById(id);
                if (!article) return res.status(404).json({ message: 'Article not found' });
                if (article.authorId.toString() !== session.id && session.role !== 'admin') {
                    return res.status(403).json({ message: 'Vous ne pouvez pas supprimer cet article.' });
                }
                await article.deleteOne();
                res.status(204).end();
            } catch (error) {
                console.error('Article deletion failed:', error);
                res.status(500).json({ message: 'Impossible de supprimer cet article pour le moment.' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}