import { ComponentProps, FC } from "react"
import { cn } from "../../common/utils/cn"
import { RecentTransactionItem } from "./RecentTransactionItem"

type RecentTransactionsProps = React.ComponentProps<"div">

export const RecentTransactions: FC<RecentTransactionsProps> = ({
  className = ''
}) => {
  const data: Pick<ComponentProps<typeof RecentTransactionItem>, 'transferName' | 'transactionDate' | 'amount' | 'type'>[] = [{
    transferName: 'Deposit from my Card',
    transactionDate: new Date(),
    amount: -850,
    type: 'card-deposit',
  }, {
    transferName: 'Deposit Paypal',
    transactionDate: new Date(),
    amount: 2500,
    type: 'paypal',
  }, {
    transferName: 'Jemiu Wilson',
    transactionDate: new Date(),
    amount: 5400,
    type: 'transfer',
  }]

  return (
    <div className={cn("soar-recent-transaction flex flex-col", className)}>
      <h3 className="text-xl font-medium mb-3">Recent Transaction</h3>
      <div className="bg-white p-6 flex flex-col rounded-2xl gap-3">
        {data.map((item, i) => (
          <RecentTransactionItem
            key={i}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}