const apartmentsModel = require('../models/apartments')

// Get all apartments
function getAllApartments(req,res) {
  const AllApartments = apartmentsModel.getAllApartments()
  res.send(AllApartments)
}

// Get an apartment by ID
function getApartment(req,res) {
  const apartmentId = req.query.id
  const apartment = apartmentsModel.getApartment(apartmentId)
  if (apartment == undefined)
    res.status(404).send("Apartment not found")
  else
    res.json(apartment);
}

// Delete an apartment by ID
function deleteApartment(req,res) {
  const apartmentId = req.query.id
  const isDeleted = apartmentsModel.deleteApartment(apartmentId); 
  if (isDeleted) {
    res.status(200).send(`Apartment with ID ${apartmentId} deleted successfully.`);
  } else {
    res.status(404).send("Apartment not found");
  }
}

// Create a new apartment
function createApartment(req,res) {
  const { id, country, city, address, size, bedroom, host } = req.body; 
  const isCreated = apartmentsModel.newApartment(id, country, city, address, size, bedroom, host);
  if (isCreated) {
    const newApartment = { id, country, city, address, size, bedroom, host };
    res.status(201).json(newApartment);
  } else {
    res.status(400).send("Invalid apartment data.");
  }
}

module.exports = {
  getAllApartments,
  getApartment,
  deleteApartment,
  createApartment,
}
