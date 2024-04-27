import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useAuth } from '../auth/auth_helpers';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
import { useAxiosGet } from '../apis/hooks';

export default function UserList() {
    const [data, setData] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    const [dirty, setDirty] = useState(new Date());
    const { response, error, loading } = useAxiosGet("/users", { headers: { accept: 'application/json' } }, dirty);

    console.log("Rendering UserList. Loading:", loading);

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    return (
        <div>
            <h2>Users</h2>
            {loading && <div>Loading...</div>}
            {!loading && data.length > 0 && (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">IsAdmin</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item._id}>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.isadmin ? "True" : "False"}</td>
                                    <td>
                                        {user.isAdmin && (
                                            <>
                                                <EditUser setOnDirty={setDirty} user={item} />
                                                <DeleteUser setOnDirty={setDirty} id={item._id} name={item.username} />
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {!loading && data.length === 0 && <div>No data found.</div>}
        </div>
    );
}
