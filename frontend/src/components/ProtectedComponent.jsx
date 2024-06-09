import { useEffect, useState } from 'react';
import axios from 'axios';

function ProtectedComponent({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('/api/auth', {headers: {Authorization: `Bearer ${token}`}})
            .then(_ => {
                setIsAuthenticated(true);
            })
            .catch(err => {
                console.error(err);
                setIsAuthenticated(false);
            })
    }, []);

    return (
        <>
            {isAuthenticated && children}
        </>
    )
}

export default ProtectedComponent;