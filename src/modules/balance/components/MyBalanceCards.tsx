import { FC } from "react"
import { Button } from "../../common/button/components/Button"
import { BalanceCard } from "./BalanceCard"
import { cn } from "../../common/utils/cn"
import { useMyBalanceCards } from "../hooks/useMyBalanceCard"
import { useMyBalance } from "../hooks/useMyBalance"

type MyBalanceCardsProps = React.ComponentProps<"div">

export const MyBalanceCards: FC<MyBalanceCardsProps> = ({
  className = ''
}) => {
  const { data: balanceCards } = useMyBalanceCards()
  const { data: balance } = useMyBalance()
  console.log({ balanceCards, balance })
  if(!balanceCards || !balance) return null
  return (
    <div className={cn("soar-my-balance-cards", className)}>
      <div className="flex justify-between mb-3 mr-6 md:mr-0">
        <h3 className="text-xl font-medium">My Cards</h3>
        <Button variant="text" className="p-0">See All</Button>
      </div>
      <div className="flex gap-4 md:gap-7 overflow-x-auto scrollbar-hide">
        <BalanceCard 
          className="w-[270px] md:flex-1 flex-shrink-0"
          balance={balance.balance}
          cardHolder={balanceCards[0].cardHolder}
          validThru={balanceCards[0].validThru}
          cardNumber={balanceCards[0].cardNumber}
          dark
        />
        <BalanceCard 
          className="w-[270px] md:flex-1 flex-shrink-0"
          balance={balance.balance}
          cardHolder={balanceCards[0].cardHolder}
          validThru={balanceCards[0].validThru}
          cardNumber={balanceCards[0].cardNumber}
        />
      </div>
    </div>
  )
}