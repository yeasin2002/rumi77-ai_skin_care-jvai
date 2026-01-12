'use client'

import { Button } from '@/components/ui'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FileText, Plus } from 'lucide-react'

const DashboardSettings = () => {
  return (
    <div className="space-y-12">
      {/* Privacy Policy Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="size-5 text-white" />
          <h2 className="text-xl font-medium text-white">Privacy Policy</h2>
        </div>
        <p className="text-sm text-white/70">
          Define your website privacy policy that users will see during sign up
        </p>

        {/* Toolbar */}
        <div className="flex justify-end gap-1">
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white"
          >
            12
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs font-bold text-white"
          >
            B
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white italic"
          >
            I
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white underline"
          >
            U
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white"
          >
            ≡
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white"
          >
            ≡
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white"
          >
            ≡
          </button>
        </div>

        <Textarea
          placeholder="Write down your privacy text here..."
          className="min-h-[150px] resize-none border-white/30 bg-white/10 text-white placeholder:text-white/50"
        />

        <div className="flex justify-end">
          <Button className="text-main-button bg-[#f5f4f3] px-12 hover:bg-[#e8e6e3]">SAVE</Button>
        </div>

        {/* Add new box */}
        <div className="flex items-center gap-2">
          <Input
            placeholder="Add new box"
            className="bg-main-button flex-1 border-white/30 text-white placeholder:text-white/50"
          />
          <Button size="icon" className="text-main-button bg-[#f5f4f3] hover:bg-[#e8e6e3]">
            <Plus className="size-5" />
          </Button>
        </div>
      </div>

      {/* Terms & Conditions Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="size-5 text-white" />
          <h2 className="text-xl font-medium text-white">Terms & Conditions</h2>
        </div>
        <p className="text-sm text-white/70">
          Define your website terms & conditions that users will see during sign up
        </p>

        {/* Toolbar */}
        <div className="flex justify-end gap-1">
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white"
          >
            12
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs font-bold text-white"
          >
            B
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white italic"
          >
            I
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white underline"
          >
            U
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white"
          >
            ≡
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white"
          >
            ≡
          </button>
          <button
            type="button"
            className="rounded border border-white/30 px-2 py-1 text-xs text-white"
          >
            ≡
          </button>
        </div>

        <Textarea
          placeholder="Write down your privacy text here..."
          className="min-h-[150px] resize-none border-white/30 bg-white/10 text-white placeholder:text-white/50"
        />

        <div className="flex justify-end">
          <Button className="text-main-button bg-[#f5f4f3] px-12 hover:bg-[#e8e6e3]">SAVE</Button>
        </div>

        {/* Add new box */}
        <div className="flex items-center gap-2">
          <Input
            placeholder="Add new box"
            className="bg-main-button flex-1 border-white/30 text-white placeholder:text-white/50"
          />
          <Button size="icon" className="text-main-button bg-[#f5f4f3] hover:bg-[#e8e6e3]">
            <Plus className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DashboardSettings
