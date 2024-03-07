import { useGetUsers } from "services";
import { UsersListing } from "components";

export const UserListingContainer = () => {
  const { data: users, isLoading } = useGetUsers();

  return <UsersListing users={users} isLoading={isLoading} />;
};
