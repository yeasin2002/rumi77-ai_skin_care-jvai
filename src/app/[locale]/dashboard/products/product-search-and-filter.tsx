import { Filter, Search } from 'lucide-react'

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const ProductSearchAndFilter = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-72">
        <InputGroup className="border-white/30 bg-white/10">
          <InputGroupAddon>
            <Search className="size-4 text-white/60" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search here"
            className="bg-transparent text-white placeholder:text-white/60"
          />
        </InputGroup>
      </div>
      <Select defaultValue="all">
        <SelectTrigger className="w-40 border-white/30 bg-white/10 text-white">
          <Filter className="mr-2 size-4" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="in-stock">In Stock</SelectItem>
          <SelectItem value="out-of-stock">Out of Stock</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
