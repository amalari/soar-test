import { FC, useMemo } from "react"
import { cn } from "../../common/utils/cn"
import { IconCard, IconDollarCoin, IconPaypal } from "../../common/icons"
import dayjs from "dayjs"

type RecentTransactionItemProps = React.ComponentProps<"div"> & {
  type: 'card-deposit' | 'transfer' | 'paypal',
  transferName?: string,
  transactionDate: Date,
  amount: number
}

export const RecentTransactionItem: FC<RecentTransactionItemProps> = ({
  className = '',
  type,
  transferName,
  transactionDate,
  amount
}) => {
  const iconAndColorMapped = useMemo(() => {
    const result = {
      icon: IconDollarCoin,
      iconColor: 'text-teal-400',
      bgColor: 'bg-teal-100',
      label: transferName
    }
    if(type === 'card-deposit') {
      result.icon = IconCard
      result.iconColor = 'text-amber-400'
      result.bgColor = 'bg-amber-100'
      result.label = 'Deposit from my Card'
    }
    if(type === 'paypal') {
      result.icon = IconPaypal
      result.iconColor = 'text-blue-400'
      result.bgColor = 'bg-blue-100'
      result.label = 'Deposit paypal'
    }
    
    return result
  }, [transferName, type])

  return (
    <div className={cn("soar-recent-transaction-item flex items-center justify-between", className)}>
      <div className="flex gap-4">
        <div className={cn("p-3.5 rounded-full", iconAndColorMapped.bgColor)}>
          <iconAndColorMapped.icon className={cn(iconAndColorMapped.iconColor, "h-6 w-6")} />
        </div>
        <div>
          <p className="text-primary font-medium">{iconAndColorMapped.label}</p>
          <p className="text-primary-light">{dayjs(transactionDate).format('d MMM YYYY')}</p>
        </div>
      </div>
      <p
        className={cn(amount >= 0 ? "text-teal-400" : "text-red-400", "text-base")}
      >{amount > 0 && "+"}{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount)}</p>
    </div>
  )
}