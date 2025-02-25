import React from "react";

interface SidebarContextProps {
  collapsed?: boolean;
  toggled?: boolean;
  transitionDuration?: number;
}

export const SidebarContext = React.createContext<SidebarContextProps>({
  collapsed: false,
  toggled: false,
  transitionDuration: 300,
});
