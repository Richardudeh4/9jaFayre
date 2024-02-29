"use client";
import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";
import Button from "../Button";

interface ListingCardProps{
 data: SafeListing;
 onAction?: (id: string) => void;
 disabled?: boolean;
 actionLabel?: string;
 actionId?: string;
 currentUser?: SafeUser | null; 
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser
}) => {
    const router = useRouter();
    const {getByValue} = useCountries();

    const location = getByValue(data.locationValue);

    const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if(disabled) {
            return;
        }
        onAction ?.(actionId);
    }, [onAction, actionId, disabled]) 
    console.log(currentUser);

  return (
    <div
    onClick={()=> router.push(`/listings/${data.id}`)}
     className="col-span-1 cursor-pointer group"
    >
        <div className="flex flex-col gap-2 w-full">
            <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                <Image fill src={data.imageSrc} alt="listing" className="object-cover h-full w-full group-hover:scale-110 transition"/>
            </div>
            <div className="font-semibold text-lg text-black">
                { location?.region}, {location?.label}
            </div>
            <div className="font-light text-neutral-500">
                {data.category}
            </div>
            <div className="flex flex-row items-center gap-1">
            </div>
            {
        onAction && actionLabel && (
                    <Button disabled={disabled} small label={actionLabel} onClick={handleCancel}/>
                )
            }
        </div>
    </div>
  )
}

export default ListingCard