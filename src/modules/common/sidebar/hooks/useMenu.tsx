import React from 'react';
import { MenuContext, MenuContextProps } from '../components/MenuContext';

export const useMenu = (): MenuContextProps => {
  const context = React.useContext(MenuContext);
  if (context === undefined) {
    throw new Error('Menu Component is required!');
  }
  return context;
};
