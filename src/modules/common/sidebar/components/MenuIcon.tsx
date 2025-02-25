import clsx from "clsx";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface MenuIconProps {
  className?: string;
  children?: React.ReactNode;
}

export const MenuIcon: FC<MenuIconProps> = ({ className = "", children }) => (
  <span
    className={twMerge(clsx(`w-[35px] min-w-[35px] h-[35px] flex items-center justify-center
      rounded-sm text-center leading-[35px] mr-2.5`), className)}
  >
    {children}
  </span>
);