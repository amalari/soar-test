import React, { FC } from "react";
import clsx from "clsx";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { sidebarClasses } from "../utils/sidebarClasses";
import { SidebarBackdrop } from "./SidebarBackdrop";
import { twMerge } from "tailwind-merge";

type BreakPoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "always" | "all";

const BREAK_POINTS = {
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px",
  always: "always",
  all: "all",
};

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
  width?: string;
  collapsedWidth?: string;
  breakPoint?: BreakPoint;
  customBreakPoint?: string;
  backgroundColor?: string;
  transitionDuration?: number;
  image?: string;
  toggled?: boolean;
  onBackdropClick?: () => void;
  onBreakPoint?: (broken: boolean) => void;
  children?: React.ReactNode;
}

const SidebarImage: FC<{ src: string; alt?: string; className?: string }> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt || "sidebar background"}
      className={twMerge(clsx(
        "w-full h-full object-cover object-center absolute left-0 top-0 z-20",
        className
      ))}
    />
  );
};

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      collapsed,
      toggled,
      onBackdropClick,
      onBreakPoint,
      width = "250px",
      collapsedWidth = "80px",
      className,
      children,
      breakPoint,
      customBreakPoint,
      backgroundColor = "rgb(249, 249, 249, 0.7)",
      transitionDuration = 300,
      image,
      ...rest
    },
    ref
  ) => {
    const getBreakpointValue = () => {
      if (customBreakPoint) return `(max-width: ${customBreakPoint})`;
      if (breakPoint) {
        if (["xs", "sm", "md", "lg", "xl", "xxl"].includes(breakPoint)) {
          return `(max-width: ${BREAK_POINTS[breakPoint]})`;
        }
        return breakPoint === "always" || breakPoint === "all" ? "screen" : `(max-width: ${breakPoint})`;
      }
    };

    const broken = useMediaQuery(getBreakpointValue());

    React.useEffect(() => {
      onBreakPoint?.(broken);
    }, [broken, onBreakPoint]);

    return (
      <div
        ref={ref}
        style={{
          width: collapsed ? collapsedWidth : width,
          minWidth: collapsed ? collapsedWidth : width,
          backgroundColor,
          transition: `width, left, ${transitionDuration}ms`,
        }}
        className={clsx(
          `relative border-r border-[#E6EFF5] transition-all`,
          broken && `fixed h-full top-0 z-100 ${toggled ? "left-0" : `left-[-${width}]`}`,
          collapsed && "w-[var(--collapsedWidth)] min-w-[var(--collapsedWidth)]",
          className
        )}
        {...rest}
      >
        <div className="relative h-full overflow-y-auto overflow-x-hidden z-20 bg-white">{children}</div>
        {image && <SidebarImage src={image} className={sidebarClasses.image} />}
        {broken && toggled && <SidebarBackdrop onClick={onBackdropClick} className={sidebarClasses.backdrop} />}
      </div>
    );
  }
);
