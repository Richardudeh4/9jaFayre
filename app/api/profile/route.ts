
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST (
    request: Request
){
    const currentUser = await getCurrentUser();
    if(!currentUser){
        return NextResponse.error();
    }
    const body = await request.json();
    const {
        firstname,
        lastname,
        imageSrc,
        email,
        location,
    } = body;

    Object.keys(body).forEach((value: any) => {
        if(!body[value]) {
            NextResponse.error();
        }
    });
    const profile = await prisma.profile.update({
        //@ts-ignore
        data: {
            firstname,
            lastname,
            imageSrc,
            email, 
            locationValue: location.value, 
            id: currentUser.id
        }
    });
    return NextResponse.json(profile);
}