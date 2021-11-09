const Product = require('../models/product.model');

const addNewProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => console.log(err));
};

const getAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json(allProducts))
        .catch((err) => console.log(err));
};

const getProductById = (req, res) => {
    Product.findOne({ _id: req.params._id })
        .then((queriedProduct) => res.json(queriedProduct))
        .catch((err) => console.log(err));
};

const updateProduct = (req, res) => {
    // use id in url to query document want to update
    // second arg is the info from that queried doc to change
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        // this will make sure validations are still run
        runValidators: true,
    })
        .then((updatedRestaurant) => res.json(updatedRestaurant))
        .catch((err) => res.status(400).json(err));
};

const deleteProduct = (req, res) => {
    // find product by id and delete
    Product.deleteOne({ _id: req.params.id })
        // success case send client json response
        .then((result) => res.json(result))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

module.exports = {
    addNewProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
