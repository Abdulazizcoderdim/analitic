const express = require('express');
const authController = require('../controller/auth.controller');
const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/activation/:id', authController.activation);
router.post('/logout', authController.logout);

module.exports = router;
