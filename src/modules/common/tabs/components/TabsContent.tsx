import { ReactNode, useContext } from "react";
import { TabsContext } from "./TabsContext";
import { cn } from "../../utils/cn";

interface TabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export const TabsContent = ({ children, value, className, ...props }: TabsContentProps) => {
  const { value: activeValue } = useContext(TabsContext);

  if (activeValue !== value) {
    return null;
  }

  return (
    <div className={cn("flex-1", className)} {...props}>
      {children}
    </div>
  );
}
