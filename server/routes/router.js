const express = require('express');
const route = express.Router();

const services = require('../services/render');
const customersController = require('../controllers/customersController');
const hostController = require('../controllers/hostController');  


// Customers
route.get('/api/customers/:id', customersController.getId);
route.get('/api/customers', customersController.get);
route.post('/api/customers/:id', customersController.update);
route.post('/api/customers', customersController.create);
route.delete('/api/customers/:id', customersController.delete);

// Hosts routes
route.get('/api/hosts/:id', hostController.getHostById);  // Get a specific host by ID
route.get('/api/hosts', hostController.listHosts);        // List all hosts
route.post('/api/hosts/:id', hostController.updateHost);  // Update a specific host by ID
route.post('/api/hosts', hostController.createHost);      // Create a new host
route.delete('/api/hosts/:id', hostController.deleteHost);  // Delete a specific host by ID

module.exports = route;


