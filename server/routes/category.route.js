const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.post('/', categoryController.addCategory);
router.get('/', categoryController.getCategories);

module.exports = router;