// controllers/reviewController.js
const reviewService = require('../services/reviewService');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await reviewService.getAll(req.query.apartment);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createReview = async (req, res) => {
  try {
    const newReview = await reviewService.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const updatedReview = await reviewService.update(req.params.id, req.body);
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    await reviewService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview
};
