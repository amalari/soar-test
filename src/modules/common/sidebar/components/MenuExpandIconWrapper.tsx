interface ExpandIconWrapperProps {
  collapsed?: boolean;
  level?: number;
  className?: string;
}

export const ExpandIconWrapper = ({
  collapsed,
  level,
  className = "",
}: ExpandIconWrapperProps) => (
  <span
    className={`
      ${collapsed && level === 0 ? "absolute top-1/2 -translate-y-1/2" : ""} 
      right-2.5 
      ${className}
    `}
  />
);