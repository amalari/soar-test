import { createContext } from "react";

export interface TabsContextProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const TabsContext = createContext<TabsContextProps>({
  value: "",
  onValueChange: () => {},
});
