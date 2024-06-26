import React from "react";
import DeleteOrder from "./DeleteOrder";

export default function OrderItem({ order, setDirty }) {
    return (
        <div className="col-12">
            <div className="card" style={{ margin: "0.5em", marginLeft: "0px", backgroundColor: "#FCFCFC" }}>
                <div className="card-body">
                    <div className="card-title">
                        <div className="container">
                            <div className="row">
                                <div className="col col-6" style={{ paddingLeft: "0px" }}>
                                    <h5>Ordered On: {new Date(order.addedAt).toLocaleString()}</h5>
                                </div>
                                <div className="col col-6 text-end">
                                    Ordered By: {order.user.email}
                                    <DeleteOrder setOnDirty={setDirty} id={order.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-text" style={{ marginBottom: "0.5cm" }}>
                        <div className="container">
                            {order.products.map(p => (
                                <div className="row" key={p.id}>
                                    <div className="col-4" style={{ paddingLeft: "0px" }}>Product: <b>{p.name}</b></div>
                                    {/* You can add other product details here */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
