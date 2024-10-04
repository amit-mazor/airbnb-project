// The apartments model includes fields that represent apartment attributes and methods to interact and query data.
// It represents the structure of the data and how it will be stored and interacted with the mongo database.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the apartment schema
const apartmentSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true,
  },
  Size: {
    type: Number,
    required: true
  },
  Bedrooms: {
    type: Number,
    required: true,
  },
});

// Static methods are used for querying the database or performing operations that don't involve a specific document instance.
// Static method to find a apartment by Location
apartmentSchema.statics.findByLocation = function(Location) {
    return this.findOne({ Location: Location }); // search query
};
  
// Static method to find all apartments
apartmentSchema.statics.findAll = function() {
    return this.find({}); // search query
};

// Instance methods are called on individual document instances. These are useful for methods that operate on specific documents (mongo documents)
// Instance method to update the price
apartmentSchema.methods.updatePrice = function(newPrice) {
    this.Price = newPrice;
    return this.save();
};

// Create the model from the schema
const Apartment = mongoose.model('apartments', apartmentSchema);

module.exports = Apartment;
