import Cookies from 'js-cookie';

function useAuth() {
    //TODO: do proper authentication
    const logged = Cookies.get('logged');
    if (logged === 'true') {
        return true;
    } else {
        return false;
    }
};

export default useAuth;