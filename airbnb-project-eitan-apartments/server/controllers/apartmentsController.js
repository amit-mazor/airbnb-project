const apartmentsService = require('../services/apartments'); // Import the apartment service and use it for all methods

// Get all apartments
exports.getApartments = async (req, res) => {
  try {
    const apartments = await apartmentsService.getAllApartments();
    res.json(apartments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a apartment by ID
exports.getApartmentId = async (req, res) => {
  try {
    const apartment = await apartmentsService.getApartmentById(req.params.id);
    if (apartment) {
      res.json(apartment);
    } else {
      res.status(404).json({ message: 'Apartment not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new apartment
exports.createApartment = async (req, res) => {
  try {
    const newApartment = await apartmentsService.createApartment(req.body);
    res.status(201).json(newApartment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a apartment by ID
exports.updateApartment = async (req, res) => {
  try {
    const updatedApartment = await apartmentsService.updatedApartment(req.params.id, req.body);
    if (updatedApartment) {
      res.json(updatedApartment);
    } else {
      res.status(404).json({ message: 'Apartment not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a apartment by ID
exports.deleteApartment = async (req, res) => {
  try {
    const deletedApartment = await apartmentsService.deleteApartment(req.params.id);
    if (deletedApartment) {
      res.json({ message: 'Apartment deleted successfully' });
    } else {
      res.status(404).json({ message: 'Apartment not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
