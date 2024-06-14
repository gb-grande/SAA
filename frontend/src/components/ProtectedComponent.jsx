import { useAuth } from '../providers/AuthProvider.jsx';

function ProtectedComponent({children}){
    const { token } = useAuth();
    return (
        <>
            {token && children}
        </>
    )
}

export default ProtectedComponent;