import { ReactNode, useContext } from "react";

import { TabsContext } from "./TabsContext";
import { cn } from "../../utils/cn";

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export const TabsTrigger = ({ children, value, className, ...props }: TabsTriggerProps) => {
  const { value: activeValue, onValueChange } = useContext(TabsContext);
  const isActive = activeValue === value;

  return (
    <button
      className={cn(
        "px-4 py-2 text-base focus:outline-none", // Padding and font
        isActive
          ? "border-b-3 border-primary text-primary" // Underline and active color
          : "text-primary-light hover:text-gray-700", // Inactive styles
        className
      )}
      onClick={() => onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  );
}