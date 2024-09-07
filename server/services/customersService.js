const Customers = require('../models/Customers'); // Import the Customers model

// Get all customers
exports.getAllCustomers = async () => {
  try {
    return await Customers.find(); // Fetch all customers from the database
  } catch (err) {
    throw new Error('Error fetching customers');
  }
};

// Get a customer by ID
exports.getCustomerById = async (id) => {
  try {
    return await Customers.findById(id); // Fetch customer by ID
  } catch (err) {
    throw new Error('Error fetching customer');
  }
};

// Create a new customer
exports.createCustomer = async (customerData) => {
  try {
    const newCustomer = new Customers(customerData); // Create a new customer instance
    return await newCustomer.save(); // Save the new customer to the database
  } catch (err) {
    throw new Error('Error creating customer');
  }
};

// Update a customer by ID
exports.updateCustomer = async (id, updateData) => {
  try {
    return await Customers.findByIdAndUpdate(id, updateData, { new: true }); // Update the customer
  } catch (err) {
    throw new Error('Error updating customer');
  }
};

// Delete a customer by ID
exports.deleteCustomer = async (id) => {
  try {
    return await Customers.findByIdAndDelete(id); // Delete the customer
  } catch (err) {
    throw new Error('Error deleting customer');
  }
};
