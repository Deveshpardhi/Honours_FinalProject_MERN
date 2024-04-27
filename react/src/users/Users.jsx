import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserList from './UserList';

export default function Users() {
    // Get current location path
    const location = useLocation();
    const pathArr = location.pathname.split('/');
    const path = pathArr[pathArr.length - 1];

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <Link to="/">Home</Link>
                    {/* Hide add link if already on add new user component */}
                    {path !== 'add' && (
                        <Link to="/users/add" style={{ padding: 5 }}>Add User</Link>
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {/* Render UserList component */}
                    {path !== 'add' && <UserList />}
                </div>
            </div>
        </div>
    );
}
