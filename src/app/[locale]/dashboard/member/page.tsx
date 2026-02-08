'use client'

import { useTempInfoList } from '@/api/api-hooks/member.api-hook'
import { Checkbox } from '@/components/ui/checkbox'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Search, Trash2 } from 'lucide-react'
import { useState } from 'react'

const MemberPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Fetch temp info list
  const { data, isLoading, error } = useTempInfoList({ page: currentPage })

  // Filter data based on search query
  const filteredMembers = data?.results.filter((member) =>
    member.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-red-500">Error loading members. Please try again.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Search bar */}
      <div className="max-w-xs">
        <InputGroup className="border-white/30 bg-white/10">
          <InputGroupAddon>
            <Search className="size-4 text-white/60" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search by name"
            className="bg-transparent text-white placeholder:text-white/60"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl bg-white">
        <Table>
          <TableHeader className="bg-[#f5f4f3]">
            <TableRow className="border-b-0">
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead className="text-main-button font-medium">Full Name</TableHead>
              <TableHead className="text-main-button font-medium">Email</TableHead>
              <TableHead className="text-main-button font-medium">Contact</TableHead>
              <TableHead className="text-main-button font-medium">Skin Type</TableHead>
              <TableHead className="text-main-button font-medium">Birthday</TableHead>
              <TableHead className="text-main-button text-right font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center">
                  <div className="flex items-center justify-center">
                    <div className="border-t-main-button size-8 animate-spin rounded-full border-4 border-gray-200"></div>
                  </div>
                </TableCell>
              </TableRow>
            ) : filteredMembers && filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <TableRow key={member.id} className="border-b border-gray-100">
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <span className="text-main-button font-medium">{member.full_name}</span>
                  </TableCell>
                  <TableCell className="text-main-button">{member.email}</TableCell>
                  <TableCell className="text-main-button">{member.contact_number}</TableCell>
                  <TableCell className="text-main-button capitalize">{member.skin_type}</TableCell>
                  <TableCell className="text-main-button">{member.birthday || 'N/A'}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        className="p-1 text-red-500 transition-colors hover:text-red-600"
                        aria-label="Delete member"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center text-gray-500">
                  {searchQuery ? 'No members found matching your search.' : 'No members yet.'}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Info */}
      {data && data.count > 0 && (
        <div className="flex items-center justify-between text-sm text-white/80">
          <p>
            Showing {filteredMembers?.length || 0} of {data.count} members
          </p>
          {data.count > 10 && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={!data.previous}
                className="rounded bg-white/10 px-3 py-1 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-3 py-1">Page {currentPage}</span>
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={!data.next}
                className="rounded bg-white/10 px-3 py-1 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default MemberPage
