import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

/**
 * AuthProvider component manages authentication state and provides authentication-related functions.
 * 
 * @param {ReactNode} props.children The child components to be wrapped by the AuthProvider.
 */
const AuthProvider = ({children}) => {
    const [token, setToken_] = useState('');
    const [userName, setUserName_] = useState('');
    const [loading, setLoading] = useState(false);

    // Clears authentication data from local storage and resets state.
    const clearAuth = () => {
        localStorage.setItem('token', '');
        setToken_('');
        setUserName_('');
    }

    // Attempts to log in with the provided credentials.
    const tryLogin = async (values) => {
        const res = await axios.post(`/admins/login`, values);
        localStorage.setItem('token', res.data.token);
        await updateContextFromStorage();
    }

    // Gets auth token and user information from local storage and updates state.
    const updateContextFromStorage = async () => {
        const tokenLocal = localStorage.getItem('token');
        if (!tokenLocal){
            clearAuth();
            return;
        }

        setLoading(true);
        try{
            const res = await axios.get('/api/auth');
            setToken_(tokenLocal);
            setUserName_(res.data.user);
        } catch (err){
            localStorage.removeItem('token');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // Logout whenever there's an authentication error.
        const logoutInterceptorId = axios.interceptors.response.use(
            res => res,
                err => {
                if (err.response?.data?.invalidToken){
                    console.log("Auth error, clearing token.")
                    clearAuth();
                }
                throw err;
            }
        );

        // Insert jwt into header dynamically from LocalStorage
        const tokenInterceptorId = axios.interceptors.request.use(
            config => {
                const tokenLocal = localStorage.getItem('token');
                if (tokenLocal){
                    console.log("insert token into header", tokenLocal);
                    config.headers.Authorization = `Bearer ${tokenLocal}`;
                } else console.log("no token to insert!");
                return config;
            },
            err => err
        );

        // Verify jwt if was already logged
        updateContextFromStorage();

        // Cleanup interceptors
        return () => {
            axios.interceptors.response.eject(logoutInterceptorId);
            axios.interceptors.request.eject(tokenInterceptorId);
        };
    }, []);

    const contextValue = useMemo(
        () => ({
            token,
            userName,
            loading,
            clearAuth,
            tryLogin
        }),
        [token, userName, loading]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;