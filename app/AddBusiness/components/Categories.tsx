import useCategories from '@/app/hooks/useCategories';
import React from 'react';
import {useForm, FieldValues, SubmitHandler} from 'react-hook-form';
import Select from 'react-select'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
export type CategoriesSelectValue = {
    value: string;
}
interface CategoriesProps {
  value: CategoriesSelectValue;
  onChange: (value: CategoriesSelectValue) => void;
}
const Categories:React.FC<CategoriesProps> = ({
value, onChange
})=> {
  const {getAllCategories} = useCategories();
  return (
    <div>
      <Select 
        placeholder="Choose category" 
        isClearable 
        options= {getAllCategories()} 
        value={value} 
        onChange={(value) => onChange(value as CategoriesSelectValue)}
        formatOptionLabel={(option: any) => (
            <div className='flex flex-row items-center gap-3'>
            <div>
                {option.value},
            </div>
            </div>
        )}
        classNames={{
            control: () => 'p-3 border-2',
            input: () => 'text-lg',
            option: () => 'text-lg'
        }}
        theme={(theme) => ({
            ...theme,
            borderRadius: 6,
            colors: {
                ...theme.colors,
                primary: 'black',
                primary25: '#E9FB7D'
            }
        })}
        />
    </div>
  )
}
export default Categories
{/* <Select>
      <SelectTrigger className="w-[180px] outline-none">
        <SelectValue placeholder="Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Business categories</SelectLabel>
          <SelectItem value="cathering">Cathering services</SelectItem>
          <SelectItem value="fashion">Fashion Design</SelectItem>
          <SelectItem value="soap">Soap making</SelectItem>
          <SelectItem value="painting">Painting</SelectItem>
          <SelectItem value="cleaning">Cleaning Services</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> */}