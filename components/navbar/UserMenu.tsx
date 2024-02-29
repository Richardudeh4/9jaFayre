"use client";
 import React, { useCallback, useState } from 'react'
 import MenuItem from './MenuItem';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { User } from 'lucide-react';


interface UserMenuProps {
  currentUser?: SafeUser | null
}
 const UserMenu : React.FC<UserMenuProps> = ({
  currentUser  })=> { 

console.log({currentUser});
  const router = useRouter();
 
  const [isOpen,setIsOpen] = useState (false);

  // const onRent = useCallback(() => {
  //   if(!currentUser) {
  //     return loginModal.onOpen();
  //   }
  //   // Open rent modal
  //   rentModal.onOpen()
  // },[currentUser, loginModal, rentModal]);
   return (
     <div className='flex'>
            <div className='flex space-x-6  cursor-pointer'>
              {currentUser ? (
                <>
                   <MenuItem onClick={()=> signOut()} label='Logout'/>
                   <Link href="profile" className='px-2 flex  justify-center border items-center border-black cursor-pointer rounded-full bg-white'>
                    <User  currentUser={currentUser} size={20} />
                   </Link>
                </>
              ) :(
                <>
                <Link href='signIn' className='text-white'> Sign In</Link>
                <Link href='signUp' className='text-white'> Sign up</Link>
                </>
         
              )
              
          }
             
      </div>
     </div>
   )
 }
 
 export default UserMenu