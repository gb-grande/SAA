import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken_] = useState('');
    const [userName, setUserName_] = useState('');

    const setAuth = (newToken, newUserName) => {
        localStorage.setItem('token', newToken);
        setToken_(newToken);
        setUserName_(newUserName);
    }

    const clearAuth = () => {
        localStorage.setItem('token', '');
        setToken_('');
        setUserName_('');
    }

    //Logout whenever there's an authentication error.
    useEffect(() => {
        axios.interceptors.response.use(res => res, err => {
            if (err.response?.status === 401 && token){
                clearAuth();
            }
            throw err;
        });
    }, []);

    //Verify token whenever it is changed.
    useEffect(() => {
        const tokenLocal = localStorage.getItem('token');
        if (tokenLocal) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${tokenLocal}`;
            axios.get('/api/auth')
                .then(res => {
                    setAuth(tokenLocal, res.data.user.sub);
                })
                .catch(err => {
                    console.error("Erro:", err);
                    delete axios.defaults.headers.common['Authorization'];
                    localStorage.removeItem('token');
                })
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('token');
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            userName,
            setAuth,
            clearAuth,
        }),
        [token, userName]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;