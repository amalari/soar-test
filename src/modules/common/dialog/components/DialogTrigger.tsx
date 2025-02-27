import React, { FC } from 'react';
import { useDialogContext } from './DialogContext';

interface DialogTriggerProps {
  children: React.ReactNode;
}

export const DialogTrigger: FC<DialogTriggerProps> = ({ children }) => {
  const { onOpenChange } = useDialogContext();

  const handleOpen = () => {
    onOpenChange(true);
  };

  return <span role='button' onClick={handleOpen}>{children}</span>;
}

export default DialogTrigger;