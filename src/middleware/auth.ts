import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function middleware(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json(
      { message: 'No token provided' },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = (decoded as { id: string }).id;
    
    // Ajoutez l'ID utilisateur à la requête
    request.headers.set('userId', userId);

    return NextResponse.next();
  } catch (err) {
    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );
  }
}