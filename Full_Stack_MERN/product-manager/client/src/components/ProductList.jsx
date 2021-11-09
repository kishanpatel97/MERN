import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';

const ProductList = (props) => {
    const { hasBeenSubmittedDummy, setHasBeenSubmittedDummy, handleDeleteProduct } = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((err) => console.log(err));
    }, [hasBeenSubmittedDummy]);

    const localHandleDeleteProduct = (id) => {
        handleDeleteProduct(id);
        setHasBeenSubmittedDummy(!hasBeenSubmittedDummy);
    };
    const handleNavigateToEdit = (id) => {
        navigate(`/${id}/edit`);
    };
    return (
        <>
            <h1>All Products</h1>
            {products.map((product, index) => (
                <div className='form-div' key={index}>
                    {' '}
                    <Link to={`${product._id}`}>{product.title}</Link>
                    <button onClick={() => handleNavigateToEdit(product._id)}>EDIT</button>
                    <button onClick={() => localHandleDeleteProduct(product._id)}>DELETE</button>
                </div>
            ))}
        </>
    );
};

export default ProductList;
