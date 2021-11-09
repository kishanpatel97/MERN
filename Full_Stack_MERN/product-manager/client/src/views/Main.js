import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import React, { useState } from 'react';

const Main = (props) => {
    const { handleDeleteProduct } = props;
    const [hasBeenSubmittedDummy, setHasBeenSubmittedDummy] = useState(false);
    return (
        <>
            <ProductForm
                setHasBeenSubmittedDummy={setHasBeenSubmittedDummy}
                hasBeenSubmittedDummy={hasBeenSubmittedDummy}
            />
            <hr />
            <ProductList
                hasBeenSubmittedDummy={hasBeenSubmittedDummy}
                setHasBeenSubmittedDummy={setHasBeenSubmittedDummy}
                handleDeleteProduct={handleDeleteProduct}
            />
        </>
    );
};

export default Main;
