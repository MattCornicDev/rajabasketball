import dbConnect from '@/lib/mongodb';
import Article from '@/models/Article';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    switch (req.method) {
        case 'GET':
            try {
                const articles = await Article.find({}).lean();
                res.status(200).json(articles);
            } catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                } else {
                    res.status(500).json({ message: 'An unknown error occurred' });
                }
            }
            break;

        case 'POST':
            try {
                const { title, content, authorId } = req.body;
                if (!title || !content || !authorId) {
                    return res.status(400).json({ message: 'Title, content, and authorId are required' });
                }
                const newArticle = new Article(req.body);
                await newArticle.save();
                res.status(201).json(newArticle);
            } catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                } else {
                    res.status(500).json({ message: 'An unknown error occurred' });
                }
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}