const express = require('express');
const streamsController = require('../controller/streams.controller');
const router = express.Router();

router.post('/create', streamsController.createStream);
router.get('/get-all', streamsController.getStreams);
router.get('/get-one/:id', streamsController.getOne);
router.put('/edit/:id', streamsController.editStream);
router.delete('/delete/:id', streamsController.delete);

module.exports = router;
