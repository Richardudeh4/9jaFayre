import { customer } from '@/public/images';
import { Star, StarHalf } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { IoMdStar } from 'react-icons/io';


export default function FayreSecondMain() {
  return (
    <div className='main-container bg-[#f7f7f7] relative overflow-hidden my-0'>
      <div className='py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='h-full'>
      <video width="1031" height="126" autoPlay loop muted controls className='rounded-lg shadow-md'>
            <source
            src='https://v1.cdnpk.net/videvo_files/video/premium/2020-03/large_preview/200314%20_Work%20Life_02_%204k_038.mp4'
            type='video/mp4'
            />
            Your browser does not suppport the video tag
       </video>
      </div>
      <div className='flex flex-col space-y-8 p-6'> 
      <h1 className='font-montserrat text-[#4E4848] text-[35px] font-bold '>Here is what our people have to say: </h1>
      <div className='border bg-white rounded-[20px] mb-0'>
        <div className='max-w-[420px] mx-auto flex flex-col space-y-6'>
          <h1 className='font-bold text-[20px] font-montserrat pt-12'>“It’s been an amazing ride with the 9ja Fayre team. Really grateful for the opportunity. “</h1>
          <div className='flex space-x-4  items-center'>
          <Image src={customer} alt="customer" className='rounded-full' width={65} height={62}/>
          <div className='flex flex-col space-y-1 text-[#4E4848]'>
          <h1 className='text-[20px] font-montserrat'>Savana Plants LTD.</h1>
          <h1 className='text-[35px] font-montserrat'>Angelique Kidio </h1>
          </div>
          <div className='flex space-x-2 items-center'>
            <IoMdStar className='text-[#FFD700] w-6 h-6'/>
            <IoMdStar className='text-[#FFD700] w-6 h-6'/>
            <IoMdStar className='text-[#FFD700] w-6 h-6'/>
            <IoMdStar className='text-[#FFD700] w-6 h-6'/>
            <IoMdStar className='text-white w-6 h-6'/>
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
