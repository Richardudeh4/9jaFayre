import { boutique, color, gray, marketplace } from '@/public/images'
import Image from 'next/image'
import React from 'react'

const Market = () => {
  return (
    <div className='bg-white'>
    <div className='max-w-7xl mx-auto py-8 mt-24 md:mt-96'>
        <div className='flex flex-1 flex-col  space-y-12 mx-8 md:flex-row md:space-x-12 justify-between'>
            <div className='grid grid-cols-2 gap-x-3 gap-y-6 '>
                <Image src={color} className="rotate-6 rounded-[20px]" alt="image" width={200} height={177.33}/>
                <Image src={boutique} className="rotate-6 rounded-[20px]" alt="image" width={300} height={177.33} />
                <Image src={marketplace} className="rotate-6 rounded-[20px]" alt="image" width={300} height={177.33}/>
                <Image src={gray} className="rotate-6 rounded-[20px]" alt="image" width={200} height={177.33}/>
            </div>
            <div className='flex items-center flex-col space-y-6 max-w-[405px] max-h-[253px] z-50 mx-auto'>
                <h1 className='text-[25px] text-[#4E4848]'>
                Get ready to <span className='text-[#B2BF60] font-semibold'>indulge in the flavors, sights, and sounds of Africa </span>right here in the UK!
                </h1>
                <h1 className='mt-10 text-[15px] text-[#4E4848] font-montserrat'>
                Prepare to be dazzled by a feast for the senses! From mouthwatering dishes like jollof rice and suya to electrifying performances of Afrobeat music and traditional dances, our events promise an experience like no other
                </h1>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Market