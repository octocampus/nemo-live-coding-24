import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Text.module.css";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
export const Heading = ({
  children,
  level = 1,
}: PropsWithChildren<HeadingProps>) => {
  const Markup = `h${level}` as keyof React.JSX.IntrinsicElements;
  const classNames = clsx(
    `nemo-heading-${level}`,
    styles.base,
    styles.heading,
    styles[`heading_${level}`]
  );
  return (
    <Markup role={"heading"} className={classNames}>
      {children}
    </Markup>
  );
};
