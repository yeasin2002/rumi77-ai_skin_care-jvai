import { useDeleteTempInfo } from '@/api/api-hooks/member.api-hook'
import { TempInfoResponse } from '@/api/query-list/member.query'
import { TableCell, TableRow } from '@/components/ui/table'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface Props extends React.ComponentProps<'div'> {
  member: TempInfoResponse
}

export const ShowMemberList = ({ member }: Props) => {
  const { mutate: deleteTempInfo, isPending } = useDeleteTempInfo()
  const [isOpen, setIsOpen] = useState(false)

  const handleDelete = () => {
    if (!member.id) return
    deleteTempInfo(member.id, {
      onSuccess: () => {
        setIsOpen(false)
      },
      onError: () => {
        setIsOpen(true)
      },
    })
  }

  return (
    <TableRow key={member.id} className="border-b border-gray-100">
      <TableCell>{member.id}</TableCell>
      <TableCell>
        <span className="text-main-button font-medium">{member.full_name}</span>
      </TableCell>
      <TableCell className="text-main-button">{member.full_name}</TableCell>
      <TableCell className="text-main-button">{member.email}</TableCell>
      <TableCell className="text-main-button capitalize">{member.contact_number}</TableCell>
      <TableCell className="text-main-button">{member.skin_type || 'N/A'}</TableCell>
      <TableCell className="text-main-button">{member.birthday || 'N/A'}</TableCell>
      <TableCell>
        <div className="flex items-center justify-end gap-2">
          <AlertDialog open={isOpen} onOpenChange={(open) => (!isPending ? setIsOpen(open) : null)}>
            <AlertDialogTrigger
              render={
                <button
                  type="button"
                  className="cursor-pointer p-1 text-red-500 transition-colors hover:text-red-600"
                  aria-label="Delete member"
                >
                  <Trash2 className="size-4" />
                </button>
              }
            >
              Show Dialog
            </AlertDialogTrigger>
            <AlertDialogContent className={'data-[size=default]:max-w-xl!'}>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account from our
                  servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} disabled={isPending}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </TableCell>
    </TableRow>
  )
}
