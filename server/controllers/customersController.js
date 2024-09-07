const customersService = require('../services/customersService'); // Import the customer service

// Get all customers
exports.get = async (req, res) => {
  try {
    const customers = await customersService.getAllCustomers(); // Use the service method
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a customer by ID
exports.getId = async (req, res) => {
  try {
    const customer = await customersService.getCustomerById(req.params.id); // Use the service method
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new customer
exports.create = async (req, res) => {
  try {
    const newCustomer = await customersService.createCustomer(req.body); // Use the service method
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a customer by ID
exports.update = async (req, res) => {
  try {
    const updatedCustomer = await customersService.updateCustomer(req.params.id, req.body); // Use the service method
    if (updatedCustomer) {
      res.json(updatedCustomer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a customer by ID
exports.delete = async (req, res) => {
  try {
    const deletedCustomer = await customersService.deleteCustomer(req.params.id); // Use the service method
    if (deletedCustomer) {
      res.json({ message: 'Customer deleted successfully' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
