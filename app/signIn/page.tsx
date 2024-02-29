"use client";
import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import { useCallback, useState } from 'react';
import Heading from '../../components/Heading';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Modal from '../../components/modals/Modal';
import Input from '../../components/input/Input';
import {toast} from 'react-hot-toast';
import Button from '../../components/Button';
import { signIn } from 'next-auth/react'; 
import { useRouter } from 'next/navigation';

const SignIn = async () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
const {
    register, handleSubmit, formState : { errors, }
} = useForm<FieldValues> ({
    defaultValues: {
        email: '',
        passWord:'', 
    }
});
const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn(
    'credentials', {
        ...data,
        redirect: false,
    })
    .then((callback) => {
        setIsLoading(false);

        if(callback?.ok){
            toast.success("Logged in");
            router.refresh();
        }
        if(callback?.error){
            toast.error("Something went wrong");
        }
    })
}

const redirect = useCallback(()=> {
    router.push('/signUp');
},[router]);
const bodyContent = (
    <div className='flex flex-col gap-4'>
          <Heading 
          title= 'Welcome back'
          subtitle='Login to your Account!'
          center/>
          <Input id="email" label='Email' disabled={isLoading} register={register} errors={errors} required/>
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
                First time using 9jaFayre?
            </div>
            <div onClick={redirect} className='text-neutral-800 cursor-pointer hover:underline'>
                Create an Account
            </div>
        </div>
        </div>
    </div>
)

  return (
<div className='bg-white'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-0 '>
<div className='hidden md:flex bg-[#4E4848] ' >
<div className='max-w-[400px] mx-auto'>
<h1 className=' md:pt-72 text-[35px] font-montserrat font-bold text-white'>
Find the biggest<br/> African Nigerian<br/> businesses in the UK
</h1>
</div>

</div>
 <div>
 <Modal 
disabled={isLoading}
title="Login"
actionLabel='Sign In' 
onSubmit={handleSubmit(onSubmit)}
body={bodyContent}
footer={footerContent}

 />
 
</div> 
</div>
</div>
  )
}

export default SignIn;