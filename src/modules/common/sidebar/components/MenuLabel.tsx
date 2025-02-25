import { FC } from "react";

interface MenuLabelProps {
  className?: string;
  children?: React.ReactNode;
}

export const MenuLabel: FC<MenuLabelProps> = ({ className = "", children }) => (
  <span className={`flex-grow truncate whitespace-nowrap ${className}`}>{children}</span>
);