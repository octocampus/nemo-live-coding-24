import { UserDto } from "types";
import styles from "./UserRow.module.css";
import { Avatar, Badge, Card, Text } from "../nemo-ui";
import { formatDate, getUserFullName } from "utils";
import { UserRowActions } from "../UserRowActions";

interface UserRowProps {
  user: UserDto;
}

export const UserRow = ({ user }: UserRowProps) => {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.user_info}>
        <Avatar fullName={getUserFullName(user)} />
        <div className={styles.user_info_content}>
          <Text className={styles.username}>{getUserFullName(user)}</Text>
          <Text>{user.email}</Text>
        </div>
      </div>

      <div className={styles.creation_date}>
        <Text className={styles.label}>Date de création</Text>
        <Text className={styles.value}>{formatDate(user.createdAt)}</Text>
      </div>

      <div className={styles.status}>
        <Badge variant={"success"} label={user.status} />
      </div>

      <UserRowActions />
    </Card>
  );
};
