import React, { FC, useState } from 'react';
import { DialogProvider } from './DialogContext';

interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Dialog: FC<DialogProps> = ({ children, open: controlledOpen, onOpenChange: controlledOnOpenChange }) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = controlledOpen ?? uncontrolledOpen;
  const onOpenChange = controlledOnOpenChange ?? setUncontrolledOpen;

  return (
    <DialogProvider value={{ open, onOpenChange }}>
      {children}
    </DialogProvider>
  );
}
