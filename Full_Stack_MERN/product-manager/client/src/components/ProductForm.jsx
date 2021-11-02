import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(Number);
    const [description, setDescription] = useState('');
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios
            .post('http://localhost:8000/api/product', {
                title, // this is shortcut syntax for title: title,
                price, // this is shortcut syntax for price: price
                description, // this is shortcut syntax for description: description
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    //onChange to update title and description
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label>
                    <br />
                    <input type='text' onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label>
                    <br />
                    <input type='text' onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label>
                    <br />
                    <input type='text' onChange={(e) => setDescription(e.target.value)} />
                </p>
                <input type='submit' />
            </form>
        </div>
    );
};

export default ProductForm;
