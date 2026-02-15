import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { ChevronDownIcon } from 'lucide-react'
import * as React from 'react'

export interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  className?: string
}

export function DatePicker({ value, onChange, className }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant={'outline'}
            className={cn('w-full justify-between rounded-full text-left font-normal', className)}
          >
            {value ? format(value, 'PPP') : <span>Pick a date</span>}
            <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
        />
      </PopoverContent>
    </Popover>
  )
}
