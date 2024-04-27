import React from 'react';
import { apiOperations } from '../apis/operations.js';
//import { useAuth } from '../auth/auth_helpers.js';

export default function DeleteOrder({ setOnDirty, id }) {
    const { user } = useAuth();

    async function onDeleteOrder(event) {
        event.preventDefault();

        try {
            const response = await apiOperations.apiDelete(`/orders/${id}`, { headers: { accept: "*/*", uid: user.uid } });

            if (!response.success) {
                console.error(response.message);
            } else {
                setOnDirty(new Date());
            }
        } catch (error) {
            console.error("Error", error);
        }
    }

    return (
        <>
            <button className="btn" style={{ color: "red", padding: "3px 6px" }} data-bs-toggle="modal" data-bs-target={`#del_${id}`}>
                Delete Order
            </button>

            <div className="modal fade" id={`del_${id}`} tabIndex="-1" role="dialog" aria-labelledby={`del_${id}`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Delete Order</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onDeleteOrder} noValidate>
                                <div className="container">
                                    <div className="row justify-content-center">Are you sure you want to delete this order?</div>
                                    <div className="row justify-content-center" style={{ marginTop: "8.5em" }}>
                                        <div className="col col-sm-2 text-end" style={{ marginTop: "8.5em" }}>
                                            <button type="submit" name="submit" data-bs-dismiss="modal" className="btn btn-danger">Yes</button>
                                        </div>
                                        <div className="col col-sm-2 text-start" style={{ marginTop: "8.5em" }}>
                                            <button type="button" data-bs-dismiss="modal" className="btn btn-success">No</button>
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
