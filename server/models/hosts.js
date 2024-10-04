// server/models/hosts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hostSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  ownApartments: { type: Number, required: true } // Apartment ID reference
});

module.exports = mongoose.model('Host', hostSchema);
