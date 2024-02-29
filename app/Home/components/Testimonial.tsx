import { faq } from "@/public/images"
import * as React from "react"
import Image from "next/image"
import { customer } from "@/public/images"
import { IoMdStar } from "react-icons/io"
export function Testimonial() {
  return (
    <div className="bg-[#F8F8F8] ">
<div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
<div>
  <Image src={faq} alt="customers review" width={764} height={582}/>
</div>
<div className="flex flex-col space-y-6 max-w-[764] mx-auto">
  <h1 className="py-4 font-bold text-[25px] text-[#4E4848]">
    Here's what our People <br/>have to say:
  </h1>
  <div className="flex justify-between space-x-10">
<h1 className="text-[15px] font-montserrat font-normal"><span className="font-bold">Get real-time business updates </span>about your favorite businesses. </h1>
<h1 className="text-[15px] font-montserrat font-thin"><span className="font-normal">Get real-time business updates </span>about your favorite businesses. </h1>
  </div>
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

  <div className="flex flex-col space-y-6 max-w-[764] mx-auto">
  <h1 className="py-4 font-bold text-[25px] text-[#4E4848]">
    Here's what our People <br/>have to say:
  </h1>
  <div className="flex justify-between space-x-10">
<h1 className="text-[15px] font-montserrat font-normal"><span className="font-bold">Get real-time business updates </span>about your favorite businesses. </h1>
<h1 className="text-[15px] font-montserrat font-thin"><span className="font-normal">Get real-time business updates </span>about your favorite businesses. </h1>
  </div>
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
</div> )
}
