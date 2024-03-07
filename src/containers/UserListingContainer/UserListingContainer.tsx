import { useDeleteUser, useGetUsers, useUpdateUser } from "services";
import { UserRowAction, UsersListing } from "components";
import { USER_STATUS } from "types";

export const UserListingContainer = () => {
  // Services
  const { data: users, isLoading } = useGetUsers();
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: updateUser } = useUpdateUser();

  // Event handlers
  const handleOnAction = (action: UserRowAction) => {
    switch (action.type) {
      case "DELETE_USER":
        deleteUser(action.payload.userId);
        break;
      case "SUSPEND_USER":
        updateUser({
          id: action.payload.userId,
          status: USER_STATUS.SUSPENDU,
        });
        break;
    }
  };

  return (
    <UsersListing
      users={users}
      isLoading={isLoading}
      onAction={handleOnAction}
    />
  );
};
