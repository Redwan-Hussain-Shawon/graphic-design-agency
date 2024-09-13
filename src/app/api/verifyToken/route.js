import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(req) {
    try{
        const {token} = await req.json();
        if(!token){
            throw new Error('Invalid');
        }
        try{
            const result = jwt.verify(token,process.env.JWT_SECRET_KEY);
            return NextResponse.json(result);
        }catch{
            return NextResponse.json(false);
        }
      
    }catch{
        console.error('Error in /api/generateToken:', error);
        return NextResponse.json({ error: 'Some Thing Rong' }, { status: 500 });
    }
}
