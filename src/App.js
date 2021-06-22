import './App.css';
import Navigation from './components/navigation/navigation';
import { useState } from 'react';
import UserHome from './pages/users/users-home';
import ResourceHome from './pages/resource/resource-home';

function App() {
    const [page, setPage] = useState({
        resourceHome: false,
        userHome: true,
    });

    const onPageChange = (pageKey) => {
        const updatePages = { ...page };
        Object.keys(page).forEach((key) => {
            if (key === pageKey) {
                updatePages[pageKey] = true;
            } else {
                updatePages[key] = false;
            }
        });
        setPage(updatePages);
    };

    return (
        <div className="">
            <Navigation onPageChange={onPageChange} pages={page} />
            <div className="container">
                {page.resourceHome && <ResourceHome />}
                {page.userHome && <UserHome />}
            </div>
        </div>
    );
}

export default App;
