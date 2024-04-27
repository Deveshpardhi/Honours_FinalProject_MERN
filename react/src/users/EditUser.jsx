import React, { useState } from "react";
import { apiOperations } from "../apis/operations";

export default function EditUser({ user, setOnDirty }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleEditUser(event) {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const payload = {
            id: user.id,
            username: formData.get("username"),
            password: formData.get("password")
        };

        try {
            const data = await apiOperations.apiPut("/users", payload, { accept: "*/*" });

            if (!data.success) {
                setError(data.message);
            } else {
                setOnDirty(new Date());
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <button
                type="button"
                className="btn"
                style={{ color: "#198754", padding: "3px 6px" }}
                data-bs-toggle={`modal-${user.id}`}
            >
                Edit
            </button>

            <div className="modal fade" id={`ed_${user.id}`} tabIndex="-1" role="dialog" aria-labelledby={`ed_${user.id}`}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Editing User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleEditUser} noValidate>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col col-8 col-offset-2">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input className="form-control" type="text" name="username" defaultValue={user.username} />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col col-8 col-offset-2">
                                            <label htmlFor="password">Password</label>
                                            <input className="form-control" type="password" name="password" defaultValue={user.password} placeholder="password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="row justify-content-center" style={{ marginTop: "0.5cm" }}>
                                        <div className="col col-sm-2 text-end" style={{ marginTop: "0.5cm" }}>
                                            <button type="submit" name="submit" data-bs-dismiss="modal" disabled={loading} className="btn btn-primary btn-sm">Save</button>
                                        </div>
                                        <div className="col col-sm-2 text-start" style={{ marginTop: "0.5cm" }}>
                                            <button type="button" data-bs-dismiss="modal" disabled={loading} className="btn btn-warning btn-sm">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
