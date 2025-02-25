import clsx from "clsx";
import { FC } from "react";

interface SidebarBackdropProps {
  onClick?: () => void;
  className?: string;
}

export const SidebarBackdrop: FC<SidebarBackdropProps> = ({ onClick, className = "" }) => (
  <div
    className={clsx("fixed inset-0 z-10 bg-black/30", className)} 
    onClick={onClick} 
    role="button" 
    tabIndex={0} 
    aria-label="backdrop" 
  />
);
