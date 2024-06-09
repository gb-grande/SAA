import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProtectedRoute({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isTokenValid, setIsTokenValid] = useState(false);

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
            .finally(() => setIsTokenValid(true));
    }, []);

    if (!isTokenValid) return <div/>;
    if (isAuthenticated) return children;
    return <Navigate to='/login' replace />
}

export default ProtectedRoute;