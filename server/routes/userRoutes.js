// server/routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');  // Use protect middleware to secure routes

const router = express.Router();

// Protected route to get the user's profile
router.get('/profile', protect, userController.getUserProfile);
router.post('/delete/:id', userController.deleteUser);      

module.exports = router;
