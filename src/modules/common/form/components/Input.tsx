import React, { Ref } from "react"
import DatePicker, { DatePickerProps } from "react-datepicker";
import { cn } from "../../utils/cn"

import "react-datepicker/dist/react-datepicker.min.css"

type InputProps = React.ComponentProps<"input"> & DatePickerProps & {
  icon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement | DatePicker, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    if(type === "date") {
      return (
        <DatePicker
          ref={ref as Ref<DatePicker>}
          className="min-h-[50px]"
          {...props}
        />
      )
    }
    return (
      <div className="soar-input relative">
        <input
          type={type}
          className={cn(
            "rounded-full min-h-12 w-full border border-input bg-transparent px-5 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            icon && "pl-13",
            className
          )}
          ref={ref as Ref<HTMLInputElement>}
          {...props}
        />
        {icon && <div className="absolute min-h-12 flex items-center left-5 top-0">{icon}</div>}
      </div>
    )
  }
)