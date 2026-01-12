import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export const ProductPagination = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <Pagination className="w-[95%]">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="border-white/30 text-white" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="bg-main-button text-white">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                6
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="text-white/60" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                24
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="border-white/30 text-white" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <span className="text-sm text-white/60">550 items</span>
      </div>
    </>
  )
}
