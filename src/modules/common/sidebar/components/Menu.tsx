import React, { forwardRef, useMemo } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { LevelContext, MenuContext, MenuContextProps } from "./MenuContext";

export interface MenuItemStylesParams {
  level: number;
  disabled: boolean;
  active: boolean;
  isSubmenu: boolean;
  open?: boolean;
}

export type ElementStyles =
  | string
  | ((params: MenuItemStylesParams) => string | undefined);


export interface MenuProps
  extends MenuContextProps,
    React.MenuHTMLAttributes<HTMLMenuElement> {
  children?: React.ReactNode;
}

export const Menu = forwardRef<HTMLMenuElement, MenuProps>(
  (
    {
      children,
      className,
      transitionDuration = 300,
      closeOnClick = false,
      renderExpandIcon,
      ...rest
    },
    ref
  ) => {
    const providerValue = useMemo(
      () => ({ transitionDuration, closeOnClick, renderExpandIcon }),
      [transitionDuration, closeOnClick, renderExpandIcon]
    );

    return (
      <MenuContext.Provider value={providerValue}>
        <LevelContext.Provider value={0}>
          <nav
            ref={ref}
            className={twMerge(clsx("flex flex-col space-y-2", className))}
            {...rest}
          >
            <ul className="list-none p-0">{children}</ul>
          </nav>
        </LevelContext.Provider>
      </MenuContext.Provider>
    );
  }
);
