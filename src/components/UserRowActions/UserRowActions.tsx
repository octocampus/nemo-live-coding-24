import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  IconButton,
  Text,
} from "components/nemo-ui";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import React from "react";
import { UserRowAction } from "./types";
import styles from "./UserActions.module.css";
import { USER_STATUS, UserDto } from "types";

interface UserRowActionsProps {
  user: UserDto;
  onAction: (action: UserRowAction) => void;
}

export const UserRowActions = ({ user, onAction }: UserRowActionsProps) => {
  // Event handlers
  const handleOnSuspend = () => {
    onAction({
      type: "SUSPEND_USER",
      payload: {
        userId: user.id,
      },
    });
  };

  const handleOnDelete = () => {
    onAction({
      type: "DELETE_USER",
      payload: {
        userId: user.id,
      },
    });
  };

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <IconButton className={styles.trigger_btn}>
          <DotsVerticalIcon />
        </IconButton>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem onClick={handleOnSuspend}>
          <Text>Suspendre</Text>
        </DropdownItem>
        <DropdownItem onClick={handleOnDelete}>
          <Text>Supprimer</Text>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};
