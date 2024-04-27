import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './auth_helpers';  // Ensure this is the correct path to your useAuth custom hook

/**
 * AuthStatus component displays the current authentication status and
 * provides a sign out button. It navigates the user back to the home page
 * upon signing out.
 */
export default function AuthStatus({ children }) {
    const { user, signout } = useAuth();
    const navigate = useNavigate();

    console.log("AUTH STATUS", JSON.stringify(user));

    const handleSignout = () => {
        signout(() => {
            navigate('/', { replace: true });
        });
    };

    return (
        <div className="container">
            {user ? (
                <div className="row justify-content-end align-items-center" style={{ marginTop: '1em', marginBottom: '1em' }}>
                    <div className="col col-4 text-end">
                        Welcome, {user.username}!
                    </div>
                    <div className="col col-1">
                        <button className="btn btn-success btn-sm" onClick={handleSignout}>
                            Sign out
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    Not logged in
                </div>
            )}
            {children}
        </div>
    );
}
