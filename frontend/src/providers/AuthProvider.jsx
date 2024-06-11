import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken_] = useState('');

    const setToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken_(newToken);
    }

    useEffect(() => {
        const tokenLocal = localStorage.getItem('token');
        if (tokenLocal) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${tokenLocal}`;
            axios.get('/api/auth')
                .then(_ => {
                    setToken(tokenLocal);
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
            setToken,
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;