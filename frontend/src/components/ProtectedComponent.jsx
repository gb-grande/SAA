import useAuth from '../hooks/useAuth'

function ProtectedComponent({children}){
    const isAuthenticated = () => {
        return useAuth();
    }

    return (
        <>
            {isAuthenticated() && children}
        </>
    )
}

export default ProtectedComponent;