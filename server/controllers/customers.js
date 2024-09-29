const customersModel = require('../models/customers')

// Get all customers
function getAllCustomers(req,res) {
  const allCustomers = customersModel.getAllCustomers()
  res.send(allCustomers)
}

// Get a customer by ID
function getCustomer(req,res) {
  const customerId = req.query.id
  const customer = customersModel.getCustomer(customerId)
  if (customer == undefined)
    res.status(404).send("Customer not found")
  else
    res.json(customer);
}

// Delete a customer by ID
function deleteCustomer(req,res) {
  const customerId = req.query.id
  const isDeleted = customersModel.deleteCustomer(customerId); 
  if (isDeleted) {
    res.status(200).send(`Customer with ID ${customerId} deleted successfully.`);
  } else {
    res.status(404).send("Customer not found");
  }
}

// Create a new customer
function createCustomer(req,res) {
  const { id, name, phone, country } = req.body; 
  const isCreated = customersModel.newCustomer(id, name, phone, country);
  if (isCreated) {
    const newCustomer = { id, name, phone, country };
    res.status(201).json(newCustomer); // Return the newly created customer with 201 status
  } else {
    res.status(400).send("Invalid customer data.");
  }
}

module.exports = {
  getAllCustomers,
  getCustomer,
  deleteCustomer,
  createCustomer,
}
