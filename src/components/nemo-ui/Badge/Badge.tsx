import clsx from "clsx";
import styles from "./badge.module.css";

interface BadgeProps {
  label: string;
  variant: "success" | "warning" | "danger";
}

export const Badge = ({ label, variant }: BadgeProps) => {
  const classNames = [
    variant === "warning" && styles.warning,
    variant === "success" && styles.success,
    variant === "danger" && styles.danger,
  ];
  return (
    <div className={clsx(styles.wrapper, classNames)}>
      <div className={clsx(styles.dot)} />
      <div className={clsx(styles.label)}>{label}</div>
    </div>
  );
};
