import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface TabsListProps {
  children: ReactNode; 
  className?: string;
}

export const TabsList = ({ children, className, ...props }: TabsListProps) => {
  return (
    <div
      className={cn(
        "soar-tabs-list bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}