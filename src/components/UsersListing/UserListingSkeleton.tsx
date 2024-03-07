import { UserRowSkeleton } from "../UserRow";
import styles from "./UsersListing.module.css";

export const UserListingSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <UserRowSkeleton />
      <UserRowSkeleton />
      <UserRowSkeleton />
      <UserRowSkeleton />
      <UserRowSkeleton />
      <UserRowSkeleton />
      <UserRowSkeleton />
    </div>
  );
};
