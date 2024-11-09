// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');  // Import protect middleware
const Order = require('../models/order'); // Ensure correct path to order model


// Define routes for order CRUD operations
router.get('/', orderController.getAllOrders);           // GET /api/orders - Get all orders
router.post('/', orderController.createOrder);   // POST /api/orders - Create a new order (protected)
router.put('/:id', orderController.updateOrder);          // PUT /api/orders/:id - Update order by ID
router.delete('/:id', orderController.deleteOrder);       // DELETE /api/orders/:id - Delete order by ID

// New route to get orders for the logged-in user
router.get('/user', protect, orderController.getUserOrders); // GET /api/orders/user - Get orders for logged-in user

module.exports = router;
