import { UserRow } from "../UserRow";
import { UserDto } from "types";

interface UsersListingProps {
  users?: UserDto[];
  isLoading?: boolean;
}

export const UsersListing = ({ users = [], isLoading }: UsersListingProps) => {
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!users.length) {
    return <div>No data found</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>email</th>
          <th>status</th>
          <th>create at</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow user={user} />
        ))}
      </tbody>
    </table>
  );
};
