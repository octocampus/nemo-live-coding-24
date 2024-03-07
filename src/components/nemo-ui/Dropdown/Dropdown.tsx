import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import styles from './dropdown.module.css';
import React from 'react';

export const DropdownContent = React.forwardRef<
  HTMLDivElement,
  DropdownPrimitive.DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content
        className={styles.content_wrapper}
        ref={forwardedRef}>
        {children}
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Portal>
  );
});

export const DropdownItem = React.forwardRef<
  HTMLDivElement,
  DropdownPrimitive.DropdownMenuItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownPrimitive.Item
      className={styles.item_wrapper}
      {...props}
      ref={forwardedRef}>
      {children}
    </DropdownPrimitive.Item>
  );
});

export const Dropdown = DropdownPrimitive.Root;

export const DropdownTrigger = DropdownPrimitive.Trigger;
