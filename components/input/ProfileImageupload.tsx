"use client";
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var cloudinary : any;
}

interface ProfileImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}
const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({
  onChange,
  value
}) => {
  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url);
  }, [onChange])
  return (
   
    <CldUploadWidget
    onUpload={handleUpload}
    uploadPreset='vul9ekzk'
    options={{
      maxFiles: 1
    }}
    >
      {({ open }) => {
        return (
          <div onClick={() => open?.()} className='relative cursor-pointer rounded-full hover:opacity-70 transition border p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600'>
              <TbPhotoPlus size={50}/>
              <div className='font-semibold text-lg'> Edit profile photo</div>
              {
                value && (
                  <div className='absolute inset-0 w-full h-full'>
                    <Image alt="object" fill style={{ objectFit: 'cover'}} src={value}/>
                  </div>
                )
              }
            </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ProfileImageUpload