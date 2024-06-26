import { Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider.jsx';

/**
 * A ProtectedRoute component that renders its children only if user is authenticated.
 * If not authenticated, redirects to login page.
 * 
 * @param {object} children - The child elements or component to render conditionally.
 * @returns {JSX.Element} The ProtectedRoute, rendering children if user is authenticated.
 */
function ProtectedRoute({children}){
    const { token } = useAuth();

    if (token) return children;
    
    return <Navigate to='/login' replace />
}

export default ProtectedRoute;