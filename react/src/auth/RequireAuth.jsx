import { useLocation, useNavigate, useOutlet } from 'react-router-dom';
//import { useAuth } from './auth_helpers';
import { useEffect } from 'react';
import AuthStatus from './AuthStatus';

export default function RequireAuth() {
    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(`VALUES: ${JSON.stringify(auth.user)}`);

    useEffect(() => {
        // Check if there is no user authenticated
        if (!auth.user) {
            // Redirect users to the /login page, but save the current location they were
            // trying to go to when they were redirected. This allows us to send them
            // back to that page after they login, which is a nicer user experience
            // than dropping them off on the home page.
            navigate("/login", { state: { from: location } });
        }
    }, [auth.user, navigate, location]);

    // Render the AuthStatus component wrapping the child routes
    // useOutlet() is used to render any child components that are matched by the child routes
    return <AuthStatus>{useOutlet()}</AuthStatus>;
}
