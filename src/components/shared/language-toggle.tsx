import { Globe } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function LanguageToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer rounded-full bg-[#2447311A]">
        <Globe className="size-10 p-1" />
        <span className="sr-only">Toggle language changages</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>Arabic</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
