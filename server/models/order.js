// models/order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  apartment: { type: mongoose.Schema.Types.ObjectId, ref: 'Apartment', required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: { type: Number, required: true },
  status: { type: String, enum: ['active', 'completed', 'cancelled'], default: 'active' },  // Track order status
  isHistory: { type: Boolean, default: false },  // Field to mark order as history
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
