const userController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/:id', userController.getOneUser);


module.exports = router;