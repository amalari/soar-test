import React, { Ref, useCallback } from "react"
import DatePicker, { DatePickerProps } from "react-datepicker";
import { cn } from "../../utils/cn"

import "react-datepicker/dist/react-datepicker.min.css"
import "./inputStyle.css"

type InputProps = Omit<DatePickerProps, 'onChange'> & React.ComponentProps<"input"> & {
  icon?: React.ReactNode
  onDateChange?: DatePickerProps["onChange"]
  onChangeValue?: (value: string) => void
}

export const Input = React.forwardRef<HTMLInputElement | DatePicker, InputProps>(
  ({ className, type, icon, onChange, onChangeValue, onDateChange, ...props }, ref) => {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.target.value)
    }, [onChange, onChangeValue])

    if(type === "date") {
      const datepickerProps = {
        onChange: onDateChange,
        ...props,
      } as DatePickerProps
      return (
        <div className="soar-input">
          <DatePicker
            ref={ref as Ref<DatePicker>}
            className={cn("min-h-[50px] px-4 text-base w-full", className)}
            {...datepickerProps}
          />
        </div>
      )
    }
    return (
      <div className="soar-input relative">
        <input
          type={type}
          className={cn(
            "rounded-2xl min-h-12 w-full border border-input bg-transparent px-5 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-13",
            className
          )}
          ref={ref as Ref<HTMLInputElement>}
          onChange={(handleChange)}
          {...props}
        />
        {icon && <div className="absolute min-h-12 flex items-center left-5 top-0">{icon}</div>}
      </div>
    )
  }
)
