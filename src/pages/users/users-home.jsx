import AddUserForm from '../../components/forms/add-user-form/addUserForm';
import UserList from '../../components/list/user-list/UserList';
import UserProviderComponent from '../../providers/UserProvider';

function UserHome(props) {
    return (
        <UserProviderComponent>
            <div className="container mt-5">
                <div className="">
                    <AddUserForm />
                </div>
                <div className="">
                    <UserList />
                </div>
            </div>
        </UserProviderComponent>
    );
}

export default UserHome;
