import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductList from './ProductList';

export default function Products() {
    // get current location path
    const location = useLocation();
    const pathArr = location.pathname.split('/');
    const path = pathArr[pathArr.length - 1];

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <Link to="/" style={{ padding: '5px' }}>Home</Link>
                    {/* hide add link if already on add new product component */}
                    {path !== 'add' ? <Link to="/products/add" style={{ padding: '5px' }}>Add Product</Link> : <Link to="/products" style={{ padding: '5px' }}>Back to Products</Link>}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {path !== 'add' && <ProductList />}
                </div>
            </div>
        </div>
    );
}
