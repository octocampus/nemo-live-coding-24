import { PropsWithChildren } from "react";
import styles from "./PageWrapper.module.css";

interface PageWrapperProps {}

export const PageWrapper = ({
  children,
}: PropsWithChildren<PageWrapperProps>) => {
  return <div className={styles.wrapper}>{children}</div>;
};
