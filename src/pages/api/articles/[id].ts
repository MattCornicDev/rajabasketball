// pages/api/articles/[id].ts
import dbConnect from '@/lib/mongodb';
import Article from '@/models/Article';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { id } = req.query;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const article = await Article.findById(id);
                if (!article) return res.status(404).json({ message: 'Article not found' });
                res.status(200).json(article);
            } catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                } else {
                    res.status(500).json({ message: 'An unknown error occurred' });
                }
            }
            break;

        case 'PUT':
            try {
                const article = await Article.findByIdAndUpdate(id, req.body, { new: true });
                if (!article) return res.status(404).json({ message: 'Article not found' });
                res.status(200).json(article);
            } catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                } else {
                    res.status(500).json({ message: 'An unknown error occurred' });
                }
            }
            break;

        case 'DELETE':
            try {
                const article = await Article.findByIdAndDelete(id);
                if (!article) return res.status(404).json({ message: 'Article not found' });
                res.status(204).end();
            } catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                } else {
                    res.status(500).json({ message: 'An unknown error occurred' });
                }
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}