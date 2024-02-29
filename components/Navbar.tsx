"use client";
import { useState} from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Search } from 'lucide-react'
import UserMenu from './navbar/UserMenu';
import { User } from '@prisma/client';
import  SheetMenu  from './SheetMenu';
import { useRouter } from 'next/navigation';

const NavbarList = [
    {name: "Home",href: "Home"},
    {name: "Explore", href: "Explore"},
    {name: "Support us", href: "SupportUs"},
    {name: "Join the fayre", href: "JoinTheFayre"},
    {name: "Blogs", href: "Blogs"},
  
]


interface NavbarProps {
   currentUser?: User | null;
}
const Navbar:React.FC<NavbarProps> = ({ currentUser }) => {
  const [openMenu, setOpenMenu] = useState<boolean >(false);

  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
}
console.log({currentUser})
  return (
    <div className=' py-10 sticky top-0 z-20 invert-0'>
      <div className='max-w-7xl mx-auto '>
      <div className='flex justify-between items-center'>
        <Link href='/'>
        <Logo />
        </Link>
        <div className='hidden md:flex space-x-12 items-center text-white'>
         {
         NavbarList.map((item, i) => {
            return (
   
              <Link href={item.href} className='text-white'>
                 {item.name}
              </Link>
             )
          }
          )
         }
          <Search size={20} className='hover:cursor-pointer' />
        </div>
        <div className='hidden md:flex'>
        <UserMenu currentUser={currentUser}/>
        </div>
        <div className='flex md:hidden'>
        <SheetMenu/>
        </div>
        </div> 
        </div>
    </div>
  )
}

export default Navbar