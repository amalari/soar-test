import { createContext, useContext } from 'react';

interface DialogContextProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const DialogProvider = DialogContext.Provider;

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogContext must be used within a DialogProvider');
  }
  return context;
};