
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
        name,
        description,
        phoneNumber,
        email,
        imageSrc,
        category,
        location,
    } = body;

    Object.keys(body).forEach((value: any) => {
        if(!body[value]) {
            NextResponse.error();
        }
    });
  
    const listing = await prisma.listing.create({
        //@ts-ignore
        data: {
            name,
            description,
            phoneNumber,
            email,
            imageSrc,
            category: category.value,
            locationValue: location.value, 
            userId: currentUser.id
        }
    });
    return NextResponse.json(listing);
}