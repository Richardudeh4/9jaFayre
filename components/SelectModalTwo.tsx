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

export function SelectModalTwo() {
  return (
    <Select>
      <SelectTrigger className="w-[202px] h-[53px]">
        <SelectValue placeholder="Select a Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Manchester</SelectLabel>
          <SelectItem value="apple">Leicester</SelectItem>
          <SelectItem value="banana">Leeds</SelectItem>
          <SelectItem value="blueberry">Hull</SelectItem>
          <SelectItem value="grapes">Liverpool</SelectItem>
          <SelectItem value="pineapple">Nottingham</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
