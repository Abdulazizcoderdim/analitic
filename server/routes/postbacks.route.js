const express = require('express');
const postbacksController = require('../controller/postbacks.controller');
const router = express.Router();

router.get('/get-all', postbacksController.getAll);
router.post('/create', postbacksController.createPostback);
router.put('/edit/:id', postbacksController.editPostback);
router.get('/get-one/:id', postbacksController.getOne);

module.exports = router;
