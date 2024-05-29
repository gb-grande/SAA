import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

function ProtectedRoute({children}){
    const isAuthenticated = () => {
        return useAuth();
    }

    return isAuthenticated() === true ? children : <Navigate to='/login' replace />
}

export default ProtectedRoute;