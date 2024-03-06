import { UserRow } from "../UserRow";
import { UserDto } from "types";

interface UsersListingProps {
  users?: UserDto[];
}

export const UsersListing = ({ users = [] }: UsersListingProps) => {
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
