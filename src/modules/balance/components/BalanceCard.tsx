import { FC, useMemo } from "react"
import { IconBrandMastercard, IconBrandMastercardDark, IconChipCard } from "../../common/icons"
import { cn } from "../../common/utils/cn"

interface BalanceCardProps extends React.ComponentProps<"div"> {
  balance: number
  cardHolder: string
  validThru: string
  cardNumber: string
  dark?: boolean
}

export const BalanceCard: FC<BalanceCardProps> = ({ balance, cardHolder, validThru, cardNumber, dark = false, className = '' }) => {
  const darkGradientStyle = dark
    ? {
        background: 'linear-gradient(to right, #5B5A6F, #000)',
      }
    : {};
  const cardNumberMasked = useMemo(() => {
    return cardNumber.slice(0, 4) + ' **** **** ' + cardNumber.slice(-4)
  }, [cardNumber])
  const balanceFormatted = useMemo(() => {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(balance)
  }, [balance])

  return (
    <div
      className={cn(
        "min-w-64 rounded-2xl transition-colors duration-300 ease-in-out text-sm md:text-base flex flex-col justify-between",
        dark ? "text-white" : "bg-white text-primary",
        className
      )}
      style={darkGradientStyle}
    >
      <div className="p-6 pb-0">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className={cn(
              "text-xs md:text-sm font-light",
              dark ? "text-white" : "text-primary-light"
            )}>Balance</p>
            <p className="text-base md:text-xl">{balanceFormatted}</p>
          </div>
          <IconChipCard 
            className={cn("w-9 h-9", dark ? "text-white" : "text-[#474346]")}
          />
        </div>
        <div className="flex gap-14 mb-4">
          <div>
            <p className={cn(
              "text-xs md:text-sm font-light",
              dark ? "text-white" : "text-primary-light"
            )}>CARD HOLDER</p>
            <p className="text-sm md:text-base">{cardHolder}</p>
          </div>
          <div>
            <p className={cn(
              "text-xs md:text-sm font-light",
              dark ? "text-white" : "text-primary-light"
            )}>VALID THRU</p>
            <p className="text-sm md:text-base">{validThru}</p>
          </div>
        </div>
      </div>
      {!dark && <hr />}
      <div className="flex justify-between px-6 py-4 bg-gradient-to-b from-[#ffffff26] to-[transparent]">
        <p className="text-xl">{cardNumberMasked}</p>
        {!dark && <IconBrandMastercardDark />}
        {dark && <IconBrandMastercard />}
      </div>
    </div>
  );
};