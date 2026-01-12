import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const transactions = [
  { id: 1, name: 'Jagarnath S.', date: '24.05.2023', amount: '$124.97', status: 'Paid' },
  { id: 2, name: 'Anand G.', date: '23.05.2023', amount: '$55.42', status: 'Paid' },
  { id: 3, name: 'Kartik S.', date: '23.05.2023', amount: '$89.90', status: 'Paid' },
  { id: 4, name: 'Rakesh S.', date: '22.05.2023', amount: '$144.94', status: 'Paid' },
  { id: 5, name: 'Rakesh S.', date: '22.05.2023', amount: '$144.94', status: 'Paid' },
  { id: 6, name: 'Rakesh S.', date: '22.05.2023', amount: '$144.94', status: 'Paid' },
  { id: 7, name: 'Rakesh S.', date: '22.05.2023', amount: '$144.94', status: 'Paid' },
  { id: 8, name: 'Rakesh S.', date: '22.05.2023', amount: '$144.94', status: 'Paid' },
  { id: 9, name: 'Rakesh S.', date: '22.05.2023', amount: '$144.94', status: 'Paid' },
]

export const RecentTransactions = () => {
  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full">
          <thead>
            <tr className="text-muted-foreground border-b border-gray-200 text-left text-sm">
              <th className="pb-3 font-normal">Name</th>
              <th className="pb-3 font-normal">Date</th>
              <th className="pb-3 font-normal">Amount</th>
              <th className="pb-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100">
                <td className="py-4 font-medium">{transaction.name}</td>
                <td className="py-4">{transaction.date}</td>
                <td className="py-4">{transaction.amount}</td>
                <td className="py-4">
                  <span className="rounded bg-emerald-100 px-3 py-1 text-sm text-emerald-600">
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
