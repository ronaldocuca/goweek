const express = require("express");
const mongoose = require('mongoose');


const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.post('/likes/:id', LikeController.stop);

module.exports = routes;