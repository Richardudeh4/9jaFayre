import { Input } from "./ui/input"


const SecondMain = () => {
  return (
    <div className=" max-w-7xl mx-auto">
        <div className="">
    <div className="grid auto-rows-[192px] grid-cols-4 gap-4">
      {
        [...Array(5)].map((_, i) => (
                <div key={i} className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 0 || i === 1 ? "col-span-2" : "" } 
                ${i === 4 ? "col-span-1" : ""} ${i === 2 || i === 3 ? "col-span-1" : ""} ${ i === 0 ? "border-none bg-transparent" : ""}`}>
                   
                </div>
        ))
      }
    </div>
        </div>
        </div>
  )
}

export default SecondMain

{/* <div className="px-3">
<h1 className="font-semibold text-xl">
    Find the biggest <span className="font-bold text-3xl text-[#4E4848]">African Nigerian</span> business <span className="font-bold text-xl text-[#4E4848]">in the UK</span>
</h1>
</div>
<div>
</div>
<div className="flex items-center">
<Input  type="text" placeholder="Search a business.."/>
</div> */}