import {UserRow} from "../../components/UserRow/UserRow";
import {UserDto} from "../../types";
import {useGetUsers} from "../../services/users/useGetUsers";

const USERS: UserDto[] = [{
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
    status: "ACTIF",
    createAt: ""

},
    {
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com",
        status: "ACTIF",
        createAt: ""

    },
    {
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com",
        status: "ACTIF",
       createAt:""

    },
    {
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com",
        status: "ACTIF",
        createAt:""

    }]
export const UserListingContainer = () => {

    const {data} = useGetUsers()

    if(!data) return null

    return <table>
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

        {data.map( (user)=> (
            <UserRow user={user}/>
        ))}


        </tbody>

    </table>
}