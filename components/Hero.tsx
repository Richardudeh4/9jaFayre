import { Search } from "lucide-react"
import { Input } from "./ui/input"
import  { SelectModal } from './select';
import { SelectModalTwo } from "./SelectModalTwo";
const Hero = () => {
  return (
    <div className="bg-[#0D0C0A] w-full mt-3">
        <div className="py-8 justify-center">
        <h1 className="font-thin text-6xl text-center text-white">Find the biggest African <br/>Nigerian businesses in the UK</h1>
        <div className="flex space-x-6 my-12 justify-center items-center">
            <SelectModal/>
            <SelectModalTwo/>
            <Input type="text" placeholder="finish" className="w-[202px] h-[53px]" />
            <div className="w-[82px] h-[53px] bg-[#E9FB7D] flex items-center justify-center rounded-[4px]">
                <Search size={25}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero