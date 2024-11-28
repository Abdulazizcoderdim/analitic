const express = require('express');
const authController = require('../controller/auth.controller');
const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);
router.put('/edit', authController.editUser);
router.post('/change-password', authController.changePassword);

module.exports = router;
