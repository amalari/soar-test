import { ComponentProps, FC, useState } from "react"
import { TargetTransferUser } from "./TargetTransferUser"
import { cn } from "../../common/utils/cn"
import { Input } from "../../common/form/components/Input"
import { Button } from "../../common/button/components/Button"
import { IconSend } from "../../common/icons"

type QuickTransferProps = ComponentProps<"div">

export const QuickTransfer: FC<QuickTransferProps> = ({
  className = ""
}) => {
  const [selectedUserId, setSelectedUserId] = useState<number>()

  return (
    <div className={cn(
      "soar-quick-transfer",
      className
    )}>
      <h3 className="text-xl font-medium mb-3">Expense Statistics</h3>
      <div className="bg-white p-6 rounded-2xl">
        <TargetTransferUser className="mb-4" value={selectedUserId} onChangeValue={setSelectedUserId} />
        <div className="flex items-center gap-4">
          <label htmlFor="amount" className="block text-primary-light text-sm font-light w-26">Write Amount</label>
          <div className="flex">
            <Input name="amount" type="number" className="bg-background rounded-full" />
            <Button variant="primary" className="rounded-full -ml-7 z-10">
              <span className="text-sm font-normal">Send</span>
              <IconSend className="!w-5 !h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}