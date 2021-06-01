const { Router } = require('express');

const UserController = require('./app/controllers/UserController');

const routes = new Router();

routes.get('/users', UserController.index);

routes.post('/users', UserController.store);

routes.put('/users', UserController.update);

routes.delete('/users', UserController.delete);

module.exports = routes;