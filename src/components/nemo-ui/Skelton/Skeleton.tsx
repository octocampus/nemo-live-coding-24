import clsx from "clsx";
import styles from "./skeleton.module.css";

interface SkeletonProps {
  rounded?: boolean;
  width: number;
  height: number;
}

export const Skeleton = ({ rounded = true, width, height }: SkeletonProps) => {
  return (
    <div
      className={clsx(styles.wrapper)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: rounded ? `${height}px` : "0px",
      }}
    />
  );
};
