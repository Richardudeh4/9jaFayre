import { women } from '@/public/images'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
const GetStarted = () => {
  return (
<div className='bg-white'>
 <div className='max-w-7xl mx-auto py-16'> 
<div className='flex justify-between'>
<div>
    <Image alt="get-started images" src={women} width={730} height={732} className=''/>
</div>

<div className='flex flex-col max-w-[447px] mx-auto space-y-10 pt-72'>
<h1 className='font-bold text-[35px] text-[#242424]'>Ready to get started?</h1>
<p>We're here to lift each other up, connect, collaborate and create a space where every African-Nigerian Business owner and Professional is welcome.</p>
<Button variant="default">
    See Our Events
</Button>
</div>
</div>
  </div>    
</div>
  )
}

export default GetStarted