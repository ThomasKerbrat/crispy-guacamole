const Videos = require('../models/videos');

module.exports.index = function index(req, res, next) {
    const videos = Videos.getAll();
    res.render('videos', { videos: videos });
};
