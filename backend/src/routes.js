const routes = require('express').Router();
const TextController = require('./controllers/TextController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

routes.post('/texts', TextController.store);

routes.get('/texts', TextController.index);
routes.get('/texts/:id', TextController.show);

routes.put('/texts/:id/likes', LikeController.update);
routes.put('/texts/:id/dislikes', DislikeController.update);

module.exports = routes;
