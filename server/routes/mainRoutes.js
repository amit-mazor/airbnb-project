const express = require('express');
const route = express.Router();
const mainController = require('../controllers/mainController');

route.get('/', mainController.getMain);
route.get('/apartment/:id', mainController.apartmentPage);  
route.get('/login', mainController.getLogin);
route.get('/register', mainController.getRegister);
route.get('/error', mainController.getError);
route.get('/orders', mainController.getOrders);
route.get('/admin', mainController.getAdmin);

module.exports = route ;