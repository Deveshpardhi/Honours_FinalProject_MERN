import { createContext, useCallback, useState, useContext } from 'react';
import { apiAuthProvider } from '/api_auth_provider';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    const signin = async (email, passwd, callback) => {
        console.log(`Signing in with email: ${email}`);
        try {
            const resp = await apiAuthProvider.signin(email, passwd);
            if (resp.success) {
                setUser(resp.data);
                setIsAdmin(resp.data.isAdmin);  // Ensure your backend uses the same property name
            }
            callback(resp.data, resp.message);
            return { success: resp.success, message: resp.message };
        } catch (error) {
            console.error('Sign in failed:', error);
            callback(null, error.message);
            return { success: false, message: error.message };
        }
    };

    const signout = useCallback(() => {
        apiAuthProvider.signout(() => {
            setUser(null);
            setIsAdmin(false);
        });
    }, []);

    const value = useMemo(() => ({
        user, isAdmin, signin, signout
    }), [user, isAdmin, signin, signout]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

export { AuthContext, AuthProvider };
