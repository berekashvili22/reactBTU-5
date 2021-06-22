import PropTypes from 'prop-types';

const Navigation = ({ onPageChange, pages }) => {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <ul className="nav">
                <li className="nav-item">
                    <button
                        className={`nav-link btn btn-${
                            pages.userHome ? 'primary' : 'light'
                        } ml-5`}
                        onClick={() => onPageChange('userHome')}
                    >
                        Users
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link btn btn-${
                            pages.resourceHome ? 'primary' : 'light'
                        } ml-5`}
                        onClick={() => onPageChange('resourceHome')}
                    >
                        Resources
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    pages: PropTypes.object.isRequired,
};

export default Navigation;
