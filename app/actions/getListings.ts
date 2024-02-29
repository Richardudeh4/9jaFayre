import prisma from '@/app/libs/prismadb';

export interface IListingsParams {
    userId?: string;
    name?:string;
    description?:string;
    imageSrc?: string;
    phoneNumber?:number;
    email?:string;
    locationValue?: string;
    category?: string;
}
export default async function getListings( params: IListingsParams) {
    try{
        const {userId,locationValue,category,name, description, phoneNumber,email} = params;

        let query: any = {};
        if(userId){
            query.userId = userId;
        }
        if(category) {
            query.category = category;
        }
        if(locationValue){
            query.locationValue = locationValue
        }
        if(name){
            query.name = name
        }
        if(description){
            query.description = description
        }
        if(phoneNumber){
            query.phoneNumber = phoneNumber
        }
        if(email){
            query.email = email
        }
        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            }
        });
        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt : listing.createdAt.toISOString(),
        }));
        return safeListings;
    }
    catch(error: any) {
    throw new Error(error);
    }
}