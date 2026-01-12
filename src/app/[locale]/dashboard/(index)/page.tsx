import { AdminCustomersCharts } from './admin-customers-charts'
import { AdminStates } from './admin-states'
import { MostlyOrderedArea } from './mostly-ordered-area'
import { OrdersList } from './orders-list'
import { RecentTransactions } from './recent-transactions'
import { SaleCards } from './sale-cards'
import { TopProductsList } from './top-products-list'
import { YourPerformance } from './your-performance'

const DashboardIndexPage = () => {
  return (
    <div>
      <AdminStates />

      <div className={`mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3`}>
        <SaleCards />
        <AdminCustomersCharts />
        <YourPerformance />
      </div>

      <div className={`mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2`}>
        <TopProductsList />
        <MostlyOrderedArea />
      </div>

      <div className={`mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2`}>
        <RecentTransactions />
        <OrdersList />
      </div>
    </div>
  )
}

export default DashboardIndexPage
