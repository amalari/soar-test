import { FC } from "react";

interface MenuPrefixProps {
  firstLevel?: boolean;
  collapsed?: boolean;
  transitionDuration?: number;
  className?: string;
  children?: React.ReactNode;
}

export const MenuPrefix: FC<MenuPrefixProps> = ({
  firstLevel,
  collapsed,
  transitionDuration = 300,
  className = "",
  children,
}) => (
  <span
    className={`
      transition-opacity duration-${transitionDuration} mr-6
      ${firstLevel && collapsed ? "opacity-0" : "opacity-100"}
      ${className}
    `}
  >{children}</span>
);