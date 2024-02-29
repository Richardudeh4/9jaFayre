"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/input/Input";
import {useForm, FieldValues, SubmitHandler} from 'react-hook-form';
import { profile } from "@/public/images"
import Image from "next/image"
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import CountrySelect from "@/components/input/CountrySelect";
import ProfileImageUpload from "@/components/input/ProfileImageupload";
const page = () => {
  const [ isLoading,setIsLoading ] = useState(false);
  const {handleSubmit,register, setValue, watch, formState: {errors,},reset } = useForm<FieldValues> ({
    defaultValues: {
        firstname: '',
        lastname: '',
        email:'',
        phonenumber:'',
        imageSrc: '',
      location: null,

    }});
  const location = watch('location');
  const imageSrc = watch('imageSrc');
    const setCustomValue = (id: string, value: any) => {
      setValue( id, value, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
      })
    }
const router = useRouter();
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);
      axios.post('./api/profile', data)
      .then(() => {
          toast.success('Profile Updated');
          router.refresh();
          reset();
      })
      .catch(()=> {
          toast.error('Something went Wrong.');
      }).finally(()=> {
          setIsLoading(false);
      })
  }
 
  return (
    <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto">
            <div className="flex space-x-12 items-center">
            <div className="w-[342px] h-[344px]">
      <ProfileImageUpload
      value= {imageSrc}
      onChange={(value) => setCustomValue('imageSrc', value)}
      />
              </div>
     
        {/* <Image src={profile} alt="profile" width={342} height={344} className="rounded-full"/> */}
        <div className="flex flex-col space-y-2">
        <h1 className="text-[50px] font-montserrat text-[#242424]">Richard udeh</h1>
        <h1 className="font-thin text-[18px] leading-[29px] text-[#] tracking-[6px]">Lancanshire, United kingdom</h1>
        </div>
        </div>
        <form onSubmit={handleSubmit((data)=> {
          console.log(data)
         })}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16">
            <Input id='firstname' label='First Name'  disabled={isLoading} register={register} errors={errors} required/>
            <Input id="lastname" label="Last name" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="email" label="Email address" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="phonenumber" label="phone number"  disabled={isLoading} register={register} errors={errors} required/>
            <CountrySelect  value={location} onChange={(value) => setCustomValue('location', value)}/>
             <Button label='Save Changes' onClick={handleSubmit(onSubmit)}/>
        </div>
        </form>
        </div>
        </div>
  )
}

export default page