import { createMocks } from 'node-mocks-http';
import handler from '../src/pages/api/articles/[id]'; // Ajustez le chemin si nécessaire

describe('API Articles', () => {
    it('should return all articles on GET /api/articles', async () => {
        const { req, res } = createMocks({
            method: 'GET',
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(res._getData()).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                title: expect.any(String),
                content: expect.any(String),
                authorId: expect.any(Number),
            }),
        ]));
    });

    it('should create a new article on POST /api/articles', async () => {
        const { req, res } = createMocks({
            method: 'POST',
            body: {
                title: 'New Article',
                content: 'Content of the new article',
                authorId: 1,
            },
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(201);
        expect(res._getData()).toEqual(expect.objectContaining({
            title: 'New Article',
            content: 'Content of the new article',
            authorId: 1,
        }));
    });
});