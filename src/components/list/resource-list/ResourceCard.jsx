import PropTypes from 'prop-types';

function ResourceCard({ resource }) {
    return (
        <table class="table  table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">color</th>
                    <th scope="col">name</th>
                    <th scope="col">year</th>
                    <th scope="col">pantone</th>
                </tr>
            </thead>
            <tbody>
                {resource?.map((r, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{r.id}</th>
                            <td>
                                <div
                                    className="r-color"
                                    style={{ backgroundColor: r.color }}
                                ></div>
                            </td>
                            <td>{r.name}</td>
                            <td>{r.year}</td>
                            <td>{r.pantone_value}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

ResourceCard.propTypes = {
    resource: PropTypes.func.isRequired,
};

export default ResourceCard;
