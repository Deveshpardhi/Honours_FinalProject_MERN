import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '/auth/auth_helpers';
import Products from '/shopping/Products';

export default function Home() {
    const navigate = useNavigate();
    const auth = useAuth();

    console.log('RENDERING HOME');
    console.log(JSON.stringify(auth));

    return (
        <div>
            {auth.isAdmin && <Products />}
            {auth.isAdmin && (
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-secondary" onClick={() => navigate("/users")}>
                        User Management
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-secondary" onClick={() => navigate("/products")}>
                        Product Management
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-secondary" onClick={() => navigate("/orders")}>
                        Orders
                    </button>
                </div>
            )}
        </div>
    );
}
