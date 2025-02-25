import { createContext } from "react";

export interface RenderExpandIconParams {
  level: number;
  disabled: boolean;
  active: boolean;
  open: boolean;
}

export interface MenuContextProps {
  transitionDuration?: number;
  closeOnClick?: boolean;
  renderExpandIcon?: (params: RenderExpandIconParams) => React.ReactNode;
}

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);

export const LevelContext = createContext<number>(0);
