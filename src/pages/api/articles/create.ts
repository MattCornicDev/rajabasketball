import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '@/middleware/auth';
import Article, { ArticleType } from '@/models/Article';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    authenticate(req, res, async () => {
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
    });
};
