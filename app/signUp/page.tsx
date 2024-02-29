"use client";
import React from 'react'
import axios from 'axios';

import {FcGoogle} from 'react-icons/fc';
import { useCallback, useState } from 'react';
import Heading from '../../components/Heading';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from '../../components/modals/Modal';
import Input from '../../components/input/Input';
import toast from 'react-hot-toast';
import Button from '../../components/Button';

import { signIn } from 'next-auth/react';
import useLoginModal from '@/app/hooks/useLoginModal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

const {
    register, handleSubmit, formState : { errors, }
} = useForm<FieldValues> ({
    defaultValues: {
        name:'',
        email: '',
        passWord:''
    }
});
const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/register', data)
    .then(() => {
        toast.success('successfully created');
        router.push('signIn')
        loginModal.onOpen();
        registerModal.onClose();
    })
    .catch((error) => {
       toast.error('Something went wrong!')
    })
    .finally(()=> {
        setIsLoading(false);
    })
}

const bodyContent = (
    <div className='flex flex-col gap-4'>
          <Heading 
          title="welcome to 9ja fayre"
          subtitle='Create an Account!'
          center/>
          <Input id="email" label='Email' disabled={isLoading} register={register} errors={errors} required/>
          <Input id="name" label='Name' disabled={isLoading} register={register} errors={errors} required/>
          <Input id="password" type="password" label='Password' disabled={isLoading} register={register} errors={errors} required/>
    </div>
)
const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
        <hr/>
        <Button outline label='Continue with Google' icon={FcGoogle} onClick={()=>signIn('google')}/>
        <div className='text-neutral-500 text-center mt-4 font-light'>
        <div className='flex justify-center flex-row items-center gap-2'>
            <div>
                Already have an account?
            </div>
            <Link href='signIn' className='text-neutral-800 cursor-pointer hover:underline'>
                Log in
            </Link>
        </div>
        </div>
    </div>
)
  return (
    <div className=' bg-white '>
<div className='grid grid-cols-1 md:grid-cols-2 gap-0 my-3'>
<div className=' hidden md:flex bg-[#4E4848]'>
<div className='max-w-[400px] mx-auto'>
<h1 className='pt-72 text-[35px] font-montserrat font-bold text-white'>
Find the biggest<br/> African Nigerian<br/> businesses in the UK
</h1>
</div>

</div>

<div>
<Modal 
disabled={isLoading}
title="Create an account with us"
actionLabel='Sign up' 
onSubmit={handleSubmit(onSubmit)}
body={bodyContent}
footer={footerContent}
/>
</div>

 </div>
</div>
  )
}

export default SignUp;