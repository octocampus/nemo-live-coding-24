import { UserRow } from "../UserRow";
import { UserDto } from "types";

import styles from "./UsersListing.module.css";
import { UserListingSkeleton } from "./UserListingSkeleton";
import { UserRowAction } from "../UserRowActions";

interface UsersListingProps {
  users?: UserDto[];
  isLoading?: boolean;
  onAction?: (action: UserRowAction) => void;
}

export const UsersListing = ({
  users = [],
  isLoading,
  onAction,
}: UsersListingProps) => {
  // Event handlers
  const handleOnAction = (action: UserRowAction) => {
    onAction && onAction(action);
  };

  if (isLoading) {
    return <UserListingSkeleton />;
  }

  if (!users.length) {
    return <div>No data found</div>;
  }

  return (
    <div className={styles.wrapper}>
      {users.map((user) => (
        <UserRow user={user} onAction={handleOnAction} />
      ))}
    </div>
  );
};
