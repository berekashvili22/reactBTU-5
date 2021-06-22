import PropTypes from 'prop-types';

function UserListTable({ users }) {
    return (
        <table class="table table-sm table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"></th>
                    <th scope="col">name</th>
                    <th scope="col">lastname</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>
                                <img
                                    src={user.avatar}
                                    alt=""
                                    className="user-avatar"
                                />
                            </td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

UserListTable.propTypes = {
    users: PropTypes.func.isRequired,
};

export default UserListTable;
