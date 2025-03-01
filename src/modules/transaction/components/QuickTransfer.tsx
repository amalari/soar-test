import { ComponentProps, FC, useState } from "react"

import { TargetTransferUser } from "./TargetTransferUser"
import { cn } from "../../common/utils/cn"
import { Input } from "../../common/form/components/Input"
import { Button } from "../../common/button/components/Button"
import { IconSend } from "../../common/icons"
import { useMyBalance } from "../../balance/hooks/useMyBalance"
import { useTransfer } from "../hooks/useTransfer"

type QuickTransferProps = ComponentProps<"div">

export const QuickTransfer: FC<QuickTransferProps> = ({
  className = ""
}) => {
  const [selectedUserId, setSelectedUserId] = useState<number>()
  const [formData, setFormData] = useState<{ amount: number }>({ amount: 0 })
  const { data: myBalance } = useMyBalance()
  const { mutateAsync: transfer } = useTransfer()

  const handleTransfer = async (amount: number) => {
    if(!selectedUserId) return
    await transfer({ amount, targetUserId: selectedUserId })
    setFormData({ amount: 0 })
  }

  return (
    <div className={cn(
      "soar-quick-transfer",
      className
    )}>
      <h3 className="text-xl font-medium mb-3">Quick Transfer</h3>
      <div className="bg-white p-6 rounded-2xl">
        <TargetTransferUser className="mb-4" value={selectedUserId} onChangeValue={setSelectedUserId} />
        <div className="flex items-center gap-4">
          <label htmlFor="amount" className="block text-primary-light text-sm font-light w-26">Write Amount</label>
          <div className="flex">
            <Input value={String(formData.amount)} onChangeValue={(val) => setFormData(prev => ({ ...prev, amount: Number(val)}))} name="amount" type="number" className="bg-background rounded-full" max={myBalance?.balance} />
            <Button disabled={!selectedUserId} onClick={() => handleTransfer(formData.amount)} variant="primary" className="rounded-full -ml-7 z-10">
              <span className="text-sm font-normal">Send</span>
              <IconSend className="!w-5 !h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}