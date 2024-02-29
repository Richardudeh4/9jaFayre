import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SubCategories() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Subcategory" />
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
    </Select>
  )
}
