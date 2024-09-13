import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    const { userData } = await req.json(); 
    if (!userData) {
      throw new Error('Invalid userData');
    }

    const token = jwt.sign(userData, process.env.JWT_SECRET_KEY, {
      expiresIn: '7d',
    });
    return NextResponse.json({ token });

  } catch (error) {
    console.error('Error in /api/generateToken:', error);
    return NextResponse.json({ error: 'Token generation failed' }, { status: 500 });
  }
}
