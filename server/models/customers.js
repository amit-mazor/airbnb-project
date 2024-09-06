// The customers model includes fields that represent customer attributes and methods to interact and query data.
// It represents the structure of the data and how it will be stored and interacted with the mongo database.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the customer schema
const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/ // Simple email validation
  },
  passwordHash: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
});

// Static methods are used for querying the database or performing operations that don't involve a specific document instance.
// Static method to find a customer by email
customerSchema.statics.findByEmail = function(email) {
    return this.findOne({ email: email }); // search query
};
  
// Static method to find all customers
customerSchema.statics.findAll = function() {
    return this.find({}); // search query
};

// Instance methods are called on individual document instances. These are useful for methods that operate on specific documents (mongo documents)
// Instance method to update the phone number
customerSchema.methods.updatePhone = function(newPhone) {
    this.phone = newPhone;
    return this.save();
};

// Create the model from the schema
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
