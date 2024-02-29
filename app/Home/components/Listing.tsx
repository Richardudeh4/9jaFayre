import { Button } from '@/components/ui/button';
import { shop } from '@/public/images';
import Image from 'next/image';
import React from 'react'

const Listing = () => {
    return (
        <div className='main-container flex flex-col md:flex-row mx-3 w-[1412px] h-[771px] pt-[92px] pr-[196px] pb-[92px] pl-[186px] gap-[77px] items-center flex-nowrap bg-[#fff] relative overflow-hidden my-0'>
            {/* <div className='mt-8 border  '>
                <div className='flex flex-col space-y-10'>
                <h1>richard</h1>
                </div>
            </div> */}
             <div className='w-[462px] h-[73px] flex flex-col space-y-12 shrink-0 relative z-[2]'>
              <span className="flex w-[447px] h-[177px] justify-start items-center font-['Montserrat'] text-[35px] font-bold leading-[42.665px] text-[#242423] absolute top-[-119px] left-0 text-left z-[3]">
                Get visibility to grow your business by listing on the 9ja Fayre
              </span>
           
              <span className="flex w-[447px] h-[119px] justify-start items-center font-montserrat text-[20px] font-normal leading-[24.38px] text-[#242424]  relative text-left z-[5] mt-[-107.5px] mr-0 mb-0 ml-0">
                Start your journey to business discovery with the 9ja Fayre.
              </span>
              <button className='w-[224px] h-[50px] text-[0px] border-none relative z-[6] pointer mt-[24px] mr-0 mb-0 ml-0'>
                <Button asChild  variant="custom">
                    <h1 className='text-[#E9FB7D] font-semibold'> Sign up now </h1>
                </Button>
                <div className='w-full h-full rounded-[10px] absolute top-0 left-0 z-[7]' />
              </button>
            </div>
          <div className='w-[537px] h-[475px] shrink-0 rounded-[20px] relative z-[9]'>
            <Image src={shop} alt="shop listing" layout='fill'/>
          </div>
          <div className='flex w-[483px] h-[225px] flex-col gap-[61px] justify-center items-start shrink-0 flex-nowrap relative'>
            <span className="flex w-[483px] h-[134px] justify-start items-center shrink-0 font-['Montserrat'] text-[30px] font-bold leading-[36.57px] text-[#242423] relative text-left z-[1]">
              
            </span>
           
          </div>
        </div>
      );
}

export default Listing

  

