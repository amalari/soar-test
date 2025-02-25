import clsx from "clsx";
import React, { forwardRef } from "react";

interface MenuButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "prefix"> {
  component?: string | React.ReactElement;
  children?: React.ReactNode;
}

export const MenuButton = forwardRef<HTMLAnchorElement, MenuButtonProps>(
  ({ className, component, children, ...rest }, ref) => {
    if (component) {
      if (typeof component === "string") {
        return React.createElement(
          component,
          {
            className: clsx(className),
            ...rest,
            ref,
          },
          children
        );
      } else {
        const { className: componentClass, ...props } = (component as React.ReactElement<any>).props;

        return React.cloneElement(
          component,
          {
            className: clsx(className, componentClass),
            ...rest,
            ...props,
            ref,
          },
          children
        );
      }
    }

    return (
      <a ref={ref} className={clsx(className)} {...rest}>
        {children}
      </a>
    );
  }
);
