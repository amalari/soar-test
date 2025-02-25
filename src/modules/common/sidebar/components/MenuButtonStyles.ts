import clsx from "clsx";

interface MenuButtonStylesProps {
  level: number;
  collapsed?: boolean;
  rtl?: boolean;
  disabled?: boolean;
  active?: boolean;
}

export const menuButtonStyles = ({
  level,
  collapsed,
  disabled,
  // active,
}: MenuButtonStylesProps) =>
  clsx(
    "flex items-center h-[50px] cursor-pointer box-border text-inherit no-underline transition-all",
    `pr-5 pl-${level === 0 ? "5" : (collapsed ? level : level + 1) * 5}`,
    disabled && "pointer-events-none cursor-default text-gray-400",
    // active ? "bg-blue-100" : "hover:bg-gray-100"
  );
