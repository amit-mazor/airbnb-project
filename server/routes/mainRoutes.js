const express = require('express');
const route = express.Router();
const mainController = require('../controllers/mainController');
const apartmentController = require('../controllers/apartmentController');
const authController = require('../controllers/authController');

route.get('/', apartmentController.getAllApartments);
route.get('/apartment/:id', mainController.apartmentPage);  
route.get('/login', mainController.getLogin);
route.get('/register', mainController.getRegister);
route.get('/error', mainController.getError);
route.get('/orders', mainController.getOrders);
route.get('/logout', authController.signOut);


module.exports = route ;