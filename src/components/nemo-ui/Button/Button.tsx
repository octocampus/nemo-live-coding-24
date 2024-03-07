import React, { useRef } from "react";
import { AriaButtonProps, useButton } from "@react-aria/button";
import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps extends AriaButtonProps {
  variant?: "primary";
  style?: "fill" | "outline";
}

export const Button = ({
  variant = "primary",
  style = "fill",
  children,
  ...props
}: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  const classNames = [
    variant === "primary" && styles.primary,
    style === "fill" && styles.fill,
    style === "outline" && styles.outline,
  ];
  return (
    <button
      type="button"
      ref={ref}
      {...buttonProps}
      className={clsx(styles.btn, classNames)}
    >
      {children}
    </button>
  );
};
