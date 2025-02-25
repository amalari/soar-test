interface MenuSuffixProps {
  firstLevel?: boolean;
  collapsed?: boolean;
  transitionDuration?: number;
  className?: string;
  children?: React.ReactNode;
}

export const MenuSuffix = ({
  firstLevel,
  collapsed,
  transitionDuration = 300,
  className = "",
  children,
}: MenuSuffixProps) => (
  <span
    className={`
      transition-opacity duration-${transitionDuration}
      mx-1.5
      ${firstLevel && collapsed ? "opacity-0" : "opacity-100"}
      ${className}
    `}
  >{children}</span>
);