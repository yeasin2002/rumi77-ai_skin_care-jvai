import { Upload } from 'lucide-react'

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from '@/components/ui'

export const AddCategory = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          //  className="bg-main-button hover:bg-main-button/90 text-white"
          variant={'outline'}
        >
          ADD CATEGORY
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-normal">Add Category</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <label className="text-right text-sm">Category</label>
            <Input placeholder="Category name" className="h-12" />
          </div>
          <div className="grid grid-cols-[120px_1fr] items-start gap-4">
            <label className="pt-2 text-right text-sm">Images</label>
            <div className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400">
              <Upload className="text-main-button size-8" />
              <p className="text-muted-foreground mt-2 text-sm">
                Drop your images here or select{' '}
                <span className="text-main-button cursor-pointer">click to browse</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <label className="text-right text-sm">Quantity</label>
            <Input placeholder="Enter quantity" className="h-12" />
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <label className="text-right text-sm">Start Date</label>
            <Input placeholder="Enter start date" className="h-12" />
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <label className="text-right text-sm" />
            <Button className="bg-main-button hover:bg-main-button/90 w-32 text-white">Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
