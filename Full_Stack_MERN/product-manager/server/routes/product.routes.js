const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/product', ProductController.getAllProducts);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:_id', ProductController.getOneProduct);
    app.put('/api/product/:_id', ProductController.updateProduct);
    app.put('/api/product/review/: id', ProductController.reviewProduct);
    app.delete('/api/product/: id', ProductController.deleteProduct);
};
