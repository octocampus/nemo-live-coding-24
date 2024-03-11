import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import styles from './dialog.module.css';
import { IconButton } from '../Button';

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogPrimitive.DialogContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay} />
      <DialogPrimitive.Content
        className={styles.content_wrapper}
        {...props}
        ref={forwardedRef}>
        {children}
        <DialogPrimitive.Close asChild>
          <IconButton className={styles.close_button} aria-label="close">
            <Cross1Icon />
          </IconButton>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
