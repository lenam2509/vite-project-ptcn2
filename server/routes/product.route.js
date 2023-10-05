const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const uploadCloud = require('../config/upload.config');


router.post('/', uploadCloud.single('photo'), ProductController.addProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getOneProduct);
router.put('/:id', uploadCloud.single('photo'), ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;