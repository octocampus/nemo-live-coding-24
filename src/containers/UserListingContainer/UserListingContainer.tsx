import { useGetUsers } from "services";
import { UsersListing } from "components";

export const UserListingContainer = () => {
  const { data: users, isLoading } = useGetUsers();

  if (isLoading) return <div>Loading ...</div>;

  if (!users) return <div>no data found</div>;

  return <UsersListing users={users} />;
};
