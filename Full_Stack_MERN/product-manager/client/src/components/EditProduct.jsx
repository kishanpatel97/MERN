import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditProduct = (props) => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                console.log(response.data);
                // setRestaurantInfo(response.data);
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDescription(response.data.description);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { title, price, description };
        axios
            .put(`http://localhost:8000/api/products/${id}`, updatedProduct)
            .then((response) => {
                console.log(response.data);
                navigate('/');
            })
            .catch((err) => console.log(err.response));
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Product</h1>
            <div>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='price'>Price</label>
                <input
                    type='text'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    id='price'
                />
            </div>
            <div>
                <label htmlFor='decription'>Description</label>
                <input
                    type='text'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default EditProduct;
