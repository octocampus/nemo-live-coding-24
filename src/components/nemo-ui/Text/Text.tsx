import { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Text.module.css";

interface TextProps {
  className?: string;
  block?: boolean;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
}

export const Text = ({
  className,
  size = "md",
  block = false,
  children,
}: PropsWithChildren<TextProps>) => {
  const classNames = clsx(
    "nemo-text",
    styles.base,
    styles[`size_${size}`],
    block && styles.block,
    className
  );

  const Tag = block ? "p" : "span";
  return <Tag className={classNames}>{children}</Tag>;
};
