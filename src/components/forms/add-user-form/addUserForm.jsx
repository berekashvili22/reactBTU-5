import { useState, useContext } from 'react';
import { UserProvider } from '../../../providers/UserProvider';

function AddUserForm(props) {
    const { onAddUser } = useContext(UserProvider);

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setImageUrl] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onAddUser({
            first_name,
            last_name,
            email,
            avatar,
            id: Math.floor(Math.random() * 10),
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setImageUrl('');
    };

    return (
        <form onSubmit={onSubmit}>
            <h3>Add new user</h3>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={first_name}
                            onChange={({ target }) => {
                                setFirstName(target.value);
                            }}
                        ></input>
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label htmlFor="lastName" className="form-label">
                            Last Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            required
                            value={last_name}
                            onChange={({ target }) => {
                                setLastName(target.value);
                            }}
                        ></input>
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            id="Email"
                            required
                            value={email}
                            onChange={({ target }) => {
                                setEmail(target.value);
                            }}
                        ></input>
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label htmlFor="imageUrl" className="form-label">
                            Image (URL)
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            id="Email"
                            required
                            value={avatar}
                            onChange={({ target }) => {
                                setImageUrl(target.value);
                            }}
                        ></input>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}

export default AddUserForm;
