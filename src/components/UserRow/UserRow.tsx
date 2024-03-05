import {UserDto} from "types";
import styles from './UserRow.module.css'

interface UserRowProps {
    user: UserDto
}

export const UserRow = ({user}: UserRowProps) => {
    return <tr className={styles.wrapper}>

        <td>{user.firstName} {user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.status}</td>
        <td>{user.createAt}</td>
        <td>--</td>

    </tr>
}