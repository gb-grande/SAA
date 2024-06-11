import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider.jsx';

function ProtectedRoute({children}){
    const { token } = useAuth();

    if (token) return children;
    
    return <Navigate to='/login' replace />
}

export default ProtectedRoute;