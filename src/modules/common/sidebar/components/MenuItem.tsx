import React from 'react';
import clsx from "clsx";
import { MenuLabel } from './MenuLabel';
import { MenuButton } from './MenuButton';
import { LevelContext } from './MenuContext';
import { SidebarContext } from './SidebarContext';
import { menuButtonStyles } from './MenuButtonStyles';
import { MenuIcon } from './MenuIcon';
import { MenuPrefix } from './MenuPrefix';
import { MenuSuffix } from './MenuSuffix';
import { IconSidebarActive } from '../../icons';
import { cn } from '../../utils/cn';

export interface MenuItemProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "prefix"> {
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  component?: string | React.ReactElement;
  children?: React.ReactNode;
}

export const MenuItemFR: React.ForwardRefRenderFunction<HTMLLIElement, MenuItemProps> = (
  {
    children,
    icon,
    className,
    prefix,
    suffix,
    active = false,
    disabled = false,
    component,
    ...rest
  },
  ref,
) => {
  const level = React.useContext(LevelContext);
  const { collapsed, transitionDuration } = React.useContext(SidebarContext);

  const sharedClasses = {
    'active': active,
    'disabled': disabled,
  };

  return (
    <li
      className={cn(className, "w-full relative")}
      ref={ref}
    >
      <div
        className={clsx(
          {
            "opacity-50 pointer-events-none": disabled,
          },
          menuButtonStyles({ level, disabled, active, collapsed })
        )}
      >
        <MenuButton
          className={clsx(sharedClasses, 'h-14 w-full flex items-center px-9 ', `${active ? 'text-gray-900' : 'text-gray-400'}`)}
          component={component}
          tabIndex={0}
          {...rest}
        >
          {active && <IconSidebarActive className='h-full absolute left-0' />}
          {icon && (
            <MenuIcon
              className={clsx(sharedClasses)}
            >
              {icon}
            </MenuIcon>
          )}

          {prefix && (
            <MenuPrefix
              collapsed={collapsed}
              transitionDuration={transitionDuration}
              firstLevel={level === 0}
              className={clsx(sharedClasses)}
            >
              {prefix}
            </MenuPrefix>
          )}

          <MenuLabel
            className={clsx(sharedClasses)}
          >
            {children}
          </MenuLabel>

          {suffix && (
            <MenuSuffix
              collapsed={collapsed}
              transitionDuration={transitionDuration}
              firstLevel={level === 0}
              className={clsx(sharedClasses)}
            >
              {suffix}
            </MenuSuffix>
          )}
        </MenuButton>
      </div>
    </li>
  );
};

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(MenuItemFR);
