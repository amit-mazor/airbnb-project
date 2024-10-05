// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define routes for order CRUD operations
router.get('/', orderController.getAllOrders);         // GET /api/orders - Get all orders
router.post('/', orderController.createOrder);         // POST /api/orders - Create a new order
router.put('/:id', orderController.updateOrder);       // PUT /api/orders/:id - Update order by ID
router.delete('/:id', orderController.deleteOrder);    // DELETE /api/orders/:id - Delete order by ID

module.exports = router;
