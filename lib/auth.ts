import type { NextApiRequest, NextApiResponse } from 'next';
import jwt, { type JwtPayload } from 'jsonwebtoken';

export const SESSION_COOKIE = 'raja_session';
const SESSION_DURATION_SECONDS = 60 * 60;

export interface Session {
    id: string;
    role: string;
}

function getJwtSecret() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET must be configured before authentication can be used.');
    }
    return secret;
}

export function assertAuthConfigured() {
    getJwtSecret();
}

export function createSessionToken(session: Session) {
    return jwt.sign(session, getJwtSecret(), { expiresIn: SESSION_DURATION_SECONDS });
}

export function getSession(req: NextApiRequest): Session | null {
    const authorization = req.headers.authorization;
    const bearerToken = authorization?.match(/^Bearer\s+(.+)$/i)?.[1];
    const token = req.cookies[SESSION_COOKIE] || bearerToken;
    if (!token) return null;

    const secret = getJwtSecret();
    try {
        const payload = jwt.verify(token, secret) as JwtPayload;
        if (typeof payload.id !== 'string' || typeof payload.role !== 'string') return null;
        return { id: payload.id, role: payload.role };
    } catch {
        return null;
    }
}

export function requireSession(req: NextApiRequest, res: NextApiResponse) {
    const session = getSession(req);
    if (!session) {
        res.status(401).json({ message: 'Authentification requise.' });
        return null;
    }
    return session;
}

export function setSessionCookie(res: NextApiResponse, token: string) {
    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    res.setHeader(
        'Set-Cookie',
        `${SESSION_COOKIE}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${SESSION_DURATION_SECONDS}${secure}`,
    );
}

export function clearSessionCookie(res: NextApiResponse) {
    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    res.setHeader(
        'Set-Cookie',
        `${SESSION_COOKIE}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0${secure}`,
    );
}
