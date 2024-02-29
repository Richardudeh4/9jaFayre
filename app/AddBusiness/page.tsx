"use client";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";

import Link from "next/link";
import { Edit2Icon } from "lucide-react";
import { profile } from "@/public/images";

import { Input } from "@/components/ui/input";
import BusinessForm from "./components/BusinessForm";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Image
 from "next/image";
import ImageUpload from "@/components/input/ImageUpload";
import toast from "react-hot-toast";
const page = () => {
  const {handleSubmit, setValue, watch, formState: {errors,},reset } = useForm<FieldValues> ({
    defaultValues: {
        category: '',
        location: null,
        imageSrc: '',
        title: '',
        description: ''
    }
});

const imageSrc = watch('imageSrc');

const setCustomValue = (id: string, value: any) => {
  setValue( id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
  })
}
// const Map = useMemo(() => dynamic(() => import('../../components/Map'), {
//   ssr: false
// }),[location]);
  return (
    <div className=" bg-white">
       <div className =" bg-white py-24">
        <div className="max-w-7xl md:mx-auto">
        <div className="flex items-center justify-center mr-3 md:mr-0 space-x-24">
        <div className="w-[265px] h-[265px] rounded-full">
        <ImageUpload 
      value= {imageSrc}
      onChange={(value) => setCustomValue('imageSrc', value)}
      />
       </div>
        <div className="flex md:flex-col flex-row space-x-6 md:space-y-6 ">
            <h1 className="text-[20px] md:text-[50px] flex  text-[#242424] font-thin font-montserrat">Richard Udeh</h1>
            <h1 className="text-[18px] text-[#242424] font-thin font-montserrat"> Hull, UK </h1>
        </div>
        <Link href="EditProfile" className="flex space-x-3">
        <Edit2Icon size={20} />
        <h1 className="text-[#242424] hover:text-[#242424]/10 hidden md:flex text-[15px] font-montserrat">Edit profile</h1>
        </Link>
        </div>
        <div className="pt-12 rounded-t-[12px] z-20 bg-[#E9FB7D]">
        <div className="max-w-5xl mx-auto bg-white pt-12 rounded-t-[12px]">
         <div className="px-6 py-2 flex items-center">
        <h1 className="font-light font-montserrat  text-[25px] leading-[29px]">Add your business details</h1>
        </div>
        <BusinessForm/>
         </div>
        </div>
        </div>
        </div>
        </div>  
      
  )
}

export default page