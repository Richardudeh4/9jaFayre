"use client";
import React from 'react'
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import UseEmblaCarousel  from 'embla-carousel-react';
import { Slides } from '@/typings';
// interface CarouselProps{
//     Images: string;
// }
Autoplay.globalOptions = {delay: 8000};
const Carousel = ( {slides}: {slides: Slides[]}) => {
    const [emblaRef] = UseEmblaCarousel({ loop: true, duration: 100}, [ Autoplay(),]);
  return (
        <div className="overflow-hidden lg:-mt-40 relative cursor-pointer" ref={emblaRef}>
       <div className="flex ">
        {slides.map((item,i) => (
            <div key={i} className="w-full relative">
              <Image key={i} src={item.Images} alt="" width={190} height={108}/>
              </div>
          ))}
        </div>
    </div>
  )
}

export default Carousel