import bcryptjs from "bcryptjs";
import prisma from '@/app/libs/prismadb';
import { NextResponse } from "next/server";
export async function POST (
    request: Request
){
    const body = await request.json();
    const {
        email,
        name,
        password
    } = body;
    const hashedPassword = await bcryptjs.hash(password, 12);
type User = {
    email?: string | null;
    name?: string | null;
    hashedPassword?: string | null;
}
    const user: User = await prisma.user.create({
        //@ts-ignore
        data:{
            email,
            name,
            hashedPassword
        }
    });

    return NextResponse.json(user);
}