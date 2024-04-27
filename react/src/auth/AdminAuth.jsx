import React from 'react';
//import { useAuth } from "./auth_helpers";

export default function AdminAuth({ children }) {
    const auth = useAuth();

    return (
        <>
            {auth.isAdmin ? (
                // Render children only if user is admin
                {children}
            ) : (
                // Render "Not authorized!" message if user is not admin
                <h1>Not authorized!</h1>
            )}
        </>
    );
}
