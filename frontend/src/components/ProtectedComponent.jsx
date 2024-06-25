import { useAuth } from '../providers/AuthProvider.jsx';

/**
 * A ProtectedComponent that renders its children only if user is authenticated.
 * 
 * @param {object} children - The child elements or component to render conditionally.
 * @returns The ProtectedComponent, rendering children if user is authenticated.
 */
function ProtectedComponent({children}){
    const { token } = useAuth();
    return (
        <>
            {token && children}
        </>
    )
}

export default ProtectedComponent;