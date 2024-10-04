// server/controllers/apartments.js
const Apartment = require('../models/apartments'); // Import the Apartment model

// Get all apartments from MongoDB
async function getAllApartments(req, res) {
  try {
    const allApartments = await Apartment.find({});
    res.json(allApartments);
  } catch (err) {
    console.error('Failed to retrieve apartments:', err);
    res.status(500).send('Failed to retrieve apartments.');
  }
}

// Get an apartment by ID
async function getApartment(req, res) {
  try {
    const apartmentId = req.query.id;
    const apartment = await Apartment.findOne({ id: apartmentId });
    if (apartment) {
      res.json(apartment);
    } else {
      res.status(404).send('Apartment not found');
    }
  } catch (err) {
    console.error('Failed to retrieve apartment:', err);
    res.status(500).send('Failed to retrieve apartment.');
  }
}

// Create a new apartment
async function createApartment(req, res) {
  try {
    const { id, country, city, address, size, bedrooms, host } = req.body;
    const newApartment = new Apartment({ id, country, city, address, size, bedrooms, host });
    await newApartment.save();
    res.status(201).json(newApartment);
  } catch (err) {
    console.error('Failed to create apartment:', err);
    res.status(500).send('Failed to create apartment.');
  }
}

// Delete an apartment by ID
async function deleteApartment(req, res) {
  try {
    const apartmentId = req.query.id;
    const result = await Apartment.deleteOne({ id: apartmentId });
    if (result.deletedCount) {
      res.status(200).send(`Apartment with ID ${apartmentId} deleted successfully.`);
    } else {
      res.status(404).send('Apartment not found');
    }
  } catch (err) {
    console.error('Failed to delete apartment:', err);
    res.status(500).send('Failed to delete apartment.');
  }
}

module.exports = {
  getAllApartments,
  getApartment,
  createApartment,
  deleteApartment,
};
