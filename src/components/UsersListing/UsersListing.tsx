import { UserRow } from "../UserRow";
import { UserDto } from "types";

import styles from "./UsersListing.module.css";
import { UserListingSkeleton } from "./UserListingSkeleton";

interface UsersListingProps {
  users?: UserDto[];
  isLoading?: boolean;
}

export const UsersListing = ({ users = [], isLoading }: UsersListingProps) => {
  if (isLoading) {
    return <UserListingSkeleton />;
  }

  if (!users.length) {
    return <div>No data found</div>;
  }

  return (
    <div className={styles.wrapper}>
      {users.map((user) => (
        <UserRow user={user} />
      ))}
    </div>
  );
};
