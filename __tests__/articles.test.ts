import { createMocks } from 'node-mocks-http';
import handler from '../src/pages/api/articles/[id]';
import Article from '@/models/Article';
import { createSessionToken, SESSION_COOKIE } from '@/lib/auth';

jest.mock('@/lib/mongodb', () => ({
    __esModule: true,
    default: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('@/models/Article', () => ({
    __esModule: true,
    default: {
        findById: jest.fn(),
        findByIdAndUpdate: jest.fn(),
    },
}));

const mockedArticle = Article as unknown as {
    findById: jest.Mock;
    findByIdAndUpdate: jest.Mock;
};

const article = {
    title: 'Raja Basketball',
    content: 'Une actualité du club.',
    authorId: { toString: () => 'member-1' },
    deleteOne: jest.fn().mockResolvedValue(undefined),
};

describe('API articles', () => {
    beforeAll(() => {
        process.env.JWT_SECRET = 'test-secret-for-session-tokens';
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('returns an article by id', async () => {
        mockedArticle.findById.mockResolvedValue(article);
        const { req, res } = createMocks({
            method: 'GET',
            query: { id: 'article-1' },
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toMatchObject({ title: 'Raja Basketball' });
    });

    it('requires a session before editing an article', async () => {
        const { req, res } = createMocks({
            method: 'PUT',
            query: { id: 'article-1' },
            body: { title: 'Modified', content: 'Content' },
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(401);
        expect(mockedArticle.findById).not.toHaveBeenCalled();
    });

    it('allows the author to edit their article', async () => {
        const token = createSessionToken({ id: 'member-1', role: 'member' });
        mockedArticle.findById.mockResolvedValue(article);
        mockedArticle.findByIdAndUpdate.mockResolvedValue({ ...article, title: 'Modified' });
        const { req, res } = createMocks({
            method: 'PUT',
            query: { id: 'article-1' },
            cookies: { [SESSION_COOKIE]: token },
            body: { title: 'Modified', content: 'Updated content' },
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(mockedArticle.findByIdAndUpdate).toHaveBeenCalledWith(
            'article-1',
            { title: 'Modified', content: 'Updated content' },
            { new: true, runValidators: true },
        );
    });
});
