"use client";
import React, { useState } from 'react'
import Input from '@/components/input/Input';
// import { Input } from '@/components/ui/input';
import {useForm, FieldValues, SubmitHandler} from 'react-hook-form';
import Categories from './Categories';
import {SubCategories} from './SubCategories';
import CountrySelect from '@/components/input/CountrySelect';
// import { cn } from '@/lib/utils';
// import Image from 'next/image';
// import { useMemo } from 'react';
// import dynamic from 'next/dynamic';
import { ImageIcon } from 'lucide-react';
import ImageUpload from '@/components/input/ImageUpload';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import PhoneNumber from './PhoneNumber';
const BusinessForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, setValue, watch, formState: { errors,}, reset } = useForm<FieldValues>({
    defaultValues: {
        categories: '',
        location: null,
        imageSrc: '',
        title: '',
        description: '',
        phonenumber: '',
    }
});
const category = watch('category');
const location = watch('location');
const imageSrc = watch('imageSrc');
const phonenumber = watch('phonenumber');
// const Map = useMemo(() => dynamic(() => import('../Map'), {
//     ssr: false
// }),[location]);
const setCustomValue = (id: string, value: any) => {
  setValue( id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
  })
}
const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/listings', data)
        .then(() => {
            toast.success('Listing Created');
            router.refresh();
            router.push('Explore');
            reset();
        })
        .catch(()=> {
            toast.error('Something went Wrong.');
        }).finally(()=> {
            setIsLoading(false);
        })
    }
   
  return (
    <div className=' bg-[#F9F9F9] py-8 max-w-7xl mx-auto'>
       <div className="flex flex-col space-y-10  mx-8">
      <ImageUpload 
      value= {imageSrc}
      onChange={(value) => setCustomValue('imageSrc', value)}
      />
      <div className='flex justify-between'>
      <Input id='title' label='Business name' disabled={isLoading} register={register} errors={errors} required/>
      <Categories value={category} onChange={(value) => setCustomValue('category', value)}/>
      </div>
      {/* <SubCategories /> */}
      <CountrySelect  value={location} onChange={(value) => setCustomValue('location', value)}/>
      {/* <Input id='location' label='Location' disabled={isLoading} register={register} errors={errors} required/> */}
      <div className='flex justify-between'>
      <PhoneNumber value={phonenumber} phone-input={phonenumber} onChange={(value) => setCustomValue('phonenumber', value)}/>
      <Input id='email' label='Email address'  disabled={isLoading} register={register} errors={errors} required/>
      </div>
      <Input id="description" label='Description' disabled={isLoading} register={register} errors={errors} required />
      <div className='grid grid-cols-1 md:grid-cols-3'>
      {Array.from({ length: 3}).map((_, index) => (
          <div className='bg-[#EDEDED] rounded-[15px] w-[316px] h-[305px]' key={index}>
            <div className='flex flex-col space-y-8 justify-center items-center'>
              <div className='flex items-center justify-center'>
              <ImageIcon size={124}/>
              </div>
              <h1 className='text-[#7A7A7A] text-[18px] font-montserrat leading-[29px]'>Add More business</h1>
            </div>
          </div>
        ))}
        </div>
        <div className='flex justify-center'>
        <Button label='Add Business' onClick={handleSubmit(onSubmit)}/> 
        </div>
       </div>
        </div>
  )
}

export default BusinessForm