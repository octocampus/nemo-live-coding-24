import { Skeleton } from "components";
import styles from "./UserRow.module.css";
import React from "react";

export const UserRowSkeleton = () => {
  return (
    <div className={styles.skeleton_wrapper}>
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        <Skeleton width={48} height={48} rounded />
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Skeleton width={150} height={10} rounded />
          <Skeleton width={90} height={8} rounded />
        </div>
      </div>
    </div>
  );
};
