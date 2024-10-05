// services/reviewService.js
const Review = require('../models/review');

const getAll = async (apartment) => {
  const filter = apartment ? { apartment } : {};
  return Review.find(filter).populate('user apartment');
};

const create = async (data) => {
  const newReview = new Review(data);
  return newReview.save();
};

const update = async (id, data) => {
  return Review.findByIdAndUpdate(id, data, { new: true }).populate('user apartment');
};

const deleteReview = async (id) => {
  return Review.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  create,
  update,
  delete: deleteReview
};
