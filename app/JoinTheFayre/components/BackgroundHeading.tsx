import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const BackgroundHeading = () => {
  return (
    <div className='relative'>
        <div className='bg-[url(https://plus.unsplash.com/premium_photo-1665426466624-2c615f3b133d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWF0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)] py-12 bg-cover bg-no-repeat bg-center '>
          <div className='absolute inset-0 bg-black opacity-50'/>
            <div className='mx-w-7xl mx-auto flex flex-col justify-center space-y-8'>
           <div className='max-w-[698px] mx-auto pt-32'>
            <h1 className='p-4 font-thin text-white text-[45px] text-center font-montserrat'>Join the 9ja Fayre and network<br/> with the  <span className='text-[#E9FB7D]'>best African<br/> businesses in the UK!</span></h1>
            </div>
            <div className='flex justify-center '>
            <div className='bg-white text-black justify-center flex items-center rounded-[10px] font-semibold cursor-pointer hover:bg-[#F8F8FF] w-[224px] h-[50px]'>
            Join us For Free
            </div>
            </div>
           
          
  
         
            
            </div>
        </div>
    </div>
  )
}

export default BackgroundHeading