// server/models/apartments.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  size: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  host: { type: String, required: true } // Host reference
});

module.exports = mongoose.model('Apartment', apartmentSchema);
