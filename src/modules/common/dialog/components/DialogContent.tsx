import React, { useEffect, useRef, useCallback, FC } from 'react';
import { createPortal } from 'react-dom';
import { useDialogContext } from './DialogContext';
import { cn } from '../../utils/cn';

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogContent: FC<DialogContentProps> = ({ children, className }) => {
  const { open, onOpenChange } = useDialogContext();
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleClose();
        }
      };
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [open, handleClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={handleClose} />
      <div
        ref={dialogRef}
        className={cn(
          'relative z-50 bg-white rounded-lg p-6 shadow-lg w-full max-w-md',
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}