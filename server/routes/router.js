const express = require('express');
const route = express.Router();

const services = require('../services/render');
const customersController = require('../controllers/customersController');

// Customers
route.get('/api/customers/:id', customersController.getId);
route.get('/api/customers', customersController.get);
route.post('/api/customers/:id', customersController.update);
route.post('/api/customers', customersController.create);
route.delete('/api/customers/:id', customersController.delete);

module.exports = route;