import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-[#121213]'>
        <div className='max-w-7xl mx-auto flex items-center space justify-between py-24'>
    <div >
        <h1 className='text-[#E9FB7D] text-[20px] font-montserrat max-w-[353px] mx-auto'>
        Get real-time business updates about your favorite businesses.
        </h1>
    </div>

    <Input className='w-[503px]' type="email" placeholder='Enter your E-mail address'/>
<Button variant="dark">
    Subscribe 
    </Button>
        </div>
    </div>
  )
}

export default Subscribe