// server/models/apartments.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  Name: { type: String, required: true },
  Id: { type: String, required: true },
  Country: { type: String, required: true },
  City: { type: String, required: true },
  Location: { type: String, required: true },
  Price: { type: Number, required: true },
  Size: { type: Number, required: true  },
  Bedrooms: { type: Number, required: true },
  Host: { type: String, required: true }
});


module.exports = mongoose.model('Apartment', apartmentSchema);
