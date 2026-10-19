import type { NextApiRequest, NextApiResponse } from 'next';
import articlesHandler from './index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    return articlesHandler(req, res);
}
