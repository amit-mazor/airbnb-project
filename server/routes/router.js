const express = require('express');
const router = express.Router();
//const customersController = require('../controllers/customersController');
const mainController = require('../controllers/mainController');
//main
router.get('/', mainController.getMain);
// Customers
router.get('/api/customers', customersController.get);
/*
router.get('/api/customers/:id', customersController.getId);
router.post('/api/customers/:id', customersController.update);
router.post('/api/customers', customersController.create);
router.delete('/api/customers/:id', customersController.delete);
*/
module.exports = router;