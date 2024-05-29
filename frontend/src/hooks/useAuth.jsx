import Cookies from 'js-cookie';

function useAuth() {
    //getting token from local storage
    const logged = Cookies.get('logged');
    console.log(logged);
    //checking whether token is preset or not
    if (logged === 'true') {
        return true;
    } else {
        return false;
    }
};

export default useAuth;