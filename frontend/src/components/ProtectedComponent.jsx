
function ProtectedComponent({children}){
    const isAuthenticated = () => {
        //TODO include authentication verification using a react context/state or another external method.
        return true;
    }

    return (
        <>
            {isAuthenticated() && children}
        </>
    )
}

export default ProtectedComponent;