const routes = require('express').Router();
const TextController = require('./controllers/TextController');
const FunnyController = require('./controllers/FunnyController');
const NiceController = require('./controllers/NiceController');
const OkController = require('./controllers/OkController');

routes.post('/texts', TextController.store);

routes.get('/texts', TextController.index);
routes.get('/texts/:id', TextController.show);

routes.put('/texts/:id/funny', FunnyController.update);
routes.put('/texts/:id/nice', NiceController.update);
routes.put('/texts/:id/ok', OkController.update);

module.exports = routes;
