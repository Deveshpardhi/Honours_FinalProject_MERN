import React, { useState, useEffect, useRef } from "react";
import { apiOperations } from "../apis/operations";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const nameRef = useRef();

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    async function handleAddProduct(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const price = formData.get("price");

        if (!name.trim() || !price.trim()) {
            setError("All input fields are mandatory.");
            return;
        }

        setLoading(true);

        try {
            const data = await apiOperations.apiPost("/products", { name, price }, { accept: "*/*" });

            if (!data.success) {
                setError(data.message);
            } else {
                navigate("/products"); // Redirect to products page after successful addition
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container" style={{ marginTop: "4em" }}>
            <div className="row justify-content-center">
                <div className="col col-sm-4 col-sm-offset-4">
                    <h2>Add Product</h2>
                </div>
            </div>

            <form onSubmit={handleAddProduct} noValidate>
                <div className="row justify-content-center">
                    <div className="col col-sm-4 col-sm-offset-4">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input ref={nameRef} className="form-control" type="text" name="name" id="name" placeholder="Enter product name" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col col-sm-4 col-sm-offset-4">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input className="form-control" type="text" name="price" id="price" placeholder="Enter product price" />
                    </div>
                </div>

                <div className="row justify-content-center" style={{ marginTop: "0.5em" }}>
                    <div className="col col-2 text-end" style={{ marginTop: "0.5em" }}>
                        <button type="submit" name="submit" disabled={loading} className="btn btn-primary">Add</button>
                    </div>
                    <div className="col col-sm-1 text-start" style={{ marginTop: "0.5em" }}>
                        <button type="button" className="btn btn-secondary" onClick={() => navigate("/products")}>Cancel</button>
                    </div>
                </div>
            </form>

            {error && (
                <div className="row justify-content-center" style={{ marginTop: "1em" }}>
                    <div className="col col-sm-4 col-sm-offset-4">
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
