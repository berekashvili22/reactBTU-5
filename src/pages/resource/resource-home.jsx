import AddResourceForm from '../../components/forms/add-resource-form/AddResourceForm';
import ResourceList from '../../components/list/resource-list/ResourceList';
import ResourceProviderComponent from '../../providers/ResourceProvider';

function ResourceHome(props) {
    return (
        <ResourceProviderComponent>
            <div className="container">
                <div className="container p-5">
                    <AddResourceForm />
                </div>
                <div className="container p-5">
                    <ResourceList />
                </div>
            </div>
        </ResourceProviderComponent>
    );
}

export default ResourceHome;
