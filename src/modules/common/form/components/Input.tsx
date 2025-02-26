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
          {...props}
        />
      )
    }
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          icon && "pl-11",
          className
        )}
        ref={ref as Ref<HTMLInputElement>}
        {...props}
      >
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>}
      </input>
    )
  }
)