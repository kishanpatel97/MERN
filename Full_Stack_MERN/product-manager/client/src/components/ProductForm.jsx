import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();

        // create object for title, price, and description
        const newProductData = {
            title, // this is shortcut syntax for title: title
            price, // this is shortcut syntax for price: price
            description, // this is shortcut syntax for description: description
        };

        //make a post request to create a new person
        axios
            .post('http://localhost:8000/api/product', newProductData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    //onChange to update title and description
    return (
        <form onSubmit={onSubmitHandler}>
            <h2>Product Manager</h2>
            <div className='form-div'>
                Title:{' '}
                <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div className='form-div'>
                Price:{' '}
                <input
                    type='text'
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </div>
            <div className='form-div'>
                Description:{' '}
                <input
                    type='text'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ProductForm;
