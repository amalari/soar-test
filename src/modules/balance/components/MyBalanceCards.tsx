import { Button } from "../../common/button/components/Button"
import { BalanceCard } from "./BalanceCard"

export const MyBalanceCards = () => {
  const data = {
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778123412341234"
  }

  return (
    <div className="soar-my-balance-cards">
      <div className="flex justify-between">
        <h3 className="text-xl font-medium">My Cards</h3>
        <Button variant="text" className="px-0">See All</Button>
      </div>
      <div className="flex gap-7">
        <BalanceCard 
          className="w-[350px]"
          {...data}
          dark
        />
        <BalanceCard 
          className="w-[350px]"
          {...data}
        />
      </div>
    </div>
  )
}