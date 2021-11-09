const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/products', ProductController.addNewProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:_id', ProductController.getProductById);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
};
