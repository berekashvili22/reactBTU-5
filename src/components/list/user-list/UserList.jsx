import { useContext } from 'react';
import { UserProvider } from '../../../providers/UserProvider';
import UserListTable from './UserListTable';

function UserList(props) {
    const { userList } = useContext(UserProvider);

    return (
        <div className="mt-5">
            <h4>Users table</h4>
            <UserListTable users={userList} />
        </div>
    );
}

export default UserList;
