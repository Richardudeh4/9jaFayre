import { faq } from '@/public/images'
import Image from 'next/image'
import React from 'react'
import { AccordionDemo } from './Accordion'

const Faq = () => {
  return (
    <div className='bg-[#242424]'>
<div className='grid grid-cols-1 md:grid-cols-2 border'>
<div className='top-0'>
    <Image src={faq} width={643} height={877} alt='faq image' className='rounded-r-[10px] z-20'/>
</div>
<div className='p-10'>
    <h1 className='text-[35px] text-[#E9FB7D] font-bold font-montserrat pt-20'>Frequently asked Questions</h1>
    <div className='mt-8'>
        <AccordionDemo/>
    </div>
</div>
</div>
    </div>
  )
}

export default Faq