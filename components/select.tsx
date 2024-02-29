import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectModal() {
  return (
    <Select>
      <SelectTrigger className="w-[202px] h-[53px]">
        <SelectValue placeholder="Choose Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Stylist</SelectLabel>
          <SelectItem value="apple">richard</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
