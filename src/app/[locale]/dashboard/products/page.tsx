import { Button, buttonVariants } from '@/components/ui'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { AddProduct } from './add-product'
import { ProductDataTable } from './product-data-table'
import { ProductPagination } from './product-pagination'
import { ProductSearchAndFilter } from './product-search-and-filter'

const Products = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end gap-3">
        <Button variant="outline" className="border-white/30 bg-transparent text-white">
          EXPORT
        </Button>

        <Dialog>
          <DialogTrigger
            className={buttonVariants({
              variant: 'outline',
              className: 'text-main-button border-white/30 bg-white',
            })}
          >
            ADD PRODUCT
          </DialogTrigger>
          <DialogContent className="bg-main-button max-h-[90vh] max-w-4xl! overflow-y-auto">
            <AddProduct />
          </DialogContent>
        </Dialog>
      </div>

      <ProductSearchAndFilter />
      <ProductDataTable />
      <ProductPagination />
    </div>
  )
}

export default Products
