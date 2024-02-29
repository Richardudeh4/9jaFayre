import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import "react-phone-number-input/style.css";

interface PhoneNumberProps {
    value: string;
    onChange: (value: string) => void;
  "phone-input": string;
}

const PhoneNumber: React.FC<PhoneNumberProps>= ({
    value, onChange
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<PhoneNumberProps>();

  const onSubmit: SubmitHandler<PhoneNumberProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full relative ">
    <form onSubmit={handleSubmit(onSubmit)} className=" peer p-4  font-light bg-white border-2  rounded-[20px] outline-none transition disabled:opacity-70 disabled:cursor-not-allowed">
      <div>
        <label htmlFor="phone-input">Phone Number</label>
        <Controller
          name="phone-input"
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value as string)
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              value={value}
              onChange={onChange}
              defaultCountry="GB"
              id="phone-input"
            />
          )}
          
        />
        {errors["phone-input"] && (
          <p className="error-message">Invalid Phone</p>
        )}
      </div>
    </form>
    </div>
  );
};

export default PhoneNumber;
