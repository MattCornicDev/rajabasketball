import { NextApiRequest, NextApiResponse } from 'next';
import { middleware } from '@/middleware/auth';
import Article, { ArticleType } from '@/models/Article';
import { NextRequest } from 'next/server';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const nextRequest = {
        headers: {
            authorization: req.headers.authorization
        }
    } as unknown as NextRequest;

    await middleware(nextRequest);
    if (res.headersSent) return;

    if (req.method === 'POST') {
        try { 
            const articleData: Omit<ArticleType, 'createdAt' | 'updatedAt'> = req.body; 
            const newArticle = new Article(articleData); 
            await newArticle.save();
            res.status(201).json(newArticle);
        } catch (error) {
            res.status(500).json({ message: 'Error creating article', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
