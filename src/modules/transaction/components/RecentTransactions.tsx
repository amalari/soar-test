import { FC } from "react"
import { cn } from "../../common/utils/cn"
import { RecentTransactionItem } from "./RecentTransactionItem"
import { useRecentTransactions } from "../hooks/useRecentTransactions"

type RecentTransactionsProps = React.ComponentProps<"div">

export const RecentTransactions: FC<RecentTransactionsProps> = ({
  className = ''
}) => {
  const { data: recentTransactions } = useRecentTransactions()

  return (
    <div className={cn("soar-recent-transaction flex flex-col", className)}>
      <h3 className="text-xl font-medium mb-3">Recent Transaction</h3>
      <div className="bg-white p-6 flex flex-col rounded-2xl gap-3">
        {recentTransactions?.map(({ amount, transferName, transactionDate, type }, i) => (
          <RecentTransactionItem
            key={i}
            amount={amount}
            transactionDate={transactionDate}
            transferName={transferName}
            type={type}
          />
        ))}
      </div>
    </div>
  )
}