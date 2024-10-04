// server/controllers/customers.js
const Customer = require('../models/customers'); // Import the Customer model

// Get all customers from MongoDB
async function getAllCustomers(req, res) {
  try {
    const allCustomers = await Customer.find({});
    res.json(allCustomers);
  } catch (err) {
    console.error('Failed to retrieve customers:', err);
    res.status(500).send('Failed to retrieve customers.');
  }
}

// Get a customer by ID
async function getCustomer(req, res) {
  try {
    const customerId = req.query.id;
    const customer = await Customer.findOne({ id: customerId });
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).send('Customer not found');
    }
  } catch (err) {
    console.error('Failed to retrieve customer:', err);
    res.status(500).send('Failed to retrieve customer.');
  }
}

// Create a new customer
async function createCustomer(req, res) {
  try {
    const { id, name, phone, country } = req.body;
    const newCustomer = new Customer({ id, name, phone, country });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    console.error('Failed to create customer:', err);
    res.status(500).send('Failed to create customer.');
  }
}

// Delete a customer by ID
async function deleteCustomer(req, res) {
  try {
    const customerId = req.query.id;
    const result = await Customer.deleteOne({ id: customerId });
    if (result.deletedCount) {
      res.status(200).send(`Customer with ID ${customerId} deleted successfully.`);
    } else {
      res.status(404).send('Customer not found');
    }
  } catch (err) {
    console.error('Failed to delete customer:', err);
    res.status(500).send('Failed to delete customer.');
  }
}

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
  deleteCustomer,
};
