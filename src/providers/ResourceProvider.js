import { useState, useEffect } from 'react';
import React from 'react';
import { API_SERVICE } from '../services/api';

export const ResourceProvider = React.createContext(null);

function ResourceProviderComponent({ children }) {
    const [resourceList, setResourceList] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await API_SERVICE.getResourceListAsync();
            setResourceList(result);
        })();
    }, []);

    const onAddResource = (newResource) => {
        setResourceList([...resourceList, newResource]);
    };

    return (
        <ResourceProvider.Provider
            className=""
            value={{
                resourceList,
                setResourceList,
                onAddResource,
            }}
        >
            {children}
        </ResourceProvider.Provider>
    );
}

export default ResourceProviderComponent;
