import React from 'react';
import { sound,star, world} from '@/public/images';
import Image from 'next/image';
const services = [ 
    {title: "Ratings & reviews", text: "Boost your reputation at our fair! Connect with buyers, forge connections, and earn stellar reviews.", icon: star},
    {title: "Sales and marketing", text: "Unleash sales and marketing opportunities! Connect with buyers and potential partners for exponential business growth.", icon: sound},
    {title: "Gain Brand Visibility", text: "Boost your reputation at our fair! Connect with buyers, forge connections, and earn stellar reviews.", icon: world}
 ]

const FayreMain = () => {
  return (
    <div className='bg-white rounded-t-lg py-10 '>
        <div className='max-w-6xl mx-auto flex justify-center flex-col space-y-8'>
                <div className='py-20 '>
                    <h1 className='p-4 text-[35px] text-center font-thin font-montserrat'>Gain massive exposure,<span className='font-semibold'>tap into a ready-made <br/>customer base, and watch your profits <br/>skyrocket beyond imagination.</span> </h1>
                </div>
        <video width="1031" height="126" autoPlay loop muted controls className='rounded-lg shadow-md'>
            <source
            src='https://v1.cdnpk.net/videvo_files/video/premium/2020-03/large_preview/200314%20_Work%20Life_02_%204k_038.mp4'
            type='video/mp4'
            />
            Your browser does not suppport the video tag
       </video>
       {/* infinite scroll */}
       {/* <div className='mt-10'>
       </div> */}
       <div className='py-28'>
<h1 className='text-center text-[35px] font-montserrat text-[#4E4848]'>Enjoy These Membership Benefits!</h1>
<p className='pt-5 text-[15px] text-center font-montserrat text-[#4E4848] font-thin'> <span className='font-semibold'> Get real-time business updates </span>about your favorite businesses. </p>
       </div>
       <div className='my-20 '>
        <div className='justify-center gap-10 grid grid-cols-1 md:grid-cols-3 '>
        {
        services.map((service, index) => ( 
            <div key={index} className='border shadow-lg relative p-4 rounded-lg'>
                <div className='flex justify-center text-center left-16 md:left-32 -top-8 z-20 mx-auto absolute'>
                <Image src={service.icon} width={58} height={59} alt="service icons" className='flex justify-center text-center' />
                </div>
                <h1 className='pt-2 text-[25px] text-center font-thin text-[#4E4848]'>{service.title}</h1>
                <p className='pt-3 text-[15px] text-center text-[#4E4848]'>{service.text}</p>
            </div>
         )
        )
        }
        </div>

       </div>
        </div>
        </div>
  )
}

export default FayreMain