import React from 'react';

export default function OrderItem({ dateOrdered, products }) {
    return (
        <div className="col-12">
            <div className="card" style={{ margin: '0.5em', marginLeft: '0px', backgroundColor: '#FCFCFC' }}>
                <div className="card-body">
                    <h5 className="card-title">Ordered On: {new Date(dateOrdered).toLocaleString()}</h5>
                    <div className="card-text" style={{ marginBottom: '0.5em' }}>
                        <div className="container">
                            {products.map((product) => (
                                <div className="row" key={product._id}>
                                    <div className="col-4" style={{ paddingLeft: '0px' }}>Product: <b>{product.name}</b></div>
                                    <div className="col-4">Quantity: <b>{product.qty}</b></div>
                                    <div className="col-4">Price: <b>${product.total.toFixed(2)}</b></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
