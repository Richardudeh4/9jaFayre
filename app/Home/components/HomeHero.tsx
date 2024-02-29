import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import CarouselWrapper from "./CarouselWrapper";
import { boutique, find, marketplace } from "@/public/images";


const HomeHero = () => {
  return (
    <div className="">
    <div className="grid grid-cols-1 md:grid-cols-10 gap-4 max-w-7xl mx-auto">
  
    <div className="col-span-5 rounded-lg  text-black p-3 font-montserrat pt-12 font-thin text-[45px]">
       Find the biggest<br/> <span className="text-[#4E4848] font-bold">
      African Nigerian<br/></span> business<span> in the UK</span>
       </div>
     <div className="col-span-5  ">
      <Image src={boutique}
       alt="home" width={518} height={100} className="w-full rounded-[20px] p-3"/>
     </div>
     <div className="col-span-4  bg-white  rounded-lg">
      <Image src={find} width={433} height={200} alt="search business"/>
      {/* <div className="p-4 flex justify-between items-center">
       
        <Search size={20} className="text-[#B0BC68]"/>
      </div> */}
     </div>
     <div  className="col-span-4 rounded-lg" >
      {/* <CarouselWrapper/> */}
      {/* <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000}/>
        {/* {
          slides.map((slide,i) => (
            <Image src={slide} alt="home" width={518} height={100} className="w-full rounded-[20px] p-3" key={i}/>
          ))  
        } */}
    
       
     <Image src={marketplace}
       alt="home" width={419} height={200} className="w-full rounded-[20px] p-3"/> 
      </div>
     <div  className="col-span-2 p-3 bg-[#9747FF] rounded-lg"></div>
     </div>
    </div>
  )
}

export default HomeHero;