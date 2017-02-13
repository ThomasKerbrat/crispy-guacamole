const express = require('express');
const router = express.Router();

const VideosController = require('./controllers/videos.js');

router.get('/', VideosController.index);

module.exports = router;
