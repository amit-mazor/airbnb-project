const express = require('express');
const route = express.Router();

const services = require('../services/render');
const customersController = require('../controllers/customersController');
const apartmentsController = require('../controllers/apartmentsController');

// Customers
route.get('/api/customers/:id', customersController.getId);
route.get('/api/customers', customersController.get);
route.post('/api/customers/:id', customersController.update);
route.post('/api/customers', customersController.create);
route.delete('/api/customers/:id', customersController.delete);

// Apartments
route.get('/api/apartments/:id', apartmentsController.getApartmentId); // Get a specific Apartment by ID
route.get('/api/apartments', apartmentsController.getApartments); // List all apartments
route.post('/api/apartments/:id', apartmentsController.updateApartment); // Update a specific apartment by ID
route.post('/api/apartments', apartmentsController.createApartment); // Create a new apartment
route.delete('/api/apartments/:id', apartmentsController.deleteApartment); // Delete a specific apartment by ID

module.exports = route;