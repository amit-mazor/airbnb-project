const express = require('express');
const route = express.Router();
const path = require('path');


//const services = require('../services/render');
const customersController = require('../controllers/customersController');

const apartmentsController = require('../controllers/apartmentsController');
const hostController = require('../controllers/hostsController');  




route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..//views/home.html'));
  });


route.get('/apartments', async (req, res) => {
    try {
      const apartments = await apartmentsController.getApartments();
      console.log(apartments)
      res.render('apartments',  apartments); // Pass apartments data to the EJS template
    } catch (err) {
      res.status(500).send('Error retrieving apartments');
    }
  });

// Customers
route.get('/api/customers/:id', customersController.getId);
route.get('/api/customers', customersController.get);
route.post('/api/customers/:id', customersController.update);
route.post('/api/customers', customersController.create);
route.delete('/api/customers/:id', customersController.delete);


// Apartments
route.get('/api/apartments/:id', apartmentsController.getApartmentId); // Get a specific Apartment by ID
route.get('/api/apartments', apartmentsController.getApartments); // List all apartments
//route.post('/api/apartments/:id', apartmentsController.updateApartment); // Update a specific apartment by ID
//route.post('/api/apartments', apartmentsController.createApartment); // Create a new apartment
route.delete('/api/apartments/:id', apartmentsController.deleteApartment); // Delete a specific apartment by ID


// Hosts routes
//route.get('/api/hosts/:id', hostController.getHostById);  // Get a specific host by ID
//route.get('/api/hosts', hostController.listHosts);        // List all hosts
//route.post('/api/hosts/:id', hostController.updateHost);  // Update a specific host by ID
//route.post('/api/hosts', hostController.createHost);      // Create a new host
//route.delete('/api/hosts/:id', hostController.deleteHost);  // Delete a specific host by ID

module.exports = route;



