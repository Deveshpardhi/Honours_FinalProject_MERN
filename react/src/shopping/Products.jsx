import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';
//import useAuth from '../auth/auth_helpers';
import { useAxiosGet } from '../apis/hooks';
import { apiPost } from '../apis/operations';

export default function Products() {
    const [cart, setCart] = useState([]);
    const [sum, setSum] = useState(0);
    const [ordered, setOrdered] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth();
    const { response, error, loading } = useAxiosGet('/products', {
        headers: { accept: 'application/json' }
    });

    function addToCart(id, count) {
        const productToAdd = response.find(p => p._id === id);
        if (productToAdd) {
            const newCart = cart.filter(c => c._id !== id);
            newCart.push({ ...productToAdd, qty: count });
            setCart(newCart);
            updateSum(newCart);
        }
    }

    function updateSum(cartItems) {
        const total = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
        setSum(total);
    }

    async function doOrder() {
        const payload = cart.map(c => ({ id: c._id, qty: c.qty }));
        try {
            const response = await apiPost('/orders', payload, {
                headers: { accept: 'application/json' }
            });
            console.log("Order placed:", response);
            setOrdered(true);
        } catch (error) {
            console.error("Order placement error:", error);
        }
    }

    function doContinue() {
        setCart([]);
        setSum(0);
        setOrdered(false);
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products.</div>;

    return (
        <div className="container">
            {!ordered ? (
                <>
                    {response.map(p => (
                        <ProductItem key={p._id} product={p} onAddToCart={addToCart} />
                    ))}
                    <div className="row justify-content-center">
                        <div className="col col-2">
                            <b>Total: ${sum}</b>
                            <button type="button" disabled={sum === 0} onClick={doOrder} className="btn btn-primary">
                                Place Order
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="row justify-content-center">
                    <div className="col col-6 text-center">
                        <h1>Order placed successfully!</h1>
                        <button type="button" onClick={doContinue} className="btn btn-secondary">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
