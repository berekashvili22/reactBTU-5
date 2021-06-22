import { useContext } from 'react';
import { ResourceProvider } from '../../../providers/ResourceProvider';
import ResourceCard from './ResourceCard';

function ResourceList() {
    const { resourceList } = useContext(ResourceProvider);

    return (
        <div className="container">
            <ResourceCard resource={resourceList} />
        </div>
    );
}

export default ResourceList;
