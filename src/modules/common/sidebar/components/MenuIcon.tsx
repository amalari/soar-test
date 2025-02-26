import { FC } from "react";
import { cn } from "../../utils/cn";

interface MenuIconProps {
  className?: string;
  children?: React.ReactNode;
}

export const MenuIcon: FC<MenuIconProps> = ({ className = "", children }) => (
  <span
    className={cn(`w-[35px] min-w-[35px] h-[35px] flex items-center justify-center
      rounded-sm text-center leading-[35px] mr-2.5`, className)}
  >
    {children}
  </span>
);