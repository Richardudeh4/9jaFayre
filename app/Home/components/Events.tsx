import React from 'react'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { event } from '@/public/images';
const Events = () => {
  
    return (
        <div className='bg-[#e9fb7d] '>

        <div className='main-container flex w-[1412px] h-[852px] pt-[92px] pr-[196px] pb-[92px] pl-[186px] gap-[77px] items-center flex-nowrap  relative overflow-hidden mx-auto my-0'>
            <Image src={event} alt="fayre events" width={537} height={381} className='rounded-[20px]'/>
          <div className='flex w-[483px] h-[151px] flex-col gap-[61px] justify-center items-start shrink-0 flex-nowrap relative z-[1]'>
            <span className="flex w-[483px] h-[134px] justify-start items-center shrink-0 font-['Montserrat'] text-[30px] font-bold leading-[36.57px] text-[#242423] relative text-left z-[2]">
              
            </span>
            <div className='w-[462px] h-[29px] shrink-0 relative z-[3]'>
              <span className="flex w-[447px] h-[169px] justify-start items-center font-['Montserrat'] text-[35px] font-bold leading-[42.665px] text-[#242423] absolute top-[-210px] left-0 text-left z-[4]">
                Join our 9ja Fayre events in the UK!
              </span>
            </div>
            <div className='w-[462px] h-[85px] shrink-0 relative z-[5]'>
              <div className="w-[447px] h-[195px] font-['Montserrat'] text-[20px] font-normal leading-[24.38px] absolute top-[-181px] left-0 text-left z-[6]">
                <span className="font-['Montserrat'] text-[20px] font-bold leading-[24.38px] text-[#000] relative text-left">
                  Welcome to the celebration of Nigerian culture in the heart of the
                  UK,
                </span>
                <span className="font-['Montserrat'] text-[20px] font-normal leading-[24.38px] text-[#000] relative text-left">
                  where vibrant colors, rich flavors, and lively rhythms come
                  together to create an immersive celebration of Nigerian heritage.
                </span>
              </div>
              <button className='w-[224px] h-[50px] text-[0px] border-none absolute top-[3px] left-0 z-[7] pointer'>
               <Button asChild  variant="outline"> 
              <h1 className='text-black font-semibold'>See Our Events</h1>
                 </Button>
                <div className='w-full h-full rounded-[10px] absolute top-0 left-0 z-[8]' />
              </button>
            </div>
          </div>
        </div>
        </div>
      );
}

export default Events


