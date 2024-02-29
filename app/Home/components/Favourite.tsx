
import { shop } from "@/public/images"
import Image from "next/image"


const Favourite = () => {
  return (
    <div className="py-20 mx-0 bg-[#242424]">
      <div className="flex flex-1 flex-col  md:flex-row space-x-12 md:space-y-12 items-center max-w-7xl mx-2 md:mx-auto justify-between ">
            <div className=" py-2 px-2 rounded-[20px] mx-2 ">
               <Image src={shop} alt="shop images" width={537} height={475} className="rounded-[20px]"/>
            </div>
            <div className="flex flex-col pt-10 md:pt-0 space-y-8 max-w-[483px] p-3">
        <h1 className="font-montserrat text-[#E9FB7D] text-[35px]"><span className="font-semibold">Get real-time business <br/>updates </span><span className="font-thin"> about your favorite businesses. </span></h1>
        <p className="text-[20px] font-montserrat text-white">Get real-time business updates about your <br/>favorite businesses. </p>

        <div className="py-3 px-6 rounded w-[224px] text-center cursor-pointer text-black font-semibold bg-white border">
            Subscribe
        </div>
            </div>
        </div>  
    </div>
  )
}

export default Favourite
// https://images.unsplash.com/photo-1706558425696-b0f156d79637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D