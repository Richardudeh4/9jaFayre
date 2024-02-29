import Image from "next/image";
import { SafeUser } from "../types";
import Link from "next/link";
import { profile } from "@/public/images";
import {  Edit2Icon } from "lucide-react";
import DataTable from "./components/DataTable";
interface UserMenuProps {
    currentUser?: SafeUser | null
  }
const page = ({ currentUser} : UserMenuProps) => {
console.log({currentUser})
  return (

    <div className =" bg-white py-24">
        <div className="max-w-7xl md:mx-auto">
        <div className="flex items-center justify-center mr-3 md:mr-0 space-x-24">
        <div>
            <Image src={profile} alt="profile"  className=" md:w-[342px] md:h-[359.12px] rounded-full"/>
        </div>
        <div className="flex md:flex-col flex-row space-x-6 cursor-pointer md:space-y-6 ">
            <h1 className="text-[20px] md:text-[50px] flex  text-[#242424] font-thin font-montserrat">Richard Udeh</h1>
            <h1 className="text-[18px] text-[#242424] font-thin font-montserrat"> Hull, UK </h1>
        </div>
        <Link href="EditProfile" className="flex space-x-3">
        <Edit2Icon size={20} />
        <h1 className="text-[#242424] hover:text-[#E9FB7D] hidden md:flex text-[15px] font-montserrat">Edit profile</h1>
        </Link>
        </div>
        <div className="pt-12 rounded-t-[12px] bg-[#E9FB7D]">
        <div className="p-4">
             <DataTable/>
        </div>
        </div>
        </div>
        </div>
  )
}

export default page