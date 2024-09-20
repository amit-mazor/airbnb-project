const Apartments = require('../models/apartments'); // Import the Apartments model

// Get all apartments
exports.getAllApartments = async () => {
  try {
    return await Apartments.find(); // Fetch all apartments from the database
  } catch (err) {
    throw new Error('Error fetching apartments');
  }
};

// Get a apartment by ID
exports.getApartmentById = async (id) => {
  try {
    return await Apartments.findById(id); // Fetch apartment by ID
  } catch (err) {
    throw new Error('Error fetching apartment');
  }
};

// Create a new apartment
exports.createApartment = async (apartmentData) => {
  try {
    const newApartment = new Apartments(apartmentData); // Create a new apartment instance
    return await newApartment.save(); // Save the new apartment to the database
  } catch (err) {
    throw new Error('Error creating apartment');
  }
};

// Update a apartment by ID
exports.updateApartment = async (id, updateData) => {
  try {
    return await Apartments.findByIdAndUpdate(id, updateData, { new: true }); // Update the apartment and return the updated document from mongo
  } catch (err) {
    throw new Error('Error updating apartment');
  }
};

// Delete a apartment by ID
exports.deleteCustomer = async (id) => {
  try {
    return await Apartments.findByIdAndDelete(id); // Delete the apartment
  } catch (err) {
    throw new Error('Error deleting apartment');
  }
};
