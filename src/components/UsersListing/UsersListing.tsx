import { UserRow } from "../UserRow";
import { UserDto } from "types";

import styles from "./UsersListing.module.css";
import { UsersListingSkeleton } from "./UsersListingSkeleton";
import { UserRowAction } from "../UserRowActions";
import { UsersListingEmptyState } from "./UsersListingEmptyState";

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
    return <UsersListingSkeleton />;
  }

  if (!users.length) {
    return <UsersListingEmptyState />;
  }

  return (
    <div className={styles.wrapper}>
      {users.map((user) => (
        <UserRow user={user} onAction={handleOnAction} />
      ))}
    </div>
  );
};
