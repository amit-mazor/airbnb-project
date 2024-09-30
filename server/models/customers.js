const customers = [
  {
    "id": 12345,
    "name": "Amit Mazor",
    "phone": "0525602589",
    "country": "Israel",
  },
  {
    "id": 67890,
    "name": "Noa Cohen",
    "phone": "0545602189",
    "country": "France",
  }
]

function getAllCustomers() {
  return customers
}

function getCustomer(id) {
  return customers.filter(customer => customer.id == id)[0]
}

function deleteCustomer(id) {
  const customerToDelete = customers.findIndex(customer => customer.id == id)
  if (customerToDelete !== -1) {
    customers.splice(customerToDelete, 1);
    return true;
  }
  return false;
}

function newCustomer(id, name, phone, country) {
  if (name && phone && country) {
    const customer = { id, name, phone, country };
    customers.push(customer);
    return true;
  } else {
    console.error('Invalid customer data:', { id, name, phone, country });
    return false;
  }
}

module.exports = {
  getAllCustomers,
  getCustomer,
  deleteCustomer,
  newCustomer,
}