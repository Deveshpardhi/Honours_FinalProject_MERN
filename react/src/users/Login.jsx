import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/auth_helpers";
import { apiAuthProvider } from "./auth/api_auth_provider";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { signin } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const focusRef = useRef();

    useEffect(() => {
        focusRef.current.focus();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email.trim().length || !password.trim().length) {
            setError("Please provide an email and password.");
            return;
        }

        try {
            setLoading(true);
            await signin(email, password);
            navigate(location.state?.from || "/");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ marginTop: "4em" }}>
            <div className="row justify-content-center">
                <div className="col col-sm-4 col-sm-offset-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input ref={focusRef} className="form-control" type="email" name="email" id="email" />
                    {error.includes("email") && <div className="Invalid-feedback">Please provide an email.</div>}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-sm-4 col-sm-offset-4">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" placeholder="password" />
                </div>
            </div>
            <div className="row justify-content-center" style={{ marginTop: "0.5em" }}>
                <div className="col col-sm-4 col-sm-offset-4" style={{ marginTop: "0.5em" }}>
                    <button type="submit" name="submit" className="btn btn-primary btn-sm" onClick={handleSubmit}>Sign In</button>
                </div>
            </div>
            {error.trim().length > 0 && (
                <div className="row justify-content-center" style={{ marginTop: "0.5em" }}>
                    <div className="col col-sm-4 col-sm-offset-4" style={{ marginTop: "0.5em", color: "red" }}>
                        {error}
                    </div>
                </div>
            )}
        </div>
    );
}
