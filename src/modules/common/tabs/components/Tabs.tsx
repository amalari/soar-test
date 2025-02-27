import { FC, ReactNode, useState } from "react";
import { TabsContext, TabsContextProps } from "./TabsContext";
import { cn } from "../../utils/cn";

interface TabsProps {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export const Tabs: FC<TabsProps> = ({ children, defaultValue, value, onValueChange, className, ...props }) => {
  const [activeValue, setActiveValue] = useState<string>(value || defaultValue || "");

  const handleValueChange = (newValue: string) => {
    setActiveValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const contextValue: TabsContextProps = {
    value: activeValue,
    onValueChange: handleValueChange,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn("soar-tabs flex flex-col gap-2", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}