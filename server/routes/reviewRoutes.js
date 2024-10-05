// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Define routes for review CRUD operations
router.get('/', reviewController.getAllReviews);         // GET /api/reviews - Get all reviews or filter by apartment
router.post('/', reviewController.createReview);         // POST /api/reviews - Create a new review
router.put('/:id', reviewController.updateReview);       // PUT /api/reviews/:id - Update review by ID
router.delete('/:id', reviewController.deleteReview);    // DELETE /api/reviews/:id - Delete review by ID

module.exports = router;
