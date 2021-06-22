import { useState, useContext } from 'react';

import { ResourceProvider } from '../../../providers/ResourceProvider';

function AddResourceForm() {
    const { onAddResource } = useContext(ResourceProvider);

    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [pantone_value, setPantoneValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onAddResource({
            userId: Math.random().toString(),
            id: Math.floor(Math.random() * 10),
            name,
            year,
            color,
            pantone_value,
        });
        setName('');
        setYear('');
        setColor('');
        setPantoneValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="ResourceName" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="ResourceName"
                    required
                    value={name}
                    onChange={({ target }) => {
                        setName(target.value);
                    }}
                ></input>
            </div>

            <div className="form-group">
                <label htmlFor="ResourceYear" className="form-label">
                    Year
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="ResourceYear"
                    required
                    value={year}
                    onChange={({ target }) => {
                        setYear(target.value);
                    }}
                ></input>
            </div>

            <div className="form-group">
                <label htmlFor="ResourceColor" className="form-label">
                    Color (HEX)
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="ResourceColor"
                    required
                    value={color}
                    onChange={({ target }) => {
                        setColor(target.value);
                    }}
                ></input>
            </div>

            <div className="form-group">
                <label htmlFor="pantoneValue" className="form-label">
                    Pantone
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="pantoneValue"
                    required
                    value={pantone_value}
                    onChange={({ target }) => {
                        setPantoneValue(target.value);
                    }}
                ></input>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}

export default AddResourceForm;
