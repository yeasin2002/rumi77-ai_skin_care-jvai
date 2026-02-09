import { useDeleteTempInfo } from '@/api/api-hooks/member.api-hook'
import { TempInfoResponse } from '@/api/query-list/member.query'
import { Checkbox } from '@/components/ui/checkbox'
import { TableCell, TableRow } from '@/components/ui/table'
import { Trash2 } from 'lucide-react'
interface Props extends React.ComponentProps<'div'> {
  member: TempInfoResponse
}

export const ShowMemberList = ({ member }: Props) => {
  const { mutate: deleteTempInfo, isPending } = useDeleteTempInfo()

  const handleDelete = () => {
    if (!member.id) return
    deleteTempInfo(member.id)
  }

  return (
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
            onClick={handleDelete}
            disabled={isPending}
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </TableCell>
    </TableRow>
  )
}
