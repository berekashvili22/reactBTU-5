import { useState, useEffect } from 'react';
import React from 'react';
import { API_SERVICE } from '../services/api';

export const UserProvider = React.createContext(null);

function UserProviderComponent({ children }) {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await API_SERVICE.getUserListAsync();
            console.log(result);
            setUserList(result);
        })();
    }, []);

    const onAddUser = (newUser) => {
        console.log(newUser);
        setUserList([...userList, newUser]);
    };

    return (
        <UserProvider.Provider
            className=""
            value={{
                userList,
                setUserList,
                onAddUser,
            }}
        >
            {children}
        </UserProvider.Provider>
    );
}

export default UserProviderComponent;
